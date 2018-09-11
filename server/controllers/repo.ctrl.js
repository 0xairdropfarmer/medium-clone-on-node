/** */
const Repo = require('../models/Repo')
// const User = require('./../models/User')
const fs = require('fs')
const cloudinary = require('cloudinary')

module.exports = {
    addRepo: (req, res, next) => {
        let { text, title, claps, description } = req.body
        //let obj = { text, title, claps, description, feature_img: _feature_img != null ? `/uploads/${_filename}` : '' }
        if (req.files.image) {
            cloudinary.uploader.upload(req.files.image.path, (result) => {
                let obj = { text, title, claps, description, feature_img: result.url != null ? result.url : '' }
                saveArticle(obj)
                /*(new Student({...{url: result.url},...req.body})).save((err, newStudent) => {
                const cloud_res = {
                    url: result.url
                }
                const newS = newStudent.toObject()
                console.log({...{url: result.url},...req.body})
                if(err)
                    res.send(err)
                else if (!newStudent)
                    res.send(400)
                else
                    res.send({...newS,...cloud_res})
                next()
            })*/
            },{
                resource_type: 'image',
                eager: [
                    {effect: 'sepia'}
                ]
            })
        }else {
            saveRepo({ text, title, claps, description, feature_img: '' })
        }
        function saveRepo(obj) {
            new Repo(obj).save((err, repo) => {
                if (err)
                    res.send(err)
                else if (!repo)
                    res.sendStatus(400)
                else {
                    return repo.addAuthor(req.body.author_id).then((_repo) => {
                        return res.send(_repo)
                    })
                }
                next()
            })
        }
    },
    getAll: (req, res, next) => {
        Repo.find(req.params.id)
        .populate('owner')
        .populate('comments.author').exec((err, repo)=> {
            if (err)
                res.send(err)
            else if (!repo)
                res.sendStatus(404)
            else
                res.send(repo)
            next()            
        })
    },

    /**
     * repo_id
     */
    clapRepo: (req, res, next) => {
        Repo.findById(req.body.repo_id).then((repo)=> {
            return repo.clap().then(()=>{
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },

    /**
     * repo_id
     */
    addArticleRepo: (req, res, next) => {
        Repo.findById(req.body.repo_id).then((repo)=> {
            return repo.addArticle(req.body.article_id).then(()=>{
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },

    /**
     * repo_id
     */
    delArticleRepo: (req, res, next) => {
        Repo.findById(req.body.repo_id).then((repo)=> {
            return repo.delArticle(req.body.article_id).then(()=>{
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },

    /**
     * comment, author_id, article_id
     */
    // commentRepo: (req, res, next) => {
    //     Repo.findById(req.body.repo_id).then((repo)=> {
    //         return repo.comment({
    //             author: req.body.author_id,
    //             text: req.body.comment
    //         }).then(() => {
    //             return res.json({msg: "Done"})
    //         })
    //     }).catch(next)
    // },

    /**
     * article_id
     */
    getRepo: (req, res, next) => {
        Repo.findById(req.params.id)
        .populate('owner')
        .populate('articles')
        .populate('comments.author').exec((err, repo)=> {
            if (err)
                res.send(err)
            else if (!repo) {
                res.sendStatus(404)
            }
            else
                res.send(repo)
            next()            
        })
    }
}
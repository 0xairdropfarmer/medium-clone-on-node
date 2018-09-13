/** */
const Owner = require('../models/Owner')
// const Article = require('./../models/Article')

module.exports = {
    addOwner: (req, res, next) => {
        new Owner(req.body).save((err, newOwner) => {
            if (err)
                res.send(err)
            else if (!newOwner)
                res.sendStatus(400)
            else
                res.send(newOwner)
            next()
        });
    },
    getOwner: (req, res, next) => {
        Owner.findById(req.params.id).then
        /*populate('following').exec*/((err, owner)=> {
            if (err)
                res.send(err)
            else if (!owner)
                res.sendStatus(404)
            else
                res.send(owner)
            next()            
        })
    },
    // getAuthorProfile: (req, res, next) => {
    //     Author.findById(req.params.id).then
    //     ((_author) => {
    //         return Author.find({'following': req.params.id}).then((_authors)=>{
    //             _authors.forEach((author_)=>{
    //                 _author.addFollower(author_)
    //             })
    //             return Article.find({'author': req.params.id}).then((_articles)=> {
    //                 return res.json({ author: _author, articles: _articles })
    //             })
    //         })
    //     }).catch((err)=>console.log(err))
    // }
}
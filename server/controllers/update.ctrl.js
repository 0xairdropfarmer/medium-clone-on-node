/** */
const Update = require('../models/Update')

module.exports = {
    addUpdate: (req, res, next) => {
        new Update(req.body).save((err, newUpdate) => {
            if (err)
                res.send(err)
            else if (!newUpdate)
                res.sendStatus(400)
            else
                res.send(newUpdate)
            next()
        });
    },
    getAll: (req, res, next) => {
      Update.find(req.params.id)
      .populate('author')
      .populate('article')
      .populate('repo').exec((err, update)=> {
          if (err)
              res.send(err)
          else if (!update)
              res.sendStatus(404)
          else
              res.send(update)
          next()            
      })
    },    
    getUpdate: (req, res, next) => {
        Update.findById(req.params.id)
        .populate('author')
        .populate('article')
        .populate('repo').exec((err, update)=> {
            if (err)
                res.send(err)
            else if (!update)
                res.sendStatus(404)
            else
                res.send(update)
            next()            
        })
    }
}
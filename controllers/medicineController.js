const { Medicine, Patient } = require('../models/index');

class ControllerMedicine {
    static findAll(req, res) {
        Medicine
            .findAll()
            .then(data => {
                res.render('medicines', { data })
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
    static formAdd(req, res) {
        let query;
        if(req.query.err) {
            query = (req.query.err).split(',')
        }
        res.render('medicinesForm', { query })
    }
    static add(req, res) {
        let newData = {
            name: req.body.name,
            stock: req.body.stock
        }
        Medicine
            .create(newData)
            .then(data => {
                res.redirect('/medicines')
            })
            .catch(err => {
                let errors = []
                err.errors.forEach(element => {
                    errors.push(element.message)
                })
                res.redirect(`/medicines/add?err=${errors}`)
            })
    }
    static formEdit(req, res) {
        let query;
        if(req.query.err) {
            query = (req.query.err).split(',')
        } else {
            Medicine
            .findAll({
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                if (query) {
                    query = query.split(',')
                }
                res.render('medicinesUpdate', { data, query })
            })
            .catch(err => {
                res.send(err)
            })
        }
    }
    static edit(req, res) {
        Medicine
            .update({
                name: req.body.name,
                stock: req.body.stock
            },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res.redirect('/medicines')
            })
            .catch(err => {
                res.send(err)
            })
    }
    static delete(req, res) {
        Medicine.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.redirect('/medicines')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ControllerMedicine;
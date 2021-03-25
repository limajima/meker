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

    }
    static add(req, res) {

    }
    static formEdit(req, res) {

    }
    static edit(req, res) {

    }
    static delete(req, res) {
        
    }
}

module.exports = ControllerMedicine;
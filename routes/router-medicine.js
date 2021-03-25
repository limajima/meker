const express = require('express');
const router = express.Router();
const ControllerMedicine = require('../controllers/medicineController');

router.get('/', ControllerMedicine.findAll)
router.get('/add', ControllerMedicine.formAdd)
router.post('/add', ControllerMedicine.add)
router.get('/:id/edit', ControllerMedicine.formEdit)
router.post('/:id/edit', ControllerMedicine.edit)
router.get('/:id/delete', ControllerMedicine.delete)

module.exports = router;
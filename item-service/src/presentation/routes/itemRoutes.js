const express =
require('express');

const router =
express.Router();

const controller =
require('../controllers/ItemController');

router.post(
 '/',
 controller.create
);

router.get(
 '/',
 controller.list
);

router.get(
 '/:id',
 controller.findById
);

router.put(
 '/:id',
 controller.update
);

router.delete(
 '/:id',
 controller.delete
);

router.get(
    '/',
    ItemController.getAll
);

module.exports =
router;
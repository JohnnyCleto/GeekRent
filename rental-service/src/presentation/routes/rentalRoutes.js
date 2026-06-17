const express =
require('express');

const router =
express.Router();

const controller =
require(
'../controllers/RentalController'
);

router.post(
    '/',
    controller.create
);

router.patch(
    '/:id/approve',
    controller.approve
);

router.patch(
    '/:id/reject',
    controller.reject
);

module.exports =
router;
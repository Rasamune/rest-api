const express = require('express');
const router = express.Router();

// Middleware to handle async
const { asyncHandler } = require('../middleware/async-handler');

const { User, Course } = require('../models');

/* GET Courses listing. */
router.get('/courses', asyncHandler(async (req, res, next) => {
    // Return list of courses including the User that owns each course
    const courses = await Course.findAll({
        include: [{
            model: User,
            as: 'user'
        }]
    });
    res.status(200).json({ courses });
}));

/* POST Create a new course. */
router.post('/courses', asyncHandler(async (req, res, next) => {
    // Create a new course
    // Set the Location header to the URI for the newly created course
    res.status(201);
}));

/* GET Specified course. */
router.get('/courses/:id', asyncHandler(async (req, res, next) => {
    // Return the corresponding course along with the User that owns it
    const course = await Course.findByPk(req.params.id, {
        include: [{
            model: User,
            as: 'user'
        }]
    });
    if (course) {
        res.status(200).json({ course });
    } else {
        res.sendStatus(404);
    }
    res.status(200).json({ message: 'Selected cours and user that owns it' });
}));

/* PUT Updated specified course. */
router.put('/courses/:id', asyncHandler(async (req, res, next) => {
    // Update corresponding course
    res.status(204);
}));

/* DELETE Specified course. */
router.delete('/courses/:id', asyncHandler(async (req, res, next) => {
    // Delete the corresponding course
    res.status(204);
}));

module.exports = router;
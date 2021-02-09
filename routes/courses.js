const express = require('express');
const router = express.Router();

// Middleware to handle async
const { asyncHandler } = require('../middleware/async-handler');

/* GET Courses listing. */
router.get('/courses', asyncHandler(async (req, res, next) => {
    // Return list of courses including the User that owns each course
    res.status(200).json({ message: 'List of all courses'});
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
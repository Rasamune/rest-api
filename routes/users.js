const express = require('express');
const router = express.Router();

// Middleware to handle async
const { asyncHandler } = require('../middleware/async-handler');

/* GET authenticated user. */
router.get('/users', asyncHandler(async (req, res, next) => {
    // Return the currently authenticated user
    res.status(200).json({ message: 'User Login'});
}));

/* POST Create a new user. */
router.post('/users', asyncHandler(async (req, res, next) => {
    // Create a new user
    // Set Location header to "/"
    res.status(201);
}));

module.exports = router;
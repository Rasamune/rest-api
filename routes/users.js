const express = require('express');
const router = express.Router();

// Middleware to handle async
const { asyncHandler } = require('../middleware/async-handler');
const { User } = require('../models');
//const { authenticateUser } = require('../middleware/auth-user');

/* GET authenticated user. */
router.get('/users', asyncHandler(async (req, res, next) => {
    // Return the currently authenticated user
    res.status(200).json({ message: 'User Login'});
}));

/* POST Create a new user. */
router.post('/users', asyncHandler(async (req, res, next) => {
    // Create a new user
    try {
        await User.create(req.body);
        
        // Set Location header to "/"
        res.status(201).location('/').json({ "message": "Account successfully created!" });
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            const errors = error.errors.map(err => err.message);
            res.status(400).json({ errors });   
        } else {
            throw error;
        }
    }
}));

module.exports = router;
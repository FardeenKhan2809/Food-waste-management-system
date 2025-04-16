// forgotpasswordController.js

const Registration = require('../models/registrationSchema');

exports.validateUser = async (req, res) => {
    const { username, email } = req.query;

    try {
        const user = await Registration.findOne({ username, email });

        if (user) {
            res.status(200).send('User validated successfully');
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error validating user:', error);
        res.status(500).send('Error validating user');
    }
};

// forgotpasswordController.js

exports.resetPassword = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await Registration.findOneAndUpdate(
            { username, email },
            { password },
            { new: true }
        );

        if (user) {
            console.log('Password reset successful');
            res.status(200).send('Password reset successful');
        } else {
            console.log(`User not found for username: ${username} and email: ${email}`);
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error resetting password:', error.message);
        res.status(500).send('Error resetting password');
    }
};
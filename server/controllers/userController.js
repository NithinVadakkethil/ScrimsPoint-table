const asyncHandler = require('express-async-handler');

const getTeamDetails = asyncHandler(async (req, res) => {
    res.status(200).json({ message : 'Team Details' });
})

const registerTeam = asyncHandler(async (req, res) => {
    if (!req.body.team) {
        res.status(400)
        throw new Error('Please add Your Clan Name');
    }
    res.status(200).json({ message : 'Team Registered Successfully' });
})

module.exports = {
    getTeamDetails,
    registerTeam
}
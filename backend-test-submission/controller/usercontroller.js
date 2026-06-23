const User = require('../model/usermodel');
const Log = require('../logging-middleware/logger');

async function adduser(req, res) {
    try {

        await Log("backend", "info", "controller", "adduser");

        const { name } = req.body;

        const newuser = new User({ name });
        await newuser.save();

        await Log("backend", "info", "controller", "user added successfully");

        res.send("Added");

    } catch (err) {

        await Log("backend", "error", "controller", err.message);

        res.status(500).send(err);
    }
}

async function getuser(req, res) {
    try {

        await Log("backend", "info", "controller", "getuser");

        const u = await User.find();

        await Log("backend", "info", "controller", "user details showed");

        res.status(200).json(u);

    } catch (err) {

        await Log("backend", "error", "controller", err.message);

        res.send(err);
    }
}

module.exports = { adduser, getuser };
const router = require("express").Router();
const Pin = require("../models/Pin.js");
const User = require("../models/User.js");

// create a Pin

router.post("/:userid", async (req, res) => {
    const userId = req.params.userid;
    const newPin = new Pin(req.body);

    try {
        const savedPin = await newPin.save();
        try {
            await User.findByIdAndUpdate(userId, {
                $push: { pins: savedPin._id },
            });
        } catch (err) {
            console.log(err);
        }
        res.status(200).json(savedPin);
    } catch (err) {
        console.log(err);
    }
})

// get all pins

router.get("/", async (req, res) => {
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    }
    catch (err) {
        res.status(500).json(er);
    }
});

module.exports = router;

// get a pin

router.get("/:id", async (req, res) => {
    try {
        const pin = await Pin.find({ _id: req.params.id });
        res.status(200).json(pin);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// delete a pin

router.delete("/:id/:userid", async (req, res) => {
    const userId = req.params.userid;
    try {
        await Pin.findByIdAndDelete(req.params.id);
        try {
            await User.findByIdAndUpdate(userId, {
                $pull: { pins: req.params.id },
            });
        } catch (err) {
            console.log(err)
        }
        res.status(200).json("Pin has been deleted.");
    } catch (err) {
        console.log(err)
    }
})

// update a pin

router.put("/:id", async (req, res) => {
    try {
        const updatedPin = await Pin.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(updatedPin);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

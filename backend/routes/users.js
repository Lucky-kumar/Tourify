const User = require("../models/User");
const Pin = require("../models/Pin");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            contact_number: req.body.contact_number,
            address: req.body.address
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user._id);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        //find user
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(400).json("Wrong email or password");

        //validate password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        !validPassword && res.status(400).json("Wrong email or password");

        //send response
        res.status(200).json({ _id: user._id, email: user.email });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        console.log(err)
    }
})

router.get("/pins/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const list = await Promise.all(
            user.pins.map((pin) => {
                return Pin.findById(pin);
            })
        );
        res.status(200).json(list)

    } catch (err) {
        console.error(err);
    }
})

module.exports = router;
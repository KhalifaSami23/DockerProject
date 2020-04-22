const router = require('express').Router();
const bcrypt = require('bcryptjs')
const User = require('../models/user')


router.post('/register', async (req, res) => {
    const form = req.body
    const isEmailExist = await User.findOne({email: form.email})

    if (isEmailExist) {
        res.statusMessage = "ERROR"
        res.status(200).json({message: "L'email existe déjà"})
        return
    }

    const isUsernameExist = await User.findOne({username: form.username})

    if (isUsernameExist) {
        res.statusMessage = "ERROR"
        res.status(200).json({message: "L'utilisateur existe déjà"})
        return
    }

    const salt = await bcrypt.genSalt(16)
    const passwordHashed = await bcrypt.hash(form.password, salt);



    const user = new User({
        email: form.email,
        username: form.username,
        password: passwordHashed
    })

    user.save()

    res.statusMessage = "SUCCESS"
    res.json({message: "Inscription complété avec succès"})


    
})


router.post('/login', async (req, res) => {
    const form = req.body
    const user = await User.findOne({email: form.email})

    if (!user) {
        res.statusMessage = "ERROR"
        res.status(200).json({message:  "Le compte n'éxiste pas"})
        return
    }

    const isPasswordRight = await bcrypt.compare(form.password, user.password)

    if (!isPasswordRight) {
        res.statusMessage = "ERROR"
        res.status(200).json({message:  "Le mot de passe est incorrect"})
        return
    }

    res.json({message: "Vous êtes connecté", user: user})

})


module.exports = router;
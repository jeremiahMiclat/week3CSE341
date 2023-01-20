const Schema = require('../Schemas/contacts')

// fetch all
const getData = async (req, res) => {
    try {
        const contacts = await Schema.find()
        res.status(200).json(contacts)

    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}
// fetch by id
const getOne = async (req, res) => {
    try {
        const contacts = await Schema.findById(req.params.id)
        res.status(200).json(contacts)

    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}
// create
const addOne = async (req, res) => {
    const contact = new Schema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    })
    try {
        const savedContact = await contact.save()
        res.status(201).json(savedContact)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
// update
const updateOne = async (req, res) => {
    const contact = new Schema({
        _id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    })
    try {
        const updatedContact = await Schema.findByIdAndUpdate(req.params.id, { $set: contact }, { new: true })
        res.status(204).json(updatedContact)

    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}
// delete
const delOne = async (req, res) => {
    try {
        const removedContact = await Schema.deleteOne({ _id: req.params.id })
        res.status(200).json(removedContact)

    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
}



module.exports = { getData, getOne, addOne, updateOne, delOne }
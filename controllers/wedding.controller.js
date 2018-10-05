const Wedding = require('../models/wedding.model');

exports.sample = function (req, res) {
    res.send("Greetings for the wedding controller");
};


exports.submit_form = function (req, res) {
    let wedding = new Wedding({
        name: req.body.Name,
        email: req.body.Emailaddress,
        number: req.body.Contactnumber,
        attendies: req.body.attendiesDetails,
        guest: req.body.guestDetails,
        message: req.body.message,
    })

    wedding.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).send({ 'message': 'Form submitted successfully' })
    })
};
const User = require('../models/users.model.js');
const bcrypt = require('bcryptjs');

exports.login = (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            bcrypt.compare(req.body.password, user.password)
                .then((isMatch) => {
                    if (isMatch) {
                        res.send(user)
                    }
                    else {
                        res.json({ message: "Password doesnt match" })
                    }
                })
        }
        else {
            res.send({ message: "user not found" })
        }
    });
}

exports.create = (req, res) => {

    User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            return res.status(500).json({
                email: 'Email already exists'
            });

        }
        else {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                birthday: req.body.birthday,
                role: req.body.role,
                department: req.body.department,
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if (err) throw err;
                    user.password = hash;
                    user.save()
                        .then((user) => res.send(user))
                        .catch(err => res.status(500).send({
                            message1: err.message
                        }));
                })
            })
        }
    })
}

exports.finallUsers = (req, res) => {
    User.find().then(user => {
        res.json({
            user
        })
    }).catch(err => {
        res.status(500).send({
            error: 'no results found'
        })
    })
}

exports.detailView = (req, res) => {
    User.findById(req.params.userId).then(user => {
        if (!user) {
            res.satus(404).send({
                message: 'object not found'
            })
        }
        res.send(user)
    }).catch(err => {
        res.status(500).send({
            message: 'error'
        })
    })
}

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name,
        email: req.body.email,
        birthday: req.body.birthday,
        role: req.body.role,
        department: req.body.department,
    }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "USer not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.userId
            });
        });
}

exports.deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
}
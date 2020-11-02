// const db = require('../../models');
const path = require('path')

module.exports = function(router) {
    router.get('/login', function(req, res) {
        res.sendFile(path.join(__dirname, '../../public/login.html'))
    });
};
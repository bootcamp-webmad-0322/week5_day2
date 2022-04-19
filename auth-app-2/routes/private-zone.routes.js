const router = require('express').Router()

const { isLoggedIn, checkRole } = require('./../middlewares/route-guard')


// role based access control
router.get('/zona-privada', isLoggedIn, checkRole('ADMIN', 'EDITOR'), (req, res, next) => {
    res.render('private-zone/private', { user: req.session.currentUser })
})


// role based content rendering
router.get('/propiedades', isLoggedIn, (req, res, next) => {

    const properties = ['Madrid', 'Barcelona', 'Bilbao']

    const isAdmin = req.session.currentUser.role === 'ADMIN'
    const isEditor = req.session.currentUser.role === 'EDITOR'

    res.render('private-zone/properties', { properties, isAdmin, isEditor })
})


module.exports = router
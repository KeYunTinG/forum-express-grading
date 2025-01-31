const adminServices = require('../../services/admin-services')

const adminController = {
    getRestaurants: (req, res, next) => {
        adminServices.getRestaurants(req, (err, data) => err
            ? next(err)
            : res.json({
                statis: 'success',
                data
            }))
    },
    postRestaurant: (req, res, next) => {
        adminServices.postRestaurant(req, (err, data) => err
            ? next(err)
            : res.json({
                statis: 'success',
                data
            }))
    },
    deleteRestaurant: (req, res, next) => {
        adminServices.deleteRestaurant(req, (err, data) => err
            ? next(err)
            : res.json({
                statis: 'success',
                data
            }))
    }
}

module.exports = adminController

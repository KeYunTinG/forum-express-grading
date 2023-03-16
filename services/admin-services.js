const { Restaurant, Category } = require('../models')

const adminServices = {
    getRestaurants: (req, callback) => {
        Restaurant.findAll({
            raw: true,
            nest: true,
            include: [Category]
        })

            .then(restaurants => callback(null, { restaurants }))
            .catch(err => callback(err))
    },
    deleteRestaurant: (req, callback) => {
        Restaurant.findByPk(req.params.id)
            .then(restaurant => {
                if (!restaurant) throw new Error("Restaurant didn't exist!")
                return restaurant.destroy()
            })
            .then(deletedrestaurant => callback(null, { restaurant: deletedrestaurant }))
            .catch(err => callback(err))
    }
}
module.exports = adminServices

const db = require('../config/database');

// CRUD operations for the "restaurants" table
const getAllRestaurants = (callback) => {
    db.all(`SELECT * FROM restaurants`, [], (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
};

// Export CRUD functions
module.exports = {
    getAllRestaurants,
    // add other CRUD functions here (createRestaurant, updateRestaurant, deleteRestaurant)
};

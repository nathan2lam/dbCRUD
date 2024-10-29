const db = require('../config/database');

// CREATE: Insert a new customer
const createCustomer = () => {
    const sql = `INSERT INTO customers (name, email, phone) VALUES (?, ?, ?)`;
    const params = ['Eve Brown', 'eve@example.com', '555-5000'];
    
    db.run(sql, params, function (err) {
        if (err) {
            return console.error('Error creating customer:', err.message);
        }
        console.log(`A new customer has been added with ID ${this.lastID}`);
    });
};

// READ: Get all reservations for a specific restaurant (by restaurant_id)
const readReservations = (restaurantId) => {
    const sql = `SELECT * FROM reservations WHERE restaurant_id = ?`;
    
    db.all(sql, [restaurantId], (err, rows) => {
        if (err) {
            return console.error('Error reading reservations:', err.message);
        }
        console.log(`Reservations for restaurant ID ${restaurantId}:`);
        console.log(rows);
    });
};

// UPDATE: Update the price of a menu item
const updateMenuPrice = (itemId, newPrice) => {
    const sql = `UPDATE menus SET price = ? WHERE id = ?`;
    const params = [newPrice, itemId];
    
    db.run(sql, params, function (err) {
        if (err) {
            return console.error('Error updating menu price:', err.message);
        }
        console.log(`Menu item with ID ${itemId} has been updated with the new price $${newPrice}`);
    });
};

// DELETE: Delete a review
const deleteReview = (reviewId) => {
    const sql = `DELETE FROM reviews WHERE id = ?`;
    
    db.run(sql, reviewId, function (err) {
        if (err) {
            return console.error('Error deleting review:', err.message);
        }
        console.log(`Review with ID ${reviewId} has been deleted`);
    });
};

// Sample executions
createCustomer(); // Create a new customer
readReservations(1); // Read reservations for restaurant ID 1
updateMenuPrice(1, 15.99); // Update the price of the menu item with ID 1
deleteReview(1); // Delete the review with ID 1

// Close the database connection
db.close();

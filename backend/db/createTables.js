const db  = require('../config/database')

// Create the "restaurants" table
// Functional dependency: id -> (name, address, phone)
db.run(`CREATE TABLE restaurants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT,
    phone TEXT
)`, (err) => {
    if (err) {
        // Table already created
    }
});

// Create the "customers" table
// Functional dependency: id -> (name, email, phone)
db.run(`CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT
)`, (err) => {
    if (err) {
        // Table already created
    }
});

// Create the "reservations" table
// Functional dependencies:
// id -> (restaurant_id, customer_id, reservation_date, number_of_people)
// (restaurant_id, reservation_date) -> (number_of_people)
db.run(`CREATE TABLE reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    reservation_date TEXT NOT NULL,
    number_of_people INTEGER NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
)`, (err) => {
    if (err) {
        // Table already created
    }
});

// Create the "menus" table
// Functional dependencies:
// id -> (restaurant_id, item_name, description, price, category)
// (restaurant_id, item_name) -> (description, price, category)
db.run(`CREATE TABLE menus (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER NOT NULL,
    item_name TEXT NOT NULL,
    price REAL NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
)`, (err) => {
    if (err) {
        // Table already created
    }
});

// Create the "reviews" table
// Functional dependencies:
// id -> (restaurant_id, customer_id, rating, comment, review_date)
// (restaurant_id, customer_id) -> (rating, comment, review_date)
db.run(`CREATE TABLE reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
    comment TEXT,
    review_date TEXT NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
)`, (err) => {
    if (err) {
        // Table already created
    }
});

module.exports = db;

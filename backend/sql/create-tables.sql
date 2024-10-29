-- Create the "restaurants" table
-- Functional dependency: id -> (name, address, phone, website)
CREATE TABLE restaurants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT,
    phone TEXT,
    website TEXT
);

-- Create the "customers" table
-- Functional dependency: id -> (name, email, phone)
CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT
);

-- Create the "reservations" table
-- Functional dependencies:
-- id -> (restaurant_id, customer_id, reservation_date, number_of_people, status)
-- (restaurant_id, reservation_date) -> (number_of_people, status)
CREATE TABLE reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    reservation_date TEXT NOT NULL,
    number_of_people INTEGER NOT NULL,
    status TEXT DEFAULT 'pending',
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Create the "menus" table
-- Functional dependencies:
-- id -> (restaurant_id, item_name, description, price, category)
-- (restaurant_id, item_name) -> (description, price, category)
CREATE TABLE menus (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER NOT NULL,
    item_name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    category TEXT,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

-- Create the "reviews" table
-- Functional dependencies:
-- id -> (restaurant_id, customer_id, rating, comment, review_date)
-- (restaurant_id, customer_id) -> (rating, comment, review_date)
CREATE TABLE reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
    comment TEXT,
    review_date TEXT NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
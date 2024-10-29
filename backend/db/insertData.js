const db = require('../config/database');

// Insert data into the "restaurants" table
const insertRestaurants = `
INSERT INTO restaurants (name, address, phone) VALUES
('The Italian Place', '123 Main St', '555-1234'),
('Sushi World', '456 Elm St', '555-5678'),
('BBQ Haven', '789 Oak St', '555-8765'),
('Vegan Delight', '321 Pine St', '555-4321')
`;

db.run(insertRestaurants, (err) => {
    if (err) {
        console.error('Error inserting restaurants:', err.message);
    } else {
        console.log('Restaurants inserted successfully');
    }
});

// Insert data into the "customers" table
const insertCustomers = `
INSERT INTO customers (name, email, phone) VALUES
('Alice Johnson', 'alice@example.com', '555-1000'),
('Bob Smith', 'bob@example.com', '555-2000'),
('Carol White', 'carol@example.com', '555-3000'),
('David Green', 'david@example.com', '555-4000')
`;

db.run(insertCustomers, (err) => {
    if (err) {
        console.error('Error inserting customers:', err.message);
    } else {
        console.log('Customers inserted successfully');
    }
});

// Insert data into the "reservations" table
const insertReservations = `
INSERT INTO reservations (restaurant_id, customer_id, reservation_date, number_of_people) VALUES
(1, 1, '2024-10-25', 2),
(2, 2, '2024-10-26', 4),
(3, 3, '2024-10-27', 3),
(4, 4, '2024-10-28', 5)
`;

db.run(insertReservations, (err) => {
    if (err) {
        console.error('Error inserting reservations:', err.message);
    } else {
        console.log('Reservations inserted successfully');
    }
});

// Insert data into the "menus" table
const insertMenus = `
INSERT INTO menus (restaurant_id, item_name, price) VALUES
(1, 'Spaghetti Carbonara', 12.50),
(1, 'Margherita Pizza', 10.00),
(2, 'Dragon Roll', 14.00),
(2, 'Salmon Nigiri', 8.50),
(3, 'Pulled Pork Sandwich', 9.00),
(3, 'BBQ Ribs', 15.00),
(4, 'Vegan Burger', 11.00),
(4, 'Quinoa Salad', 7.50)
`;

db.run(insertMenus, (err) => {
    if (err) {
        console.error('Error inserting menus:', err.message);
    } else {
        console.log('Menus inserted successfully');
    }
});

// Insert data into the "reviews" table
const insertReviews = `
INSERT INTO reviews (restaurant_id, customer_id, rating, comment, review_date) VALUES
(1, 1, 5, 'Amazing food and great service!', '2024-10-20'),
(2, 2, 4, 'Delicious sushi but a bit pricey.', '2024-10-21'),
(3, 3, 3, 'Good BBQ but the service was slow.', '2024-10-22'),
(4, 4, 5, 'Fantastic vegan options and friendly staff.', '2024-10-23')
`;

db.run(insertReviews, (err) => {
    if (err) {
        console.error('Error inserting reviews:', err.message);
    } else {
        console.log('Reviews inserted successfully');
    }
});

db.close();

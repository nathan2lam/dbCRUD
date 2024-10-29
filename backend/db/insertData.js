const db = require('../config/database');

// Insert data into the "restaurants" table
const insertRestaurants = `
INSERT INTO restaurants (name, address, phone, website) VALUES
('The Italian Place', '123 Main St', '555-1234', 'http://italianplace.com'),
('Sushi World', '456 Elm St', '555-5678', 'http://sushiworld.com'),
('BBQ Haven', '789 Oak St', '555-8765', 'http://bbqhaven.com'),
('Vegan Delight', '321 Pine St', '555-4321', 'http://vegandelight.com')
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
INSERT INTO reservations (restaurant_id, customer_id, reservation_date, number_of_people, status) VALUES
(1, 1, '2024-10-25 18:30:00', 2, 'confirmed'),
(2, 2, '2024-10-26 19:00:00', 4, 'pending'),
(3, 3, '2024-10-27 20:00:00', 3, 'cancelled'),
(4, 4, '2024-10-28 17:00:00', 5, 'confirmed')
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
INSERT INTO menus (restaurant_id, item_name, description, price, category) VALUES
(1, 'Spaghetti Carbonara', 'Classic Italian pasta with eggs, cheese, pancetta, and pepper', 12.50, 'Pasta'),
(2, 'Dragon Roll', 'Sushi roll with eel, avocado, cucumber, and spicy mayo', 14.00, 'Sushi'),
(3, 'Pulled Pork Sandwich', 'Slow-cooked pulled pork with BBQ sauce on a bun', 9.00, 'BBQ'),
(4, 'Vegan Burger', 'Plant-based burger with lettuce, tomato, and vegan mayo', 11.00, 'Entree')
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

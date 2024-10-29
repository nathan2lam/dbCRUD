-- Insert data into the "restaurants" table
INSERT INTO restaurants (name, address, phone, website)
SELECT 'The Italian Place', '123 Main St', '555-1234', 'http://italianplace.com'
UNION ALL SELECT 'Sushi World', '456 Elm St', '555-5678', 'http://sushiworld.com'
UNION ALL SELECT 'BBQ Haven', '789 Oak St', '555-8765', 'http://bbqhaven.com'
UNION ALL SELECT 'Vegan Delight', '321 Pine St', '555-4321', 'http://vegandelight.com';

-- Insert data into the "customers" table
INSERT INTO customers (name, email, phone)
SELECT 'Alice Johnson', 'alice@example.com', '555-1000'
UNION ALL SELECT 'Bob Smith', 'bob@example.com', '555-2000'
UNION ALL SELECT 'Carol White', 'carol@example.com', '555-3000'
UNION ALL SELECT 'David Green', 'david@example.com', '555-4000';

-- Insert data into the "reservations" table
INSERT INTO reservations (restaurant_id, customer_id, reservation_date, number_of_people, status)
SELECT 1, 1, '2024-10-25 18:30:00', 2, 'confirmed'
UNION ALL SELECT 2, 2, '2024-10-26 19:00:00', 4, 'pending'
UNION ALL SELECT 3, 3, '2024-10-27 20:00:00', 3, 'cancelled'
UNION ALL SELECT 4, 4, '2024-10-28 17:00:00', 5, 'confirmed';

-- Insert data into the "menus" table
INSERT INTO menus (restaurant_id, item_name, description, price, category)
SELECT 1, 'Spaghetti Carbonara', 'Classic Italian pasta with eggs, cheese, pancetta, and pepper', 12.50, 'Pasta'
UNION ALL SELECT 2, 'Dragon Roll', 'Sushi roll with eel, avocado, cucumber, and spicy mayo', 14.00, 'Sushi'
UNION ALL SELECT 3, 'Pulled Pork Sandwich', 'Slow-cooked pulled pork with BBQ sauce on a bun', 9.00, 'BBQ'
UNION ALL SELECT 4, 'Vegan Burger', 'Plant-based burger with lettuce, tomato, and vegan mayo', 11.00, 'Entree';

-- Insert data into the "reviews" table
INSERT INTO reviews (restaurant_id, customer_id, rating, comment, review_date)
SELECT 1, 1, 5, 'Amazing food and great service!', '2024-10-20'
UNION ALL SELECT 2, 2, 4, 'Delicious sushi but a bit pricey.', '2024-10-21'
UNION ALL SELECT 3, 3, 3, 'Good BBQ but the service was slow.', '2024-10-22'
UNION ALL SELECT 4, 4, 5, 'Fantastic vegan options and friendly staff.', '2024-10-23';
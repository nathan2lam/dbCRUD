-- CREATE: Insert a new customer
INSERT INTO customers (name, email, phone)
SELECT 'Eve Brown', 'eve@example.com', '555-5000';

-- READ: Get all reservations for a specific restaurant (by restaurant_id)
SELECT * FROM reservations 
WHERE restaurant_id = 1;

-- UPDATE: Update the price of a menu item
UPDATE menus 
SET price = 15.99 
WHERE id = 1;

-- DELETE: Delete a review
DELETE FROM reviews 
WHERE id = 1;
// Create express app
var express = require("express")
var db = require("./config/database.js")
var app = express()

// Server port
var HTTP_PORT = 8000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Create a new reservation
app.post("/reservations", (req, res) => {
    const { restaurant_id, customer_id, reservation_date, number_of_people, status } = req.body;
    db.run(
        "INSERT INTO reservations (restaurant_id, customer_id, reservation_date, number_of_people, status) VALUES (?, ?, ?, ?, ?)",
        [restaurant_id, customer_id, reservation_date, number_of_people, status],
        (err) => {
            if (err) {
                console.error(err.message);
                res.status(500).send("Error creating reservation");
            } else {
                res.status(201).send("Reservation created");
            }
        }
    );
});

// Retrieve all reservations
app.get("/reservations", (req, res) => {
    db.all("SELECT * FROM reservations", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error retrieving reservations");
        } else {
            res.json(rows);
        }
    });
});

// Update a reservation
app.put("/reservations/:id", (req, res) => {
    const { id } = req.params;
    const { restaurant_id, customer_id, reservation_date, number_of_people, status } = req.body;
    db.run(
        "UPDATE reservations SET restaurant_id = ?, customer_id = ?, reservation_date = ?, number_of_people = ?, status = ? WHERE id = ?",
        [restaurant_id, customer_id, reservation_date, number_of_people, status, id],
        (err) => {
            if (err) {
                console.error(err.message);
                res.status(500).send("Error updating reservation");
            } else {
                res.send("Reservation updated");
            }
        }
    );
});

// Delete a reservation
app.delete("/reservations/:id", (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM reservations WHERE id = ?", [id], (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error deleting reservation");
        } else {
            res.send("Reservation deleted");
        }
    });
});

// Get all restaurants
app.get("/restaurants", (req, res) => {
    db.all("SELECT * FROM restaurants", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error retrieving restaurants");
        } else {
            res.json(rows);
        }
    });
});

// Get all customers
app.get("/customers", (req, res) => {
    db.all("SELECT * FROM customers", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error retrieving customers");
        } else {
            res.json(rows);
        }
    });
});

// Get all menu items for a restaurant
app.get("/restaurants/:id/menu", (req, res) => {
    const { id } = req.params;
    db.all("SELECT * FROM menus WHERE restaurant_id = ?", [id], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error retrieving menu items");
        } else {
            res.json(rows);
        }
    });
});

// Get all reviews for a restaurant
app.get("/restaurants/:id/reviews", (req, res) => {
    const { id } = req.params;
    db.all("SELECT * FROM reviews WHERE restaurant_id = ?", [id], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error retrieving reviews");
        } else {
            res.json(rows);
        }
    });
});

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
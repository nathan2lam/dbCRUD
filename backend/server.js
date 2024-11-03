// Create express app
var express = require("express")
var db = require("./config/database.js")
var cors = require("cors");

var app = express()

app.use(cors());
app.use(express.json());

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
    console.log(req.body);
    const { restaurant, name, date, guests } = req.body;

    // Get restaurant_id based on restaurant name
    db.get("SELECT id FROM restaurants WHERE name = ?", [restaurant], (err, restaurantRow) => {
        if (err || !restaurantRow) {
            console.error(err ? err.message : "Restaurant not found");
            return res.status(400).send("Invalid restaurant name");
        }

        // Get customer_id based on customer name
        db.get("SELECT id FROM customers WHERE name = ?", [name], (err, customerRow) => {
            if (err || !customerRow) {
                console.error(err ? err.message : "Customer not found");
                return res.status(400).send("Invalid customer name");
            }

            // Insert reservation with retrieved IDs
            const restaurant_id = restaurantRow.id;
            const customer_id = customerRow.id;

            // Log the IDs being used
            console.log(`Inserting Reservation - Restaurant ID: ${restaurant_id}, Customer ID: ${customer_id}, Date: ${date}, Guests: ${guests}`);

            db.run(
                "INSERT INTO reservations (restaurant_id, customer_id, reservation_date, number_of_people) VALUES (?, ?, ?, ?)",
                [restaurant_id, customer_id, date, guests],
                (err) => {
                    if (err) {
                        console.error(err.message);
                        return res.status(500).send("Error creating reservation");
                    }
                    res.status(201).send("Reservation created");
                }
            );
        });
    });
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
    const { id, date, guests } = req.body;
    db.run(
        "UPDATE reservations SET reservation_date = ?, number_of_people = ? WHERE id = ?",
        [date, guests, id],
        (err) => {
            if (err) {
                console.error(err.message);
                res.status(500).send("Error updating reservation");
            } else {
                res.status(201).send("Reservation updated");
            }
        }
    );
});

// Delete a reservation
app.delete("/reservations/:id", (req, res) => {
    const { id } = req.query;
    db.run("DELETE FROM reservations WHERE id = ?", [id], (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Error deleting reservation");
        } else {
            res.send("Reservation deleted");
        }
    });
});

// Join tables to get all reservation details
app.get('/reservations/:id', (req, res) => {
    const id = req.params.id;
    const query = `
        SELECT 
            res.id,
            res.reservation_date,
            res.number_of_people,
            rest.name as restaurant_name,
            c.name as customer_name
        FROM reservations res
        JOIN restaurants rest ON res.restaurant_id = rest.id
        JOIN customers c ON res.customer_id = c.id
        WHERE res.id = ?
    `;

    db.get(query, [id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            console.log(err.message);
            return;
        }
        if (!row) {
            res.status(404).json({ error: 'Reservation not found' });
            return;
        }
        res.json(row);
    });
});

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
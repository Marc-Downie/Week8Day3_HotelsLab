const { Db } = require("mongodb");

use bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        guest_name: "Matthew Piper",
        guest_email: "formalT2P@opticgaming.com",
        checked_in_status: true
    },
    {
        guest_name: "James Eubanks",
        guest_email: "clayster3rings@newyorksl.com",
        checked_in_status: false
    }
])
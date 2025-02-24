const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");  
const bodyParser = require('body-parser');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo', {
    });
    console.log('DB connected');
}

// Define schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true }, 
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

const server = express();

server.use(cors());  
server.use(bodyParser.json());

// Register (Sign Up)
server.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const user = new User({ firstName, lastName, email, password });
        const savedUser = await user.save(); 

        res.status(201).json({ message: "User registered successfully", user: savedUser });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login (Sign In)
server.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Compare plain text passwords
        if (user.password !== password) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        res.status(200).json({ message: "Login successful", user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all users (For testing)
server.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

server.listen(8080, () => {
    console.log('Server Connected Successfully on port 8080.');
});

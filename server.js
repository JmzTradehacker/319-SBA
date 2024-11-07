import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import users from './routes/users.js';
import trades from './routes/trades.js';

const app = express();

//Middleware
app.use(express.json());

//Mongoose - MongoDb Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

//Routes
app.use('/api/users', users);
app.use('/api/trades', trades);

//Server Runs/Listens
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
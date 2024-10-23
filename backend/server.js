import express from 'express';
import { configDotenv } from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import { connectMongoDB } from './db/connectMongoDB.js';

configDotenv();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
})
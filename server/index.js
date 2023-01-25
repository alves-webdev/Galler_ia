import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.send('Hello from Dall-e');
});

import connectDB from './mongodb/connect.js';

const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL);
    } catch (err) {
        console.log(err);
    }
    app.listen(8080, () => {
        console.log('Server is running on port 8080');
    });
};

startServer();
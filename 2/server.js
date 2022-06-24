import http from 'http';
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

import Router from './routes/routes.js';

dotenv.config(); // .env 파일을 읽어온다.
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('', Router);

app.use((err, req, res, next) => {
	res.status(500).json({ message: err.message });
});

const server = http.createServer(app);

server.listen(PORT, () => {
	console.log(`running port ${PORT}`);
		
	mongoose.connect(`mongodb+srv://donchoi:${process.env.MONGODB_PASSWORD}@cluster0.rrreh.mongodb.net/?retryWrites=true&w=majority`)
	.then(() => { console.log('MongoDB Connected...'); })
	.catch(err => { console.log(err); });
});

export default server;
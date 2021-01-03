import express from 'express';
import mongoose from 'mongoose';

// App Config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares


// DB config

// API Endpoints
app.get('/', (res, req) => 
  res.status(200).send("Hello World")
);

// Listener
app.listen(port, () => 
  console.log(`listening on localhost: ${port}`)
);
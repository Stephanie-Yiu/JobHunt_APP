import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
 .connect(process.env.MANGODB)
 .then(() => {
  console.log('connected to mangoDB!!!');
 })
 .catch(err => {
  console.log(err);
 });

const app = express();

app.listen(3000, () => {
 console.log("you're at port 3000");
});

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

///naming the rouete from  route, it was "export default router"
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

mongoose
 .connect(process.env.MANGODB)
 .then(() => {
  console.log('connected to mangoDB!!!');
 })
 .catch(err => {
  console.log(err);
 });

const app = express();
app.use(express.json());

app.listen(3000, () => {
 console.log("you're at port 3000");
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
 const statusCode = err.statusCode || 500;
 const message = err.message || 'Internal Server Error';
 return res.status(statusCode).json({
  success: false,
  statusCode: statusCode,
  message,
 });
}); // Error handling function(middleware)

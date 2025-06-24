
import MongoStore from 'connect-mongo'
import dotenv from 'dotenv'
dotenv.config();
// console.log(process.env.MONGO_URL);
export default {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    collectionName: 'sessions',
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true,
    secure: false, // true if using HTTPS
  }
};
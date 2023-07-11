// main //
import express from "express";
import dotenv from "dotenv";
import {booksRouter} from "./routes/bookRout.js";
import {usersRouter} from "./routes/usersRout.js";
dotenv.config();
const app = express();
app.use(express.json());

app.use(usersRouter);
app.use(booksRouter);

const PORT = process.env.PORT || 7070;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`the PORT ${PORT} are listen`);
});




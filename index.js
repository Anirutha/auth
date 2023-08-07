import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import { usersRouter } from "./Routers/users.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.post("/upload", (req, res) => {
setTimeout(() => {
    let date=new Date();
    let todaydate=("0"+date.getDate()).slice(-2);
    let month=("0"+(date.getMonth()+1)).slice(-2);
    let year=date.getFullYear();
    let hours=date.getHours();
    let Minutes=date.getMinutes();
    let seconds=date.getSeconds();
    var content=year+"-"+month+"-"+todaydate+" "+hours+":"+Minutes+":"+seconds;
    return res.status(200).json({ result: true, msg: 'file uploaded', date:content});
    }, 3000);
});

app.delete("/upload", (req, res) => {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
});

app.use("/users", usersRouter)

app.listen(PORT, () => console.log(`Server started in localhost:${PORT}`));

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
    let dt=new Date();
    let date=("0"+dt.getDate()).slice(-2);
    let month=("0"+(dt.getMonth()+1)).slice(-2);
    let year=dt.getFullYear();
    let hours=dt.getHours();
    let Minutes=dt.getMinutes();
    let seconds=dt.getSeconds();
    var content=year+"-"+month+"-"+date+" "+hours+":"+Minutes+":"+seconds;
    
        return res.status(200).json({ result: true, msg: 'file uploaded', dt:content});
    }, 3000);
});

app.delete("/upload", (req, res) => {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
});

app.use("/users", usersRouter)

app.listen(PORT, () => console.log(`Server started in localhost:${PORT}`));

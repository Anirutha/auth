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
    // use modules such as express-fileupload, Multer, Busboy
    
    setTimeout(() => {
        console.log('file uploaded')
        return res.status(200).json({ result: true, msg: 'file uploaded' });
    }, 3000);
});

app.delete("/upload", (req, res) => {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
});

app.use("/users",usersRouter)
app.listen(PORT, ()=>console.log(`Server started in localhost:${PORT}`));





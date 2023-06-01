import express from "express";
import dotenv from "dotenv";

const app = express();
const router = express.Router();

dotenv.config({path:'./.env'} );

const PRINT_THIS = process.env.variable;

app.use(express.json());

app.use("/general", router.get("/test", (req, res) => {
    console.log("hello there");
    res.status(200).json({ message: "insert generic response" })
}));

const PORT = 3000;

try {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}
    \n
    ${PRINT_THIS}
    `));

} catch {((error) => console.log("error starting app"));}
    
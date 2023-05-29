import express from "express";

const app = express();
const router = express.Router();

app.use(express.json());

app.use("/general", router.get("/test", (req, res) => {
    console.log("hello there");
    res.status(200).json({ message: "insert generic response" })
}));

const PORT = 3000;

try {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

} catch {((error) => console.log("error starting app"));}
    
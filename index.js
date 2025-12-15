// blog_app/index.js
import express from "express";
import connectDB from "./config/db.js";

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
	response.send({ message: "Hello from an Express API!" });
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});

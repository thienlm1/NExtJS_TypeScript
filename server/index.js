const express = require("express");
const router = require("./router");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5791;
dotenv.config();
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});
const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const helmet = require("helmet");
const { xss } = require("express-xss-sanitizer");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const path = require("node:path");
const morgan = require("morgan");
const router = require("./src/routes/api");

const app = express();
app.use(cookieParser());

// security
app.use(hpp());
// app.use(mongoSanitize())
app.use(helmet());
app.use(xss());

//parser & others
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(morgan("dev"));

//route

app.use("/api", router);

/// link with frontend
// Serve React build
app.use(
    express.static(
        path.resolve(__dirname, "client", "dist")
    )
);

// React Router fallback
app.get("{*splat}", function (req, res) {
    res.sendFile(
        path.resolve(__dirname, "client", "dist", "index.html")
    );
});
module.exports = app;

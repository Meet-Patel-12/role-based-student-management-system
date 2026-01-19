const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/student.routes');
const authRoutes = require("./routes/auth.routes")
const adminRoutes = require("./routes/admin.routes")
const errorHandler = require('./middlewares/error.middleware')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/students', studentRoutes);

app.use("/api/auth", authRoutes)

app.use("/api/admin", adminRoutes)

app.use(errorHandler)

module.exports = app;

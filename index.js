require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const bodyParser = require('body-parser')

const propertyRoutes = require ('./router/propertyRoutes')
const userRoutes = require ('./router/userRoutes')
const contactRoutes = require ('./router/contactRoutes')
const authRoutes = require ('./router/authRoutes')
const app = express();
app.use(express.query())
app.use(express.json())
app.use(cors());
app.use(bodyParser.json())
const port = 3000;


//mongoose connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Runing on ${port}`);
    });
    console.log("connect to DB");
  });

  app.use('/properties',propertyRoutes)
  app.use('/users',userRoutes)
  app.use('/contact',contactRoutes)
  app.use('/login',authRoutes)

  
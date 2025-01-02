const express = require("express");
const app = express();

const { resolve } = require("path");

app.use("/", express.static(resolve(__dirname, "./build")));
app.use('/search', express.static( resolve( __dirname, './build' )));
app.use('/auth', express.static( resolve( __dirname, './build' )));
app.use('/article/:id', express.static( resolve( __dirname, './build' )));
app.use('/profile', express.static( resolve( __dirname, './build' )));
app.use('/getUser/:id', express.static( resolve( __dirname, './build' )));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err);
  }
});
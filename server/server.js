const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const randomString = require("./randomString");

const bodyParser = require("body-parser");
// const randomString = require('./randomString');

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'me68Sab71uni602',
  database:`projectcoins`,
  waitForConnections:true
});
db.connect((err) => {
  if (err) return err;
});

app.get("/coins", (req, res) => {
  const GET_COINS_FROM_DB = `SELECT * FROM coins`;
  db.query(GET_COINS_FROM_DB, (err, results) => {
    if (err) res.sendStatus(500);
    res.send(results);
  });
});

app.get("/coinByType", (req, res) => {
  const { type } = req.query;

  const GET_BY_TYPE = `SELECT * FROM coins WHERE type='${type}'`;

  db.query(GET_BY_TYPE, (err, results) => {
    if (err) res.sendStatus(500);
    res.send(results);
  });
});
app.get("/coinPage", (req, res) => {
  const id = req.query.id;
  const GET_BY_TYPE = `SELECT * FROM coins WHERE id='${id}'`;

  db.query(GET_BY_TYPE, (err, results) => {
    if (err) res.sendStatus(500);
    res.send(results);
  });
});
app.post("/registration", (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.pass, salt);
  const User = {
    login: req.body.login,
    salt: salt,
    hash: hash,
    role: "User",
  };
  const ADD_NEW_USER = `INSERT INTO users (username,salt,hash,role) VALUES('${User.login}','${User.salt}','${User.hash}','${User.role}')`;
  db.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    else {
      const findSameUser = results.filter((el) => el.username === User.login);
      if (findSameUser.length <= 0) {
        db.query(ADD_NEW_USER, (err1, results1) => {
          if (err1) return res.send(err1);

          res.send(results1);
        });
      } else {
        res.json("Занято");
      }
    }
  });
});
app.post("/login", (req, res) => {
  const login = req.body.login;
  const pass = req.body.pass;
  const newToken = randomString();
  const FIND_USER_IN_DB = `SELECT username,hash,salt,role FROM users WHERE username='${login}'`;
  db.query(FIND_USER_IN_DB, (err, results) => {
    if (err) res.sendStatus(404);
    if (results[0]) {
      const salt = results[0].salt;
      const userHash = bcrypt.hashSync(pass, salt);
      if (results[0].hash === userHash) {
        const role = results[0].role;
        const GIVE_TOKEN = `UPDATE users SET token = '${newToken}' WHERE username='${login}'`;
        db.query(GIVE_TOKEN, (err1, results1) => {
          if (err1) res.sendStatus(500);
        });
        res.send({ newToken, login, role });
      }
    } else res.sendStatus(401);
  });
});

app.get("/coinsSearch", (req, res) => {
  function clean(obj) {
    for (let key in obj) {
      if (
        obj[key] === null ||
        obj[key] === undefined ||
        obj[key] === "" ||
        obj[key] === "undefined"
      ) {
        delete obj[key];
      }
    }
  }
  const {
    name,
    country,
    composition,
    priceFrom,
    priceTo,
    yearFrom,
    yearTo,
  } = req.query;
  const obj = { ...req.query };
  name !== "undefined"
    ? (obj.name = `(name LIKE '%${name}%' OR information LIKE '%${name}%')`)
    : (obj.name = `(name LIKE '%''%' OR information LIKE '%''%')`);
  country ? (obj.country = `country = '${country}'`) : "";
  composition ? (obj.composition = `composition = '${composition}'`) : "";
  priceFrom ? (obj.priceFrom = `price>=${priceFrom}`) : "";
  priceTo ? (obj.priceTo = `price<=${priceTo}`) : "";
  yearFrom ? (obj.yearFrom = `date>=${yearFrom}`) : "";
  yearTo ? (obj.yearTo = `date<=${yearTo}`) : "";

  clean(obj);

  const info = Object.values(obj);
  const SEARCH_SELECT = `SELECT * FROM coins WHERE ${info.join(" AND ")} ${
    name
      ? `ORDER BY CASE WHEN name LIKE '${name}%' THEN 1 WHEN name LIKE '%${name}' THEN 3 ELSE 2 END`
      : ""
  }`;

  console.log(SEARCH_SELECT);
  db.query(SEARCH_SELECT, (err, results) => {
    if (err) res.sendStatus(500);
    res.send(results);
  });
});
app.get("/checkToken", (req, res) => {
  const { login } = req.query;
  const FIND_USER = `SELECT token,role FROM users WHERE username='${login}'`;
  db.query(FIND_USER, (err, results) => {
    if (err) res.sendStatus(500);
    res.send(results);
  });
});
app.put("/edit", (req, res) => {
  const id = req.query.id;
  const values = { ...req.body };

  const EDIT_COIN = `UPDATE coins SET ? WHERE id=${id}`;
  db.query(EDIT_COIN, [values], (err, results) => {
    if (err) res.sendStatus(500);
    res.send(results);
  });
});
app.post("/add", (req, res) => {
  const values = { ...req.body };
  const ADD_COIN = `INSERT INTO coins (name,imgFrontUrl,imgBackUrl,country,composition,quality,denomination,date,weight,price,information,type,short)
  VALUES('${values.name}','${values.imgFrontUrl}','${values.imgBackUrl}','${values.country}','${values.composition}','${values.quality}','${values.denomination}','${values.date}','${values.weight}','${values.price}','${values.information}','${values.type}','${values.short}')
  `;
  db.query(ADD_COIN, (err, results) => {
    if (err) res.sendStatus(500);
    console.log(results);
    res.send(results);
  });
});

app.delete("/delete", (req, res) => {
  const { id } = req.body;
  const DELETE_COIN = `DELETE FROM coins WHERE id = ${id};`;

  db.query(DELETE_COIN, (err, results) => {
    if (err) res.sendStatus(500);
    console.log(results);
    res.send(results);
  });
});
app.get("/userInfo", (req, res) => {
  const { username } = req.query;

  const GET_USER_INFO = `SELECT fullName,email,age FROM users WHERE username='${username}'`;

  db.query(GET_USER_INFO, (err, results) => {
    if (err) res.sendStatus(500);
    res.json(results);
  });
});
app.put("/updateInfo", (req, res) => {
  const { value, target, username } = req.body;

  const SET_NEW_INFO = `UPDATE users SET ${target} ='${value}'  WHERE username='${username}';`;
  db.query(SET_NEW_INFO, (err, results) => {
    if (err) res.sendStatus(500);
  });
});

app.post("/history", (req, res) => {
  const id = req.query.id;
  const { username } = req.body;

  const ADD_USER_HISTORY = `INSERT INTO historyview (username,coin_id) VALUES ('${username}',${id})`;

  db.query(ADD_USER_HISTORY, (err, results) => {
    if (err) res.sendStatus(500);
  });
});
app.get("/getUserHistory", (req, res) => {
  const { username } = req.query;

  // const GET_USER_HISTORY_COINS = `SELECT * FROM historyview WHERE username='${username}'`;
  const GET_USER_HISTORY_COINS = `SELECT
  coins.id, 
  coins.name, 
  coins.imgFrontUrl, 
  coins.imgBackUrl, 
  coins.country,
  coins.composition, 
  coins.quality, 
  coins.denomination, 
  coins.date, 
  coins.weight, 
  coins.price, 
  coins.information, 
  coins.type, 
  coins.short,
  historyview.coin_id,
  historyview.username,
  historyview.id
  FROM coins
  INNER JOIN historyview
  ON coins.id = historyview.coin_id WHERE historyview.username='${username}'
  ORDER BY historyview.id DESC;`;
  db.query(GET_USER_HISTORY_COINS, (err, results) => {
    if (err) res.sendStatus(500);
    res.json(results);
  });
});
app.listen(port, () => {
  console.log("Started server at port " + port);
});

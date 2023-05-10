var express = require('express');
const addEmployee = require("../services/addEmployee");
var router = express.Router();
var uuid = require("uuid");

/* GET home page. */
router.post('/addEmployee', function(req, res, next) {
  const employee = req.body
  const data = addEmployee(employee)
   res.send(JSON.stringify(data))
});

//id, fullName, age, contact, email

router.get("/", (req, res) => {
  res.json(employees);
});

router.get("/:id", (req, res) => {
  const found = employees.some(employee => employee.id === parseInt(req.params.id));

  if (found) {
    res.json(employees.filter(employee => employee.id === parseInt(req.params.id)));
  } else {
    res.sendStatus(400);
  }
});

router.post("/", (req, res) => {
  const newEmployee = {
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
    contact: req.body.contact,
    email: req.body.email
  };
  employees.push(newEmployee);
  res.json(employees);
});

module.exports = router;

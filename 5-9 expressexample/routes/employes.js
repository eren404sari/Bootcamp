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

router.post("/", (req, res) => {
  const newEmployee = {
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
    contact: req.body.contact,
    email: req.body.email
  };
  if (!newEmployee.name || !newEmployee.email) {
    return res.sendStatus(400);
  }
  employees.push(newEmployee);
  res.json(employees);
});

router.get('/employee/:id', (req, res) => {
  const employeeId = req.params.id;
  const employee = addEmployee.allEmployees().find((p) => p.id === parseInt(employeeId));
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

module.exports = router;

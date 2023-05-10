import Employee from "../Model/Employee.js";
import addEmployee from "./addEmployee.js";
import viewById from "./viewByID.js";
import viewByName from "./viewByName.js";
import viewByEmail from "./viewByEmail.js";
import viewAll from "./viewAll.js";

const http = require('http');
const url = require("url");



const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    switch (path) {
        case "/api/v1/addEmployee":
            console.log("Received addEmployee request");
            // Use the addEmployee utility function
            switch (req.method) {
                case "POST":
                    {
                        let chunks = [];

                        req.on('data', (chunk) => {
                            chunks.push(chunk);
                        });

                        req.on('end', () => {
                            const data = Buffer.concat(chunks);
                            //todo: need validation
                            const newEmployee = JSON.parse(data.toString())
                            console.log(newEmployee)
                            const employees = addEmployee(newEmployee)
                            res.setHeader('content-type', 'application/json');
                            res.statusCode = 200;
                            res.write(JSON.stringify(employees))
                            res.end();
                        });
                        break;


                        break;
                    }
                case "POST": {
                    break;
                }
            }

            break;
        case "/api/v1/viewEmployeeById":
            console.log("Received viewEmployeeByID request");
            // Use the viewEmployeeById utility function
            switch (req.method) {
                case "POST":
                    {
                        break;
                    }
            }

            break;
        case "/api/v1/viewEmployeeByName":
            console.log("Received viewEmployeeByName request");
            // Use the viewEmployeeByName utility function
            switch (req.method) {
                case "POST":
                    {

                        break;
                    }
            }

            break;
        case "/api/v1/viewEmployeeByEmail":
            console.log("Received viewEmployeeByEmail request");
            // Use the viewEmployeeByEmail utility function
            switch (req.method) {
                case "POST":
                    {

                        break;
                    }
            }

            break;
        case "/api/v1/viewAllEmployees":
            console.log("Received viewAllEmployees request");
            // Use the viewAllEmployees utility function

            break;
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});

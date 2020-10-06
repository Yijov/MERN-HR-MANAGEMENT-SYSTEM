#MERN-HR-MANAGEMENT-SYSTEM

HR database management app with MERN stack.

About the Code
Yirbett Joseph 2020
This a MERN App built with a REST API That sends and recieves JSON data . It allows to perform CRUD operatios Using as an example an HR department

The API has several endpoits that send back JSON data:

GET all Employees: /employees
GET all Departments: /departments
GET all One Employee: /employees/:id
GET all One Department: /departments/:id
DELETE a Department: (Including all employees in it): /departments/:id
DELETE an Employee: /employes/:id
PATCH an employee: /employees/:id
PATCH a Department: /departments/:id
For more about the API chech the server folder/src/api
Some of the components in he frontEnd come from reactstrap nut most of the looks is custom code with SCSS for the Styles.

In the future should add am authentication system, a colection of logs and actions performed in the sistem and more fields to each category. For example, you can add a STATUS field to an employee to see if its on vacations, medical license ot any other.

The fiel badge for creating an employee only accepts an specific format: BDG followed by a - and 6 numbers . In the future it vould be added a function to autogenerate it.

For more about the API formats chech the server folder/src/api

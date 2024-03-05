# Todo List Application
This is a simple Todo List application that utilizes CRUD operations. It has a front-end built with HTML, CSS (using Bulma), and JavaScript, and a back-end powered by Node.js (with Express) and MySQL.

## Installation
1. Make sure you have Node.js and npm installed on your machine.
2. Clone the repository.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install dependencies.
5. Set up your MySQL database using the provided SQL script in phpMyAdmin or any other MySQL management tool (`database.sql`).
6. Update the database connection details in the `db.js` file if necessary.
7. Run `npm start` to launch the application.

## Usage
Once the application is running, you can perform the following operations:

### Create
- To create a new to-do item, enter the task description in the input field and click the "Create" button.

### Read
- The existing to-do items will be displayed on the screen with options to update or delete them.

### Update
- You can update a to-do item by clicking on its "Update" button. This will allow you to edit the task.

### Delete
- To delete a to-do item, click on the "Delete" button next to it.

## Technologies Used
- HTML
- CSS (Bulma)
- JavaScript (Front-end and Back-end)
- Node.js
- Express.js
- MySQL

## File Structure
. 
├── node_modules
├── public
│ ├── css
│ │ └── styles.css
│ ├── js
│ │ └── app.css
├── views
│ └── index.html
├── express.js 
├── routes.js 
├── db.js 
├── package.json 
└── database.sql

## Directory Structure Explanation
- `node_modules`: Contains dependencies installed via npm.
- `public`: Contains static files like CSS and JavaScript.
- `views`: Contains the HTML files.
- `express.js`: The main server file where Express.js is configured.
- `routes.js`: Defines API routes and their corresponding handlers.
- `db.js`: Manages database connection.
- `package.json`: Configuration file for npm.
- `database.sql`: SQL script for setting up the MySQL database.

## Scripts
- `start`: Runs the application using `node express.js`.

## Credits
This Todo List application was created and maintained by XiaoDev.

---

We hope you find this Todo List application useful for your task organization. If you have any questions or feedback, please don't hesitate to [reach out](mailto:&#99;o&#110;&#116;%61%63t&#64;&#120;&#105;a&#111;&#100;%65%76%2e&#102;%72).
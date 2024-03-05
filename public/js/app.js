document.addEventListener('DOMContentLoaded', function () {
  // Initialize with an empty list
  let mytodo_list = [];

  // Function to fetch tasks from the server
  function fetchTasks() {
    axios.get('http://localhost:3000/api/todos')
      .then(response => {
        mytodo_list = response.data;
        ReadAllTask(); // Refresh the UI with the fetched tasks
      })
      .catch(error => {
        console.error('Error getting tasks:', error);
      });
  }

  // CREATE
  function CreateTask() {
    let task = document.getElementById("add-task").value;

    if (task == "") {
      alert("Please enter a task");
    } 
    else {
      // Make a POST request to the server to create a task
      axios.post('http://localhost:3000/api/todos', { title: task })
        .then(response => {
          ReadAllTask(); // Refresh the task list after successful creation
        })
        .catch(error => {
          console.error('Error creating task:', error);
        });

      document.getElementById("add-task").value = "";
    }
  }

  // READ
  function ReadAllTask() {
    // Make a GET request to the server to retrieve all tasks
    axios.get('http://localhost:3000/api/todos')
      .then(response => {
        let data = "";

        for (let i = 0; i < response.data.length; i++) {
          data += "<div>";
          data += "<p class='task'>" + response.data[i].title + "</p>";
          data += "<div class='actions'><button class='button is-link' id='updateButton_" + i + "'><span>Update</span><span class='icon is-small'><i class='fa fa-pencil-square-o'></i></span></button><button class='button is-danger is-outlined' id='deleteButton_" + i + "'><span>Delete</span><span class='icon is-small'><i class='fa fa-trash'></i></span></button></div>";
          data += "</div>";
        }

        let counterText = response.data.length + " Task";

        if (response.data.length !== 1) {
          counterText += "s"; // Add "s" to the end of "task" if the length is not 1
        }

        document.getElementById("counter").innerHTML = counterText;
        document.getElementById("tasks").innerHTML = data;

        // Add event listeners after HTML content is inserted
        for (let i = 0; i < response.data.length; i++) {
          setupEventListeners(i);
        }
      })
      .catch(error => {
        console.error('Error getting tasks:', error);
      });
  }

  // UPDATE
  function UpdateTask(item) {
    document.getElementById("UpdateForm").style.display = "flex";
  
    // Extract the title from the task object
    const task = mytodo_list[item];
    const taskTitle = task.title;
  
    document.getElementById("update-task").value = taskTitle;
  
    document.getElementById("UpdateForm").onsubmit = function () {
      let updatedTaskTitle = document.getElementById("update-task").value;
  
      // Update the task title in the array
      mytodo_list[item].title = updatedTaskTitle.trim();
  
      // Update the task on the server
      axios.put(`http://localhost:3000/api/todos/${task.id}`, { title: updatedTaskTitle })
        .then(response => {
          fetchTasks(); // Refresh the tasks after successful update
        })
        .catch(error => {
          console.error('Error updating task:', error);
        });
  
      // Refresh the UI
      ReadAllTask();
      CloseInput();
    };
  }

  function DeleteTask(item) {
    const taskId = mytodo_list[item].id; // Get the ID of the task to be deleted
  
    // Send a DELETE request to the server to delete the task
    axios.delete(`http://localhost:3000/api/todos/${taskId}`)
      .then(response => {
        fetchTasks(); // Refresh the tasks after successful deletion
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  
    // Refresh the UI
    ReadAllTask();
  }

  // FUNCTIONS
  function CloseInput() {
    document.getElementById("UpdateForm").style.display = "none";
  }

  function createTaskButtonHandler() {
    CreateTask();
  }

  function updateTaskButtonHandler() {
    // Assuming item is a globally defined variable
    UpdateTask(item);
  }

  function deleteTaskButtonHandler() {
    DeleteTask(item);
  }

  // Initialize with tasks fetched from the server
  fetchTasks();

  // Add event listeners using addEventListener
  document.getElementById('createBtn').addEventListener('click', createTaskButtonHandler);

  document.getElementById('updateBtn').addEventListener('click', updateTaskButtonHandler);

  document.getElementById('close').addEventListener('click', function () {
    CloseInput();
  });

  function setupEventListeners(index) {
    document.getElementById('updateButton_' + index).addEventListener('click', function () {
      UpdateTask(index);
    });

    document.getElementById('deleteButton_' + index).addEventListener('click', function () {
      DeleteTask(index);
    });
  }

  ReadAllTask(); // Initial setup
});
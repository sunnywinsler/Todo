
import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import "./App.css";


 


function App() {
const todoItems = [
  {
    name:"Buy Milk",
    dueDate:"4/10/2023",
  },
  {
    name:"go to college",
    dueDate:"4/10/2023",
  },
  {
    name:"Like this video",
    dueDate:"right now",
  },


];

  return (
   <center className="todo-container">
   <AppName />
   <AddTodo></AddTodo>
   <TodoItems todoItems= {todoItems}></TodoItems>

   </center>
  );
  }

export default App;

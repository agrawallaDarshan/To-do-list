import './App.css';
import Header from './MyComponents/Header';
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodos } from "./MyComponents/AddTodos";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodoArray;
  let checkedtodos;
  let checkedArray = [];
  if (localStorage.getItem("todosList") === null) {
    initTodoArray = [];
  } else {
    initTodoArray = JSON.parse(localStorage.getItem("todosList"));
  }

  if(localStorage.getItem("checkedTodos") === null){
    checkedtodos = [];
  }else{
    checkedtodos = JSON.parse(localStorage.getItem("todosList"));
  }

  function onDelete(todoObject) {

    settodosArray(todosArray.filter(parameter => {
      return parameter !== todoObject;
    }));

  }

  function onCheck(id){
    const checkButton = document.getElementById(id);
    let checked = false;
    if(checkButton.style.background === "rgb(102, 255, 51)"){
      checkButton.style.background = "#20232a";
      checked = false;
    }else{
      checkButton.style.background = "rgb(102, 255, 51)";
      checked = true;
    }

    if(JSON.stringify(checkedArray[id]) !== `[${id},${checked}]`){
      checkedArray[id] = [id,checked];
    }

    checkedtodos = checkedArray;
    localStorage.setItem("checkedTodos",JSON.stringify(checkedtodos));
  }

  function addTodo(title, content) {
    let sno;
    if (todosArray.length === 0) {
      sno = 0;
    } else {
      sno = todosArray[todosArray.length - 1].sno + 1;
    }
    const myNewTodo = {
      sno: sno,
      title: title,
      desc: content
    }

    settodosArray([...todosArray, myNewTodo]);
  }

  //Creating a todos list
  const [todosArray, settodosArray] = useState(initTodoArray);
  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todosArray));
  }, [todosArray]);

  

  return (
    <>
      <Router>
        <Header title="My Todos List" displaySearchBar={true} />
        {/* passing todosArray to TODOS component */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodos addTodo={addTodo} />
                <Todos todoArrayObject={todosArray} onDelete={onDelete} onCheck = {onCheck}/>
              </>
            )
          }}>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

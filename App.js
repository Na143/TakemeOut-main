
import React, {useState} from "react";
import MainNavigator from './navigation/MainNavigator';
import { ToDoContext } from "./data/ToDoContext";
import {CATEGORIES,LOCATIONS} from './data/Data.js'

export default App => {
  const [toDoData,setToDoData] = useState({categories: CATEGORIES, locations: LOCATIONS});

  return (
    <ToDoContext.Provider value={[toDoData,setToDoData]} >
      <MainNavigator/>
    </ToDoContext.Provider>
  

  
  );
  
};


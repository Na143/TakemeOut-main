
import React, {useEffect, useState} from "react";
import MainNavigator from './navigation/MainNavigator';
import { ToDoContext } from "./data/ToDoContext";
import {CATEGORIES,LOCATIONS} from './data/Data.js'
import { getData } from "./data/AppStorage";

export default App => {
  const [toDoData,setToDoData] = useState({categories: CATEGORIES, locations: LOCATIONS});

  
  useEffect(()=>{
    getData().then((returnedValue)=>{setToDoData(JSON.parse(returnedValue))}).catch(()=> console.log("Error!"));
  },[]);
  
  return (
    <ToDoContext.Provider value={[toDoData,setToDoData]} >
      <MainNavigator/>
    </ToDoContext.Provider>
  

  
  );
  
};


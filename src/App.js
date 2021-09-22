import logo from './logo.svg';
import './App.css';
import foodsJSON from "./foods.json";
import React, { useState } from "react";
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
 
  return (
    <div className="App">
    <h1>Add Food Entry</h1>
    <AddFoodForm/>
    <h1>Food List </h1>
        {foods.map((food) => {
          
        return (
        <div>
          <FoodBox food={food} className = "Food"/>
        </div>
        
       );
    })} 
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Input } from "antd";

function AddFoodForm({newFood}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("1");
    const [servings, setServings] = useState("1");

    const nameInput = (e) => setName(e.target.value);
    const imageInput = (e) => setImage(e.target.value);
    const caloriesInput = (e) => setCalories(e.target.value);
    const servingsInput = (e) => setServings(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newFood = {
            name,
            image,
            calories,
            servings,
        };
        AddFoodForm(newFood);
        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }
    
    return (
        <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <Input value={name} type="text" onChange={nameInput} />

        <label>Image</label>
        <Input value={image} type="text" onChange={imageInput} />

        <label>Calories</label>
        <Input value={calories} type="text" onChange={caloriesInput} />

        <label>Servings</label>
        <Input value={servings} type="text" onChange={servingsInput} />
        <button type="submit">Create</button>
        </form>
    )
}

export default AddFoodForm;
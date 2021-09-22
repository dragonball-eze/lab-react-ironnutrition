import React, { useState } from "react";
import { Card, Col, Divider, Button } from "antd";


function FoodBox({food}) {

    const deleteFood = () => {
        return
    }
    return (
    <>
        <Col>
        <Card
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}
        >
            <img src={food.image} height={60} alt={food.name}/>
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
            <b>Total Calories: {food.calories*food.servings} </b> kcal
            </p>
            <Button onClick={}> Delete </Button>
        </Card>
        </Col>
    </>
    )
}

export default FoodBox;
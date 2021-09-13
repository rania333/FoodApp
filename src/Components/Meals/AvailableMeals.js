import { Fragment } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
    const DUMMY_MEALS = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
        },
        {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.5,
        },
        {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
        },
        {
            id: 'm4',
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            price: 18.99,
        },
    ];
    const meals = DUMMY_MEALS.map(meal => <MealItem meal={meal} key={meal.id} />)
    return ( 
        <Fragment>
            <Card> 
                <ul>{meals}</ul>
            </Card>
            
        </Fragment>
    );
}

export default AvailableMeals;
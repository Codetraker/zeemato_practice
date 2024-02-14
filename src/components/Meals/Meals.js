import Card from "../UI/Card";
import MenuList from "./MenuList";
import classes from './Meals.module.css';

const Meals = props =>{
    return (
        <Card className={classes.meal}>
            <div id={classes.rice}>
                <div id={classes.ricebox}>Rice & Biryani (7)</div>
                <div id={classes.nonefun}>Value Buckets (4)</div>
                <div id={classes.nonefun}>Assorted Starter Platter (5)</div>
                <div id={classes.nonefun}>Curries & Roti (15)</div>
                <div id={classes.nonefun}>Grills & Kebabs (11)</div>
                <div id={classes.nonefun}>Combo Meals & Thali (9)</div>
                <div id={classes.nonefun}>Buffet Boxes (7)</div>
                <div id={classes.nonefun}>Desserts (4)</div>
                <div id={classes.nonefun}>Drinks (Beverages) (3)</div>
            </div>
            <div id={classes.mealList}>
                <MenuList />
            </div> 
        </Card>
    );
}
export default Meals;
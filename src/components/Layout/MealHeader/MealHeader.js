import Card from "../../UI/Card";
import classes from './MealHeader.module.css';

const MealHeader = props => {
    return (
        <Card className={classes.main}>
            <div id={classes.first}>Overview</div>
            <div id={classes.second}>Order Online</div>
            <div id={classes.third}>Review</div>
            <div id={classes.four}>Photo</div>
            <div id={classes.five}>Menu</div>
            <div id={classes.six}>Book a Table</div>
        </Card>
    );
};
export default MealHeader;
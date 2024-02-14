import classes from './DishDetail.module.css';
const DishDetails = props =>{
    const price = `Rs.${props.price.toFixed(2)}`;
    return (
        <li className={classes.dishdetailLi}>
            <div className={classes.dishdetailDiv}>
                <h3>{props.name}</h3>
                <div>{price}</div>
                <div>{props.description}</div>
            </div>
            <div className={classes.dishdetailForm}>
                form
            </div>
        </li>
    );
}
export default DishDetails;
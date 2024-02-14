import classes from './DishDetail.module.css';
const DishDetails = props =>{
    const price = `₹${props.price.toFixed(2)}`;
    return (
        <li className={classes.dishdetailLi}>
            <div className={classes.dishdetailDiv}>
                <h3 id={classes.heading3}>{props.name}</h3>
                <div id={classes.priceDiv}>{price}</div>
                <div id={classes.descDiv}>{props.description}</div>
            </div>
            <div className={classes.dishdetailForm}>
                form
            </div>
        </li>
    );
}
export default DishDetails;
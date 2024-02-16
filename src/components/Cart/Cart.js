import Button from "../UI/Button";
import classes from './Cart.module.css';

const Cart = props =>{
    const cartItem = <ul className={classes.cartItem}>
            {[{id:'c1',name:'Sushi',amount:2,price: 259.99}].map((item)=> (
                <li>{item.name}</li> ))}
            </ul>;
    return (
        <div>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>259.99</span>
            </div>
            <div className={classes.action}>
                <Button title="Close" className={classes.closeBtn}/>
                <Button title="Order" className={classes.orderBtn}/>
            </div>
        </div>
    );
}
export default Cart;
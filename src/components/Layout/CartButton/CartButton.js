import classes from './CartButton.module.css';
import cartIcon from '../../../assets/shopping-bag.png';

const CartButton = (props) => {
    return(
        <div id={classes.cart}>
            <img src={cartIcon} className={classes.picbox}></img>
            <div className={classes.numtext}><h1>0</h1></div>
        </div>
    );
}
export default CartButton;
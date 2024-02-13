import CartButton from './CartButton/CartButton';
import classes from './Header.module.css';
import Log from './LogButton/Log';
import Pic from './PicBroucher/Pic';
import SearchBar from './SearchBarButton/SearchBar';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1 id={classes.name}>zeemato</h1>
                <SearchBar />
                <Log />
                <CartButton />
            </header>
            <Pic />
        </>
    );
}

export default Header;
import classes from './SearchBar.module.css';

const SearchBar = props =>{
    return (
        <div type="text" id={classes.search}>
            <input type="text" placeholder="Search for cuisine or a dish...." id={classes.inp}></input>
        </div>
    );
}
export default SearchBar;
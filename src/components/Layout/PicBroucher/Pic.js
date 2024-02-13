import classes from './Pic.module.css';

const Pic = props =>{
    return (
        <div className={classes.maindiv}>
            <div className={classes.location}>
                <p>Home / India / Bhubaneswar / Absolute Delicious / Order Online</p>
            </div>
            <div className={classes.picbox}>
                <div id={classes.boxone}></div>
                <div id={classes.boxtwo}></div>
                <div id={classes.boxthree}></div>
                <div id={classes.boxfour}>
                    <h4 id={classes.boxfourtext}>View Gallery</h4>
                </div>
            </div>
        </div>
    );
}
export default Pic;
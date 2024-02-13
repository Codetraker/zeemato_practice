import classes from './Log.module.css';

const Log = (props) =>{
    return (
        <di id={classes.log}>
            <div className={classes.login}>Log in</div>
            <div className={classes.signup}> Sign up</div>
        </di>
    );
}
export default Log;
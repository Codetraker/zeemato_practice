import classes from './Input.module.css';

const Input = props =>{
    return (
        <div className={classes.inputDiv}>
            <label htmlFor={props.input.id}>{props.label} <span className={classes.x}>X</span></label>
            <input {...props.input}></input>
        </div>
    );
}
export default Input;
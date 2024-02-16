import Button from '../../UI/Button';
import Input from '../../UI/Input';
import classes from './DishAddForm.module.css';

const DishAddForm = props => {
    return (
        <form className={classes.formMain}>
            <div className={classes.inputDiv}>
                <Input label="Amount" input={{id: 'amount_' + props.id, type:'number', min:'1', max:'5', step:'1', defaultValue:'1'}} />
            </div>
            <div className={classes.buttonDiv}>
                <Button title='+ Add' className={classes.add}/>
            </div>
        </form>
    );
}
export default DishAddForm;
import Card from '../../UI/Card';
import classes from './About.module.css';

const About = props => {
    return (
        <Card className={classes.about}>
            <div id={classes.box1}>Name</div>
            <div id={classes.box2}>about</div>
            <div id={classes.box3}>address</div>
            <div id={classes.box4}>open</div>
            <div id={classes.box5}>button</div>
            <div id={classes.box6}>rating</div>
        </Card>
    );
}
export default About;
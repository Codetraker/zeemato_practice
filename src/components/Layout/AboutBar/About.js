import Card from '../../UI/Card';
import classes from './About.module.css';
import star from '../../../assets/star.png';

const About = props => {
    return (
        <Card className={classes.about}>
            <div id={classes.box1}>
                <h1 id={classes.resname}>Absolute Delicious</h1>
            </div>
            <div id={classes.box2}>
                <p id={classes.dishes}>Biryani, BBQ, Kebab, North Indian, Desserts</p>
            </div>
            <div id={classes.box3}>
                <p id={classes.address}>Bargarh, Bhubaneswar</p>
            </div>
            <div id={classes.box4}>
                <p id={classes.open}><span id={classes.openred}>Open now -</span> 9AM - 9PM (Today)</p>
            </div>
            <div id={classes.box5}>
                <div id={classes.box5button}>Direction</div>
                <div id={classes.box5button}>Bookmark</div>
                <div id={classes.box5button}>Share</div>
            </div>
            <div id={classes.box6}>
                <div id={classes.box6one}>Review & Rating</div>
                <div id={classes.box6two}>
                    <img id={classes.image}src={star}/>
                    <div>4.2</div>
                </div>
                <div id={classes.box6three}>7,613 Rating & 1,587 Reviews</div>
            </div>
        </Card>
    );
}
export default About;
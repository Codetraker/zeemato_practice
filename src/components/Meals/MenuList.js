import Card from '../UI/Card';
import classes from './MenuList.module.css';
import DishDetails from './MenuSingle/DishDetail';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Mini Chicken Biryani',
        description: "Serves-1 A delightful preparation of richly flavored aromatic rice layered with marinated chicken pieces in a delicate blend of whole spices, it's served with a complimentary portion of Raita & Angoori gulab Jamun [4 Pcs].",
        price: 249.99,
    },
    {
        id: 'm2',
        name: 'Chicken Biryani',
        description: "Serves (1-2) Rich flavored aromatic rice layered with marinated chicken pieces in a delicate blend of whole spices served with Raita. (Image for illustration purposes only)",
        price: 320.00,
    },
    {
        id: 'm3',
        name: 'Jeera Rice',
        description: 'Fragrant rice dish tempered with aromatic cumin seeds',
        price: 159.99,
    },
    {
        id: 'm4',
        name: 'Kebab & Biryani Combo- Chicken',
        description: "Amazing combo of Chicken Biryani and 4 Pcs of succulent Chicken Tikka Kebab. Good to go for a Light Eater. Served with Raita & 4 Pcs Angoori Gulab Jamun. (Image for illustration purposes only)",
        price: 369.99,
    },
    {
        id: 'm5',
        name: 'Steamed Basmati Rice',
        description: 'Steamed & flavourful Basmati rice, cooked to absolute perfection.',
        price: 109.99,
    },
    {
        id: 'm6',
        name: 'Mini Veg Biryani',
        description: "Mini version of our vegetarian Treat, just for you! Indulge in our Veg Biryani made with exotic vegetables and premium spices all layered with aromatic basmati, served with raita and Angoori gulab jamun[4 Pcs]. (Image for illustration purposes only)",
        price: 229.99,
    },
    {
        id: 'm7',
        name: 'Veg Biryani',
        description: "Serves (1-2) Cooked in traditional dum style using aromatic whole spices farm fresh vegetables and pure basmati rice served with Raita. (Image for illustration purposes only)",
        price: 269.99,
    },
  ];
const MenuList = props => {
    const menulist = DUMMY_MEALS.map((meal)=>(
        <DishDetails 
            key={meal.id} 
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));
    return (
        <>
            <Card className={classes.tp}>Rice & Biryani</Card>
            <section className={classes.meals}>
                <Card className={classes.mealsCard}>
                    <ul>{menulist}</ul>
                </Card>
            </section>
        </>
    );
}
export default MenuList;
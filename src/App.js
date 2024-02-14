import './App.css';
import About from './components/Layout/AboutBar/About';
import FooterBar from './components/Layout/FooterBar/FooterBar';
import Header from './components/Layout/Header';
import MealHeader from './components/Layout/MealHeader/MealHeader';
import Meals from './components/Meals/Meals';


function App() {
  return (
    <>
      <Header />
      <About />
      <MealHeader />
      <Meals />
      <FooterBar />
    </>
  );
}

export default App;

import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import PizzaBlockSkeleton from './components/PizzaBlock/PizzaBlockSkeleton';

function App() {
  let [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async function fetchItems() {
      try {
        const response = await fetch('https://62c808dc8c90491c2cacf1b9.mockapi.io/items');
        const data = await response.json();
        setItems((items) => (items = data));
        setIsLoading((isLoading) => (isLoading = !isLoading));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index} />)
              : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

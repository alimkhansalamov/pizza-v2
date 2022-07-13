import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';

const Home = () => {
  // const sorts = ['популярности', 'цене', 'алфавиту'];

  const sortList = [
    { name: 'популярности ↑', sortProperty: 'rating' },
    { name: 'популярности ↓', sortProperty: '-rating' },
    { name: 'цене ↑', sortProperty: 'price' },
    { name: 'цене ↓', sortProperty: '-price' },
    { name: 'алфавиту ↑', sortProperty: 'alphabet' },
    { name: 'алфавиту ↓', sortProperty: '-alphabet' },
  ];

  let [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState(sortList[0].name);

  React.useEffect(() => {
    (async function fetchItems() {
      setIsLoading(true);
      try {
        const response = await fetch('https://62c808dc8c90491c2cacf1b9.mockapi.io/items');
        const data = await response.json();
        setItems((items) => (items = data));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
    window.scrollTo(0, 0);
  }, [activeCategory, activeSort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={(index) => setActiveCategory(index)}
        />
        <Sort
          sortList={sortList}
          // sorts={sorts}
          activeSort={activeSort}
          setActiveSort={(sort) => setActiveSort(sort)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index} />)
          : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;

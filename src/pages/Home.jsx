import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';

const Home = () => {
  let [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState('Все');
  const [activeSort, setActiveSort] = React.useState({
    name: 'популярности↑',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);
    const order = activeSort.sortProperty.includes('-') ? 'desc' : 'asc';
    const sortBy = activeSort.sortProperty.replace('-', '');
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    fetch(
      `https://62c808dc8c90491c2cacf1b9.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [activeCategory, activeSort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          currentCategory={activeCategory}
          changeCurrentCategory={(category) => setActiveCategory(category)}
        />
        <Sort currentSort={activeSort} changeCurrentSort={(sortObj) => setActiveSort(sortObj)} />
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

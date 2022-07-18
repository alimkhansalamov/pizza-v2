import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import Pagination from '../components/Pagination';

const Home = ({ searchValue }) => {
  let [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState({
    name: 'популярности↑',
    sortProperty: 'rating',
  });
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);
    const order = activeSort.sortProperty.includes('-') ? 'desc' : 'asc';
    const sortBy = activeSort.sortProperty.replace('-', '');
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://62c808dc8c90491c2cacf1b9.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
        console.log(items);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [activeCategory, activeSort, searchValue, currentPage]);
  const skeleton = [...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index} />);
  const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          currentCategory={activeCategory}
          changeCurrentCategory={(categoryIndex) => setActiveCategory(categoryIndex)}
        />
        <Sort currentSort={activeSort} changeCurrentSort={(i) => setActiveSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>

      <Pagination currentPage={currentPage} onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;

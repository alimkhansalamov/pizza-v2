import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import axios from 'axios';
import Pagination from '../components/Pagination';
import { SearchContext } from './../App';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';
const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    setIsLoading(true);
    const order = sortType.includes('-') ? 'desc' : 'asc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://62c808dc8c90491c2cacf1b9.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const skeleton = [...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index} />);
  const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories currentCategory={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>

      <Pagination currentPage={currentPage} onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;

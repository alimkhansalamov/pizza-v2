import React from 'react';

function Categories({ currentCategory, changeCurrentCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const handleCurrentCategory = (index) => {
    changeCurrentCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCurrentCategory(category)}
            className={currentCategory === category ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

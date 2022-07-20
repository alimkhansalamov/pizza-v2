import React from 'react';

function Categories({ currentCategory, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const handleCurrentCategory = (id) => {
    onChangeCategory(id);
    console.log();
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((category, id) => (
          <li
            key={id}
            onClick={() => handleCurrentCategory(id)}
            className={currentCategory === id ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

import React from 'react';

function Categories({ currentCategory, changeCurrentCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const handleCurrentCategory = (category) => {
    changeCurrentCategory(category);
  };
  console.log(currentCategory);

  return (
    <div className="categories">
      <ul>
        {categories.map((category, categoryIndex) => (
          <li
            key={categoryIndex}
            onClick={() => handleCurrentCategory(categoryIndex)}
            className={currentCategory === categoryIndex ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

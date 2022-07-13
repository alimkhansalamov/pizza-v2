import React from 'react';

function Categories({ activeCategory, setActiveCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const handleActiveIndex = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((e, index) => (
          <li
            key={index}
            onClick={() => handleActiveIndex(index)}
            className={activeCategory === index ? 'active' : ''}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

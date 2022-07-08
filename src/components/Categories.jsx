import React from 'react';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((e, index) => (
          <li
            key={index}
            onClick={() => handleActiveIndex(index)}
            className={activeIndex === index ? 'active' : ''}>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

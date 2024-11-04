import { useState } from 'react';
import { menuDishes } from '../../data.ts';
import { type Categories, AllCategories } from '../../types.ts';
import { MenuItem } from './MenuItem.tsx';
import { MenuList } from './MenuList.tsx';
import { Filter } from './Filter.tsx';

const categories: Categories[] = ['dish', 'drink', 'dessert'];

export const MenuContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories);

  function handleChangeCateg(category: AllCategories) {
    if (category === 'all') {
      if (selectedCategory.length < categories.length)
        setSelectedCategory(categories);
      return;
    }

    if (!selectedCategory.includes(category) || selectedCategory.length > 1) {
      setSelectedCategory([category]);
    }
  }

  return (
    <>
      <div className="flex justify-between items-center flex-wrap mt-20 gap-6 pb-14">
        <h2 className="font-merry font-light text-3xl xl:text-5xl">Cardápio</h2>
        <Filter
          onChangeCateg={handleChangeCateg}
          currentCateg={selectedCategory}
        />
      </div>
      {selectedCategory.map(category => (
        <MenuList key={category} category={category}>
          {menuDishes
            .filter(food => food.category === category)
            .map(dish => (
              <MenuItem
                key={dish.id}
                image={dish.image}
                name={dish.name}
                price={dish.price}
                alt={dish.alt}
                id={dish.id}
              />
            ))}
        </MenuList>
      ))}
    </>
  );
};

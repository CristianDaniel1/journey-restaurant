import { Categories, type AllCategories } from '../../types.ts';
import { allCategories } from '../../data.ts';
import { FunnelIcon } from '../icons/FunnelIcon.tsx';
import { FilterItem } from './FilterItem.tsx';

interface FilterProps {
  onChangeCateg: (category: AllCategories) => void;
  currentCateg: Categories[];
}

export const Filter = ({ onChangeCateg, currentCateg }: FilterProps) => {
  function hnadleSelectCateg(categ: AllCategories) {
    onChangeCateg(categ);
  }

  return (
    <div className="filter relative">
      <button className="flex items-center justify-center border-2 gap-3 px-6 py-3 text-primary border-primary uppercase font-bold tracking-wider text-sm hover:text-white duration-200 w-44">
        <FunnelIcon />
        Filtrar
      </button>
      <ul className="filter-list w-full duration-300 bg-neutral-900 px-2 py-4 absolute bottom-0 translate-y-full left-0 sm:right-0 z-10 shadow-lg">
        {allCategories.map(item => (
          <FilterItem
            key={item.categ}
            currentCateg={currentCateg}
            categ={item.categ}
            onSelectCateg={hnadleSelectCateg}
            label={item.label}
          />
        ))}
      </ul>
    </div>
  );
};

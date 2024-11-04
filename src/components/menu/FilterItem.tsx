import { AllCategories } from '../../types.ts';

interface FilterItemProps {
  currentCateg: AllCategories[];
  onSelectCateg: (categ: AllCategories) => void;
  categ: AllCategories;
  label: string;
}

export const FilterItem = ({
  currentCateg,
  onSelectCateg,
  categ,
  label,
}: FilterItemProps) => {
  const categLentghOne = currentCateg.length === 1;
  let classes = '';

  if (
    (categLentghOne && currentCateg.includes(categ)) ||
    (!categLentghOne && categ === 'all')
  )
    classes = 'bg-black text-primary';

  return (
    <li>
      <button
        className={`px-8 py-3 hover:bg-black focus-visible:bg-black w-full hover:text-primary focus-visible:text-primary duration-200 ${classes}`}
        onClick={() => onSelectCateg(categ)}
      >
        {label}
      </button>
    </li>
  );
};

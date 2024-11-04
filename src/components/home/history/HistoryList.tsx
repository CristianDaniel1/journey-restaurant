import { BookIcon } from '../../icons/BookIcon.tsx';
import { ChefIcon } from '../../icons/ChefIcon.tsx';
import { EyeIcon } from '../../icons/EyeIcon.tsx';
import { HandHeartIcon } from '../../icons/HandHeartIcon.tsx';
import { HistoryItem } from './HistoryItem.tsx';

export const HistoryList = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 gap-6">
      <HistoryItem
        title="Fundado em 1995"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut
          sint quasi deleniti nam dolor doloribus."
        className="md:col-span-6"
      >
        <BookIcon className="size-10 text-primary" />
      </HistoryItem>
      <HistoryItem
        title="Missão"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut
          sint quasi deleniti nam dolor doloribus."
        className="md:col-span-4"
      >
        <ChefIcon className="size-10 text-primary" />
      </HistoryItem>
      <HistoryItem
        title="Visão"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut
          sint quasi deleniti nam dolor doloribus."
        className="md:col-span-4"
      >
        <EyeIcon className="size-10 text-primary" />
      </HistoryItem>
      <HistoryItem
        title="Nossos Valores"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut
        sint quasi deleniti nam dolor doloribus."
        className="md:col-span-6"
      >
        <HandHeartIcon className="size-10 text-primary" />
      </HistoryItem>
    </ul>
  );
};

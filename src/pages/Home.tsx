import { FoodOptions } from '../components/home/FoodOptions.tsx';
import { Hero } from '../components/home/Hero.tsx';
import { History } from '../components/home/history/History.tsx';
import { JoinUs } from '../components/home/joinUs/JoinUs.tsx';
import { PreviewMenu } from '../components/home/PreviewMenu.tsx';
import { News } from '../components/home/News.tsx';

export const Home = () => {
  return (
    <>
      <Hero />
      <News />
      <FoodOptions />
      <History />
      <PreviewMenu />
      <JoinUs />
    </>
  );
};

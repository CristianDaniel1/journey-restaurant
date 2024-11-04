import historyImg from '../../../assets/others/cozinha.jpg';
import { HistoryList } from './HistoryList.tsx';

export const History = () => {
  return (
    <section className="relative" id="historia">
      <div className="w-full h-full absolute top-0 left-0 -z-10">
        <img
          src={historyImg}
          alt="Chefs de cozinha"
          className="w-full brightness-[0.6] object-cover h-full"
        />
      </div>
      <div className="max-container padding-x padding-y text-center md:text-left">
        <p className="uppercase text-sm tracking-wider text-primary font-semibold pb-6">
          Nossa história
        </p>
        <h2 className="font-merry text-3xl xl:text-5xl pb-14 font-light">
          Nossa Jornada
        </h2>
        <p className="pb-14 max-w-xl mx-auto md:mx-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, quos.
          Distinctio quia, iure voluptatibus error possimus quas nesciunt quam
          obcaecati sint quasi! Corporis debitis ad sed quae sequi. Molestias,
          eveniet.
        </p>
        <HistoryList />
      </div>
    </section>
  );
};

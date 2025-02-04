import { Options } from '../Options.tsx';

export const FoodOptions = () => {
  return (
    <section className="bg-background/70" id="categorias">
      <div className="max-container padding-x padding-y flex flex-col items-center">
        <p className="uppercase text-sm tracking-wider text-primary font-semibold pb-6">
          Variedade de opções
        </p>
        <h2 className="text-3xl leading-tight xl:text-5xl font-merry text-center pb-8 font-light">
          Escolha no nosso cardápio
        </h2>
        <p className="text-center max-w-xl pb-10 sm:pb-12 xl:pb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo
          recusandae velit, perferendis alias, similique reprehenderit et
          impedit excepturi, molestias doloribus assumenda error obcaecati
          corporis veritatis!
        </p>
        <Options />
      </div>
    </section>
  );
};

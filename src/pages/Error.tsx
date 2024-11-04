import { Footer } from '../components/footer/Footer.tsx';
import { Header } from '../components/Header.tsx';

export const Error = () => {
  return (
    <>
      <Header />
      <div className="pt-32 md:pt-48 min-h-[80vh] bg-neutral-900">
        <div className="text-center max-container padding-x pb-20">
          <p className="uppercase text-sm tracking-wider text-primary font-semibold mb-6">
            Epa, algo não está certo
          </p>
          <h2 className="text-3xl font-merry xl:text-5xl mb-12">
            Ops! Ocorreu um erro!
          </h2>
          <p className="text-2xl text-neutral-300 pb-12 max-w-4xl mx-auto">
            Não foi possível encontrar esta página, cheque se a URL está correta
            ou tente novamente mais tarde.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

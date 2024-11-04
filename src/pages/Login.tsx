import { Link } from 'react-router-dom';
import loginImg from '../assets/drinks/wine.jpg';

import { Button } from '../components/ui/Button.tsx';
import { Input } from '../components/ui/Input.tsx';

export const Login = () => {
  return (
    <section className="padding-y relative">
      <div className="absolute top-0 left-0 bottom-0 h-full w-full overflow-hidden flex -z-10 aspect-video">
        <img
          src={loginImg}
          alt="taças de vinho em cima de uma mesa"
          className="object-cover w-full h-full brightness-50 aspect-video"
        />
      </div>
      <div className="max-container padding-x flex items-center pt-10 lg:pt-20">
        <form className="px-14 py-16 bg-background md:w-[40rem] mx-auto rounded-md animate-[slide-up_0.3s_ease-in-out_backwards]">
          <p className="uppercase text-sm tracking-wider text-primary font-semibold pb-6 text-center">
            login
          </p>
          <h2 className="text-4xl pb-6 font-merry text-center">
            Entre na sua conta
          </h2>
          <p className="text-neutral-300 pb-10 text-center">
            Faça login ou registre-se para obter descontos na compra!
          </p>
          <Input
            id="email"
            label="Seu email"
            type="email"
            placeholder="Digite o seu e-mail"
          />
          <Input
            id="password"
            label="Sua senha"
            placeholder="Digite a sua senha"
            type="password"
          />
          <Button className="uppercase my-6 w-full" bgColor>
            Entrar
          </Button>
          <p className="text-center mt-6">
            Ainda não tem uma conta?{' '}
            <Link to="/registro" className="text-primary font-semibold">
              Registre-se
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

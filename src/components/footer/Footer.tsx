import { FooterItem } from './FooterItem.tsx';
import { FooterList } from './FooterList.tsx';

export const Footer = () => {
  return (
    <footer className="pt-[4.5rem] lg:pt-[6.25rem]">
      <div className="max-container padding-x text-neutral-300">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-between gap-x-10 pb-[4.5rem] lg:pb-[6.25rem] gap-y-4 flex-wrap">
          <FooterList title="Sobre Journey">
            <FooterItem to="#" label="Início" />
            <FooterItem to="#" label="Novidades" />
            <FooterItem to="#" label="Opções no cardápio" />
            <FooterItem to="#" label="Nossa história" />
          </FooterList>
          <FooterList title="Cardápio">
            <FooterItem to="#" label="Cardápio completo" />
            <FooterItem to="#" label="Pratos" />
            <FooterItem to="#" label="Bebidas" />
            <FooterItem to="#" label="Sobremesas" />
          </FooterList>
          <FooterList title="Redes sociais">
            <FooterItem to="#" label="Instagram" />
            <FooterItem to="#" label="Facebook" />
            <FooterItem to="#" label="Twitter" />
            <FooterItem to="#" label="WhattsApp" />
          </FooterList>
          <div className="text-white font-merry text-3xl lg:text-4xl uppercase font-light tracking-wide self-end pt-6 col-span-2 md:col-span-1">
            Journey
          </div>
        </div>
      </div>
      <p className="text-center bg-neutral-900 pt-14 pb-14 text-neutral-300">
        &copy; 2024 Journey. Desenvolvido por{' '}
        <span className="text-primary">Cristian Daniel</span>
      </p>
    </footer>
  );
};

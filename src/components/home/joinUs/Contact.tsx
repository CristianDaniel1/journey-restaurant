import { ContactItem } from './ContactItem';

export const Contact = () => {
  return (
    <div className="md:w-1/2 w-full">
      <h4 className="uppercase text-sm tracking-wider text-primary font-semibold pb-4 pl-4">
        Contatos
      </h4>
      <ul className="flex flex-col gap-4">
        <ContactItem title="email" contact="journey.restaurant@journey.com" />
        <ContactItem title="telefone" contact="11 4002-8922" />
        <ContactItem
          title="Horários"
          extraText="Segunda à sábado"
          contact="8h até 13h e 14h até 22h"
        />
      </ul>
    </div>
  );
};

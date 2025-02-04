interface ContactItemProps {
  title: string;
  contact: string;
  extraText?: string;
}

export const ContactItem = ({
  title,
  contact,
  extraText,
}: ContactItemProps) => {
  return (
    <li className="p-4 bg-background">
      <p className="uppercase text-sm tracking-wider font-semibold pb-4">
        {title}
      </p>
      {extraText && <p>{extraText}</p>}
      <p className="text-neutral-300">{contact}</p>
    </li>
  );
};

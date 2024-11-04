interface FooterItemProps {
  to: string;
  label: string;
}

export const FooterItem = ({ to, label }: FooterItemProps) => {
  return (
    <li>
      <a
        href={to}
        className="hover:text-primary focus:text-primary duration-200"
      >
        {label}
      </a>
    </li>
  );
};

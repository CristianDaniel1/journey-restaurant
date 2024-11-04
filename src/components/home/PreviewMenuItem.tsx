import { Link } from 'react-router-dom';
import { type PreviewMenu } from '../../types.ts';
import { currencyFormatter } from '../../utils/formatting.ts';

interface MenuItemProps extends PreviewMenu {
  id: string;
}

export const PreviewMenuItem = ({
  id,
  name,
  price,
  image,
  description,
}: MenuItemProps) => {
  return (
    <li className="bg-neutral-900 shadow rounded-lg overflow-clip food hover:bg-background duration-200">
      <Link to={`cardapio/${id}`} className="grid grid-cols-1 sm:grid-cols-5 ">
        <div className="col-span-2 h-full overflow-clip">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="object-cover w-full h-full aspect-square img-food"
          />
        </div>
        <div className="text-left col-span-3 p-4 md:p-6">
          <div>
            <h3 className="font-merry pb-2">{name}</h3>
            <div className="text-primary-light font-medium">
              {currencyFormatter.format(price)}
            </div>
          </div>
          <p className="text-neutral-300 py-4 text-sm lg:text-base">
            {description}
          </p>
        </div>
      </Link>
    </li>
  );
};

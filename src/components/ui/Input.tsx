import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className="py-4">
      <label htmlFor={id} className="block font-medium pb-3 text-neutral-300">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required
        {...props}
        className="bg-neutral-800 outline-none px-2 py-3 w-full focus:outline focus:outline-neutral-600 rounded"
      />
    </div>
  );
};

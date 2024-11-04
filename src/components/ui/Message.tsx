export const Message = ({ message }: { message: string }) => {
  return (
    <p className="text-sm font-semibold text-primary p-3 bg-neutral-900 border border-primary absolute top-0 left-1/2 -translate-x-1/2 message uppercase">
      {message}
    </p>
  );
};

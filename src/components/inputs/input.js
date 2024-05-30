export const Input = ({
  type,
  className,
  id,
  name,
  value,
  onChange,
  required,
}) => {
  return (
    <input
      type={type}
      className={className}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

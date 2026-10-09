import { btnStyles } from ".";

export default function Button({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) {
  const buttonColor = `btn-${variant}`;
  const buttonSize = `btn-size-${size}`;
  const combinedClasses = [
    btnStyles.btn,
    btnStyles[buttonSize],
    btnStyles[buttonColor],
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
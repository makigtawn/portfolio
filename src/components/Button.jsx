export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors px-6 py-3 border-2 border-black bg-black text-white hover:bg-white hover:text-black";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size] || ""} ${className}`;
  const Component = href ? "a" : "button";

  return (
    <Component href={href} className={classes} {...props}>
      {children}
    </Component>
  );
};

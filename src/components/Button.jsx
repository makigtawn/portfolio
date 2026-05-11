export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium no-underline transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  const Component = href ? "a" : "button";

  return (
    <Component href={href} className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};

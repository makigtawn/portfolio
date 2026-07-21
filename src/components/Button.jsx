import { Link } from "react-router-dom";

export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  href,
  to,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors px-6 py-3 border-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    primary: "border-black bg-black text-white hover:bg-white hover:text-black",
    destructive: "border-danger bg-danger text-danger-foreground hover:bg-transparent hover:text-danger",
    ghost: "border-border bg-transparent text-foreground hover:bg-surface",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant] || ""} ${sizeClasses[size] || ""} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  const Component = href ? "a" : "button";

  return (
    <Component href={href} className={classes} {...props}>
      {children}
    </Component>
  );
};

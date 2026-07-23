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
  const baseClasses = "inline-flex items-center justify-center font-mono uppercase tracking-[.12em] transition-colors px-6 py-3 border disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    primary: "border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary",
    destructive: "border-danger bg-transparent text-danger hover:bg-danger hover:text-danger-foreground",
    ghost: "border-border bg-transparent text-foreground hover:border-amber-dim hover:text-primary",
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

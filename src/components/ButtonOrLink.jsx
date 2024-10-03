import Link from 'next/link';

const ButtonOrLink = ({
  isLink,
  href,
  children,
  color = 'default',
  ...props
}) => {
  const className = `btn bg-${color}`;

  if (isLink) {
    return (
      <Link href={href} {...props}>
        <a className={className}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default ButtonOrLink;

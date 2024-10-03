import Link from 'next/link';

const ButtonOrLink = ({ isLink, href, children, ...props }) => {
  const className = 'custom-button'; // Defina suas classes e estilos comuns aqui

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

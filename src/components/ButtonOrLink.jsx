import Link from 'next/link';
import clsx from 'clsx';
/* components */
import ArrowSvg from './layout/ArrowSvg';

const ButtonOrLink = ({
  href,
  children,
  arrowClass = '',
  className: additionalClass,
  ...props
}) => {
  const className = clsx(
    'btn relative gap-x-2 inline-flex items-center group w-fit bg-blue-500',
    additionalClass
  );

  const arrowClasses = clsx(
    'translate-y-[300%] group-hover:-translate-y-0 transition-all duration-500 h-4 w-4 fill-current',
    arrowClass
  );

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
        <ArrowSvg className={arrowClasses} />
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
      <ArrowSvg className={arrowClasses} />
    </button>
  );
};

export default ButtonOrLink;

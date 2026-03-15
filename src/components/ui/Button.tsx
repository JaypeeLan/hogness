import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';

type Variant = 'primary' | 'outline' | 'ghost' | 'white' | 'white-outline' | 'dark';
type Size    = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type AsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never };
type AsLink   = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'link'; href: string };
type ButtonProps = AsButton | AsLink;

export default function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  const cls = [styles.btn, styles[`v-${variant}`], styles[`s-${size}`], className].filter(Boolean).join(' ');

  if (props.as === 'link') {
    const { as: _, href, ...rest } = props as AsLink;
    return (
      <Link href={href} className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  const { as: _, ...rest } = props as AsButton;
  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

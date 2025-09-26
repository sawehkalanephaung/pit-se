import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardedRef,
  ReactElement,
  forwardRef,
} from 'react';
import { classNames } from '../../utils/class_names';

type ButtonVariant = 'primary' | 'secondary' | 'text';
type ButtonElement = HTMLButtonElement | HTMLAnchorElement;

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export type ButtonProps =
  | ({ as: 'a'; variant?: ButtonVariant } & AnchorProps)
  | ({ as?: 'button'; variant?: ButtonVariant } & NativeButtonProps);

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'rounded-full bg-red-500 px-5 py-2 text-white hover:bg-red-600 focus-visible:outline-red-500 disabled:bg-red-300 disabled:text-red-100',
  secondary:
    'rounded-full border border-blue-500 px-5 py-2 text-blue-600 hover:bg-blue-50 focus-visible:outline-blue-500 disabled:border-blue-200 disabled:text-blue-300 disabled:hover:bg-transparent',
  text:
    'px-0 text-blue-600 underline-offset-4 hover:text-blue-700 hover:underline focus-visible:outline-blue-500 disabled:text-blue-300 disabled:hover:no-underline',
};

function renderButton(
  props: ButtonProps,
  ref: ForwardedRef<ButtonElement>
): ReactElement {
  const { className, variant = 'primary', as = 'button', children, ...rest } = props;

  const sharedClasses = classNames(
    'inline-flex items-center justify-center gap-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed',
    variantClasses[variant],
    className
  );

  if (as === 'a') {
    const anchorProps = rest as AnchorProps;
    return (
      <a ref={ref as ForwardedRef<HTMLAnchorElement>} className={sharedClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = 'button', ...nativeRest } = rest as NativeButtonProps;
  return (
    <button
      ref={ref as ForwardedRef<HTMLButtonElement>}
      className={sharedClasses}
      type={type}
      {...nativeRest}
    >
      {children}
    </button>
  );
}

export const Button = forwardRef<ButtonElement, ButtonProps>(renderButton);

Button.displayName = 'Button';

export default Button;

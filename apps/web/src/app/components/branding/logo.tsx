import { ImgHTMLAttributes } from 'react';
import { classNames } from '../../utils/class_names';

import pitMark from '../../../assets/photos/pit-logo.png';
import pitFull from '../../../assets/photos/tmk-logo.png';

type LogoVariant = 'mark' | 'full';

const logoSources: Record<LogoVariant, string> = {
  mark: pitMark,
  full: pitFull,
};

export interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: LogoVariant;
}

export function Logo({ variant = 'mark', alt = 'PIT Logo', className, ...props }: LogoProps) {
  return (
    <img
      src={logoSources[variant]}
      alt={alt}
      className={classNames('h-10 w-auto', className)}
      {...props}
    />
  );
}

export default Logo;

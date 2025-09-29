import { ButtonHTMLAttributes } from 'react';
import { classNames } from '../../utils/class_names';

export interface DonationAmountOptionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  amount: number;
  active?: boolean;
}

export function DonationAmountOption({
  amount,
  active = false,
  className,
  ...props
}: DonationAmountOptionProps) {
  return (
    <button
      type="button"
      className={classNames(
        'w-full rounded-2xl border px-6 py-4 text-left text-lg font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
        active
          ? 'border-blue-500 bg-blue-50 text-blue-600 shadow-[0_12px_24px_rgba(37,99,235,0.18)]'
          : 'border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50/60',
        className
      )}
      aria-pressed={active}
      {...props}
    >
      <span className="flex items-baseline gap-1">
        <span className="text-base font-medium text-slate-500">$</span>
        <span>{amount}</span>
      </span>
    </button>
  );
}

export default DonationAmountOption;

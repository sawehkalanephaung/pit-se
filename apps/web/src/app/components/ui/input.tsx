import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { classNames } from '../../utils/class_names';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    return (
      <div className="space-y-1 text-sm">
        {label && (
          <label
            className="block font-medium text-slate-700"
            htmlFor={inputId}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={[helperId, errorId].filter(Boolean).join(' ') || undefined}
          className={classNames(
            'block w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-50',
            error ? 'border-red-400 focus:border-red-500 focus:ring-red-400/30' : undefined,
            className
          )}
          {...props}
        />
        {helperText && !error && (
          <p id={helperId} className="text-xs text-slate-500">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-xs text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

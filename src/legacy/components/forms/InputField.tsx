import React, { forwardRef } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, required, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          className={`
            w-full px-4 py-3 rounded-[13px] border border-[#0112201A] 
            focus:ring-2 focus:ring-[#6366F1] focus:border-none 
            transition-colors duration-200
            placeholder:text-gray-400
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className || ''}
          `}
          {...props}
        />
        {error && (
          <p 
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            className="mt-1 text-sm text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
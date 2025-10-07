import React, { forwardRef } from 'react';

interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ label, error, required, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            style={{ fontFamily: "Nunito, sans-serif" }}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          style={{ fontFamily: "Nunito, sans-serif" }}
          className={`
            w-full px-4 py-3 rounded-lg border border-[#0112201A] 
            focus:ring-2 focus:ring-[#6366F1] focus:border-none 
            transition-colors duration-200
            placeholder:text-gray-400
            resize-vertical
            min-h-[120px]
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className || ''}
          `}
          {...props}
        />
        {error && (
          <p 
            style={{ fontFamily: "Nunito, sans-serif" }}
            className="mt-1 text-sm text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextAreaField.displayName = 'TextAreaField';
import React from 'react';

export interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  error?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  label,
  required,
  error
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#7E878E] mb-3">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="flex flex-wrap gap-6">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={`${name}-${option.value}`}
              name={name}
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="h-4 w-4 text-[#3931C5] focus:ring-[#3931C5] ring-[#3931C5] border-gray-300 cursor-pointer"
            />
            <label
              htmlFor={`${name}-${option.value}`}
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              className="ml-2 text-sm font-medium text-[#7E878E] cursor-pointer"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
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
};
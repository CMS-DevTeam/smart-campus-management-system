import React from 'react';

type InputFieldProps = {
  label?: string;
  name?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  required?: boolean;
  placeholder?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type,
  required = false,
  placeholder
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;

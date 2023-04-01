import React from 'react';

interface Props {
  label: string;
  id: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  multiline?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Input: React.FC<Props> = ({
  label,
  type,
  id,
  required = false,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="relative bg-slate-300 dark:bg-slate-700 rounded-md overflow-hidden flex flex-row items-center w-full">
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        placeholder=" "
        className="block px-4 pt-6 pb-2 w-full text-md text-black dark:text-white bg-inherit appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
        required={required}
      />
      <label
        htmlFor={id}
        className="
            absolute 
            text-md
          dark:text-zinc-400
            duration-150 
            transform 
            -translate-y-3 
            scale-75 
            top-4 
            z-10 
            origin-[0] 
            left-4
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75
            peer-focus:-translate-y-3
            select-none
          "
      >
        {label}
      </label>
    </div>
  );
};

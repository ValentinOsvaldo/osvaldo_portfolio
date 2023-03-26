import React from 'react';

interface Props {
  label: string;
  id: string;
  type?: React.HTMLInputTypeAttribute;
  multiline?: boolean;
  required?: boolean
}

export const Input: React.FC<Props> = ({ label, type, id, required = false }) => {
  return (
    <div className="relative bg-slate-700 rounded-md overflow-hidden flex flex-row items-center w-full">
      <input
        type={type}
        id={id}
        placeholder=" "
        className="block px-4 pt-6 pb-2 w-full text-md text-white bg-inherit appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
        required={required}
      />
      <label
        htmlFor={id}
        className="
            absolute 
            text-md
          text-zinc-400
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

import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
} from "react";

type InputProps = {
  placeholder?: string;
  icon?: () => React.JSX.Element;
  props?: unknown;
  type: HTMLInputTypeAttribute;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: HTMLInputTypeAttribute;
};

const Input = (props: InputProps) => {
  return (
    <div className="relative border border-red-500 rounded-full px-5">
      <input
        type={props.type}
        name={props.name}
        className="py-4 text-sm rounded-full w-full pr-10 focus:outline-none focus:bg-white focus:text-gray-900"
        placeholder={props?.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
      {props.icon && (
        <span className="absolute inset-y-0 right-0 flex items-center pl-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline rounded-full flex justify-center items-center w-[50px] h-[50px] bg-red-500 my-2 mr-1"
          >
            {props.icon()}
          </button>
        </span>
      )}
    </div>
  );
};

export default Input;

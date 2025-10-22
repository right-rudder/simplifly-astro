import { FaInfoCircle } from "react-icons/fa";

const InputCheckboxCard = ({
  empty,
  id,
  additionalClasses,
  checked,
  disabled,
  text,
  tooltipText,
  onChange,
}) => {
  if (empty) {
    return (
      <label
        className={`flex bg-gray-50 p-4 border border-gray-200 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md${additionalClasses ? " " + additionalClasses : ""}`}
      >
        <span className="mx-2 block">&nbsp;</span>
      </label>
    );
  } else {
    return (
      <label
        aria-label={text}
        className={`group/checkbox has-tooltip-container cursor-pointer flex bg-gray-50 p-4 transition-all duration-200 ease-in-out border border-gray-200 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-[input:checked]:relative has-[input:checked]:bg-sky-50 has-[input:checked]:border-sky-100 has-[input:disabled]:bg-gray-200 has-[input:disabled]:border-gray-300 has-[input:disabled]:cursor-not-allowed${additionalClasses ? " " + additionalClasses : ""}`}
      >
        <input
          id={id}
          type="checkbox"
          disabled={disabled}
          name={id}
          checked={!!checked}
          onChange={onChange}
          className="relative mt-0.5 size-4 shrink-0 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white transition-all duration-200 ease-in-out before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-sky-600 checked:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 disabled:border-gray-300 disabled:bg-gray-400 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden disabled:cursor-not-allowed"
        />
        <span
          className="mx-2 block text-sm font-medium text-gray-900 group-has-[input:checked]/checkbox:text-sky-900"
          dangerouslySetInnerHTML={{ __html: text }}
        ></span>
        {tooltipText && (
          <div className="ml-auto has-tooltip cursor-help">
            <FaInfoCircle className="size-[18px] text-gray-900" />
            <span
              className="tooltip !right-0 !left-0 !w-auto"
              dangerouslySetInnerHTML={{ __html: tooltipText }}
            ></span>
          </div>
        )}
      </label>
    );
  }
};

export default InputCheckboxCard;

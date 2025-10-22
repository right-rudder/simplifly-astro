import { FaInfoCircle } from "react-icons/fa";

const InputCheckboxToggle = ({ id, checked, disabled, text, tooltipText, onChange }) => {
  return (
    <div className="group/checkbox flex items-center gap-2">
      <div className={`relative inline-flex w-11 shrink-0 rounded-full bg-gray-400 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-sky-400 transition-colors duration-200 ease-in-out has-[input:checked]:bg-sky-400 has-[input:disabled]:bg-gray-300 has-focus-visible:outline-2`}>
        <span className={`size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[input:checked]/checkbox:translate-x-5`}></span>
        <input
          id={id}
          type="checkbox"
          disabled={disabled}
          name={id}
          checked={!!checked}
          onChange={onChange}
          className="absolute inset-0 appearance-none cursor-pointer focus:outline-hidden group-has-[input:disabled]/checkbox:cursor-not-allowed"
        />
      </div>

      <div className="has-tooltip-container text-sm flex gap-2 items-center">
        <label htmlFor={id} className="font-medium text-gray-900 cursor-pointer trainsition-all duration-200 ease-in-out group-has-[input:disabled]/checkbox:cursor-not-allowed group-has-[input:disabled]/checkbox:text-gray-400" dangerouslySetInnerHTML={{__html: text}}></label>
        {tooltipText && (
          <div className="has-tooltip cursor-help">
            <FaInfoCircle className="size-[18px] text-gray-900" />
            <span className="tooltip !-right-12 !-left-12 !w-auto" dangerouslySetInnerHTML={{__html: tooltipText}}></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputCheckboxToggle;

import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

const PriceCalculatorCheck = ({active, text}) => {
  return (<li
    class={`relative pl-8 flex flex-nowrap align-middle items-center ${active ? "text-green-600" : "text-red-600"}`}
  >
    <span class="font-semibold">
      <FaCheckCircle className={`absolute left-0 top-0 text-xl transition-all duration-300 ease-in-out ${active ? "opacity-100" : "opacity-0"}`} />
      <FaTimesCircle className={`absolute left-0 top-0 text-xl transition-all duration-300 ease-in-out ${active ? "opacity-0" : "opacity-100"}`} />
    </span>
    <span class="transition-colors duration-300 ease-in-out">
      {` ${text} `}
    </span>
  </li>);
};

export default PriceCalculatorCheck;
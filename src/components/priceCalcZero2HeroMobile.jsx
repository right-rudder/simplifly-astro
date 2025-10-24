import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import InputCheckboxCard from "./InputCheckboxCard.jsx";

import { data } from "../data/price-calculator.js";

const PriceCalcZero2HeroMobile = () => {
  // Create dynamic state for all checkboxes
  const initialState = {};

  [...data.courses.items, ...data.addOns.items].forEach((item) => {
    initialState[item.idMobile] = item.controlVar || false;
  });

  const [controls, setControls] = useState(initialState);
  const [total, setTotal] = useState(0);

  // Helper: Update total based on selected courses/add-ons
  useEffect(() => {
    let newTotal = 0;

    // Add selected course costs
    data.courses.items.forEach((course) => {
      if (controls[course.idMobile]) newTotal += course.cost;
    });

    // Add selected add-ons
    data.addOns.items.forEach((addon) => {
      if (controls[addon.idMobile]) newTotal += addon.cost;
    });

    setTotal(newTotal);
  }, [controls]);

  // Helper: toggle checkbox state
  const toggleControl = (idMobile) => {
    setControls((prev) => ({ ...prev, [idMobile]: !prev[idMobile] }));
  };

  // Generate text summary
  function getDescription() {
    const selectedCourses = data.courses.items
      .filter((course) => controls[course.idMobile])
      .map(
        (course) => `${course.simpleTitle}: $ ${course.cost.toLocaleString()}`,
      );

    const selectedAddOns = data.addOns.items
      .filter((addon) => controls[addon.idMobile])
      .map((addon) => `${addon.title}: $ ${addon.cost.toLocaleString()}`);

    return `${
      selectedCourses.length
        ? `Certificates and Ratings I want to obtain:\n${selectedCourses
            .map((i) => `• ${i}`)
            .join("\n")}`
        : ""
    }${
      selectedAddOns.length
        ? `\n\nRequested Add Ons:\n${selectedAddOns
            .map((i) => `• ${i}`)
            .join("\n")}`
        : ""
    }${
      selectedCourses.length || selectedAddOns.length
        ? `\n\nTotal: $${total.toLocaleString()}.`
        : ""
    }`.trim();
  }

  return (
    <section className="overflow-hidden block md:hidden">
      <div className="bg-gray-50 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto w-full">
            <h3 className="section-upper">{data.subTitle}</h3>
            <h2 className="section-title">{data.title}</h2>
          </div>

          <div className="relative mt-16 group w-full bg-white border border-gray-300 rounded-2xl p-5 pt-12">
            <h3 className="text-5xl text-gray-800 font-bold text-center font-title">
              {data.total.title}
            </h3>
            <p className="italic mt-2 mb-6 text-center text-gray-700">
              {data.total.subTitle}
            </p>

            <div className="relative grid grid-cols-1 gap-5">
              <fieldset>
                <legend className="mb-4 text-xl font-title text-center w-full text-gray-800 font-semibold">
                  {data.courses.title}
                </legend>

                <div>
                  {data.courses.items.map((course) => (
                    <InputCheckboxCard
                      key={course.idMobile}
                      id={course.idMobile}
                      checked={controls[course.idMobile]}
                      text={course.title}
                      tooltipText={course.tooltip}
                      onChange={() => toggleControl(course.idMobile)}
                    />
                  ))}
                  <div className="text-gray-800 has-tooltip-container">
                    <h3 className="mt-8 text-5xl font-bold text-center font-title">
                      Total
                    </h3>
                    <div className="mt-2 mb-6 flex items-center justify-center gap-2">
                      <div className="flex items-center">
                        <div>
                          <span className="block text-3xl font-bold">$</span>
                        </div>
                        <span className="text-4xl font-bold leading-0">
                          {total.toLocaleString()}
                        </span>
                      </div>
                      {data.total.tooltip && (
                        <div className="has-tooltip cursor-help">
                          <FaInfoCircle className="size-6" />
                          <span
                            className="tooltip !right-0 !left-0 !w-auto"
                            dangerouslySetInnerHTML={{
                              __html: data.total.tooltip,
                            }}
                          ></span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="flex flex-col align-top w-full text-left">
                <legend className="mb-4 text-xl font-title text-center w-full text-gray-800 font-semibold">
                  {data.addOns.title}
                </legend>

                <div>
                  {data.addOns.items.map((addon) => (
                    <InputCheckboxCard
                      key={addon.idMobile}
                      id={addon.idMobile}
                      checked={controls[addon.idMobile]}
                      text={addon.title}
                      tooltipText={addon.tooltip}
                      onChange={() => toggleControl(addon.idMobile)}
                    />
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="w-3/4 h-0.5 mt-12 mb-8 mx-auto bg-gray-300 rounded-sm"></div>

            <div className="text-gray-800">
              <h3 className="mt-8 text-5xl font-bold text-center font-title">
                Total
              </h3>
              <div className="mt-2 mb-6 flex items-center justify-center gap-2">
                <div className="flex items-center">
                  <div>
                    <span className="block text-3xl font-bold">$</span>
                  </div>
                  <span className="text-4xl font-bold leading-0">
                    {total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-96 m-auto">
              <div className="mt-8 flex flex-col justify-center items-center align-middle gap-2">
                {data.ctas.map((item, index) => {
                  if (item.sendData) {
                    return (
                      <a
                        href={item.url}
                        key={index}
                        className="btn-white inline-flex justify-center items-center gap-2 w-full"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                        onClick={(e) => {
                          const description = getDescription();

                          if (description.length <= 0) return;

                          e.preventDefault();
                          const params = new URLSearchParams();

                          params.append("message", description);

                          window.location.href = `${item.url}?${params.toString()}`;
                        }}
                      ></a>
                    );
                  }

                  return (
                    <a
                      href={item.url}
                      className="btn-white inline-flex justify-center items-center gap-2 w-full"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalcZero2HeroMobile;

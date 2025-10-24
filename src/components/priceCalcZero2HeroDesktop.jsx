import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import PriceCalculatorCheck from "./priceCalculatorCheck.jsx";
import InputCheckboxCard from "./InputCheckboxCard.jsx";

import { data } from "../data/price-calculator.js";

const PriceCalcZero2HeroDesktop = () => {
  // Create dynamic state for all checkboxes
  const initialState = {};

  [
    ...data.coursesHeld.items,
    ...data.courses.items,
    ...data.addOns.items,
  ].forEach((item) => {
    initialState[item.id] = item.controlVar || false;
  });

  const [controls, setControls] = useState(initialState);
  const [total, setTotal] = useState(0);

  // Helper: Update total based on selected courses/add-ons
  useEffect(() => {
    let newTotal = 0;

    // Add selected course costs
    data.courses.items.forEach((course) => {
      if (controls[course.id]) newTotal += course.cost;
    });

    // Add selected add-ons
    data.addOns.items.forEach((addon) => {
      if (controls[addon.id]) newTotal += addon.cost;
    });

    setTotal(newTotal);
  }, [controls]);

  // Helper: toggle checkbox state
  const toggleControl = (id) => {
    setControls((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Handle "held" courses (disable matching "to obtain" courses)
  useEffect(() => {
    data.coursesHeld.items.forEach((heldItem, index) => {
      const matchingCourse = data.courses.items[index];

      if (!controls[matchingCourse.id]) return;

      if (matchingCourse && controls[heldItem.id]) {
        setControls((prev) => ({
          ...prev,
          [matchingCourse.id]: false,
        }));
      }
    });
  }, [controls]);

  // Generate text summary
  function getDescription() {
    const selectedCourses = data.courses.items
      .filter((course) => controls[course.id])
      .map(
        (course) => `${course.simpleTitle}: $ ${course.cost.toLocaleString()}`,
      );

    const selectedAddOns = data.addOns.items
      .filter((addon) => controls[addon.id])
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
    <section className="overflow-hidden hidden md:block">
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto w-full lg:mx-0">
            <h3 className="section-upper">{data.subTitle}</h3>
            <h2 className="section-title">{data.title}</h2>
          </div>

          <div className="mt-12 m-auto flex items-center justify-center xl:w-full">
            {/* Left Column — Certificates Held */}
            <div className="relative group w-1/2 bg-white border border-gray-300 rounded-2xl">
              <div className="relative p-5 pt-12 pr-8 rounded-r-2xl lg:pl-10 lg:p-12">
                <div className="mt-2 flex justify-center gap-6 w-full">
                  <div className="grid grid-cols-1">
                    <fieldset>
                      <legend className="mb-2 mx-auto text-center text-xl font-title leading-tight text-gray-800 font-semibold">
                        {data.coursesHeld.title}
                      </legend>

                      <div>
                        {data.coursesHeld.items.map((item) => (
                          <InputCheckboxCard
                            key={item.id}
                            id={item.id}
                            checked={controls[item.id]}
                            text={item.title}
                            onChange={() => toggleControl(item.id)}
                          />
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>

            {/* Center — Total Summary */}
            <div className="relative z-10 min-h-[screen-1/2] m-0 bg-white border border-gray-300 rounded-2xl -mx-4 group w-3/5">
              <div className="relative space-y-6 p-8">
                <div className="max-w-none lg:p-8">
                  <h3 className="text-5xl text-gray-800 font-bold text-center font-title">
                    {data.total.title}
                  </h3>
                  <p className="italic mt-2 text-center text-gray-700">
                    {data.total.subTitle}
                  </p>
                  <div className="flex items-center justify-center gap-2 has-tooltip-container">
                    <div className="my-6 flex items-center">
                      <div>
                        <span className="block text-3xl text-gray-700 font-bold">
                          $
                        </span>
                      </div>
                      <span className="text-4xl text-gray-700 font-bold leading-0">
                        {total.toLocaleString()}
                      </span>
                    </div>

                    {data.total.tooltip && (
                      <div className="has-tooltip cursor-help">
                        <FaInfoCircle className="size-6 text-gray-700" />
                        <span
                          className="tooltip !right-0 !left-0 !w-auto"
                          dangerouslySetInnerHTML={{
                            __html: data.total.tooltip,
                          }}
                        ></span>
                      </div>
                    )}
                  </div>

                  <ul
                    role="list"
                    className="w-full px-3 flex flex-col gap-2 text-gray-800 text-sm mt-3 mb-8"
                  >
                    {data.courses.items.map((course) => (
                      <PriceCalculatorCheck
                        key={course.id}
                        active={controls[course.id]}
                        text={course.simpleTitle}
                      />
                    ))}
                  </ul>
                  <fieldset className="flex flex-col align-top w-full text-left">
                    <legend className="mb-2 text-xl font-title text-center w-full text-gray-800 font-semibold">
                      {data.addOns.title}
                    </legend>

                    <div>
                      {data.addOns.items.map((addon) => (
                        <InputCheckboxCard
                          key={addon.id}
                          id={addon.id}
                          checked={controls[addon.id]}
                          text={addon.title}
                          tooltipText={addon.tooltip}
                          onChange={() => toggleControl(addon.id)}
                        />
                      ))}
                    </div>
                  </fieldset>
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

            {/* Right Column — Courses to Obtain */}
            <div className="relative group bg-white border border-gray-300 rounded-2xl w-1/2">
              <div className="relative flex justify-center p-5 pt-12 pl-8 lg:pr-10 lg:p-12">
                <div>
                  <fieldset>
                    <legend className="mb-2 mx-auto text-center font-title leading-tight text-xl text-gray-800 font-semibold">
                      {data.courses.title}
                    </legend>

                    <div>
                      {data.courses.items.map((course, courseIndex) => {
                        // find if it's held (to disable)
                        const held = data.coursesHeld.items[courseIndex];

                        const isHeld = held && controls[held.id];

                        return (
                          <InputCheckboxCard
                            key={course.id}
                            id={course.id}
                            checked={controls[course.id]}
                            disabled={isHeld}
                            text={course.title}
                            tooltipText={course.tooltip}
                            onChange={() => toggleControl(course.id)}
                          />
                        );
                      })}
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalcZero2HeroDesktop;

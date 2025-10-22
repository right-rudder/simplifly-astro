import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import InputCheckboxCard from "./InputCheckboxCard.jsx";

import { PHONE_NUMBER } from "../consts";

const PriceCalcZero2HeroThree = () => {
  const pricePpl = 20000;
  const priceInstrument = 18000;
  const priceCplSolo = 27000;
  const priceCfi = 9000;
  const priceCfii = 4500;
  const priceMe = 10500;

  const priceStarter = 1000;
  const priceCheckride = 7000;
  const priceWritten = 1050;
  const priceHeadset = 1200;

  const [total, setTotal] = useState(0);

  const [starter, setStarter] = useState(false);
  const [checkride, setCheckride] = useState(false);
  const [written, setWritten] = useState(false);
  const [headset, setHeadset] = useState(false);

  const [ppl, setPpl] = useState(true);
  const [instrument, setInstrument] = useState(true);
  const [cplSolo, setCplSolo] = useState(true);
  const [cfi, setCfi] = useState(true);
  const [cfii, setCfii] = useState(true);
  const [me, setMe] = useState(true);

  useEffect(() => {
    setTotal(0);
    setTotal(
      total +
        pricePpl +
        priceInstrument +
        priceCplSolo +
        priceCfi +
        priceCfii +
        priceMe,
    );
  }, []);

  function getDescription() {
    let selectedCourses = [];
    let addOns = [];

    if (ppl)
      selectedCourses.push(
        `Private Pilot Certificate (PPL): $ ${pricePpl.toLocaleString()}`,
      );
    if (instrument)
      selectedCourses.push(
        `Instrument Rating: $ ${priceInstrument.toLocaleString()}`,
      );
    if (cplSolo)
      selectedCourses.push(
        `Commercial Pilot Certificate (Solo): $ ${priceCplSolo.toLocaleString()}`,
      );
    if (cfi)
      selectedCourses.push(
        `Certified Flight Instructor (CFI): $ ${priceCfi.toLocaleString()}`,
      );
    if (cfii)
      selectedCourses.push(
        `Certified Flight Instructor-Instrument (CFII): $ ${priceCfii.toLocaleString()}`,
      );
    if (me)
      selectedCourses.push(
        `Multi-Engine Rating: $ ${priceMe.toLocaleString()}`,
      );

    if (starter)
      addOns.push(`Starter Bundle: $ ${priceStarter.toLocaleString()}`);
    if (checkride)
      addOns.push(`Checkride Fees: $ ${priceCheckride.toLocaleString()}`);
    if (written)
      addOns.push(`Written Test Fees: $ ${priceWritten.toLocaleString()}`);
    if (headset)
      addOns.push(`Aviation Headset: $ ${priceHeadset.toLocaleString()}`);

    return `${
      selectedCourses.length > 0
        ? `Certificates and Ratings I want to obtain:\n${selectedCourses.map((item) => `• ${item}`).join("\n")}`
        : ""
    }${
      addOns.length > 0
        ? `\n\nRequested Add Ons:\n${addOns.map((item) => `• ${item}`).join("\n")}`
        : ""
    }${
      selectedCourses.length > 0 || addOns.length > 0
        ? `\n\nTotal: ${total.toLocaleString()}.`
        : ""
    }`.trim();
  }

  return (
    <section id="cost-calc" className="overflow-hidden">
      <div className="bg-gray-50 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto w-full lg:mx-0">
            <h3 className="section-upper">
              Find out how much your training will cost
            </h3>
            <h2 className="section-title">
              Simplifly's Flight Training Estimator
            </h2>
          </div>

          <div className="relative mt-16 group w-full bg-white border border-gray-300 rounded-2xl p-5 pt-12 md:p-8 lg:p-12">
            <h3 className="text-5xl text-gray-800 font-bold text-center font-title">
              Zero to Hero
            </h3>
            <p className="italic mt-2 mb-6 text-center text-gray-700">
              Fly for a career, within a year!
            </p>

            <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-12">
              <fieldset>
                <legend className="mb-4 text-xl font-title text-center w-full text-gray-800 font-semibold">
                  Certificates and Ratings You Want to Obtain
                </legend>

                <div>
                  <InputCheckboxCard
                    id="ppl"
                    checked={ppl}
                    text={`Private Pilot Certificate <small className="font-bold">(PPL)</small>`}
                    onChange={(e) => {
                      ppl
                        ? setTotal(total - pricePpl)
                        : setTotal(total + pricePpl);
                      setPpl(!ppl);
                    }}
                  />
                  <InputCheckboxCard
                    id="instrument"
                    checked={instrument}
                    text={`Instrument Rating`}
                    onChange={(e) => {
                      instrument
                        ? setTotal(total - priceInstrument)
                        : setTotal(total + priceInstrument);
                      setInstrument(!instrument);
                    }}
                  />
                  <InputCheckboxCard
                    id="cplSolo"
                    checked={cplSolo}
                    text={`Commercial Pilot Certificate <small className="font-bold">(Solo)</small>`}
                    onChange={(e) => {
                      cplSolo
                        ? setTotal(total - priceCplSolo)
                        : setTotal(total + priceCplSolo);
                      setCplSolo(!cplSolo);
                    }}
                  />
                  <InputCheckboxCard
                    id="cfi"
                    checked={cfi}
                    text={`Certified Flight Instructor <small className="font-bold">(CFI)</small>`}
                    onChange={(e) => {
                      cfi
                        ? setTotal(total - priceCfi)
                        : setTotal(total + priceCfi);
                      setCfi(!cfi);
                    }}
                  />
                  <InputCheckboxCard
                    id="cfii"
                    checked={cfii}
                    text={`Certified Flight Instructor-Instrument <small className="font-bold">(CFII)</small>`}
                    onChange={(e) => {
                      cfii
                        ? setTotal(total - priceCfii)
                        : setTotal(total + priceCfii);
                      setCfii(!cfii);
                    }}
                  />
                  <InputCheckboxCard
                    id="me"
                    checked={me}
                    text={`Multi-Engine Rating`}
                    tooltipText={`Career track students need 25 total ME hours to reach a Multi-Engine certification. You can achieve this by either getting your MEI or flying 15 hours via time building.`}
                    onChange={(e) => {
                      me
                        ? setTotal(total - priceMe)
                        : setTotal(total + priceMe);
                      setMe(!me);
                    }}
                  />
                  <div className="w-full flex justify-center items-center my-4 lg:hidden">
                    <p className="text-3xl">
                      Total
                      <span className="ml-2 font-bold">
                        $ {total.toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>
              </fieldset>

              <fieldset className="flex flex-col align-top w-full text-left">
                <legend className="mb-4 text-xl font-title text-center w-full text-gray-800 font-semibold">
                  Add Ons:
                </legend>

                <div>
                  <InputCheckboxCard
                    id="starter"
                    checked={starter}
                    text="Starter Bundle"
                    tooltipText="Includes a passive headset, pilot bag, pilot training
                          books, a logbook, foggles, a ForeFlight subscription
                          while enrolled, and a kneeboard."
                    onChange={(e) => {
                      starter
                        ? setTotal(total - priceStarter)
                        : setTotal(total + priceStarter);
                      setStarter(!starter);
                    }}
                  />
                  <InputCheckboxCard
                    id="checkride"
                    checked={checkride}
                    text="Checkride Fees"
                    tooltipText="Depending on your DPE, you can plan to budget around
                          $900 for most checkrides with the exceptions being the
                          CFI initial (~$1,500) and CFI add-ons (~$1,200 each)."
                    onChange={(e) => {
                      checkride
                        ? setTotal(total - priceCheckride)
                        : setTotal(total + priceCheckride);
                      setCheckride(!checkride);
                    }}
                  />
                  <InputCheckboxCard
                    id="written"
                    checked={written}
                    text="Written Test Fees"
                    tooltipText="Written tests are ~$175 per certification (not required for the Multi-Engine Rating or MEI add-on)."
                    onChange={(e) => {
                      written
                        ? setTotal(total - priceWritten)
                        : setTotal(total + priceWritten);
                      setWritten(!written);
                    }}
                  />
                  <InputCheckboxCard
                    id="headset"
                    additionalClasses="rounded-b-md lg:rounded-b-none"
                    checked={headset}
                    text="Aviation Headset"
                    tooltipText="Receive <strong>$299.00</strong> off of your Zulu 3 Headset if you choose to upgrade your Starter Package at Summit Flight Academy."
                    onChange={(e) => {
                      headset
                        ? setTotal(total - priceHeadset)
                        : setTotal(total + priceHeadset);
                      setHeadset(!headset);
                    }}
                  />
                  <InputCheckboxCard
                    empty={true}
                    additionalClasses="hidden lg:flex"
                  />
                  <InputCheckboxCard
                    empty={true}
                    additionalClasses="hidden lg:flex"
                  />
                </div>
              </fieldset>
            </div>

            <div className="w-3/4 h-0.5 mt-12 mb-8 mx-auto bg-gray-300 rounded-sm"></div>

            <div className="text-gray-800">
              <h3 className="mt-8 text-5xl font-bold text-center font-title">
                Total
              </h3>
              <div className="mt-2 mb-6 flex items-center justify-center gap-2 has-tooltip-container">
                <div className="flex items-center">
                  <div>
                    <span className="block text-3xl font-bold">$</span>
                  </div>
                  <span className="text-4xl font-bold leading-0">
                    {total.toLocaleString()}
                  </span>
                </div>

                <div className="has-tooltip cursor-help">
                  <FaInfoCircle className="size-6" />
                  <span className="tooltip !right-0 !left-0 !w-auto">
                    This pricing is based on <strong>250 hours</strong> and
                    flying full-time. While pricing can vary within our other
                    programs, it does less so for our Zero to Hero Program.
                    However, the speed at which you can achieve the level you
                    wish will be based upon your availability and time
                    commitment. There is no way to go Zero to Hero in a year
                    doing anything less than full-time. Flying 3-4 days a week
                    makes Zero to Hero achievable in 12-15 months and flying 2-3
                    days a week is achievable in 15-18 months.
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-96 m-auto">
              <div className="mt-8 flex flex-col justify-center items-center align-middle gap-2">
                <a
                  href="/contact"
                  className="btn-white w-full"
                  onClick={(e) => {
                    const description = getDescription();

                    if (description.length <= 0) return;

                    e.preventDefault();
                    const params = new URLSearchParams();

                    params.append("message", description);

                    window.location.href = `/contact?${params.toString()}`;
                  }}
                >
                  <span>Contact Us</span>
                </a>
                <a
                  href={`tel: ${PHONE_NUMBER}`}
                  className="btn-white inline-flex justify-center items-center gap-2 w-full"
                >
                  <FaPhone />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalcZero2HeroThree;

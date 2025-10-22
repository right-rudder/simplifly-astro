import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import PriceCalculatorCheck from "./priceCalculatorCheck.jsx";
import InputCheckboxToggle from "./InputCheckboxToggle.jsx";

import { PHONE_NUMBER } from "../consts";

const PriceCalcZero2HeroTwo = () => {
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

  const [heldPpl, setHeldPpl] = useState(false);
  const [heldInstrument, setHeldInstrument] = useState(false);
  const [heldCpl, setHeldCpl] = useState(false);
  const [heldCfi, setHeldCfi] = useState(false);
  const [heldCfii, setHeldCfii] = useState(false);
  const [heldMe, setHeldMe] = useState(false);

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

          <div className="mt-12 m-auto items-center justify-center lg:flex xl:w-full">
            <div className="relative group w-full bg-white border border-gray-300 rounded-t-2xl lg:rounded-2xl lg:w-1/2">
              <div className="relative p-5 pt-12 md:p-8 md:pl-8 md:rounded-r-2xl lg:pl-10 lg:p-12">
                <div className="mt-2 flex justify-center gap-6 w-full">
                  <div className="grid grid-cols-1">
                    <fieldset>
                      <legend className="mb-2 mx-auto text-center text-xl font-title leading-tight text-gray-800 font-semibold">
                        Certificates and Ratings Currently Held
                      </legend>

                      <div className="flex flex-col gap-2">
                        <InputCheckboxToggle
                          id="heldPpl"
                          checked={heldPpl}
                          text={`Private Pilot Certificate <small className="font-bold">(PPL)</small>`}
                          onChange={(e) => {
                            setHeldPpl(!heldPpl);
                            if (ppl) {
                              setTotal(total - pricePpl);
                              setPpl(!ppl);
                            }
                          }}
                        />
                        <InputCheckboxToggle
                          id="heldInstrument"
                          checked={heldInstrument}
                          text={`Instrument Rating`}
                          onChange={(e) => {
                            setHeldInstrument(!heldInstrument);
                            if (instrument) {
                              setTotal(total - priceInstrument);
                              setInstrument(!instrument);
                            }
                          }}
                        />
                        <InputCheckboxToggle
                          id="heldCpl"
                          checked={heldCpl}
                          text={`Commercial Pilot Certificate <small className="font-bold">(CPL)</small>`}
                          onChange={(e) => {
                            setHeldCpl(!heldCpl);
                            if (cplSolo) {
                              setTotal(total - priceCplSolo);
                              setCplSolo(!cplSolo);
                            }
                          }}
                        />
                        <InputCheckboxToggle
                          id="heldCfi"
                          checked={heldCfi}
                          text={`Certified Flight Instructor <small className="font-bold">(CFI)</small>`}
                          onChange={(e) => {
                            setHeldCfi(!heldCfi);
                            if (cfi) {
                              setTotal(total - priceCfi);
                              setCfi(!cfi);
                            }
                          }}
                        />
                        <InputCheckboxToggle
                          id="heldCfii"
                          checked={heldCfii}
                          text={`Certified Flight Instructor-Instrument <small className="font-bold">(CFII)</small>`}
                          onChange={(e) => {
                            setHeldCfii(!heldCfii);
                            if (cfii) {
                              setTotal(total - priceCfii);
                              setCfii(!cfii);
                            }
                          }}
                        />
                        <InputCheckboxToggle
                          id="heldMe"
                          checked={heldMe}
                          text={`Multi-Engine Rating`}
                          onChange={(e) => {
                            setHeldMe(!heldMe);
                            if (me) {
                              setTotal(total - priceMe);
                              setMe(!me);
                            }
                          }}
                        />
                      </div>
                    </fieldset>
                    <div className="mt-2 flex justify-around lg:hidden">
                      <div className="flex items-center">
                        <div>
                          <span className="block  text-center  text-xl text-gray-700 font-bold">
                            Total $
                          </span>
                        </div>
                        <span className="text-xl text-center text-gray-700 font-bold leading-0">
                          {total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 min-h-[screen-1/2] m-0 bg-white border border-gray-300 lg:rounded-2xl lg:-mx-4 group w-full lg:w-3/5 lg:max-w-3/5">
              <div className="relative p-5 space-y-6 lg:p-8">
                <div className="max-w-96 m-auto lg:max-w-none lg:m-0 lg:p-8">
                  <h3 className="text-5xl text-gray-800 font-bold text-center font-title">
                    Zero to Hero
                  </h3>
                  <p className="italic mt-2 text-center text-gray-700">
                    Fly for a career, within a year!
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

                    <div className="has-tooltip cursor-help">
                      <FaInfoCircle className="size-6 text-gray-700" />
                      <span className="tooltip !right-0 !left-0 !w-auto">
                        This pricing is based on <strong>250 hours</strong> and
                        flying full-time. While pricing can vary within our
                        other programs, it does less so for our Zero to Hero
                        Program. However, the speed at which you can achieve the
                        level you wish will be based upon your availability and
                        time commitment. There is no way to go Zero to Hero in a
                        year doing anything less than full-time. Flying 3-4 days
                        a week makes Zero to Hero achievable in 12-15 months and
                        flying 2-3 days a week is achievable in 15-18 months.
                      </span>
                    </div>
                  </div>

                  <ul
                    role="list"
                    className="w-full px-3 flex flex-col gap-2 text-gray-800 text-sm mt-3 mb-8"
                  >
                    <PriceCalculatorCheck
                      active={ppl}
                      text={"Private Pilot Certificate"}
                    />
                    <PriceCalculatorCheck
                      active={instrument}
                      text={"Instrument Rating"}
                    />
                    <PriceCalculatorCheck
                      active={cplSolo}
                      text={"Commercial Pilot Certificate"}
                    />
                    <PriceCalculatorCheck
                      active={cfi}
                      text={"Certified Flight Instructor"}
                    />
                    <PriceCalculatorCheck
                      active={cfii}
                      text={"Private Pilot Certificate"}
                    />
                    <PriceCalculatorCheck
                      active={me}
                      text={"Multi-Engine Rating"}
                    />
                  </ul>
                  <fieldset className="flex flex-col align-top w-full text-left">
                    <legend className="mb-2 text-xl font-title text-center w-full text-gray-800 font-semibold">
                      Add Ons:
                    </legend>

                    <div className="flex flex-col gap-2">
                      <InputCheckboxToggle
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
                      <InputCheckboxToggle
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
                      <InputCheckboxToggle
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
                      <InputCheckboxToggle
                        id="headset"
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
                    </div>
                  </fieldset>
                  <div className="mt-8 flex flex-col justify-center items-center align-middle gap-2">
                    <a href="/contact" className="btn-white w-full">
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

            <div className="relative group w-full bg-white border border-gray-300 rounded-b-2xl lg:rounded-2xl lg:w-1/2">
              <div className="relative flex justify-center p-5 pt-12 md:p-8 md:pl-8 lg:pr-10 lg:p-12">
                <div>
                  <fieldset>
                    <legend className="mb-2 mx-auto text-center font-title leading-tight text-xl text-gray-800 font-semibold">
                      Certificates and Ratings You Want to Obtain
                    </legend>

                    <div className="flex flex-col gap-2">
                      <InputCheckboxToggle
                        id="ppl"
                        checked={ppl}
                        disabled={heldPpl}
                        text={`Private Pilot Certificate <small className="font-bold">(PPL)</small>`}
                        onChange={(e) => {
                          ppl
                            ? setTotal(total - pricePpl)
                            : setTotal(total + pricePpl);
                          setPpl(!ppl);
                        }}
                      />
                      <InputCheckboxToggle
                        id="instrument"
                        checked={instrument}
                        disabled={heldInstrument}
                        text={`Instrument Rating`}
                        onChange={(e) => {
                          instrument
                            ? setTotal(total - priceInstrument)
                            : setTotal(total + priceInstrument);
                          setInstrument(!instrument);
                        }}
                      />
                      <InputCheckboxToggle
                        id="cplSolo"
                        checked={cplSolo}
                        disabled={heldCpl}
                        text={`Commercial Pilot Certificate <small className="font-bold">(Solo)</small>`}
                        onChange={(e) => {
                          cplSolo
                            ? setTotal(total - priceCplSolo)
                            : setTotal(total + priceCplSolo);
                          setCplSolo(!cplSolo);
                        }}
                      />
                      <InputCheckboxToggle
                        id="cfi"
                        checked={cfi}
                        disabled={heldCfi}
                        text={`Certified Flight Instructor <small className="font-bold">(CFI)</small>`}
                        onChange={(e) => {
                          cfi
                            ? setTotal(total - priceCfi)
                            : setTotal(total + priceCfi);
                          setCfi(!cfi);
                        }}
                      />
                      <InputCheckboxToggle
                        id="cfii"
                        checked={cfii}
                        disabled={heldCfii}
                        text={`Certified Flight Instructor-Instrument <small className="font-bold">(CFII)</small>`}
                        onChange={(e) => {
                          cfii
                            ? setTotal(total - priceCfii)
                            : setTotal(total + priceCfii);
                          setCfii(!cfii);
                        }}
                      />
                      <InputCheckboxToggle
                        id="me"
                        checked={me}
                        disabled={heldMe}
                        text={`Multi-Engine Rating`}
                        tooltipText={`Career track students need 25 total ME hours to reach a Multi-Engine certification. You can achieve this by either getting your MEI or flying 15 hours via time building.`}
                        onChange={(e) => {
                          me
                            ? setTotal(total - priceMe)
                            : setTotal(total + priceMe);
                          setMe(!me);
                        }}
                      />
                    </div>
                  </fieldset>

                  <div className="mt-2 flex justify-center w-full lg:hidden">
                    <span className="block text-center text-xl text-gray-700 font-bold">
                      Total $
                    </span>
                    <span className="text-xl text-center text-gray-700 font-bold leading-0">
                      {total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalcZero2HeroTwo;
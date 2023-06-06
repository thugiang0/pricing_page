"use client";

import { useEffect, useState } from "react";

interface ItemPrice {
  id: string;
  name: string;
  description: string;
  currencyUnit: string;
  price: number;
  paymentCycle: string;
}

const itemPrices = [
  {
    id: "free_monthly",
    name: "Free",
    description: "Description",
    currencyUnit: "USD",
    price: 0,
    paymentCycle: "month",
  },
  {
    id: "pro_monthly",
    name: "Pro",
    description: "Description",
    currencyUnit: "USD",
    price: 900,
    paymentCycle: "month",
  },
  {
    id: "elite_monthly",
    name: "Elite",
    description: "Description",
    currencyUnit: "USD",
    price: 902,
    paymentCycle: "month",
  },
  {
    id: "free_yearly",
    name: "Free",
    description: "Description",
    currencyUnit: "USD",
    price: 0,
    paymentCycle: "year",
  },
  {
    id: "pro_yearly",
    name: "Pro",
    description: "Description",
    currencyUnit: "USD",
    price: 9000,
    paymentCycle: "year",
  },
  {
    id: "elite_yearly",
    name: "Elite",
    description: "Description",
    currencyUnit: "USD",
    price: 9050,
    paymentCycle: "year",
  },
];

const itemFeaturesData = [
  {
    id: "1",
    feature: "Feature 1",
    free: "True",
    pro: "True",
    elite: "True",
  },
  {
    id: "2",
    feature: "Feature 2",
    free: "10",
    pro: "15",
    elite: "100",
  },
  {
    id: "3",
    feature: "Feature 3",
    free: "False",
    pro: "False",
    elite: "True",
  },
  {
    id: "4",
    feature: "Feature 4",
    free: "False",
    pro: "False",
    elite: "True",
  },
  {
    id: "5",
    feature: "Feature 5",
    free: "False",
    pro: "False",
    elite: "True",
  },
  {
    id: "6",
    feature: "Feature 6",
    free: "False",
    pro: "False",
    elite: "True",
  },
];

type PaymentCycle = "month" | "year";

export default function Pricing() {
  const [paymentCycle, setPaymentCycle] = useState<PaymentCycle>("month");
  const [itemPricesShow, setItemPricesShow] = useState<ItemPrice[]>([]);

  useEffect(() => {
    setItemPricesShow(
      itemPrices.filter((item) => item.paymentCycle === paymentCycle)
    );
  }, [paymentCycle]);

  return (
    <section className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      <div className="max-w-6xl mx-auto py-8 ">
        <div className="sm:flex sm:flex-col sm:align-center flex justify-center items-center">
          <h1 className="text-4xl font-extrabold text-blue-500 sm:text-center sm:text-6xl">
            Pricing
          </h1>

          {/* <div className="relative  self-center mt-6 bg-white bg-opacity-50 rounded-full p-0.5 flex sm:mt-8 border"> */}
          {/* <button
              onClick={() => setPaymentCycle('month')}
              type="button"
              className={`${
                paymentCycle === 'month'
                  ? 'relative w-1/2 bg-blue-500 text-white'
                  : 'ml-0.5 relative w-1/2 text-zinc-400'
              } rounded-full m-1 py-2  font-medium sm:w-auto sm:px-8 focus:ring-0 focus:outline-none`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setPaymentCycle('year')}
              type="button"
              className={`${
                paymentCycle === 'year'
                  ? 'relative w-1/2 bg-blue-500 text-white'
                  : 'ml-0.5 relative w-1/2 text-zinc-400'
              } rounded-full m-1 py-2 font-medium sm:w-auto sm:px-8 focus:ring-0 focus:outline-none`}
            >
              Yearly billing
            </button> */}
          <div className=" w-[30%] h-10 relative bg-white rounded-full flex items-center justify-around bg-opacity-50 p-1 border mt-6">
            <div
              onClick={() => setPaymentCycle("month")}
              className={`cursor-pointer w-[95%] text-center ${
                paymentCycle === "month" ? " text-white z-30 " : "text-zinc-400"
              }`}
            >
              Monthly billing
            </div>
            <div
              onClick={() => setPaymentCycle("year")}
              className={`cursor-pointer  w-[95%] text-center ${
                paymentCycle === "year" ? " text-white z-30" : "text-zinc-400"
              }`}
            >
              Yearly billing
            </div>
            <div
              className={` transition duration-300 absolute h-8 rounded-full w-1/2 bg-blue-500 z-20 ${
                paymentCycle === "month"
                  ? " -translate-x-1/2 ml-2"
                  : "translate-x-1/2 mr-2"
              }`}
            ></div>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {itemPricesShow.map((itemPrice, idx) => {
            return (
              <div
                key={itemPrice.id}
                className={` relative rounded-[24px] divide-y divide-zinc-600 bg-white bg-opacity-50 ${
                  itemPrice.name === "Pro" ? "border-2 border-amber-200 " : ""
                } `}
              >
                {itemPrice.name === "Pro" ? (
                  <div className=" absolute -translate-y-5 flex justify-center w-full">
                    <div className=" bg-gradient-to-b from-white to-yellow-400 w-[40%] h-10 flex rounded-full justify-center items-center">
                      Most Popular
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="p-6">
                  <h2 className="text-2xl leading-6 font-semibold text-indigo-900">
                    {itemPrice.name}
                  </h2>

                  <p className="mt-4">
                    <span className="text-5xl font-extrabold white">
                      {itemPrice.price}$
                    </span>
                    <span className="text-base font-medium text-indigo-900">
                      /{paymentCycle}
                    </span>
                  </p>
                  <p className="mt-4 text-indigo-900">
                    {itemPrice.description}
                  </p>
                  <div
                    data-cb-type="checkout"
                    data-cb-item-0={itemPrice.id}
                    data-cb-item-0-quantity="1"
                  >
                    <button
                      className={`mt-8 w-full rounded-full bg-gradient-to-r transition duration-300 hover:bg-gradient-to-bl ${
                        itemPrice.name === "Pro"
                          ? "from-white to-amber-400 text-slate-700"
                          : "from-cyan-500 to-blue-500 text-white"
                      }   font-bold py-2 px-4`}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
        <h1 className="mt-12 text-4xl font-extrabold text-blue-500 sm:text-center sm:text-6xl">
          Detail
        </h1>
        <div className="relative mt-12 overflow-x-auto shadow-b- sm:rounded-lg">
          <table className="w-full text-sm text-left text-indigo-900">
            <thead className="text-xs  uppercase  text-indigo-900">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  Free
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-amber-300 rounded-t-2xl"
                >
                  Pro
                </th>
                <th scope="col" className="px-6 py-3">
                  Elite
                </th>
              </tr>
            </thead>
            <tbody>
              {itemFeaturesData.map((item, index) => (
                <tr key={index} className="bg-white  bg-opacity-20">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-indigo-900"
                  >
                    {item.feature}
                  </th>

                  <td className="px-6 py-4">
                    {item.free}
                    {/* <svg className="h-12 w-12 text-blue-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="20 6 9 17 4 12" /></svg> */}
                  </td>
                  <td className="px-6 py-4 bg-yellow-200 bg-opacity-50 border-x border-yellow-300">
                    {item.pro}
                  </td>
                  <td className="px-6 py-4">{item.elite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

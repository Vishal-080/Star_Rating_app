import React from "react";
import { useState } from "react";

const Calculator = () => {
  const [data, setData] = useState("");
  const handleBtnClick = (e) => {
    setData(data.concat(e.target.value));
  };

  const handleEqual = () => {
    setData(eval(data).toString());
  };

  const handleBack = () => {
    setData(data.slice(0, -1));
  };

  const handleClear = () => {
    setData("");
  };

  return (
    <>
      <div className="w-6/12 m-auto my-8 bg-emerald-900 border p-4">
        <div className="bg-emerald-100 w-9/12 m-auto p-4">
          <input
            type="text"
            placeholder="0"
            className="w-full text-right font-bold text-2xl px-2 text-black"
            disabled
            value={data}
          />
        </div>
        <div className="bg-emerald-600 w-9/12 m-auto p-4 flex flex-wrap">
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="("
          >
            (
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value=")"
          >
            )
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="%"
          >
            %
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleClear}
          >
            AC
          </button>

          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="7"
          >
            7
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="8"
          >
            8
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="9"
          >
            9
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="*"
          >
            *
          </button>

          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="4"
          >
            4
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="5"
          >
            5
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="6"
          >
            6
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="-"
          >
            -
          </button>

          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="1"
          >
            1
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="2"
          >
            2
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="3"
          >
            3
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="+"
          >
            +
          </button>

          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="0"
          >
            0
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleEqual}
          >
            =
          </button>
          <button
            className="cursor-pointer text-center w-1/5 m-2 p-2 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none"
            onClick={handleBtnClick}
            value="/"
          >
            /
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;

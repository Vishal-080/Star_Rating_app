import React from "react";

const Calculator = () => {
  return (
    <>
      <div className="w-6/12 m-auto my-8 bg-emerald-900 border p-4">
        <div className="bg-emerald-100 w-9/12 m-auto p-4">
          <input type="text"  placeholder="0" className="w-full text-right font-bold text-2xl px-2 text-black" disabled/> 
        </div>
        <div className="bg-emerald-600 w-9/12 m-auto p-4">

          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="(">(</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value=")">)</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="%">%</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="AC">AC</button>

          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="7">7</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="8">8</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="9">9</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="*">*</button>
          
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="4">4</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="5">5</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="6">6</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="-">-</button>
          
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="1">1</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="2">2</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="3">3</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="+">+</button>
          
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="0">0</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="Back">Back</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="=">=</button>
          <button className="w-1/5 m-2 p-4 text-xl font-bold border rounded-lg hover:bg-emerald-300 hover:text-black hover:border-none" value="/">/</button>
           
        </div>
      </div>
    </>
  );
};

export default Calculator;

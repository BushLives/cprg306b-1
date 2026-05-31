'use client'
import { useState } from "react";

function converter(convertFromUnit: string, convertToUnit: string){
    const conversions: Record<string, (x:number) => number> = {
        'pounds-kilos': (x) => x * 0.45359237,
        'kilos-pounds': (x) => x * 2.2046226218
    }

    const key = `${convertFromUnit}-${convertToUnit}`
    const conversionType = conversions[key];

    return(value: number) => {
        if (Array.isArray(value)){
            return value.map(conversionType);
        }else{
            return conversionType(value);
        }
    }
}

export default function PoundsKilograms() {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  
  const PtoKG = converter("pounds", "kilos");

  const handleConvert = () => {
    const converted = PtoKG(Number(inputValue));
    setResult(Number(converted));
  };
  return (
    <div className="bg-gray-800 font-sans">
      <script src="scripts.js"></script>
      
      <div>
        <h1>Convert between pounds and kilograms</h1>
        {/* input box */}
         <div>
          <input type="number" id="weight" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="0" className="block min-w-0 bg-gray-700 py-0.5 pl-1 text-white placeholder:text-gray-400 focus:outline"></input>
          
          <button type="button" id="convertbutton" onClick={handleConvert} className="rounded-md px-1 py-0.5 text-sm font-medium text-black shadow-sm hover:bg-gray-700">
            Convert
          </button>
        </div>
        {/* switch button */}
        <div></div>
        {/* output box */}
        <div>
          {result !== null && (
          <p className="mt-4">{inputValue} Pounds = {result} Kilograms</p>
        )}
        </div>
      </div>
    </div>
  );
}
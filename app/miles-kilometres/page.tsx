'use client'
import { useState } from "react";

function converter(convertFromUnit: String, convertToUnit: String){
    const conversions: Record<string, (x:number) => number> = {
        'miles-kilometers': (x) => x * 1.60934,
        'kilometers-miles': (x) => x * 0.621371,
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
export default function MilesKilometres() {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const MtoKM = converter("miles", "kilometers");

  const handleConvert = () => {
    const converted = MtoKM(Number(inputValue));
    setResult(Number(converted));
  };

  return (
    
    <div className="bg-gray-800 font-sans">
      <script src="scripts.js"></script>

      
        <h1>Miles to Kilometres</h1>
        {/* input box */}
        
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} id="milesInput" placeholder="Enter Miles" className="block min-w-0 bg-gray-700 py-0.5 pl-1 text-white placeholder:text-gray-400 focus:outline"></input>
        
        <button type="button" id="convertbutton" onClick={handleConvert} className="shrink-0 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800 transition-colors duration-200">
          Convert
        </button>
      
        
        {/* switch button */}
        {result !== null && (
          <p className="mt-4">{inputValue} Miles = {result} kilometres</p>
        )}
        
        {/* output box */}
      
      
    </div>
    
  );
}
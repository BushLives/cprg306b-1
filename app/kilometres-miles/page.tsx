'use client'
import { useState } from "react";

function converter(convertFromUnit: String, convertToUnit: String){
    const conversions: Record<string, (x:number) => number> = {
        'miles-kilometers': (x) => x / 1000,
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

  const KMtoM = converter("kilometers", "miles");

  const handleConvert = () => {
    const converted = KMtoM(Number(inputValue));
    setResult(Number(converted));
  };

  return (
    
    <div className="bg-gray-800 font-sans">

      
        <h1>Kilometres to Miles</h1>
        {/* input box */}
        
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} id="milesInput" placeholder="Enter Miles" className="block min-w-0 bg-gray-700 py-0.5 pl-1 text-white placeholder:text-gray-400 focus:outline"></input>
        
        <button type="button" id="convertbutton" onClick={handleConvert} className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black shadow-sm hover:bg-blue-700 active:bg-white-800 transition-colors duration-200">
          Convert
        </button>
      
        
        {/* switch button */}
        <a href="/kilometres-miles/miles-kilometres" className="text-white hover:text-blue-600">Kilometres to Miles</a>

        
        {/* output box */}
        {result !== null && (
          <p className="mt-4">{inputValue} Kilometres = {result} Miles</p>
        )}
      
      
    </div>
    
  );
}
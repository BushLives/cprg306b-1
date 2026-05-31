import Script from "next/script";
import { Converter } from "../components/Converter";

export default function farenheitCelcius() {
  return (
    <div className="bg-gray-800 font-sans">
      <nav className="bg-gray-800 shadow-md w-full rounded">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">Imperial & Metric Converter
          <div className="hidden md:flex space-x-8">
            <a href="/pounds-kilograms" className="text-white hover:text-blue-600">pounds-kilograms</a>
            <a href="/miles-kilometres" className="text-white hover:text-blue-600">miles-kilometres</a>
            <a href="/farenheit-celcius" className="text-white hover:text-blue-600">farenheit-celcius</a>
          </div>
        </div>
      </nav>
      <div>
        <h1>Fahrenheit to Celcius</h1>
        {/* input box */}
        <div>
          <form id="numInput" className="block min-w-0 bg-gray-700 py-0.5 pl-1 text-white placeholder:text-gray-400 focus:outline"></form>
          <div className="flex flex-row justify-between w-55">
             <button type="button" id="convert-button" className="bg-gray-100 rounded-md px-1 py-0.5 text.sm font-medium text-gray-700 shadow-sm hover:bg-gray-300 p-4 mr-2">
              Convert
              </button>
              {/* switch button */}
              <button type="button" id="switch-button" className="bg-gray-100 rounded-md px-1 py-0.5 text.sm font-medium text-gray-700 shadow-sm hover:bg-gray-300">
                Switch
              </button>
          </div>        
      </div>
        <div></div>
        
        <div>
          
        </div>
        <p id="resultKM" className="mt-4 text-lg font-semibold">HELP ME</p>
        {/* output box */}
        <div></div>
      </div>
    </div>
  );
}
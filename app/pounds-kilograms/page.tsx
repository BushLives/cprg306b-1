import Link from "next/link";

export default function PoundsKilograms() {
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
        <h1>Convert between pounds and kilograms</h1>
        {/* input box */}
         <div>
          <input type="number" id="miles" placeholder="0" className="block min-w-0 bg-gray-700 py-0.5 pl-1 text-white placeholder:text-gray-400 focus:outline"></input>
          
          <button type="button" id="convert-button" className="rounded-md px-1 py-0.5 text-sm font-medium text-black shadow-sm hover:bg-gray-700">
            Convert
          </button>
        </div>
        {/* switch button */}
        <div></div>
        {/* output box */}
        <div></div>
      </div>
    </div>
  );
}
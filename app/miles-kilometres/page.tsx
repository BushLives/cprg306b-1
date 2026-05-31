import Link from "next/link";

export default function MilesKilometres() {
  return (
    <div className="bg-gray-800 font-sans">
      

      <div>
        <h1>Miles to Kilometres</h1>
        {/* input box */}
        <div>
          <input type="number" id="miles" placeholder="0" className="block min-w-0 bg-gray-700 py-0.5 pl-1 text-white placeholder:text-gray-400 focus:outline"></input>
          
          <button type="button" id="convert-button" className="rounded-md px-1 py-0.5 text-sm font-medium text-black shadow-sm hover:bg-gray-700">
            Convert
          </button>
        </div>
        <div></div>
        {/* switch button */}
        <div></div>
        <p id="resultKM" className="mt-4 text-lg font-semibold">HELP ME</p>
        {/* output box */}
        <div></div>
      </div>
    </div>
  );
}
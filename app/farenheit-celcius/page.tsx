import Link from "next/link";

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
    </div>
  );
}
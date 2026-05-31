import Link from "next/link";

export default function PoundsKilograms() {
  return (
    <div className="">
      <nav>
        <Link href="/pounds-kilograms">pounds-kilograms</Link>
        <br />
        <Link href="/miles-kilometres">miles-kilometres</Link>
        <br />
        <Link href="/farenheit-celcius">farenheit-celcius</Link>
      </nav>
      <div>
        <h1>Convert between pounds and kilograms</h1>
        {/* input box */}
        <div>
          <input type="text" placeholder="Enter number you would like to convert"/>
          {/* <span class=''></span> */}
        </div>
        {/* switch button */}
        <div></div>
        {/* output box */}
        <div></div>
      </div>
    </div>
  );
}
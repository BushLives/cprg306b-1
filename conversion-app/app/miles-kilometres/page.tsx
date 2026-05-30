import Link from "next/link";

export default function MilesKilometres() {
  return (
    <div className="">
      <Link href="/pounds-kilograms">pounds-kilograms</Link>
      <br />
      <Link href="/miles-kilometres">miles-kilometres</Link>
      <br />
      <Link href="/farenheit-celcius">farenheit-celcius</Link>
    </div>
  );
}
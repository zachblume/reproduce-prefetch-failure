import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      Page 1
      <br/>
      <Link href="/page2">Go to Page 2</Link>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function FooterBack() {
  return (
    <div className="flex items-center justify-between px-2 md:px-6 lg:px-8">
      <Link
        href="/"
        className="invisible md:visible md:flex items-center justify-center p-1 rounded-full shadow shadow-slate-700 w-16 h-16"
      >
        <Image src="/LogoLetraRojaOpt.webp" alt="Home" width={40} height={40} />
      </Link>
      <Link
        href="/"
        className="flex items-center justify-center p-1 rounded-full shadow shadow-slate-700 w-16 aspect-square lg:h-16"
      >
        <Image src="/home.svg" alt="Home" width={40} height={40} />
      </Link>
    </div>
  );
}

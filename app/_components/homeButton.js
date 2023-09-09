import Link from "next/link";
import Image from "next/image";

export default function HomeButton() {
  return (
    <Link
      href="/"
      className="fixed bottom-2 right-4 lg:right-12 z-50 md:top-4 flex items-center justify-center p-1 rounded-full shadow shadow-slate-700 w-16 aspect-square lg:h-16"
    >
      <Image src="/home.svg" alt="Home" width={40} height={40} />
    </Link>
  );
}

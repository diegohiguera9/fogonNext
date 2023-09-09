import CategoryCarousel from "../_components/categoryCarousel";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "El Fogon Llanero",
  description: "Menu El Fogon Llanero",
};

export default async function RootLayout({ children }) {
  return (
    <div className="relative sm:px-4 lg:px-8">
      <div className="fixed top-0 left-0 right-0 backdrop-blur-lg z-40">
        <CategoryCarousel />
      </div>
      <div className="relative top-28 z-20">{children}</div>
      <Link
        href="/"
        className="fixed p-2 top-4 left-4 lg:left-12 z-50 invisible md:visible md:flex items-center justify-center rounded-full shadow shadow-slate-700 w-16 h-16"
      >
        <Image
          src="/LogoLetraRojaOpt.webp"
          alt="Home"
          width={40}
          height={40}
          className="contain"
        />
      </Link>
      <Link
        href="/"
        className="fixed bottom-2 right-4 lg:right-12 z-50 md:top-4 flex items-center justify-center p-1 rounded-full shadow shadow-slate-700 w-16 aspect-square lg:h-16"
      >
        <Image src="/home.svg" alt="Home" width={40} height={40} />
      </Link>
    </div>
  );
}

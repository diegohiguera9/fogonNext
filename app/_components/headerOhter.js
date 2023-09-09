import Link from "next/link";
import Image from "next/image";

export default function HeaderOther() {
  return (  
    <div className="fixed top-0 right-0 left-0 pb-4 h-10 md:h-14 border-b backdrop-blur-sm">
      <Link href="/">
        <Image
          className="relative object-contain"
          src="/logoApaisado.webp"
          alt="Home"
          sizes="100vw"
          fill
          priority
        />
      </Link>
    </div>
  );
}

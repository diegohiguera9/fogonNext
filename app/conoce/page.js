import Link from "next/link";
import Image from "next/image";
import SocialFooter from "../_components/socialFooter";

export default function Conoce() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-start p-8 md:justify-between bg-center bg-cover sm:bg-[url(https://res.cloudinary.com/dx5lqdwlg/image/upload/v1693998074/fondo_nc1m6l.webp)]"
      style={{}}
    >
      <div className="hidden fixed bottom-0 z-50 sm:block">
        <SocialFooter />
      </div>

      <div className="flex flex-col justify-start w-10/12 aspect-[32/9] mb-4">
        <Image
          className="relative object-contain"
          src="https://res.cloudinary.com/dx5lqdwlg/image/upload/v1693998074/logoApaisado_1_shu8ie.webp"
          alt="Next.js Logo"
          sizes="100vw"
          width={300}
          height={37}
        />
        <p className="text-rose-900 opacity-70">Expertos en carnes</p>
      </div>

      <div className="flex flex-col md:flex-row mb-8 rounded-lg backdrop-blur-xl backdrop-brightness-150 z-10">
        <Link
          href="/conoce/salonprimer"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Salón primer piso{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Conoce nuestro salon principal disponible en el primer piso de
            nuestras instalaciones
          </p>
        </Link>

        <Link
          href="/conoce/salonsegundo"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Salón eventos segundo piso{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Conoce nuestro salón diseñado para recibir eventos familiares y
            empresariales
          </p>
        </Link>

        <Link
          href="/conoce/petfriendly"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Zona Pet Friendly{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Tenemos un espacio pensado para que puedas venir con tus peluditos
          </p>
        </Link>

        <Link
          href="/conoce/parsexta"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Parqueaderos{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instalaciones y ubicación de nuestros parqueaderos
          </p>
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";
import SocialFooter from "./_components/socialFooter";
import Link from "next/link";

export default async function Home({}) {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-start p-8 md:justify-between bg-center bg-cover"
      style={{
        backgroundImage: "url(https://res.cloudinary.com/dx5lqdwlg/image/upload/v1693998074/fondo_nc1m6l.webp)",
      }}
    >
      {/* <div className="absolute bottom-0">Bogotá, Colombia · Calle 6#26-99</div> */}
      <div className="fixed bottom-0 z-50">
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
          href="/menu"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Menú{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Conoce precios, fotos e información adicional sobre nuestros
            productos
          </p>
        </Link>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Domicilios & Reservas{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Haz tu pedido o reserva tu mesa
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Ubicación{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Conoce más sobre la ubicación del restaurante
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Conoce más{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Fotos de nuestras instalaciones, reuniones realizadas y mucho más
          </p>
        </a>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function General() {
  return (
    <div className="min-h-screen w-full bg-red-300/30 px-4 py-14 lg:py-20 flex flex-col justify-center items-center">
      <p className="text-xl font-bold mb-4">
        Por favor selecciona la sede de tu interés
      </p>
      <div className="flex flex-col max-w-lg md:flex-row mb-8 rounded-lg backdrop-blur-xl backdrop-brightness-150 z-10">
        <Link
          href="/menu/sexta"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Calle Sexta{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Sede ubicada en el barrio Ricaurte, calle 6#26-99
          </p>
        </Link>

        <a
          href="/menu.pdf"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Gran Estación{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Sede ubicada en el CC Gran Estación
          </p>
        </a>
      </div>
    </div>
  );
}

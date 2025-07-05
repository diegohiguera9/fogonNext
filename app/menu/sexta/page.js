import Image from "next/image";

export default function Menu() {
  return (
    <>
      <div className="p-8">
        <p className="text-lg font-bold">
          Bienvendio al menú digital de El Fogon Llanero
        </p>
        <p className="text-base">
          Por favor selecciona alguna de las categorias de la parte superior
          para ver los productos de cada una.
        </p>
        <p className="text-md font-bold">
          Manejamos platos para compartir y platos personales, preguntale a tu
          mesero más detalles de cada plato
        </p>
        <br />
        <p className="text-xl font-bold">Información complementaria</p>
        <p className="text-lg font-bold">Terminos de la carne:</p>
        <div className="flex flex-col justify-start w-10/12 mb-4">
          <Image
            className="relative object-contain"
            src="/terminos.webp"
            alt="Cortes carne"
            sizes="100vw"
            width={500}
            height={500}
            priority
          />
        </div>
        <br />
        <p className="text-lg font-bold">Ubicación de los cortes:</p>
        <div className="flex flex-col justify-start w-10/12 aspect-square mb-4">
          <Image
            className="relative object-contain"
            src="https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694013050/cortesCarne_ryinkj.webp"
            alt="Cortes carne"
            sizes="100vw"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </>
  );
}

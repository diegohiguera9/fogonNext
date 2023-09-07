import Image from "next/image";

export default function ProductCard({ src, price, description, name }) {
  return (
    <>
      <div className="flex justify-start w-screen aspect-[21/9] col-span-5 mb-4 sm:max-w-md sm:w-72 grow">
        <div className="relative flex flex-col justify-start w-48 sm:w-80 aspect-video rounded-lg overflow-hidden">
          <Image
            className="object-cover"
            src={src}
            alt="Cortes carne"
            sizes="100vw"
            fill
          />
        </div>
        <div className="flex flex-col w-48 ml-4">
          <p className="text-base font-semibold">{name}</p>
          <p className="text-base font-normal italic">{`$ ${new Intl.NumberFormat("de-DE").format(price)}`}</p>
          <p className="text-sm font-light mt-1">{description}</p>
        </div>
      </div>
    </>
  );
}

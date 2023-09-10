import Image from "next/image";

export default function ProductCard({ src, price, description, name }) {
  return (
    <>
      <div className="flex justify-start max-h-fit col-span-5 mb-4 max-w-full sm:max-w-md sm:w-96 grow">
        <div className="relative flex flex-col justify-start w-48 md:w-80 aspect-video rounded-lg overflow-hidden">
          <Image
            className="object-cover"
            src={src}
            alt="Cortes carne"
            sizes="(min-width: 768px) 50vw, (min-width: 1200px) 100vw, 33vw"
            fill
            quality={40}
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

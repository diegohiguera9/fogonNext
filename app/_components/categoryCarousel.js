import Image from "next/image";
import Link from "next/link";

export default function CategoryCarousel() {
  const svgs = [
    { category: "Sopas", svg: "/soup.svg", href:'/menu/sopas' },
    { category: "Horno", svg: "/oven.svg", href:'/menu/horno' },
    { category: "Parrilla", svg: "/grill.svg", href:'/menu/parrilla' },
    { category: "Cocina", svg: "/pan.svg", href:'/menu/cocina' },
    { category: "Naturales", svg: "/fruit.svg", href:'/menu/jugos' },
    { category: "Bebidas", svg: "/drink.svg", href:'/menu/bebidas' },
    { category: "Postres", svg: "/icecream.svg", href:'/menu/postre' },
    { category: "Adcionales", svg: "/fries.svg", href:'/menu/adicionales' },
  ];
  return (
    <>
      <div className="flex mt-4 px-2 sm:justify-center">
        <div className="flex overflow-x-auto">
          {svgs.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.category}
                className="flex flex-col items-center p-2"
              >
                <Image
                  src={item.svg}
                  alt={item.category}
                  width={40}
                  height={40}
                />
                <p>{item.category}</p>
              </Link>
            );
          })}
        </div>
        <Image
          src="/scroll.svg"
          alt="scroll"
          width={30}
          height={30}
          className="animate-bounce rounded-md md:hidden"
        />
      </div>
    </>
  );
}

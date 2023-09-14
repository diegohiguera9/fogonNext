import Image from "next/image";

export default function FlexPhotos({photos}) {
  return (
    <div className="container flex flex-col gap-y-1">
      <div className="flex flex-col max-w-full gap-y-1">
        <Image
          className="h-auto max-w-full rounded-lg"
          src={
            photos[0]
          }
          alt="img"
          width={700}
          height={700}
          priority
        />
        <div className="flex gap-x-1">
          <Image
            className="w-1/2 aspect-[4/3] rounded-lg"
            src={
              photos[1]
            }
            alt="img"
            width={400}
            height={400}
          />
          <Image
            className="w-1/2 aspect-[4/3] rounded-lg"
            src={
              photos[2]
            }
            alt="img"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="flex max-w-full gap-x-1">
        <Image
          className="w-1/2 aspect-[1/1.5] rounded-lg pb-1"
          src={
            photos[3]
          }
          alt="img"
          width={400}
          height={400}
        />
        <div className="flex flex-col gap-y-1">
          <Image
            className="h-auto w-full rounded-lg"
            src={
              photos[4]
            }
            alt="img"
            width={400}
            height={400}
          />
          <Image
            className="h-auto w-full rounded-lg"
            src={
              photos[5]
            }
            alt="img"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="max-w-full">
        <Image
          className="h-auto max-w-full rounded-lg"
          src={
            photos[6]
          }
          alt="img"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}

import Image from "next/image";

export default function SocialFooter({ children }) {
  return (
    <>
    <div className="flex flex-col items-center px-8 md:flex-row md:w-screen md:justify-between bg-red-300 bg-origin-content">
      <div className="flex w-full justify-between mb-2 md:w-56">
        <a href="https://wa.me/573115898663">
          <Image
            src="/whatsapp.svg"
            alt="instaLogo"
            width={45}
            height={45}
          />
        </a>
        <a href="https://wa.me/573115898663">
          <Image
            src="/facebook.svg"
            alt="instaLogo"
            width={45}
            height={45}
          />
        </a>
        <a href="https://wa.me/573115898663">
          <Image
            src="/instagram.svg"
            alt="instaLogo"
            width={45}
            height={45}
          />
        </a>
        <a href="https://wa.me/573115898663">
          <Image
            src="/tiktok.svg"
            alt="instaLogo"
            width={45}
            height={45}
          />
        </a>
      </div>
      <p>Bogotá, Colombia · Calle 6#26-99</p>
    </div>
    </>
  );
}

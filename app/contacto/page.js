import Image from "next/image";
import Link from "next/link";

export default function Contacto() {
  return (
    <div className="max-w-2xl">
      <p className="text-2xl font-bold mb-4">Nuestras líneas de atención</p>
      <p className="mb-4">
        Con el fin de brindarte una atención personalizada, atendemos cualquier
        solicitud relacionada con domicilios o reservas en nuestra línea de
        WhatsApp 311 5898 663, a la cual puedes acceder dando click en el
        siguiente enlace.
      </p>
      <a
        href="https://wa.me/573115898663?text=Hola!%20visite%20tu%20pagina%20web,%20quiero%20más%20información"
        className="flex gap-x-2 mb-4 items-center border border-green-500 w-fit p-2 rounded-lg bg-emerald-50"
      >
        <Image src="/whatsapp.svg" alt="instaLogo" width={30} height={30} />
        <p>WhatsApp</p>
      </a>
      <p className="text-xl font-bold mb-4">Preguntas frecuentes</p>
      <p className="text-base font-bold">
        Debo reservar la mesa con anticipación?
      </p>
      <p className="mb-4">
        Para grupos de menos de 6 personas no hace falta que reserves el
        espacio, sin embargo, para grupos más grandes puedes comunicarte a
        WhatsApp y obtener más información.
      </p>
      <p className="text-base font-bold">
        Puedo reservar algun plato de Horno?
      </p>
      <p className="mb-4">
        Somos conscientes que nuestros platos de horno tienen disponibilidad
        limitada, esto por el tipo y tiempo de preparación (más de 6 horas), por
        tanto, puedes comunicarte con nosotros y apartar tu plato de horno
        preferido.
      </p>
      <p className="text-base font-bold">Manejan reservas empresariales?</p>
      <p className="mb-4">
        Contamos con unas instalaciones muy amplias, disponibles para ser los
        mejores anfitriones de tu evento empresarial, puedes ver algunas fotos
        dando{" "}
        <Link href="/conoce" className="font-bold">
          click aquí
        </Link>
        , NO COBRAMOS POR LA RESERVA DEL ESPACIO, sólo pagas lo consumido.
      </p>
    </div>
  );
}

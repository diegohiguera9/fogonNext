import GoogleMap from "../_components/googleMap";

export default function Ubicacion() {
  return (
    <div>
      <p className="text2xl font-bold mb-2">Visitanos - 2 Sedes</p>
      <p className="text-base font-bold italic">
        Bogotá, Sede centro <br /> Calle 6#26-99, Barrio Ricarute
      </p>
      <p className="text-base font-light mb-2">
        Contamos con dos parqueaderos 1 Sobre la calle 6, otro sobre la carrera
        26 al respaldo del restaurante
      </p>
      <GoogleMap
        link={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9433450856504!2d-74.0980316251704!3d4.6041676424871545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f991464fe6b09%3A0xba280c15cdfba043!2sEl%20Fog%C3%B3n%20Llanero!5e0!3m2!1ses!2sco!4v1694269043400!5m2!1ses!2sco"
        }
      />
      <p className="text-base font-bold italic mt-6">
        Bogotá, Sede Gran Estación <br /> C.C. Gran Estación, Costado alfiles,
        primer piso entrando por la calle 26
      </p>
      <p className="text-base font-light mb-2">
        Sede inaugurada en Diciembre de 2023, mismo sabor, misma tradición
      </p>
      <GoogleMap
        link={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6978950585817!2d-74.10406592526148!3d4.647871495326941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bee0fd3d731%3A0x7d08fc6aabd53a33!2sEl%20Fog%C3%B3n%20Llanero!5e0!3m2!1sen!2sco!4v1742649592461!5m2!1sen!2sco"
        }
      />
    </div>
  );
}

import GoogleMap from "../_components/googleMap";

export default function Ubicacion() {
  return (
    <div>
      <p className="text2xl font-bold mb-2">Visitanos - Única Sede</p>
      <p className="text-base font-light italic">
        Bogotá, Calle 6#26-99, Barrio Ricarute
      </p>
      <p className="text-base font-light mb-2">
        Contamos con dos parqueaderos 1 Sobre la calle 6, otro sobre la carrera
        26 al respaldo del restaurante
      </p>
      <GoogleMap />
    </div>
  );
}

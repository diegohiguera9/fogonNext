export default function ProductTitle({product, copy}) {
  return (
    <>
      <p className="font-bold text-lg mb-0 text-rose-900">{product}</p>
      <p className="font-extralight italic text-base mb-4">{copy}</p>
    </>
  );
}

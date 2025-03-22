export default function GoogleMap({link}) {
  return (
    <iframe
      src={link}
      className="w-full md:w-9/12 lg:w-5/12 aspect-square"
      allowFullscreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

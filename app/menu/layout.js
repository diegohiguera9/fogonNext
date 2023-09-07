import CategoryCarousel from "../_components/categoryCarousel";

export const metadata = {
  title: "El Fogon Llanero",
  description: "Menu El Fogon Llanero",
};

export default async function RootLayout({ children }) {
  return (
    <div className="relative sm:px-4 md:px-8">
      <div className="fixed top-0 left-0 right-0 backdrop-blur-lg z-50">
        <CategoryCarousel/>
      </div>
      <div className="relative top-28 z-20">{children}</div>
    </div>
  );
}

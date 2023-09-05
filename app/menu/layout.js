import CategoryCarousel from "../_components/categoryCarousel";

export const metadata = {
  title: "El Fogon Llanero",
  description: "Menu El Fogon Llanero",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <CategoryCarousel />
      <div>{children}</div>
    </div>
  );
}

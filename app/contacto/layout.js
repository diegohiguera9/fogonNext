import HeaderOther from "../_components/headerOhter";
import SocialFooter from "../_components/socialFooter";

export default async function RootLayout({ children }) {
  return (
    <div lang="es">
      <HeaderOther />
      <div className="px-4 py-14 lg:py-20">{children}</div>
    </div>
  );
}

export default async function RootLayout({ children }) {
  return (
    <div lang="es">
      <div className={inter.className}>{children}</div>
    </div>
  )
}
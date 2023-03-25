type Props = {
  children: JSX.Element
}
export default function DashboardRootLayout({children}: Props) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
          {children}
      </body>
    </html>
  )
}
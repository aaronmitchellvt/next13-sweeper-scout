type Props = {
  children: JSX.Element
}
export default function AuthRootLayout({children}: Props) {
  return (
    <html lang="en">
      <head />
      <body className="">
          {children}
      </body>
    </html>
  )
}
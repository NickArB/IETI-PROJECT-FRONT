export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
        <title>AGRO-GNOME</title>
        <body>{children}</body>
    </html>
  )
}

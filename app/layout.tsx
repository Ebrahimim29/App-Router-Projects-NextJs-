import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'My Project Next.Js',
  description: 'User Management'
}


export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstarp.min.css'/>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';

import './globals.css'

export const metadata = {
  title: 'AirB2C',
  description: 'Trouvez des hébergements uniques à des prix incroyables dans plus de 200 pays. Sentez-vous chez vous partout dans le monde avec Airbnb.',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
       <body className={font.className}>
        
        <Navbar />

        {children}
        </body>
    </html>
  )
}
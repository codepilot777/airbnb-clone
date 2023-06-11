import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import ToastProvider from './providers/ToastProvider';

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToastProvider />
        <RegisterModal title="Hello World" isOpen={true} actionLabel="Submit" />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

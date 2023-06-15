import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import ToastProvider from './providers/ToastProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from '@/actions/getCurrentUser';
import RentModal from './components/modals/RentModal';

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar currentUser={currentUser} />
        <ToastProvider />
        <RentModal />
        <RegisterModal />
        <LoginModal />
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}

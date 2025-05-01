import './globals.css'
import { ThemeProvider } from './providers/ThemeProvider'

export const metadata = {
  title: 'توجيهي إنجليزي',
  description: 'تدريب تفاعلي على اللغة الإنجليزية للتوجيهي في الأردن',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

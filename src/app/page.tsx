'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">مرحباً بكم في موقع توجيهي إنجليزي</h1>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        بدّل للـ{theme === 'light' ? 'ليلي' : 'نهاري'}
      </button>
    </main>
  )
}

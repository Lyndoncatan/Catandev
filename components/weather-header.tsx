import Link from "next/link"

export default function WeatherHeader() {
  return (
    <header className="bg-[#3498db] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Weathery
          </Link>
          <nav className="flex space-x-6">
            <Link href="/" className="hover:underline">
              Dashboard
            </Link>
            <Link href="/analytics" className="hover:underline">
              Analytics
            </Link>
            <Link href="/alerts" className="hover:underline">
              Alerts
            </Link>
            <Link href="/settings" className="hover:underline">
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}


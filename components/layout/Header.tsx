import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">

      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm text-gray-600">

          <p>Complete Security Solutions</p>

          <div className="flex items-center gap-5">
            <a
              href="tel:+911234567890"
              className="hover:text-black"
            >
              Call: +91 12345 67890
            </a>

            <Link
              href="/contact"
              className="hover:text-black"
            >
              Get a Quote
            </Link>
          </div>

        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-2xl font-bold tracking-tight text-gray-900"
        >
          Security
          <span className="text-gray-500">Solutions</span>
        </Link>

        {/* Search */}
        <div className="hidden max-w-xl flex-1 md:block">
          <div className="flex overflow-hidden rounded-md border border-gray-300">

            <input
              type="text"
              placeholder="Search products, solutions and services..."
              className="w-full px-4 py-2.5 text-sm outline-none"
            />

            <button
              type="button"
              className="bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
            >
              Search
            </button>

          </div>
        </div>

        {/* Contact */}
        <div className="hidden shrink-0 text-right md:block">

          <p className="text-xs text-gray-500">
            Need help?
          </p>

          <p className="font-semibold text-gray-900">
            +91 12345 67890
          </p>

        </div>

      </div>

      {/* Navigation */}
      <nav className="hidden border-t border-gray-100 md:block">

        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 py-3 text-sm font-medium text-gray-700">

          <Link href="/" className="hover:text-black">
            Home
          </Link>

          <Link href="/products" className="hover:text-black">
            Products
          </Link>

          <Link href="/solutions" className="hover:text-black">
            Solutions
          </Link>

          <Link href="/services" className="hover:text-black">
            Services
          </Link>

          <Link href="/projects" className="hover:text-black">
            Projects
          </Link>

          <Link href="/about" className="hover:text-black">
            About Us
          </Link>

          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>

        </div>

      </nav>

      {/* Mobile Header */}
      <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3 md:hidden">

        <button
          type="button"
          className="rounded border border-gray-300 px-3 py-2 text-sm"
        >
          Menu
        </button>

        <Link
          href="/contact"
          className="rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white"
        >
          Get Quote
        </Link>

      </div>

    </header>
  );
}
export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero Section */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Complete Security Solutions
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Protecting What
              <span className="block text-gray-500">
                Matters Most
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Professional security products, intelligent surveillance,
              access control, installation and annual maintenance solutions
              for homes, businesses and institutions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="/contact"
                className="rounded-md bg-gray-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700"
              >
                Get a Free Quote
              </a>

              <a
                href="/products"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Explore Products
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* Security Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              What We Provide
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Security Solutions for Every Need
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              From individual security products to complete integrated
              security systems, we help you choose and implement the right
              solution.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* CCTV */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md">

              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-xl">
                📹
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                CCTV & Surveillance
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                IP cameras, network video recorders, monitoring systems and
                intelligent surveillance solutions.
              </p>

              <a
                href="/solutions/cctv"
                className="mt-4 inline-block text-sm font-semibold text-gray-900 hover:underline"
              >
                Explore CCTV →
              </a>

            </div>


            {/* Access Control */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md">

              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-xl">
                🔐
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Access Control
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Biometric systems, smart locks, RFID, attendance and secure
                entry management.
              </p>

              <a
                href="/solutions/access-control"
                className="mt-4 inline-block text-sm font-semibold text-gray-900 hover:underline"
              >
                Explore Access Control →
              </a>

            </div>


            {/* Intrusion */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md">

              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-xl">
                🚨
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Intrusion & Alarm
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Alarm systems, sensors and intrusion detection solutions for
                residential and commercial properties.
              </p>

              <a
                href="/solutions/intrusion"
                className="mt-4 inline-block text-sm font-semibold text-gray-900 hover:underline"
              >
                Explore Alarms →
              </a>

            </div>


            {/* Fire & Safety */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md">

              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-xl">
                🛡️
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Safety & Protection
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Integrated safety and protection solutions designed around
                your property's specific requirements.
              </p>

              <a
                href="/solutions"
                className="mt-4 inline-block text-sm font-semibold text-gray-900 hover:underline"
              >
                Explore Solutions →
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* Services Section */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Beyond Products
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Complete Security Services
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                We don't simply sell security products. We help you understand
                your security requirements, design the right solution,
                install the system and provide ongoing support.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h3 className="font-semibold">
                  Site Assessment
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Understand your property and identify security requirements.
                </p>
              </div>


              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h3 className="font-semibold">
                  System Design
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Develop practical and scalable security solutions.
                </p>
              </div>


              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h3 className="font-semibold">
                  Installation
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Professional installation and system commissioning.
                </p>
              </div>


              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h3 className="font-semibold">
                  AMC & Support
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Ongoing maintenance and technical support.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gray-900 py-16 text-white">

        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold tracking-tight">
            Need Help Securing Your Property?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Tell us about your property and security requirements.
            Our team can help you identify the right products and solution.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-md bg-white px-7 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
          >
            Talk to a Security Expert
          </a>

        </div>

      </section>

    </main>
  );
}
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Security Products
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Security Products
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Explore professional security products for surveillance,
            access control and complete security solutions.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {products.length}
            </span>{" "}
            product{products.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const discount =
              product.mrp && product.mrp > product.price
                ? Math.round(
                    ((product.mrp - product.price) / product.mrp) * 100
                  )
                : null;

            return (
              <article
                key={product.id}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Product Image */}
                <Link href={`/products/${product.slug}`}>
                  <div className="flex h-64 items-center justify-center bg-gray-100">
                    <div className="text-center text-sm text-gray-400">
                      Product Image
                    </div>
                  </div>
                </Link>

                {/* Product Information */}
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      {product.category}
                    </span>

                    {product.inStock ? (
                      <span className="text-xs font-medium text-green-600">
                        In Stock
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-red-600">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  <Link href={`/products/${product.slug}`}>
                    <h2 className="text-xl font-semibold text-gray-900 hover:text-gray-600">
                      {product.name}
                    </h2>
                  </Link>

                  <p className="mt-1 text-sm text-gray-500">
                    {product.brand}
                  </p>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                    {product.shortDescription}
                  </p>

                  {/* Rating */}
                  {product.rating !== undefined && (
                    <div className="mt-4 flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-900">
                        ★ {product.rating}
                      </span>

                      {product.reviewCount !== undefined && (
                        <span className="text-gray-500">
                          ({product.reviewCount} reviews)
                        </span>
                      )}
                    </div>
                  )}

                  {/* Price */}
                  <div className="mt-4 flex items-end gap-3">
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    {product.mrp && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{product.mrp.toLocaleString("en-IN")}
                      </span>
                    )}

                    {discount && (
                      <span className="text-sm font-semibold text-green-600">
                        {discount}% off
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 rounded-md bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-700"
                    >
                      View Product
                    </Link>

                    <Link
                      href="/contact"
                      className="flex-1 rounded-md border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
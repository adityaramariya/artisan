export default function Subscribe() {
  return (
    <section className="w-full bg-gray-900 py-16" id="newsLetter">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center text-white">
          {/* Title */}
          <h2 className="mb-4 text-4xl font-bold">Stay Inspired</h2>

          {/* Description */}
          <p className="mb-8 text-lg leading-8 text-gray-300">
            Subscribe to our newsletter and receive photography tips,
            behind-the-scenes stories, latest projects, special offers, and
            updates from our studio.
          </p>

          {/* Newsletter Form */}
          <form className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-lg border border-gray-700 bg-white px-3 py-4 text-gray-900 outline-none placeholder:text-gray-500 focus:border-white"
            />

            <button
              type="submit"
              className="h-14 rounded-lg bg-white px-8 font-semibold text-gray-900 transition hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>

          {/* Small Note */}
          <p className="mt-5 text-sm text-gray-400">
            No spam. Only photography inspiration and updates.
          </p>
        </div>
      </div>
    </section>
  );
}

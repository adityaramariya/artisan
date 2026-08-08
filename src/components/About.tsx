export default function About() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Premium Film & Photography Services
          </h2>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800"
              alt="Craftsmanship"
              className="h-[450px] w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="mb-4 text-3xl font-semibold text-gray-900">
              About Cinematic Weddings by Artisan
            </h3>

            <p className="leading-8 text-gray-600">
              Cinematic Weddings by Artisan is a leading wedding film and
              photography studio based in India. We focus on creating timeless,
              emotional, and luxurious wedding stories through cinematic films
              and candid photography. With over 15 years of experience, our team
              captures authentic moments that families cherish for generations.
              We specialise in destination weddings, pre-wedding shoots, and
              luxury albums, ensuring elegant memories for every couple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

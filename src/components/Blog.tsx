import Image from "next/image";

export default function Blog() {
  const blogs = [
    {
      title: "How to Choose the Perfect Wedding Photography Style",
      description:
        "Explore different wedding photography styles and learn how to choose the right approach to capture your special day.",
      category: "Wedding Photography",
      date: "August 5, 2026",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
      title: "10 Tips for Better Portrait Photography",
      description:
        "Learn professional portrait photography techniques, lighting tips, and composition ideas to create stunning images.",
      category: "Photography Tips",
      date: "July 28, 2026",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
    {
      title: "Behind The Scenes of a Professional Photoshoot",
      description:
        "Take a look behind the camera and discover how professional photographers plan and execute creative shoots.",
      category: "Studio Stories",
      date: "July 15, 2026",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
    },
  ];

  return (
    <section className="w-full py-16" id="blog">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Latest From Our Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-[260px] w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-sm text-gray-500">
                  <span>{blog.category}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  {blog.title}
                </h3>

                <p className="mb-5 leading-7 text-gray-600">
                  {blog.description}
                </p>

                <button className="font-semibold text-gray-900 hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

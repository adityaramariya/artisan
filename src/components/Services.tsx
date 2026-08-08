import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Wedding Photography",
      description:
        "We capture the emotions, traditions, and unforgettable moments of your wedding day through timeless storytelling photography.",
      features: [
        "Full-day wedding coverage",
        "Candid and traditional photography",
        "Premium edited gallery",
        "Custom wedding albums",
      ],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
      title: "Portrait Photography",
      description:
        "Professional portrait sessions designed to highlight your personality, confidence, and unique style.",
      features: [
        "Individual portraits",
        "Family sessions",
        "Studio and outdoor shoots",
        "Professional retouching",
      ],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
    {
      title: "Product Photography",
      description:
        "High-quality product images created for brands, e-commerce stores, advertisements, and marketing campaigns.",
      features: [
        "Product showcases",
        "Lifestyle photography",
        "Creative compositions",
        "Professional editing",
      ],
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      title: "Pre-Wedding Photography",
      description:
        "Romantic couple sessions that tell your story through beautiful locations and cinematic photography.",
      features: [
        "Location shoots",
        "Creative concepts",
        "Couple portraits",
        "Cinematic editing",
      ],
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    },
    {
      title: "Event Photography",
      description:
        "Professional coverage for celebrations, corporate events, and special occasions.",
      features: [
        "Event coverage",
        "Live moments",
        "Professional lighting",
        "Fast delivery",
      ],
      image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde",
    },
    {
      title: "Fashion Photography",
      description:
        "Creative fashion photography focused on style, expression, and visual storytelling.",
      features: [
        "Fashion campaigns",
        "Editorial shoots",
        "Model portfolios",
        "Creative direction",
      ],
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    },
    {
      title: "Corporate Photography",
      description:
        "Professional images that represent your company, team, and brand identity.",
      features: [
        "Business portraits",
        "Team photography",
        "Office photography",
        "Brand storytelling",
      ],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    },
    {
      title: "Drone Photography",
      description:
        "Unique aerial perspectives for properties, landscapes, and outdoor events.",
      features: [
        "Aerial photography",
        "Property showcases",
        "Outdoor events",
        "Cinematic visuals",
      ],
      image: "https://images.unsplash.com/photo-1506947411487-a56738267384",
    },
  ];

  return (
    <section className="w-full py-16" id="services">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Photography Services
          </h2>
        </div>

        {services.map((service, index) => (
          <div
            key={service.title}
            className="mb-20 grid items-center gap-10 md:grid-cols-[2fr_1fr]"
          >
            {/* Image */}
            <div
              className={`relative h-[400px] overflow-hidden rounded-xl ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="mb-4 text-3xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mb-6 leading-8 text-gray-600">
                {service.description}
              </p>

              <ul className="space-y-3 text-gray-600">
                {service.features.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

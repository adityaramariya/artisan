export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-4xl font-bold text-gray-900">contact us </h2>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl md:grid-cols-2">
        <div className="px-6 py-2 md:pr-12 lg:pr-16">
          <p className="mb-10 text-lg leading-8 text-gray-600">
            We'd love to hear from you. Whether you have questions about our
            photography services, wedding packages, or would like to discuss
            your upcoming event, our team is here to help.
          </p>

          {/* Address + Contact */}
          <div className="mb-10 grid gap-8 sm:grid-cols-2">
            {/* Address */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Address
              </h3>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Tilak+Ward+Station+Road+Seoni+MP+480661+India"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-7 text-gray-600 transition hover:text-black hover:underline"
              >
                Tilak Ward
                <br />
                Station Road, Seoni, MP 480661
                <br />
                India
              </a>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Contact
              </h3>

              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium text-gray-800">Phone:</span>{" "}
                  <a
                    href="tel:+917507696911"
                    className="transition hover:text-black hover:underline"
                  >
                    +91 7507696911
                  </a>
                </p>

                <p>
                  <span className="font-medium text-gray-800">Email:</span>{" "}
                  <a
                    href="mailto:info@artisan.com"
                    className="transition hover:text-black hover:underline"
                  >
                    info@artisan.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Working Hours
            </h3>

            <div className="max-w-lg space-y-3">
              {[
                ["Monday", "9:00 AM - 6:00 PM"],
                ["Tuesday", "9:00 AM - 6:00 PM"],
                ["Wednesday", "9:00 AM - 6:00 PM"],
                ["Thursday", "9:00 AM - 6:00 PM"],
                ["Friday", "9:00 AM - 6:00 PM"],
                ["Saturday", "10:00 AM - 4:00 PM"],
                ["Sunday", "Closed"],
              ].map(([day, time]) => (
                <div
                  key={day}
                  className="flex justify-between border-b border-gray-200 pb-2"
                >
                  <span className="font-medium text-gray-800">{day}</span>

                  <span className="text-gray-600">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Map */}
        <div className="relative h-[600px] md:w-[calc(50vw+((100vw-80rem)/2))]">
          <iframe
            src="https://www.google.com/maps?q=Tilak+Ward,+Station+Road,+Seoni+MP+480661,+India&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Artisan Studio Location"
          />
        </div>
      </div>
    </section>
  );
}

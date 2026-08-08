"use client";

import { useEffect, useRef, useState } from "react";

export const BannerVideo = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFloatingQuote, setShowFloatingQuote] = useState(false);

  const bannerRef = useRef(null);

  const openModal = () => {
    setShowModal(true);

    setTimeout(() => {
      setIsQuoteOpen(true);
    }, 10);
  };

  const closeModal = () => {
    setIsQuoteOpen(false);

    setTimeout(() => {
      setShowModal(false);
    }, 300);
  };

  // Show floating Get Quote button
  // after the banner is scrolled out of view
  useEffect(() => {
    const banner = bannerRef.current;

    if (!banner) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingQuote(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(banner);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* =========================
          BANNER
      ========================== */}
      <section
        ref={bannerRef}
        className="relative h-[70vh] min-h-[550px] w-full overflow-hidden bg-gray-950"
      >
        {/* =========================
            DESKTOP / TABLET VIDEO
        ========================== */}

        <div className="absolute inset-0 hidden overflow-hidden md:block">
          <iframe
            className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.05]"
            src="https://www.youtube.com/embed/iUtnZpzkbG8?autoplay=1&mute=1&loop=1&playlist=iUtnZpzkbG8&controls=0&rel=0&playsinline=1"
            title="Artisan Studio Story"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* =========================
            MOBILE BACKGROUND IMAGE
        ========================== */}
        <div
          className="absolute inset-0 block bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80')",
          }}
        />

        {/* =========================
            DARK OVERLAY
        ========================== */}
        <div className="absolute inset-0 bg-black/50" />

        {/* =========================
            BANNER CONTENT
        ========================== */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-3xl px-5 text-center text-white sm:px-6">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
              Welcome to Artisan
            </h1>

            <p className="text-base sm:text-lg">
              Premium Wedding Films & Photography
            </p>

            <p className="mt-1 text-base sm:text-lg">
              Crafting timeless, cinematic wedding stories in India
            </p>

            {/* Banner Get Quote Button */}
            <button
              type="button"
              onClick={openModal}
              className="mt-6 rounded-md bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          FLOATING GET QUOTE BUTTON
      ========================== */}
      <div
        className={`fixed bottom-25 right-5 z-50 transition-all duration-300 sm:right-8 ${
          showFloatingQuote
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={openModal}
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-gray-800 sm:px-7 sm:py-3.5 sm:text-base"
        >
          Get Quote
        </button>
      </div>

      {/* =========================
          QUOTE MODAL
      ========================== */}
      {showModal && (
        <div
          className={`fixed inset-0 z-[100] flex w-full items-center justify-center overflow-x-hidden bg-black/70 px-3 py-4 transition-opacity duration-300 sm:px-4 ${
            isQuoteOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative flex min-w-0 w-full max-w-[calc(100vw-1.5rem)] max-h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-xl bg-white shadow-2xl transition-all duration-300 sm:max-w-3xl sm:max-h-[calc(100vh-3rem)] ${
              isQuoteOpen ? "translate-y-0 scale-100" : "translate-y-5 scale-95"
            }`}
          >
            {/* Modal Header */}
            <div className="relative shrink-0 border-b border-gray-200 px-4 py-4 sm:px-6 sm:py-5">
              <h2 className="pr-10 text-xl font-bold text-gray-900 sm:text-2xl">
                Get a Quote
              </h2>

              <p className="mt-1 pr-8 text-xs text-gray-500 sm:text-sm">
                Tell us about your wedding and we will get back to you.
              </p>

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close quote form"
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-2xl text-gray-500 transition hover:bg-gray-100 hover:text-black sm:right-5 sm:h-9 sm:w-9"
              >
                ×
              </button>
            </div>

            {/* Modal Form */}
            <form className="min-w-0 overflow-y-auto overflow-x-hidden px-4 py-4 sm:px-6 sm:py-5">
              <div className="min-w-0 space-y-3 sm:space-y-4">
                {/* Name / Phone */}
                <div className="grid min-w-0 gap-3 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input-style min-w-0"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input-style min-w-0"
                  />
                </div>

                {/* Email / Event Type */}
                <div className="grid min-w-0 gap-3 md:grid-cols-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input-style min-w-0"
                  />

                  <select className="input-style min-w-0">
                    <option value="">Select Event Type</option>
                    <option>Wedding</option>
                    <option>Pre Wedding</option>
                    <option>Reception</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Event Date / Event Days */}
                <div className="grid min-w-0 gap-3 md:grid-cols-2">
                  <div className="min-w-0">
                    <label className="mb-1 block text-xs text-gray-600 sm:text-sm">
                      Event Date
                    </label>

                    <input type="date" className="input-style min-w-0" />
                  </div>

                  <div className="min-w-0">
                    <label className="mb-1 block text-xs text-gray-600 sm:text-sm">
                      Event Days
                    </label>

                    <select className="input-style min-w-0">
                      <option>1 Day</option>
                      <option>2 Days</option>
                      <option>3 Days</option>
                      <option>4+ Days</option>
                    </select>
                  </div>
                </div>

                {/* Location */}
                <input
                  type="text"
                  placeholder="Event Location / Venue"
                  className="input-style min-w-0"
                />

                {/* Services / Guests */}
                <div className="grid min-w-0 gap-3 md:grid-cols-2">
                  <select className="input-style min-w-0">
                    <option value="">Services Required</option>
                    <option>Photography</option>
                    <option>Cinematic Wedding Film</option>
                    <option>Photography + Film</option>
                  </select>

                  <input
                    type="number"
                    placeholder="Approximate Guests"
                    className="input-style min-w-0"
                  />
                </div>

                {/* Additional Details */}
                <textarea
                  rows={3}
                  placeholder="Additional details"
                  className="input-style min-w-0 resize-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800 sm:text-base"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

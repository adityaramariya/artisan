export default function OurStory() {
  return (
    <section id="story" className="relative w-full py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-4xl font-bold text-gray-900">our story</h2>
        </div>
      </div>

      {/* Full Width Video */}
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute inset-0 h-full w-full scale-[1]"
            src="https://www.youtube.com/embed/iUtnZpzkbG8?autoplay=1&mute=1&loop=1&playlist=iUtnZpzkbG8&controls=0&rel=0&playsinline=1"
            title="Artisan Studio Story"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />

          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 py-16 mx-auto max-w-7xl">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-sm text-gray-600 uppercase tracking-wide">
            Your go-to platform for 3D printing files
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Discover what’s possible with 3D printing
          </h1>
          <p className="text-lg text-gray-700">
            Join our community of creators and explore a vast library of user-submitted models.
          </p>
          <div className="mt-4">
            <a
              href="/3d-models"
              className="inline-block px-6 py-3 border-2 border-black text-black font-medium transition duration-200 hover:bg-black hover:text-white"
            >
              Browse Models
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/hero-image.png"
            alt="3D printing graphic"
            className="w-[350px] h-auto"
          />
        </div>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <h1 className="text-4xl font-bold text-black">
        TexasBarbers
      </h1>

      <p className="mt-4 text-lg text-gray-600 text-center max-w-md">
        Find trusted barbers across Texas. Real shops. No noise.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/city/houston"
          className="px-6 py-3 bg-black text-white rounded-md"
        >
          Find barbers
        </a>

        <a
          href="/list-your-shop"
          className="px-6 py-3 border border-black rounded-md"
        >
          List your shop
        </a>
      </div>
    </main>
  );
}

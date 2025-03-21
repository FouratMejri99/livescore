export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-gray-600">A TypeScript-powered application</p>
      </header>

      <main className="flex flex-col gap-8 items-center sm:items-start">
        <section className="w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
          <p className="text-gray-700">
            This is a sample TypeScript page with a responsive layout.
          </p>
        </section>
      </main>

      <footer className="flex gap-6 items-center justify-center text-sm text-gray-500">
        <p>© 2024 My App</p>
        <span>•</span>
        <a href="#" className="hover:text-gray-700">
          About
        </a>
        <span>•</span>
        <a href="#" className="hover:text-gray-700">
          Contact
        </a>
      </footer>
    </div>
  );
}

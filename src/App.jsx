function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <header className="flex items-center justify-between p-4 border-b shadow-sm">
        <div className="text-2xl font-bold">Chaotic Labs</div>
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-200 rounded">Cart</button>
        </div>
      </header>

      <section className="text-center py-20 bg-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Streetwear for the Bold</h1>
        <p className="text-lg md:text-xl mb-6">Jerseys, Tees, Shirts, Pants — All with Chaos in Mind</p>
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-blue-700">Shop Now</button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        {['Jersey', 'T-Shirts', 'Shirts', 'Pants'].map((category) => (
          <div key={category} className="p-4 text-center border rounded shadow hover:shadow-xl">
            <div className="text-xl font-semibold mb-2">{category}</div>
            <p className="text-sm text-gray-500">Explore {category} drops</p>
          </div>
        ))}
      </section>

      <footer className="text-center p-6 mt-10 border-t text-sm text-gray-600">
        © {new Date().getFullYear()} Chaotic Labs. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <header className="flex justify-between items-center max-w-5xl mx-auto mb-12">
        <h1 className="text-2xl font-bold"> Vscales Media</h1>
        <a href="#waitlist" className="text-sm font-medium text-blue-600 hover:underline">
          Join Waitlist
        </a>
      </header>

      <main className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          Automate Your Business <br /> with AI Agents
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          We help fast-moving teams eliminate manual tasks using intelligent systems powered by GPT and automation.
        </p>

        <form
          id="waitlist"
          action="https://formspree.io/f/yourFormID"
          method="POST"
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="px-4 py-3 border border-gray-300 rounded-md w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Join Waitlist
          </button>
        </form>
      </main>

      <footer className="mt-24 text-center text-sm text-gray-500">
        Built with GPT by [AutomationsbyJay] · Powered by React + Vite
      </footer>
    </div>
  );
}

export default App;
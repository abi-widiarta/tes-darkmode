import Navbar from "./components/Navbar";
import Hero from "./components/organism/Hero";

export default function App() {
  return (
    <div className="w-full h-screen bg-white dark:bg-gray-950 transition ">
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <Hero />
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold text-blue-900 mb-4">
        TutorAfrica AI
      </h1>

      <p className="text-xl text-gray-700 max-w-2xl">
        Learn WAEC, JAMB, Coding, Agriculture and AI Skills built for African students.
      </p>

      <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-900">
        Start Learning
      </button>
    </main>
  );
}
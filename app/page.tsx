export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* Hero */}
      <section className="bg-blue-50 px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
          TutorAfrica AI
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
          AI-powered learning built for African primary and secondary school
          students. Learn smarter with low-data education tools, progress
          tracking, parent feedback, and school performance support.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-900">
            Start Learning
          </button>

          <button className="border border-blue-700 text-blue-700 px-8 py-4 rounded-xl hover:bg-blue-100">
            Explore Subjects
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Built for African Learning Challenges
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl shadow-md bg-white">
            <h3 className="text-2xl font-semibold mb-4">
              Primary & Secondary Learning
            </h3>
            <p className="text-gray-600">
              Supports both Arts and Science students with age-based learning.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-md bg-white">
            <h3 className="text-2xl font-semibold mb-4">
              Low Internet Learning
            </h3>
            <p className="text-gray-600">
              Lightweight pages designed for unstable data and low-bandwidth areas.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-md bg-white">
            <h3 className="text-2xl font-semibold mb-4">
              Parent & School Feedback
            </h3>
            <p className="text-gray-600">
              Progress summaries, weak-topic alerts, and accountability support.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Levels */}
      <section className="bg-gray-100 py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-10">Learning Levels</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Primary",
            "Junior Secondary",
            "Senior Secondary",
            "Arts",
            "Science",
          ].map((level) => (
            <span
              key={level}
              className="bg-blue-700 text-white px-6 py-3 rounded-full"
            >
              {level}
            </span>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-10">Subjects We Support</h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {[
            "Mathematics",
            "English",
            "Biology",
            "Chemistry",
            "Physics",
            "Literature",
            "Government",
            "Economics",
            "CRS / IRS",
            "Coding",
          ].map((subject) => (
            <span
              key={subject}
              className="bg-gray-200 px-5 py-3 rounded-full"
            >
              {subject}
            </span>
          ))}
        </div>
      </section>

      {/* Why Different */}
      <section className="bg-blue-900 text-white py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Why TutorAfrica AI?
        </h2>

        <p className="max-w-3xl mx-auto text-lg">
          Built for African students facing poor internet, limited tutoring,
          weak study consistency, and lack of parent accountability.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-black text-white">
        <p>© 2026 TutorAfrica AI — Smart learning for African students.</p>
      </footer>
    </main>
  );
}
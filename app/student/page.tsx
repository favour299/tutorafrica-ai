export default function StudentPage() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-blue-700">
        TutorAfrica AI - Student Dashboard
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Learn smarter with free AI-powered education for African students.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="p-5 border rounded-xl">
          📚 My Subjects
          <p>Primary, Junior Secondary, Senior Secondary, Arts & Science</p>
        </div>

        <div className="p-5 border rounded-xl">
          🧠 AI Tutor Chat
          <p>Ask questions and get instant explanations</p>
        </div>

        <div className="p-5 border rounded-xl">
          📝 Assignments
          <p>Track homework and school tasks</p>
        </div>

        <div className="p-5 border rounded-xl">
          📈 Performance Tracker
          <p>Monitor grades and weak subjects</p>
        </div>

        <div className="p-5 border rounded-xl">
          🎯 WAEC / JAMB Prep
          <p>Exam practice for African students</p>
        </div>

        <div className="p-5 border rounded-xl">
          📥 Offline Lessons
          <p>Download lessons for low internet areas</p>
        </div>

        <div className="p-5 border rounded-xl">
          🏆 Rewards & Badges
          <p>Motivate students to keep learning</p>
        </div>

        <div className="p-5 border rounded-xl">
          ⏰ Study Timetable
          <p>Organize study hours and revision plans</p>
        </div>

        <div className="p-5 border rounded-xl">
          🔔 School Announcements
          <p>Receive updates from school</p>
        </div>

        <div className="p-5 border rounded-xl">
          👨‍👩‍👧 Parent Feedback
          <p>Parents can monitor learning progress</p>
        </div>

      </div>
    </main>
  );
}
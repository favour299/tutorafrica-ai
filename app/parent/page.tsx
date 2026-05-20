export default function ParentPage() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-blue-700">
        TutorAfrica AI - Parent Dashboard
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Track your child’s learning, performance, and school activities.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="p-5 border rounded-xl">
          👨‍👩‍👧 Child Performance
          <p>Monitor grades and subject scores</p>
        </div>

        <div className="p-5 border rounded-xl">
          📈 Strengths & Weak Areas
          <p>See subjects where your child needs help</p>
        </div>

        <div className="p-5 border rounded-xl">
          📝 Assignment Tracking
          <p>Check homework and completed tasks</p>
        </div>

        <div className="p-5 border rounded-xl">
          ⏰ Attendance Summary
          <p>View attendance and school participation</p>
        </div>

        <div className="p-5 border rounded-xl">
          🔔 School Notifications
          <p>Receive school announcements and updates</p>
        </div>

        <div className="p-5 border rounded-xl">
          💬 Teacher Feedback
          <p>Read comments from teachers</p>
        </div>

        <div className="p-5 border rounded-xl">
          📚 Study Progress
          <p>Track learning progress over time</p>
        </div>

        <div className="p-5 border rounded-xl">
          🧠 AI Learning Tips
          <p>Suggestions to improve study habits</p>
        </div>

        <div className="p-5 border rounded-xl">
          🚨 Low Performance Alerts
          <p>Get alerts when grades drop</p>
        </div>

        <div className="p-5 border rounded-xl">
          📊 Weekly Reports
          <p>View overall academic reports</p>
        </div>

      </div>
    </main>
  );
}
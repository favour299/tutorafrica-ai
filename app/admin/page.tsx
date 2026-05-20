export default function AdminPage() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-blue-700">
        TutorAfrica AI - Admin Dashboard
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Manage schools, users, analytics, and platform security.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="p-5 border rounded-xl">
          🏫 Total Schools
          <p>Track all registered schools</p>
        </div>

        <div className="p-5 border rounded-xl">
          👨🏾‍🎓 Total Students
          <p>Monitor learners across the platform</p>
        </div>

        <div className="p-5 border rounded-xl">
          👩🏾‍🏫 Total Teachers
          <p>Manage teacher accounts and activity</p>
        </div>

        <div className="p-5 border rounded-xl">
          👨🏾‍👩🏾‍👧 Total Parents
          <p>Track linked parent accounts</p>
        </div>

        <div className="p-5 border rounded-xl">
          📚 Subject Management
          <p>Add global subjects and support custom school subjects</p>
        </div>

        <div className="p-5 border rounded-xl">
          👥 User Management
          <p>Manage students, teachers, parents, and admins</p>
        </div>

        <div className="p-5 border rounded-xl">
          📊 Learning Analytics
          <p>View engagement, weak subjects, and study trends</p>
        </div>

        <div className="p-5 border rounded-xl">
          🔐 Security & Moderation
          <p>Monitor suspicious activity and protect user data</p>
        </div>

        <div className="p-5 border rounded-xl">
          🚨 Failed Login Alerts
          <p>Track login issues and account risks</p>
        </div>

        <div className="p-5 border rounded-xl">
          📈 School Performance
          <p>Compare school activity and learning outcomes</p>
        </div>

        <div className="p-5 border rounded-xl">
          🧠 Platform Insights
          <p>Most-used subjects, retention, and dropout-risk trends</p>
        </div>

        <div className="p-5 border rounded-xl">
          ⚙️ Platform Health
          <p>Track server health, errors, and usage reports</p>
        </div>

      </div>
    </main>
  );
}
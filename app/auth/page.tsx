export default function AuthPage() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-blue-700">
        TutorAfrica AI - Authentication
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Secure login for all TutorAfrica AI users.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="p-5 border rounded-xl">
          🎓 Student Login
          <p>Access personal learning dashboard</p>
        </div>

        <div className="p-5 border rounded-xl">
          👨‍👩‍👧 Parent Login
          <p>Monitor child progress securely</p>
        </div>

        <div className="p-5 border rounded-xl">
          👩🏽‍🏫 Teacher Login
          <p>Manage classes and assignments</p>
        </div>

        <div className="p-5 border rounded-xl">
          🏫 School Admin Login
          <p>Manage school data and users</p>
        </div>

        <div className="p-5 border rounded-xl">
          ⚙️ Platform Admin Login
          <p>Global platform control</p>
        </div>

        <div className="p-5 border rounded-xl">
          🔐 Security Features
          <p>Role-based access and protected dashboards</p>
        </div>

      </div>
    </main>
  );
}
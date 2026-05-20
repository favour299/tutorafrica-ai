export default function SchoolDashboard() {
  const stats = [
    { title: "Total Students", value: "1,245" },
    { title: "Total Teachers", value: "68" },
    { title: "Subjects", value: "24" },
    { title: "Active Classes", value: "32" },
    { title: "Attendance Rate", value: "89%" },
    { title: "Exam Readiness", value: "76%" },
    { title: "Parent Engagement", value: "64%" },
    { title: "At-Risk Students", value: "41" },
  ];

  const teacherInsights = [
    "Lesson completion tracking",
    "Missed-class alerts",
    "Homework consistency",
    "Student engagement score",
    "Grading speed",
    "Subject coverage tracking",
  ];

  const schoolAnalytics = [
    "Best performing class",
    "Weakest subject",
    "Most improved students",
    "Inactive learners",
    "Teacher effectiveness",
    "Parent response rate",
  ];

  return (
    <main className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-72 bg-blue-900 text-white p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-8">TutorAfrica School</h1>

        <nav className="space-y-4 text-lg">
          <p>Dashboard</p>
          <p>Students</p>
          <p>Teachers</p>
          <p>Subjects</p>
          <p>Classes</p>
          <p>Attendance</p>
          <p>Teacher Monitoring</p>
          <p>Parent Reports</p>
          <p>Analytics</p>
          <p>Settings</p>
        </nav>
      </aside>

      {/* Main */}
      <section className="flex-1 p-8">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          School Dashboard
        </h2>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-gray-500">{item.title}</h3>
              <p className="text-3xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Teacher Monitoring */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
          <h3 className="text-2xl font-bold mb-6">
            Teacher Monitoring
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {teacherInsights.map((item) => (
              <div
                key={item}
                className="bg-blue-50 p-4 rounded-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* School Analytics */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
          <h3 className="text-2xl font-bold mb-6">
            School Analytics
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {schoolAnalytics.map((item) => (
              <div
                key={item}
                className="bg-gray-100 p-4 rounded-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-green-50 border border-green-300 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Multi-School Security
          </h3>

          <p className="text-gray-700">
            Each school is isolated by secure school-based access.
            Teachers only see assigned classes. Students only see
            personal dashboards. Parents only see linked children.
            No school can access another school’s data.
          </p>
        </div>
      </section>
    </main>
  );
}
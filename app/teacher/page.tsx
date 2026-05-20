export default function TeacherPage() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-blue-700">
        TutorAfrica AI - Teacher Dashboard
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Manage classes, track students, and improve learning outcomes.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="p-5 border rounded-xl">
          📚 My Classes
          <p>View assigned classes and subjects</p>
        </div>

        <div className="p-5 border rounded-xl">
          👩🏽‍🎓 My Students
          <p>Track students linked to your classes</p>
        </div>

        <div className="p-5 border rounded-xl">
          📝 Upload Assignments
          <p>Post homework, quizzes, and tasks</p>
        </div>

        <div className="p-5 border rounded-xl">
          ⏰ Mark Attendance
          <p>Track daily attendance and absences</p>
        </div>

        <div className="p-5 border rounded-xl">
          📊 Student Performance
          <p>Monitor grades and weak-performing students</p>
        </div>

        <div className="p-5 border rounded-xl">
          💬 Parent Notes
          <p>Send feedback and learning updates to parents</p>
        </div>

        <div className="p-5 border rounded-xl">
          📈 Class Analytics
          <p>Review class averages and engagement</p>
        </div>

        <div className="p-5 border rounded-xl">
          🎯 Weak Topic Reports
          <p>Identify topics students struggle with most</p>
        </div>

        <div className="p-5 border rounded-xl">
          📥 Upload Notes
          <p>Share PDF, text, and lightweight learning notes</p>
        </div>

        <div className="p-5 border rounded-xl">
          🔔 School Announcements
          <p>Receive school-wide updates and reminders</p>
        </div>

        <div className="p-5 border rounded-xl">
          📋 Homework Tracking
          <p>Track submitted and missing assignments</p>
        </div>

        <div className="p-5 border rounded-xl">
          ✅ Lesson Completion
          <p>Mark completed lessons and syllabus progress</p>
        </div>

      </div>
    </main>
  );
}
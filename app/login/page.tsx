import Link from "next/link";

const roles = [
  {
    title: "Student",
    description: "Primary, Junior Secondary & Senior Secondary learners",
    link: "/student",
  },
  {
    title: "Parent",
    description: "Track child progress, homework & reports",
    link: "/parent",
  },
  {
    title: "Teacher",
    description: "Manage lessons, attendance & assignments",
    link: "/teacher",
  },
  {
    title: "School Admin",
    description: "Monitor school analytics, staff & performance",
    link: "/admin",
  },
];

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-700 text-center">
          TutorAfrica AI Login
        </h1>

        <p className="text-center mt-4 text-lg text-gray-600">
          Choose your role to continue
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {roles.map((role) => (
            <Link
              key={role.title}
              href={role.link}
              className="border rounded-2xl p-8 shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-blue-700">
                {role.title}
              </h2>
              <p className="mt-3 text-gray-600">{role.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
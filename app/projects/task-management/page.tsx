import Navbar from "../../../components/Navbar.jsx";
import Footer from "../../../components/Footer.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task Management System - Project Details",
  description: "Detailed view of the Task Management System project.",
};

export default function TaskManagementProjectPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50 text-slate-900 min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">
            <h1 className="text-5xl font-bold mb-6">Task Management System</h1>
            <p className="text-xl text-slate-700 mb-6">
              A robust task management web application featuring user authentication, role-based access, collaborative task boards, and real-time updates.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Live App</h2>
                <a href="https://task-management-system-three-mocha.vercel.app/login" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  https://task-management-system-three-mocha.vercel.app/login
                </a>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Source Code</h2>
                <a href="https://github.com/wabii-koo/task-management-system" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  https://github.com/wabii-koo/task-management-system
                </a>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Features</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>User login/register with session management</li>
              <li>Project and task creation with statuses (To Do, In Progress, Done)</li>
              <li>Drag and drop board UI, task assignments, comments, and due dates</li>
              <li>Search, filters, and analytics dashboards</li>
              <li>Real-time updates (WebSockets or polling)</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
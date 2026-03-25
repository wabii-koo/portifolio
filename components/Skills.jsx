export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Linux', 'VS Code', 'Firebase'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Communication', 'Teamwork', 'Leadership', 'Adaptability'] }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition">
              <h3 className="text-xl font-bold mb-4 text-blue-400">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

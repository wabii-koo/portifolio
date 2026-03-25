export default function Projects() {
  const projects = [
    {
      title: 'Irreecha Oromo Website',
      description: 'A cultural website celebrating the Irreecha festival, showcasing Oromo heritage with virtual tours, galleries, and historical information.',
      tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
      link: '/projects/irreecha',
      image: '/irreecha.png'
    },
    {
      title: 'Task Management System',
      description: 'A full-featured task management app with authentication, team boards, and analytics dashboards.',
      tech: ['Next.js', 'Firebase', 'Tailwind CSS', 'Vercel'],
      link: '/projects/task-management',
      image: '/taskmanagement.png'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      tech: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      link: '#',
      image: '/ecommerce.png'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team workspace features.',
      tech: ['React', 'Firebase', 'Redux', 'Material UI'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location search, forecasts, and interactive maps.',
      tech: ['React', 'OpenWeather API', 'Tailwind CSS', 'Axios'],
      link: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media metrics and performance insights.',
      tech: ['Next.js', 'Chart.js', 'PostgreSQL', 'Node.js'],
      link: '#'
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, comments, and social sharing.',
      tech: ['Next.js', 'MDX', 'Contentful', 'Vercel'],
      link: '#'
    },
    {
      title: 'Video Streaming Service',
      description: 'Video hosting and streaming platform with user authentication and content management.',
      tech: ['React', 'Node.js', 'HLS', 'AWS S3'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              {project.image ? (
                <div className="relative overflow-hidden h-48">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center text-5xl">
                  📱
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Project →
                </a>
                {project.github && (
                  <a href={project.github} className="text-gray-600 hover:text-gray-700 font-semibold ml-4">
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

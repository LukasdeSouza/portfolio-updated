import './App.css';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
// import Me from './assets/me.JPG'

function App() {
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<string>('');

  const handleMouseEnterProjectItem = (projectId: string) => {
    setProjectId(projectId)
    setMouseEnter(true);
  };


  const projects = [
    {
      id: '01',
      name: 'Eleitor360',
      description: 'A comprehensive electoral platform designed to streamline political campaign management and voter engagement.',
      link: 'https://eleitor360-ench.vercel.app/login',
      access: 'email: fernando123@gmail.com, password: Lukaszouza11@',
    },
    {
      id: '02',
      name: 'Meltt Facil',
      description: 'An innovative solution simplifying complex processes through intuitive design and robust functionality.',
      link: 'https://www.melttfacil.com.br',
      access: 'email: admin@meltt.com.br, password: senha123'
    },
    {
      id: '03',
      name: 'Eduflex',
      description: 'Educational technology platform revolutionizing learning experiences with AI-powered features and adaptive content.',
      link: 'http://app.eduflexeducacao.com.br',
      access: 'email: admin@eduflexeducacao.com.br, password: senha123'
    }
  ];

  const experiences = [
    {
      title: 'Founder / CTO - Product focused',
      company: 'Codetech Software',
      period: 'November 2024 – Present',
      location: 'Remote',
      highlights: [
        'Founded Codetech to build and operate early-stage products end-to-end, staying involved through launch, iteration, and growth phases.',
        'Owned full product lifecycle: problem definition, architecture, development, deployment, and continuous iteration based on real usage.',
        'Shipped multiple products from zero → production using TypeScript, Python, and Go, prioritizing speed without sacrificing maintainability.',
        'Designed backend architectures and database schemas optimized for fast iteration, scalability, and performance (indexing, caching).',
        'Helped and mentored entry-level and junior developers.',
        'Participated in meetups and follow-ups with technical and non-technical customers.',
        'Set up cloud infrastructure and CI/CD pipelines across GCP, AWS, and Azure DevOps, enabling reliable, frequent releases.',
        'Delivered AI-powered product features using OpenAI models, including fine-tuning and production-grade prompt pipelines.',
        'Partnered with Magic AI (Portal Code) — a Sequoia-backed AI code agent startup in San Francisco — collaborating on AI-driven developer tooling and scalable system design.',
        'Acted as technical owner and mentor, maintaining a high quality bar while shipping rapidly.'
      ]
    },
    {
      title: 'CTO (Part-time)',
      company: 'EduFlex Educação',
      period: 'October 2024 – Present',
      location: 'Remote',
      highlights: [
        'Led end-to-end product development of EduFlex\'s core platform, from initial idea to production launch.',
        'Built frontend (React, TypeScript) and backend services (Node.js, MySQL) from scratch with a focus on usability and fast feedback loops.',
        'Worked together with outside tech teams to collaborate with the software development.',
        'Shipped features in short cycles to validate product–market fit quickly.',
        'Integrated fine-tuned OpenAI models for document adaptation and image generation workflows.',
        'Designed and deployed AWS infrastructure with a pragmatic approach to scale and reliability.',
        'Directly contributed to securing ~$500k in funding by delivering a functional, investor-ready product.'
      ]
    },
    {
      title: 'Senior Full-Stack Engineer',
      company: 'Envor',
      period: 'June 2024 – December 2024',
      location: 'Remote',
      highlights: [
        'Led the build and launch of a large-scale telecom platform serving 50,000+ users.',
        'Owned backend services (NestJS) and frontend applications (React / Next.js / TypeScript).',
        'Worked with Agile methodologies and participated actively on meetups with customers.',
        'Designed scalable SQL schemas, indexing strategies, and caching layers to support high-throughput workloads.',
        'Integrated AWS S3 for secure asset management.',
        'Reduced server response times by ~50% through query optimization and backend performance tuning.',
        'Worked closely with product and design teams to ship conversion-focused, user-facing features.'
      ]
    },
    {
      title: 'Frontend Engineer',
      company: 'Wisebyte',
      period: 'August 2022 – July 2024',
      location: 'Remote',
      highlights: [
        'Shipped and evolved data-heavy SaaS dashboards using React, TypeScript, and GraphQL.',
        'Built advanced data visualizations with Highcharts, increasing user engagement by 25%.',
        'Developed complex, form-heavy interfaces using React Hook Form with a focus on scalability.',
        'Led frontend performance optimizations, reducing render times by 40% via virtualization.',
        'Collaborated cross-functionally to deliver and iterate on features end-to-end.'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Virtual Connection',
      period: 'February 2022 – August 2022',
      location: 'Remote',
      highlights: [
        'Delivered three telecom MVPs for enterprise clients in under six months.',
        'Built frontend features with Angular/TypeScript and backend services in PHP.',
        'Migrated legacy systems to maintainable architectures, reducing bug-related issues by 60%.',
        'Worked with large production PostgreSQL databases supporting core operations.'
      ]
    },
    {
      title: 'Programmer & IT Instructor',
      company: 'Senac Brasil',
      period: 'August 2021 – August 2022',
      location: '',
      highlights: [
        'Taught algorithms, OOP, and web development fundamentals (Javascript, Typescript, MySQL, MongoDB, Nodejs, MariaDB, PHP).',
        'Guided teams from prototype to deployed projects.'
      ]
    },
    {
      title: 'Computer Technician / Teacher',
      company: 'ICASU',
      period: 'April 2021 – September 2022',
      location: '',
      highlights: []
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16 md:py-24">
        <header className="mb-12">
          <img
            className='rounded-full mb-4'
            src={'https://media.licdn.com/dms/image/v2/D4D03AQE9Q2bWi7g4FA/profile-displayphoto-scale_200_200/B4DZhg_JJmGsAg-/0/1753973823070?e=1768435200&v=beta&t=7abvwH52JKCCetA5jq4kWGWwtndhM_UqS8FvcWfWcs0'}
            alt="Lucas de Souza Silva"
            width={120} />
          <h1 className="text-5xl md:text-6xl font-serif font-normal mb-6 leading-tight tracking-tight">
            I'm a tech person specialized in building scalable products and help teams achieve their potential
          </h1>
          <p className='text-slate-500 hover:underline'>Get Startups to create awesome products (<i>Eduflex achieve  500k funding in a year</i>), run a team of developers, talk with customers and create MVP's, thats my passion!</p>
          <a className='text-slate-500 mt-2' href="https://www.linkedin.com/in/lucassouzacodetech/" target='_blank'>Linkedin</a>
        </header>

        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-8">PROJECTS</h2>
            <Separator className="bg-neutral-200" />
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id}
                className="group hover:scale-105 transition-all ease-in-out cursor-pointer p-4 rounded-sm hover:bg-slate-50"
                onClick={() => window.open(project.link, '_blank')}
                onMouseEnter={() => handleMouseEnterProjectItem(project.id)}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-sm text-neutral-400 font-mono">{project.id}</span>
                  <h3 className="text-2xl font-serif">{project.name}</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed pl-12">
                  {project.description}
                </p>
                {mouseEnter && projectId === project.id && (
                  <div className='px-4 py-2 slide-in-from-top-1'>
                    <div className='flex flex-col'>
                      <small className='text-slate-600 font-semibold'>Use these credentials to access:</small>
                      <small className='text-slate-400'>{project.access}</small>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-8">Experience</h2>
            <Separator className="bg-neutral-200" />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <h3 className="text-xl font-serif mb-1">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
                      <span className="font-medium">{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-neutral-400">•</span>
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-neutral-500 mt-1">{exp.period}</p>
                  </div>
                  {exp.highlights.length > 0 && (
                    <ul className="space-y-2 text-neutral-600 leading-relaxed">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-neutral-300 before:rounded-full">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <footer className="mt-24 pt-12 border-t border-neutral-200">
          <p className="text-sm text-neutral-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

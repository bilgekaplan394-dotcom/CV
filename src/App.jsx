import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Target,
  Code,
  Layout,
  Cpu,
  Music,
  Video,
  Smartphone,
  Gamepad2,
  Users,
  ShoppingBag,
  Download
} from 'lucide-react';

const App = () => {
  // Resume Data
  const data = {
    personal: {
      name: "Bilgehan Kaplan",
      title: "Computer Science Student & Manufacturing Manager",
      email: "bilgekaplan394@gmail.com",
      phone: "+36 705 86 5499",
      location: "Budapest, Hungary",
      about: "Dynamic Manufacturing Manager with a proven track record at Modifero Automotive, leveraging operations management and quality control to enhance productivity. Currently bridging the gap between operations and technology as a Computer Science student at ELTE. Skilled in fostering collaboration, driving efficiency, and applying lean principles.",
    },
    experience: [
      {
        id: 0,
        company: "Modifero Automotive",
        role: "Freelance Web Developer (PrestaShop)",
        period: "Current",
        description: "Returned as a consultant to lead the digital transformation of the company's sales infrastructure.",
        achievements: [
          "Building and configuring the official e-commerce website using PrestaShop to launch direct-to-consumer sales.",
          "Customizing frontend themes and implementing essential modules for payment and shipping logistics.",
          "Optimizing the product catalog and user experience for a seamless launch readiness."
        ]
      },
      {
        id: 1,
        company: "Modifero Automotive",
        role: "Sales Assistant - Manufacturing Manager - Office Manager",
        period: "2022 - 2024",
        description: "Versatile role covering sales, production management, and office operations.",
        achievements: [
          "Produced and edited promotional videos for YouTube, significantly increasing digital engagement and brand visibility.",
          "Composed original background music using FL Studio for marketing content to ensure copyright compliance and brand uniqueness.",
          "Responded to customer inquiries and ensured high satisfaction.",
          "Boosted sales through strong client relationships and product knowledge.",
          "Guided customers with detailed comparisons and availability checks.",
          "Applied lean principles to improve workflow and quality and reduce waste.",
          "Coordinated between engineering, design, procurement, and quality assurance departments.",
          "Led root cause analysis to enhance process efficiency and reduce defects.",
          "Oversaw budgeting and forecasting aligned with corporate goals.",
          "Maintained confidentiality and managed sensitive data securely.",
          "Handled inventory and procurement for office supplies."
        ]
      }
    ],
    projects: [
      {
        title: "Language Vocabulary App",
        description: "A native Android mobile application designed to help users learn and memorize foreign language vocabulary efficiently. Built while learning Android Studio fundamentals.",
        tags: ["Android Studio", "Mobile Dev", "Java/Kotlin"],
        link: "#" 
      },
      {
        title: "Vercel Micro-Tools Collection",
        description: "A suite of small, focused web utilities and tools developed to solve specific problems. Deployed and hosted on Vercel for high performance and accessibility.",
        tags: ["React", "Next.js", "Vercel", "Tools"],
        link: "#" 
      },
      {
        title: "Memorial Website",
        description: "A dedicated digital memorial space designed with sensitivity and elegance. Features biography sections, photo galleries, and tribute messages.",
        tags: ["Web Design", "UI/UX", "Frontend"],
        link: "#" 
      }
    ],
    education: [
      {
        id: 1,
        school: "Eötvös Loránd University",
        location: "Budapest, Hungary",
        degree: "Bachelor's Degree in Computer Science",
        status: "Expected Graduation: June 2027"
      }
    ],
    languages: [
      { language: "Turkish", level: "Native", percent: 100 },
      { language: "English", level: "Fluent", percent: 90 },
      { language: "Hungarian", level: "Beginner (Learning)", percent: 25 }
    ],
    activities: [
      {
        title: "Global Networking & Socializing",
        description: "Actively participating in international social events and meetups to build connections with professionals from around the world and foster cultural understanding."
      },
      {
        title: "Professional Archery",
        description: "Practicing archery for over 10 years. Played key field roles in World Archery Cup events."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* Hero Section */}
      <header className="bg-slate-900 text-white pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           {/* Abstract Background Elements */}
           <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
           <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{data.personal.name}</h1>
            <h2 className="text-xl md:text-2xl text-blue-300 font-medium mb-6">{data.personal.title}</h2>
            
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-8 mx-auto md:mx-0">
              {data.personal.about}
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start text-sm text-slate-300 mb-8">
              <a href={`mailto:${data.personal.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={18} /> {data.personal.email}
              </a>
              <a href={`tel:${data.personal.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={18} /> {data.personal.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={18} /> {data.personal.location}
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
              {/* Download CV Button */}
              <a 
                href="/Bilgehan_Kaplan_Resume.pdf" 
                download
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/30 group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </a>

              <div className="flex gap-4">
                {/* Social Links placeholders */}
                <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all hover:-translate-y-1 text-slate-300 hover:text-white">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-gray-700 transition-all hover:-translate-y-1 text-slate-300 hover:text-white">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 -mt-16 pb-20 relative z-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column (Main Info) */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Experience Section */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Experience</h3>
              </div>

              <div className="space-y-8">
                {data.experience.map((job) => (
                  <div key={job.id} className="relative pl-4 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-xl font-bold text-slate-900">{job.company}</h4>
                      <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                        {job.period}
                      </span>
                    </div>
                    
                    <h5 className="text-blue-600 font-medium mb-3">{job.role}</h5>
                    
                    <ul className="space-y-2">
                      {job.achievements.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-600">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                          <span className="leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                  <Layout size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Projects</h3>
              </div>

              <div className="grid gap-6">
                {data.projects.map((project, idx) => (
                  <a 
                    href={project.link} 
                    key={idx} 
                    className="group block border border-slate-200 rounded-xl p-5 hover:border-purple-400 hover:shadow-md transition-all bg-slate-50 hover:bg-white"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                        {project.title}
                      </h4>
                      <ExternalLink size={18} className="text-slate-400 group-hover:text-purple-500" />
                    </div>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="text-xs font-medium px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </section>

             {/* Additional Activities Section */}
             <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Additional Activities</h3>
              </div>
              
              <div className="space-y-6">
                {data.activities.map((activity, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                     <div className="p-2 bg-slate-100 rounded-full text-slate-500 shrink-0 mt-1">
                        {idx === 0 ? <Users size={18} /> : <Target size={18} />}
                     </div>
                     <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{activity.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-sm">{activity.description}</p>
                     </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8">
            
            {/* Education Card */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Education</h3>
              </div>
              
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <h4 className="font-bold text-slate-900">{edu.school}</h4>
                  <p className="text-slate-500 text-sm mb-2">{edu.location}</p>
                  <p className="text-blue-600 font-medium">{edu.degree}</p>
                  <p className="text-slate-400 text-sm mt-2">{edu.status}</p>
                </div>
              ))}
            </section>

            {/* Languages Card */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <Globe size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Languages</h3>
              </div>
              
              <div className="space-y-4">
                {data.languages.map((lang, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-slate-700">{lang.language}</span>
                      <span className="text-slate-500 text-sm">{lang.level}</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${lang.percent < 40 ? 'bg-emerald-300' : 'bg-emerald-500'}`} 
                        style={{ width: `${lang.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section className="bg-slate-900 text-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Cpu size={20} />
                </div>
                <h3 className="text-xl font-bold">Tech & Skills</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Tools & Technologies I work with:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-blue-500 transition-colors cursor-default">Java</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-blue-500 transition-colors cursor-default">Python</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-blue-500 transition-colors cursor-default">C++</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-blue-500 transition-colors cursor-default">React</span>
                <span className="px-3 py-1 bg-orange-500/30 text-orange-200 border border-orange-500/50 rounded-full text-sm hover:bg-orange-500 transition-colors cursor-default flex items-center gap-1">
                   <ShoppingBag size={12}/> PrestaShop
                </span>
                 <span className="px-3 py-1 bg-green-500/30 text-green-200 border border-green-500/50 rounded-full text-sm hover:bg-green-500 transition-colors cursor-default flex items-center gap-1">
                   <Smartphone size={12}/> Android Studio
                </span>
                 <span className="px-3 py-1 bg-slate-700 text-slate-200 border border-slate-500 rounded-full text-sm hover:bg-slate-600 transition-colors cursor-default flex items-center gap-1">
                   <Gamepad2 size={12}/> Unity 3D
                </span>
                <span className="px-3 py-1 bg-purple-500/30 text-purple-200 border border-purple-500/50 rounded-full text-sm hover:bg-purple-500 transition-colors cursor-default flex items-center gap-1">
                   <Music size={12}/> FL Studio
                </span>
                <span className="px-3 py-1 bg-pink-500/30 text-pink-200 border border-pink-500/50 rounded-full text-sm hover:bg-pink-500 transition-colors cursor-default flex items-center gap-1">
                   <Video size={12}/> Video Editing
                </span>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Bilgehan Kaplan. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
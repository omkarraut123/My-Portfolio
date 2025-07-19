import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, MapPin, Calendar, ExternalLink, Code, GraduationCap, Menu, X, Phone, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "TypeScript", "Tailwind CSS", "Bootstrap", "jQuery"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "MySql", "REST APIs", "JWT Authentication"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git & GitHub", "VS Code", "NPM/Yarn", "Postman", "Jenkins", "Eclipse"]
    },
    {
      category: "Soft Skills",
      items: ["Good Communication", "Problem Solving", "Teamwork", "Adaptability", "Leadership"]
    }
  ];

  const experiences = [
    {
      company: "Tata Consultancy Services (tcs)",
      role: "Frontend Developer",
      year: "2021 - Present",
      location: "Pune, Maharastra",
      description: "Led development of responsive web applications using React and modern JavaScript frameworks. Mentored junior developers and implemented best practices for code quality and performance optimization.",
      achievements: [
        "Reduced page load times by 40% through code optimization",
        "Led a team of 4 developers on major product redesign",
        "Implemented automated testing resulting in 30% fewer bugs"
      ]
    },
    {
      company: "Neudesic Technologies",
      role: "Angular Developer",
      year: "June - Aug, 2021",
      location: "Banglore",
      description: "Contributed to the development of a web application using Angular and .NET Core. Assisted in front-end UI enhancements, API integration, and resolving bugs to support timely project delivery. Gained hands-on experience in full stack development within a collaborative Agile team.",
      achievements: [
        "Assisted in integrating Angular components with backend APIs for smoother data flow and improved user interactions.",
        "Fixed front-end and API-related bugs, contributing to improved application stability and user experience.",
        "Collaborated in sprint planning and daily stand-ups, gaining exposure to Agile development practices and team collaboration."
      ]
    }
  ];

  const projects = [
    {
      name: "Placement Success Programme",
      description: "The Placement Success Programme (PSP) is a job-oriented initiative by TCS iON in collaboration with corporate partners. It is designed for pre-final/final-year students and recent graduates (within two years of graduation). The program helps candidates acquire technical, domain-specific, and soft skills and culminates in job offers and certification upon successful completion. The first job role under this program is Graduate Engineer Trainee in IT.",
      tech: ["React","Javascript","jQuery","Axios","HTML", "CSS", "Bootstrap", "Java", "MySql"],
      liveDemo: "https://www.tcsion.com/hub/psp/graduate-engineer-trainee-it-mponline/",
      github: ""
    },
    {
      name: "IIT Kharagpur (AI & ML Programme)",
      description: "Developed a responsive web application for an AI & ML Certification Programme aimed at students and working professionals. The platform provides details about the course structure, eligibility, enrollment process, and certification benefits Also developed an e-form to manage candidate registration and led the certificate issuance activity, automating the generation and distribution process based on enrollment data.",
      tech: ["Javascript","jQuery","HTML", "CSS", "Bootstrap", "Java", "MySql"],
      liveDemo: "https://www.tcsion.com/hub/iit-kgp-certificate-program/hands-on-approach-to-ai/",
      github: ""
    },
     {
      name: "IIT Dhanbad (AI & NL Programme)",
      description: "Developed a responsive web application for an AI & NL Certification Programme aimed at students and working professionals. The platform provides details about the course structure, eligibility, enrollment process, and certification benefits Also developed an e-form to manage candidate registration and led the certificate issuance activity, automating the generation and distribution process based on enrollment data.",
      tech: ["Javascript","jQuery","HTML", "CSS", "Bootstrap", "Java", "MySql"],
      liveDemo: "https://www.tcsion.com/hub/iit-dhanbad-certificate-program/mastering-ai-and-natural-language-processing/",
      github: ""
    },
    {
      name: "Tata Global Internships",
      description: "Tata Global Internships is a initiative by Tata Group aimed at offering internship opportunities to students outside India. The program involves a detailed application, screening, and interview process managed via the TCS iON platform. The system provides a complete digital solution for candidates to register, apply for internship roles, and undergo assessments and interviews. Customers (admin users from Tata) use the platform to review applications, tag candidates to specific projects, and make final selections.",
      tech: ["React","Javascript","jQuery","Axios","HTML", "CSS", "Bootstrap", "Java", "MySql"],
      liveDemo: "",
      github: ""
    },
  ];

  const education = [
    {
      level: "Bachelor's Degree",
      course: "Bachelor of Computer Science",
      institution: "Savitribai phule pune university",
      year: "2018 - 2021",
      grade: "CGPA: 7.6/10",
      details: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems"
    },
    {
      level: "Diploma",
      course: "Diploma in Information Technology",
      institution: "Government Polytechnic, Washim",
      year: "2016 - 2018",
      grade: "82%",
      details: "Specialized in Information Technology"
    },
     {
      level: "SSC",
      course: "Secondary Education",
      institution: "Vitthal Maharaj vidhyalaya",
      year: "2014",
      grade: "82%",
      details: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900 cursor-pointer" onClick={() => scrollToSection('home')}>
              Omkar Raut
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer relative ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors duration-200 rounded-md ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="py-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">OR</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Omkar</span> Raut
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-6">Frontend Developer</p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate frontend developer with 4+ years of experience creating beautiful, responsive, 
              and user-friendly web applications. I specialize in React, modern JavaScript, and delivering 
              exceptional user experiences that drive business results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mb-12">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center cursor-pointer">
                <Download size={20} />
               <a href='https://drive.google.com/file/d/1F8tEIHJT3_TRyFF6kY0TBSiqiTLpJ5RZ/view?usp=sharing' target='_blank' download='CV_Omkar_Raut.pdf'><span className="font-medium">Download Resume</span></a>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 lg:px-8 lg:py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-blue-600 w-full sm:w-auto justify-center cursor-pointer"
              >
                <Mail size={20} />
                <span className="font-medium">Get In Touch</span>
              </button>
            </div>

            <div className="flex justify-center gap-4 lg:gap-6 mb-8">
              <a href="https://www.linkedin.com/in/omkarraut1998/" target='_black' className="p-3 lg:p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110">
                <Linkedin className="text-blue-600" size={24} />
              </a>
              <a href="https://github.com/omkarraut123" target='_blank' className="p-3 lg:p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110">
                <Github className="text-gray-800" size={24} />
              </a>
              <a href="mailto:rautomkar098@gmail.com" className="p-3 lg:p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110">
                <Mail className="text-red-600" size={24} />
              </a>              
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                I'm a passionate frontend developer with 4+ years of experience in creating modern, 
                responsive web applications. I love turning complex problems into simple, beautiful, 
                and intuitive digital solutions that users love to interact with.
              </p>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a deep passion for creating exceptional user experiences. 
                I stay current with the latest technologies and best practices to deliver cutting-edge solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="text-gray-700">Pune, Maharastra</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Available for work</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6">Areas of Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  { icon: Code, title: "Frontend Development", desc: "React, JavaScript, TypeScript, HTML, CSS, Bootstrap, Tailwind CSS" },
                  { icon: Globe, title: "Web Performance", desc: "Optimization & Best Practices" },
                  { icon: Code, title: "Responsive Design", desc: "Mobile-first approach" },
                  { icon: GraduationCap, title: "UI/UX Design", desc: "User-centered design thinking" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <item.icon className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-blue-600">{skill.category}</h3>
                <div className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3 group">
                      <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">Work Experience</h2>
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 p-6 lg:p-8 rounded-xl border-l-4 border-blue-600 shadow-lg">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">{exp.company}</h3>
                        <p className="text-blue-600 font-medium text-lg">{exp.role}</p>
                        <p className="text-gray-600 text-sm flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mt-2 sm:mt-0">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.year}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                  </div>
                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">{project.name}</h3>
                  <div className="flex gap-2">
                    <a href={project.liveDemo} className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <ExternalLink size={18} className="text-blue-600" />
                    </a>
                    <a href={project.github} className="p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors hidden">
                      <Github size={18} className="text-gray-600" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">Education</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-6 lg:p-8 rounded-xl border-l-4 border-green-600 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">{edu.level}</h3>
                    <p className="text-green-600 font-medium text-lg">{edu.course}</p>
                    <p className="text-gray-600 font-medium">{edu.grade}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2 sm:mt-0">
                    <Calendar size={16} />
                    <span>{edu.year}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700 mb-3">
                  <GraduationCap size={16} />
                  <span className="font-medium">{edu.institution}</span>
                </div>
                <p className="text-gray-600 text-sm">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <a href="mailto:rautomkar098@gmail.com" className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Mail className="text-blue-400" size={24} />
                  <span className="text-lg">rautomkar098@gmail.com</span>
                </a>
                {/* <a href="tel:" className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Phone className="text-green-400" size={24} />
                  <span className="text-lg">+91</span>
                </a> */}
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <MapPin className="text-red-400" size={24} />
                  <span className="text-lg">Pune, Maharastra</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://www.linkedin.com/in/omkarraut1998/" target="_blank" className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Linkedin className="text-blue-400" size={24} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/omkarraut123" target="_blank" className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Github className="text-gray-300" size={24} />
                  <span>GitHub</span>
                </a>                
                <a href="https://www.hackerrank.com/profile/oraut2137" target="_blank" className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Code className="text-purple-400" size={24} />
                  <span>Hackerrank</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 Omkar Raut. All rights reserved.</p>           
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
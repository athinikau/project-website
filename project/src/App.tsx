import React, { useState } from 'react';

import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, FileText, Download, Building, GraduationCap, Calendar, Menu, X, MapPin, Send } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">AM</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors">Skills</button>
              <button onClick={() => scrollToSection('resume')} className="text-gray-300 hover:text-white transition-colors">Resume</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-blue-500 hover:text-blue-400 transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-90 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors">Skills</button>
              <button onClick={() => scrollToSection('resume')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors">Resume</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-blue-500 hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80"
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Athini Mbiko</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">Junior Associate Software Engineer</p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com" className="text-white hover:text-gray-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:Athinimbiko5@gmail.com" className="text-white hover:text-gray-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Detail-oriented individual with a strong foundation in software development and data analysis. Proven ability to evaluate requirements 
                and design innovative solutions. A collaborative team player dedicated to optimizing data utilization and enhancing performance through 
                analytical skills and innovative thinking.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </a>
                <a 
                  href="#resume"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('resume');
                  }}
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Resume
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQF6pm_1RSYPFg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715709411233?e=1744848000&v=beta&t=I6ufSXhfwChE2hp9HPsWPKOmJ92p5qxOkF8yHklLcpA"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'JavaScript/TypeScript',
              'React/Next.js',
              'Node.js',
              'Python',
              'HTML & CSS',
              'Tailwind CSS',
              'PostgreSQL',
              'MongoDB',
              'GraphQL'
            ].map((skill) => (
              <div 
                key={skill}
                className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <FileText className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold">Resume</h2>
          </div>
          
          {/* Download Button */}
          <div className="mb-12 flex justify-center">
            <a
              href="project\sources\resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </div>

          {/* Resume Preview */}
          <div className="space-y-12">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building size={20} className="text-blue-600" />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold">Junior Associate Software Engineer</h4>
                      <p className="text-gray-600">Capaciti.</p>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      <span>2024 - Present</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>• Collaborated with the software development team to design and implement new software applications, enhancing functionality and 
                    user experience</li>
                    <li> Analyzed data requirements and contributed to data-driven decision-making processes</li>
                    <li>Mentored junior developers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={20} className="text-blue-600" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">Diploma in ICT in Applications Development</h4>
                    <p className="text-gray-600">Cape Peninsula University of Technology</p>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-1" />
                    <span>2019 - 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
  {[
    {
      title: 'Weather App',
      description: 'Stay prepared for any weather with weatherApp – your reliable, real-time weather companion!',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
      link: 'https://delicate-florentine-a22957.netlify.app/', // Add the link here
    },
    {
      title: 'Website design',
      description: 'A React-based project for wipros website ',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80',
      link: 'https://athinimbiko5.wixsite.com/wipro-3', // Add the link here
    },
    {
      title: 'Chat app',
      description: 'A React-based project management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80',
      link: 'https://adorable-sherbet-de7ead.netlify.app/', // Add the link here
    }
  ].map((project) => (
    <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a 
          href={project.link} // Use the link from the project object
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section id="certifications" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Introduction to NoSQL Databases',
                issuer: 'Coursera',
                description: 'Comprehensive understanding of NoSQL database concepts, architecture, and implementation.',
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80',
                link: 'https://www.coursera.org/account/accomplishments/verify/SCLEOW9KFXUE'
              },
              {
                title: 'Web Development',
                issuer: 'Udemy',
                description: 'Advanced web development skills including modern frameworks and responsive design principles.',
                image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80',
                link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3b9802fe-a14b-4af8-87cb-5933a90b6fbf.pdf'
              },
              {
                title: 'Artificial Intelligence Essentials V2',
                issuer: 'IBM',
                description: 'Mastery in AI concepts, particularly generative AI, for business transformation.',
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
                link: 'https://www.credly.com/badges/9a7fc4fd-913c-43ec-9355-a5401fd8cbc6/linked_in_profile'
              }
            ].map((cert) => (
              <div key={cert.title} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                    <p className="text-blue-600 text-sm">{cert.issuer}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Certificate <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600">I'd love to hear from you. Let's create something amazing together!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-blue-600 h-6 w-6" />
                  <span className="ml-4 text-gray-600">Athinimbiko5@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 h-6 w-6" />
                  <span className="ml-4 text-gray-600">Cape Town, South Africa</span>
                </div>
                <div className="flex gap-4 mt-8">
                  <a href="https://github.com/athinikau" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/athini-mbiko-08a260a3/" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-4">Let's work together!</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/athinikau" className="hover:text-gray-300 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/athini-mbiko-08a260a3/" className="hover:text-gray-300 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:Athinimbiko5@gmail.com" className="hover:text-gray-300 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
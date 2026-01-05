import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, Briefcase, GraduationCap, Code2, Menu, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
               <img src="/mohdkaif-portfolio/vecteezy_vibrant-classic-creative-director-with-team-and-mood-board_57554720.png" alt="" />
            </div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              MK
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Mohd Kaif
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Full-Stack Developer & Cloud Computing Enthusiast
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Final-year Computer Science student passionate about building scalable, user-focused applications using AWS, Node.js, and React.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:kaifsaifi864@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border-2 border-blue-600"
            >
              <Code2 size={20} />
              View Projects
            </button>
          </div>
          <div className="flex justify-center gap-6">
            <a href="mailto:kaifsaifi864@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:+919634924477" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Phone size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a final-year Computer Science and Engineering student at Meerut Institute of Engineering and Technology with a stellar 9.0 CGPA. My passion lies in creating innovative, scalable solutions that make a real-world impact.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With expertise in full-stack web development and cloud computing, I've developed AI-powered applications, healthcare solutions, and participated in competitive hackathons. I'm proficient in modern technologies including AWS, React, Node.js, and MongoDB.
            </p>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-blue-600" />
                <span>Meerut, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={20} className="text-blue-600" />
                <span>CGPA: 9.0/10</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 size={20} className="text-blue-600" />
                <span>300+ DSA Problems Solved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCategory
              title="Languages"
              skills={['C/C++', 'Java', 'JavaScript']}
              icon="💻"
            />
            <SkillCategory
              title="Frontend"
              skills={['HTML', 'CSS', 'React.js', 'Responsive Design']}
              icon="🎨"
            />
            <SkillCategory
              title="Backend"
              skills={['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL']}
              icon="⚙️"
            />
            <SkillCategory
              title="Cloud & DevOps"
              skills={['AWS (EC2, S3, IAM)', 'Docker', 'Vercel', 'Render']}
              icon="☁️"
            />
            <SkillCategory
              title="Developer Tools"
              skills={['Git', 'GitHub', 'Postman', 'VS Code']}
              icon="🛠️"
            />
            <SkillCategory
              title="Core Concepts"
              skills={['DSA', 'OOPs', 'DBMS', 'Operating Systems', 'Computer Networks']}
              icon="📚"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Waste Wise AI"
              year="3rd Year"
              description="AI-powered waste management web app"
              features={[
                'ML-based classification using TensorFlow and Node.js',
                'CNN for image recognition and text input processing',
                'Deployed on AWS with MongoDB backend',
                'Achieved 90%+ classification accuracy'
              ]}
              tags={['TensorFlow', 'Node.js', 'AWS', 'MongoDB', 'CNN']}
            />
            <ProjectCard
              title="Medi Mentors"
              year="2nd Year"
              description="Healthcare web app for mental wellness"
              features={[
                'Personalized yoga and exercise recommendations',
                'Progress tracking with dynamic content rendering',
                'Full-stack architecture with Node.js and Express.js',
                'MongoDB database integration'
              ]}
              tags={['Node.js', 'Express.js', 'MongoDB', 'React']}
            />
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="space-y-6">
            <CertificationCard
              title="AWS Certified Cloud Practitioner (CLF-C02)"
              date="June 2025"
              icon={<Award className="text-blue-600" size={24} />}
            />
            <CertificationCard
              title="MongoDB for Students"
              date="July 2025"
              icon={<Award className="text-green-600" size={24} />}
            />
            <CertificationCard
              title="Cisco Certified Network Associate (CCNA)"
              date="July 2025"
              icon={<Award className="text-blue-600" size={24} />}
            />
            <CertificationCard
              title="Cisco Cyber Security Virtual Internship"
              date="May–July 2024"
              icon={<Briefcase className="text-cyan-600" size={24} />}
            />
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Key Achievements</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">🏆</span>
                <span className="text-gray-700">Participated in <strong>Smart India Hackathon (SIH)</strong> internal college level</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">🥇</span>
                <span className="text-gray-700">Secured <strong>Top 7 out of 150+ teams</strong> in Trikon Hackathon</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">💡</span>
                <span className="text-gray-700">Solved <strong>300+ DSA problems</strong> on LeetCode and GeeksforGeeks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">🌟</span>
                <span className="text-gray-700">Collaborated on <strong>open-source Node.js project</strong> for student community tools</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            <EducationCard
              institution="Meerut Institute of Engineering and Technology"
              degree="Bachelor of Technology in Computer Science and Engineering"
              grade="CGPA: 9.0"
              period="Sept 2026 (Present)"
              location="Meerut, UP"
            />
            <EducationCard
              institution="B.J.S. Public School"
              degree="Intermediate (PCM)"
              grade="94.0%"
              period="2022"
              location="Meerut, UP"
              board="CBSE"
            />
            <EducationCard
              institution="B.J.S. Public School"
              degree="High School"
              grade="90.0%"
              period="2020"
              location="Meerut, UP"
              board="CBSE"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:kaifsaifi864@gmail.com"
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-600"
            >
              <Mail className="text-blue-600" size={24} />
              <div className="text-left">
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium text-gray-800">kaifsaifi864@gmail.com</div>
              </div>
            </a>
            <a
              href="tel:+919634924477"
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-600"
            >
              <Phone className="text-blue-600" size={24} />
              <div className="text-left">
                <div className="text-sm text-gray-500">Phone</div>
                <div className="font-medium text-gray-800">+91 9634924477</div>
              </div>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-600"
            >
              <Linkedin className="text-blue-600" size={24} />
              <div className="text-left">
                <div className="text-sm text-gray-500">LinkedIn</div>
                <div className="font-medium text-gray-800">Connect with me</div>
              </div>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-600"
            >
              <Github className="text-blue-600" size={24} />
              <div className="text-left">
                <div className="text-sm text-gray-500">GitHub</div>
                <div className="font-medium text-gray-800">View my code</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Mohd Kaif. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCategory({ title, skills, icon }: { title: string; skills: string[]; icon: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, year, description, features, tags }: {
  title: string;
  year: string;
  description: string;
  features: string[];
  tags: string[];
}) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{year}</span>
      </div>
      <p className="text-gray-600 italic mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-blue-600 mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function CertificationCard({ title, date, icon }: {
  title: string;
  date: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{date}</p>
      </div>
      <ExternalLink className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" size={20} />
    </div>
  );
}

function EducationCard({ institution, degree, grade, period, location, board }: {
  institution: string;
  degree: string;
  grade: string;
  period: string;
  location: string;
  board?: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-800">{institution}</h3>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      <p className="text-gray-700 mb-2">{degree}</p>
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <span className="font-semibold text-blue-600">{grade}</span>
        <span>{location}</span>
        {board && <span className="bg-gray-100 px-2 py-1 rounded">{board}</span>}
      </div>
    </div>
  );
}

export default App;

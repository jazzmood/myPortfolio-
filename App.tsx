
import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Code, 
  Mail, 
  Phone, 
  ChevronRight, 
  Github, 
  Linkedin,
  Menu,
  X,
  Zap,
  ArrowUpRight,
  Globe,
  ShieldCheck,
  Instagram,
  Terminal,
  Monitor,
  Tablet,
  Camera,
  Layers,
  Cpu,
  Lock
} from 'lucide-react';
import { Skill, Experience, Education } from './types';

// --- Data Constants ---
const SKILLS: Skill[] = [
  {
    category: "Cloud Engineering",
    items: ["AWS EC2 & S3", "Lambda Computing", "CloudTrail Security", "Infrastructure as Code"],
    icon: <Cloud className="w-6 h-6 text-blue-400" />
  },
  {
    category: "Full-Stack Web",
    items: ["React & TypeScript", "Tailwind Engine", "Node.js Systems", "API Architecture"],
    icon: <Code className="w-6 h-6 text-indigo-400" />
  },
  {
    category: "AI Automation",
    items: ["Workflow Synthesis", "GenAI Integration", "Process Scripting", "Logic Mapping"],
    icon: <Terminal className="w-6 h-6 text-purple-400" />
  },
  {
    category: "Security Systems",
    items: ["CCTV Integration", "IP Camera Logic", "Surveillance Tech", "Network Config"],
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
  }
];

const EXPERIENCES: Experience[] = [
  {
    role: "Technology Specialist",
    company: "Freelance / Remote",
    period: "2023 - PRESENT",
    highlights: [
      "Engineering cloud solutions for scalable enterprise growth.",
      "Automating business logic through sophisticated AI workflows.",
      "Developing high-conversion web platforms for global clients."
    ]
  },
  {
    role: "Digital Ads Strategist",
    company: "Marketing Projects",
    period: "2022 - 2023",
    highlights: [
      "Managed high-budget Meta campaigns with 4x average ROI.",
      "Built custom tracking dashboards for real-time analytics.",
      "Optimized content funnels for niche market segments."
    ]
  }
];

const EDUCATION: Education[] = [
  {
    degree: "Web Systems & Full-Stack Development",
    school: "NIIT Center",
    year: "2023 – 2024"
  },
  {
    degree: "B.Sc. Accounting",
    school: "University of Benin",
    year: "2010 – 2016"
  }
];

// --- Helper for Smooth Scrolling ---
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// --- Sub-Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Expertise', id: 'expertise' },
    { name: 'Work', id: 'work' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'glass-nav py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black italic shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">W</div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white">
                WISDOM<span className="text-blue-500">.</span>
              </span>
              <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase opacity-80">Tech Solutions</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-slate-400 hover:text-white font-bold text-xs uppercase tracking-[0.2em] transition-all relative overflow-hidden group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-sm hover:bg-white hover:text-blue-600 transition-all shadow-xl shadow-blue-900/20"
            >
              Get In Touch
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none bg-slate-800 p-2 rounded-xl">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-slate-950 absolute top-0 left-0 w-full h-screen p-12 flex flex-col justify-center space-y-8 animate-in slide-in-from-right duration-500">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white"><X className="w-10 h-10" /></button>
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`} 
              onClick={(e) => { setIsOpen(false); scrollToSection(e, item.id); }} 
              className="text-6xl font-black tracking-tighter text-white hover:text-blue-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-grid">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-3/5 float-layer-1">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <Zap className="w-3 h-3 animate-pulse" />
            Nigeria Based • Tech Solutions Expert
          </div>
          <h1 className="text-7xl lg:text-[110px] font-black text-white leading-[0.85] tracking-tighter mb-10">
            Digital <br />
            <span className="text-gradient">Infrastructure.</span> <br />
            At Scale.
          </h1>
          <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl mb-12">
            Wisdom Osawe Albert — Bridging the gap between <span className="text-blue-400 font-bold">Accounting Logic</span> and <span className="text-indigo-400 font-bold">Cloud Deployment</span>. I design systems that just work.
          </p>
          <div className="flex flex-wrap gap-6">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-blue-600 text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-white hover:text-blue-600 transition-all flex items-center shadow-2xl shadow-blue-500/20"
            >
              Initiate Project <ArrowUpRight className="ml-3 w-6 h-6" />
            </a>
            <a 
              href="#expertise" 
              onClick={(e) => scrollToSection(e, 'expertise')}
              className="bg-slate-800/50 border-2 border-slate-700 text-white px-10 py-5 rounded-3xl font-black text-lg hover:border-blue-500 transition-all flex items-center backdrop-blur-xl"
            >
              View Expertise
            </a>
          </div>
        </div>

        <div className="lg:w-2/5 relative float-layer-2">
          <div className="float-soft relative z-10">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="relative bg-slate-900 rounded-[3.5rem] overflow-hidden border-[12px] border-slate-950 shadow-3xl aspect-[4/5] w-full max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop" 
                  alt="Professional MacBook and iPad Setup" 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-10 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="text-blue-400 w-5 h-5" />
                    <Tablet className="text-purple-400 w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-2">Modern Stack</p>
                  <p className="text-3xl font-black italic tracking-tighter leading-none">Cloud Architected Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="lg:flex items-center gap-24">
          <div className="lg:w-1/2 mb-16 lg:mb-0 float-layer-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-600/10 blur-[100px] -z-10 opacity-50"></div>
              <div className="rounded-[4rem] shadow-3xl w-full bg-slate-900 border-2 border-slate-800 aspect-[3/4] flex items-center justify-center overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop"
                  alt="High Tech CCTV Security System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
                />
                <div className="absolute inset-0 bg-slate-950/20"></div>
                <div className="absolute top-10 left-10 p-6 bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-3xl">
                   <Camera className="w-10 h-10 text-emerald-400 animate-pulse" />
                   <div className="mt-4">
                      <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">System Status</p>
                      <p className="text-emerald-400 font-bold">ONLINE & SECURE</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 float-layer-1">
            <span className="text-blue-500 font-black tracking-[0.4em] uppercase text-xs mb-6 block">The Tech-Accounting Nexus</span>
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
              Engineering <span className="text-blue-500">Security</span> <br /> & <span className="text-purple-500 italic">Efficiency.</span>
            </h2>
            <div className="space-y-8 text-slate-400 text-xl font-medium leading-relaxed">
              <p>
                My foundation in <span className="text-white font-black">Accounting</span> at the University of Benin instilled a "zero-error" philosophy that I now apply to <span className="text-blue-400 font-black">Cloud Systems</span> and <span className="text-emerald-400 font-black">Security Infrastructure</span>.
              </p>
              <p>
                From specialized <span className="text-white">CCTV surveillance architectures</span> to <span className="text-white">AWS automation workflows</span>, I build digital ecosystems that are as robust as they are scalable.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-6">
              <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 hover:border-blue-500 transition-all group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><Globe className="text-blue-400" /></div>
                <p className="text-white font-black">Nigeria</p>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Operations Hub</p>
              </div>
              <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 hover:border-emerald-500 transition-all group">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><Lock className="text-emerald-400" /></div>
                <p className="text-white font-black">Secure</p>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">System Standard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-32 bg-slate-950 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-10">
          <div className="max-w-xl text-center md:text-left float-layer-2">
            <h2 className="text-6xl font-black tracking-tighter mb-8 leading-tight text-white">
              The <span className="text-blue-500 italic">Capability</span> Deck.
            </h2>
            <p className="text-slate-400 font-medium text-lg leading-relaxed">
              Fusing financial discipline with cutting-edge technical execution for a unique project perspective.
            </p>
          </div>
          <div className="bg-slate-900 p-10 rounded-[3rem] border border-slate-800 md:w-1/3 shadow-inner group overflow-hidden relative float-layer-1">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
             <Cpu className="w-12 h-12 text-blue-500 mb-6 relative z-10" />
             <div className="space-y-6 relative z-10">
               <div>
                 <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2"><span>Architecture & Cloud</span><span>98%</span></div>
                 <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[98%] shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div></div>
               </div>
               <div>
                 <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2"><span>Security Logics</span><span>95%</span></div>
                 <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-[95%] shadow-[0_0_15px_rgba(168,85,247,0.6)]"></div></div>
               </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 float-layer-1">
          {SKILLS.map((skill, i) => (
            <div key={i} className="bento-card p-12 rounded-[3.5rem] flex flex-col justify-between group h-full hover:bg-slate-900/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                {skill.icon}
              </div>
              <div>
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl group-hover:-rotate-6">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-black mb-8 tracking-tight text-white">{skill.category}</h3>
                <div className="space-y-4">
                  {skill.items.map((item, j) => (
                    <p key={j} className="text-sm font-bold text-slate-500 flex items-center gap-4 group-hover:text-slate-300 transition-colors">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="work" className="py-32 bg-slate-950 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32 float-layer-2">
          <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-xs">Work History</span>
          <h2 className="text-6xl font-black text-white tracking-tighter mt-4">Professional Milestones.</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 float-layer-1">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="bg-slate-900 p-14 rounded-[4rem] border border-slate-800 flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-500 shadow-xl">
               <div>
                  <p className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] mb-8">{exp.period}</p>
                  <h3 className="text-4xl font-black text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mb-12">{exp.company}</p>
                  <div className="space-y-6">
                    {exp.highlights.map((h, j) => (
                      <div key={j} className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                        <p className="text-slate-400 font-medium leading-relaxed italic">
                          {h}
                        </p>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="mt-16 pt-8 border-t border-slate-800 flex items-center justify-between group-hover:border-blue-500/10 transition-all">
                 <span className="text-blue-500 font-black text-xs uppercase tracking-widest">Case Details</span>
                 <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg"><ArrowUpRight className="w-5 h-5" /></div>
               </div>
            </div>
          ))}
          
          <div className="bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-500 p-14 rounded-[4rem] flex flex-col justify-center text-white relative overflow-hidden group shadow-3xl shadow-blue-500/30">
            <Globe className="w-48 h-48 absolute -bottom-10 -right-10 opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-1000" />
            <h3 className="text-5xl font-black mb-8 tracking-tighter leading-tight">Global <br />Connectivity.</h3>
            <p className="text-blue-500 bg-white/90 px-6 py-2 rounded-full inline-block font-black text-xs uppercase tracking-widest mb-10 w-fit">Based in Nigeria</p>
            <p className="text-blue-50/80 font-medium mb-12 leading-relaxed text-lg italic">Bridging technological gaps for clients worldwide. Available for remote collaboration or strategic on-site relocations.</p>
            <div className="flex flex-wrap gap-4">
               {['Lagos', 'Abuja', 'Remote', 'Overseas'].map(loc => (
                 <div key={loc} className="px-6 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 backdrop-blur-xl">{loc}</div>
               ))}
            </div>
          </div>
        </div>

        <div className="mt-32 p-16 bg-slate-900 rounded-[5rem] border border-slate-800 flex flex-col md:flex-row items-center justify-around gap-16 text-center md:text-left relative overflow-hidden group shadow-2xl float-layer-2">
           <div className="absolute inset-0 bg-blue-600/5 scale-0 group-hover:scale-100 transition-transform duration-1000 rounded-full"></div>
           {EDUCATION.map((edu, idx) => (
             <div key={idx} className="relative z-10">
                <p className="text-blue-500 font-black text-xs uppercase tracking-widest mb-4">{edu.year}</p>
                <h4 className="text-3xl font-black text-white mb-2 leading-tight">{edu.degree}</h4>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em]">{edu.school}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-40 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="float-layer-1">
            <h2 className="text-8xl lg:text-9xl font-black tracking-tighter mb-16 leading-none">
              Start The <br /><span className="text-blue-500 italic">Phase.</span>
            </h2>
            <p className="text-2xl text-slate-400 mb-20 max-w-lg font-medium leading-relaxed">
              Open for strategic technical roles, security consulting, or complex cloud deployments.
            </p>
            
            <div className="space-y-12">
               <a href="mailto:wizzysax65@gmail.com" className="group block">
                  <div className="flex items-center gap-8">
                    <div className="w-20 h-20 bg-blue-600 rounded-[2.5rem] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all shadow-3xl shadow-blue-500/20"><Mail className="w-8 h-8 text-white" /></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">Direct Messaging</p>
                      <p className="text-2xl font-black group-hover:text-blue-400 transition-colors">wizzysax65@gmail.com</p>
                    </div>
                  </div>
               </a>
               <a href="tel:07048000511" className="group block">
                  <div className="flex items-center gap-8">
                    <div className="w-20 h-20 bg-slate-900 rounded-[2.5rem] flex items-center justify-center group-hover:scale-110 group-hover:-rotate-12 transition-all border border-slate-800 shadow-xl"><Phone className="w-8 h-8 text-white" /></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">Voice Consultation</p>
                      <p className="text-2xl font-black group-hover:text-blue-400 transition-colors">07048000511</p>
                    </div>
                  </div>
               </a>
            </div>

            <div className="mt-24 flex gap-8">
               {[Linkedin, Github, Instagram].map((Icon, idx) => (
                 <a key={idx} href="#" onClick={(e) => e.preventDefault()} className="w-16 h-16 bg-slate-900 rounded-3xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-3 border border-slate-800 shadow-xl group">
                   <Icon className="w-6 h-6 group-hover:scale-110" />
                 </a>
               ))}
            </div>
          </div>

          <div className="bg-slate-900 p-14 lg:p-20 rounded-[5rem] border border-slate-800 shadow-3xl relative overflow-hidden float-layer-2">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Zap className="w-40 h-40 text-blue-500" /></div>
            <h3 className="text-5xl font-black mb-16 tracking-tighter text-white relative z-10">Project <br />Specifications.</h3>
            <form className="space-y-12 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-6">Your Name</label>
                <input type="text" className="w-full bg-slate-950 px-10 py-6 rounded-[2rem] border border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-700 font-bold transition-all text-white outline-none" placeholder="Wisdom Albert" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-6">Project Vision</label>
                <textarea rows={4} className="w-full bg-slate-950 px-10 py-6 rounded-[2rem] border border-slate-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-700 font-bold transition-all text-white outline-none" placeholder="What are we building?"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-8 rounded-[2.5rem] font-black text-2xl hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-6 group shadow-3xl shadow-blue-500/20">
                Confirm Connection
                <ChevronRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-48 pt-20 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center font-black italic text-blue-500 text-sm shadow-xl border border-slate-800">W</div>
              <p className="text-slate-600 font-black text-[10px] uppercase tracking-[0.5em]">
                WISDOM ALBERT PORTFOLIO SYSTEM
              </p>
           </div>
           <p className="text-slate-700 font-bold text-xs uppercase tracking-[0.3em]">
             © {new Date().getFullYear()} • DESIGNED FOR HIGH-PERFORMANCE
           </p>
        </div>
      </div>
    </section>
  );
};

// --- Icons Replacement for Missing CheckCircle2 ---
const CheckCircle2 = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white bg-slate-950">
      <Navbar />
      <main className="relative page-float-container">
        <Hero />
        <AboutSection />
        <ExpertiseSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

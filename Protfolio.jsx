import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Camera, 
  MonitorPlay, 
  Users, 
  Award, 
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Mic,
  Headphones,
  Layers,
  Palette,
  Facebook,
  Instagram,
  Send,
  Mail,
  Sparkles,
  Globe
} from 'lucide-react';

// --- قاموس الترجمات ---
const dict = {
  ar: {
    nav: { about: "عني", services: "خدماتي", portfolio: "معرض الأعمال", contact: "تواصل معي" },
    hero: {
      freelance: "متاح لمشاريع العمل الحر (Freelance)",
      title1: "أصمم ",
      title2: "رؤيتك.",
      title3: "وأمنحها صوتاً.",
      desc: "مبدع شامل مستقل متخصص في تصميم الجرافيك، المونتاج السينمائي، والتعليق الصوتي. أحول الأفكار المعقدة إلى تجارب بصرية وصوتية لا تُنسى.",
      showreel: "شاهد الـ Showreel",
      audio: "استمع لعينات الصوت"
    },
    stats: {
      exp: "سنوات من الخبرة",
      clients: "عميل سعيد في ليبيا",
      toolsTitle: "أدواتي",
      toolsDesc: "احتراف كامل لحزمة أدوبي"
    },
    about: {
      badge: "من أنا",
      title1: "ليس مجرد تصميم،",
      title2: "بل قصة تُروى بذكاء.",
      p1: "مرحباً، أنا زياد أبولائطة. أؤمن بأن الإبداع الحقيقي لا يكمن فقط في إتقان الأدوات، بل في الرؤية التي تقف خلفها. كصانع محتوى شامل، أدمج بين الفن البصري والتأثير السمعي لأخلق تجارب تترك أثراً.",
      p2: "سواء كنت أصمم هوية بصرية تعكس روح علامتك التجارية، أو أمنتج فيديو يخطف الأنفاس، أو أمنح نصك حياةً عبر صوتي، هدفي دائماً هو تجاوز توقعاتك وتقديم عمل فني متكامل يعبر عنك بأفضل صورة.",
      tag1: "صانع محتوى بليغ",
      tag2: "تفكير خارج الصندوق",
      tag3: "اهتمام بالتفاصيل",
      floatingTitle: "شغف لا ينتهي",
      floatingDesc: "في كل بكسل ونبرة صوت"
    },
    servicesSection: {
      title1: "خدماتي ",
      title2: "الإبداعية",
      desc: "مزيج فريد من المهارات لإنتاج محتوى متكامل من الفكرة وحتى التسليم النهائي.",
      browse: "تصفح معرض الأعمال",
      details: "عرض التفاصيل",
      items: [
        { title: 'تصميم الجرافيك', desc: 'تصميم هويات بصرية، شعارات، وتصاميم سوشيال ميديا تعكس شخصية علامتك التجارية.' },
        { title: 'المونتاج وتحرير الفيديو', desc: 'قص، تلوين، وإضافة مؤثرات بصرية لصناعة فيديوهات احترافية وجذابة.' },
        { title: 'التعليق الصوتي', desc: 'تسجيل صوتي احترافي للإعلانات، الوثائقيات، والكتب الصوتية بنبرات متنوعة.' },
        { title: 'تصميم واجهات المستخدم', desc: 'تصميم واجهات مواقع وتطبيقات سلسة وجذابة تركز على تجربة المستخدم (UI/UX).' }
      ]
    },
    cta: {
      title: "جاهز للعمل معاً؟",
      desc: "سواء كنت تحتاج لهوية بصرية جديدة، فيديو ترويجي مبهر، أو تعليق صوتي يجذب الانتباه، أنا هنا لتحويل فكرتك لواقع.",
      btn: "لنصنع تحفتك الفنية القادمة 🚀"
    },
    footer: {
      desc: "مستقل مبدع يجمع بين الفن الرقمي والتقنية. أقدم حلولاً بصرية وصوتية متكاملة للشركات والأفراد الذين يبحثون عن التميز.",
      rights: "زياد أبولائطة. جميع الحقوق محفوظة.",
      linksTitle: "روابط سريعة",
      link1: "تحميل السيرة الذاتية (PDF)",
      link2: "حسابي على Behance",
      contactTitle: "تواصل معي"
    }
  },
  en: {
    nav: { about: "About", services: "Services", portfolio: "Portfolio", contact: "Contact Me" },
    hero: {
      freelance: "Available for Freelance Projects",
      title1: "I Design ",
      title2: "Your Vision.",
      title3: "And give it a voice.",
      desc: "An independent multidisciplinary creator specializing in Graphic Design, Video Editing, and Voice Over. I turn complex ideas into unforgettable visual and audio experiences.",
      showreel: "Watch Showreel",
      audio: "Listen to Audio Samples"
    },
    stats: {
      exp: "Years of Experience",
      clients: "Happy Clients in Libya",
      toolsTitle: "My Tools",
      toolsDesc: "Full mastery of the Adobe Suite"
    },
    about: {
      badge: "About Me",
      title1: "Not just a design,",
      title2: "but a story told smartly.",
      p1: "Hello, I'm Ziad Abulaita. I believe true creativity doesn't lie just in mastering tools, but in the vision behind them. As a versatile content creator, I blend visual art with auditory impact to create experiences that leave a mark.",
      p2: "Whether I'm designing a visual identity that reflects your brand's soul, editing a breathtaking video, or breathing life into your script with my voice, my goal is always to exceed your expectations.",
      tag1: "Eloquent Creator",
      tag2: "Out-of-the-box Thinker",
      tag3: "Attention to Detail",
      floatingTitle: "Endless Passion",
      floatingDesc: "In every pixel and tone"
    },
    servicesSection: {
      title1: "Creative ",
      title2: "Services",
      desc: "A unique blend of skills to produce integrated content from idea to final delivery.",
      browse: "Browse Portfolio",
      details: "View Details",
      items: [
        { title: 'Graphic Design', desc: 'Designing visual identities, logos, and social media designs that reflect your brand personality.' },
        { title: 'Video Editing', desc: 'Cutting, color grading, and adding visual effects to create professional videos.' },
        { title: 'Voice Over', desc: 'Professional voice recording for commercials, documentaries, and audiobooks.' },
        { title: 'UI/UX Design', desc: 'Designing smooth and attractive website and app interfaces focusing on user experience.' }
      ]
    },
    cta: {
      title: "Ready to Work Together?",
      desc: "Whether you need a new visual identity, a stunning promo video, or a voiceover that grabs attention, I'm here to turn your idea into reality.",
      btn: "Let's create your next masterpiece 🚀"
    },
    footer: {
      desc: "A creative freelancer combining digital art and technology. Providing integrated visual and audio solutions for businesses and individuals seeking excellence.",
      rights: "Ziad Abulaita. All rights reserved.",
      linksTitle: "Quick Links",
      link1: "Download CV (PDF)",
      link2: "My Behance",
      contactTitle: "Contact Me"
    }
  }
};

// مكون إضافي لإضافة الأنيميشن عند التمرير
const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lang, setLang] = useState('ar');

  // استكشاف لغة الجهاز التلقائية عند التحميل
  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('en')) {
      setLang('en');
    } else {
      setLang('ar');
    }
  }, []);

  const t = dict[lang];
  const isRTL = lang === 'ar';

  // تأثير الماوس المضيء (Glow)
  useEffect(() => {
    // إخفاء تأثير الماوس على الهواتف لدواعي الأداء وتجربة المستخدم
    if(window.innerWidth < 768) return; 

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // تأثير تغيير لون شريط التنقل عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  const serviceIcons = [
    <Palette className="w-8 h-8 text-[#4A72F5]" />,
    <MonitorPlay className="w-8 h-8 text-[#4A72F5]" />,
    <Mic className="w-8 h-8 text-[#4A72F5]" />,
    <Layers className="w-8 h-8 text-[#4A72F5]" />
  ];

  const serviceImages = [
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80'
  ];

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={`min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-[#1B3486] selection:text-white ${isRTL ? 'font-alexandria' : ''} relative overflow-x-hidden`}>
      
      {/* تأثير الـ Glow الأزرق التابع للماوس (يظهر فقط على الديسكتوب) */}
      <div 
        className="hidden md:block fixed pointer-events-none z-[9999] w-96 h-96 bg-[#4A72F5]/15 rounded-full blur-[100px] transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate(${mousePos.x - 192}px, ${mousePos.y - 192}px)`,
          left: 0,
          top: 0
        }}
      />

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800;900&display=swap');
          .font-alexandria { font-family: 'Alexandria', sans-serif; }
          @keyframes light-sweep {
            0% { transform: translateX(${isRTL ? '150%' : '-150%'}) skewX(-20deg); }
            100% { transform: translateX(${isRTL ? '-150%' : '150%'}) skewX(-20deg); }
          }
          .animate-light-sweep { animation: light-sweep 2.5s infinite ease-in-out; }
          @keyframes twinkle-1 {
            0%, 100% { opacity: 0.02; }
            50% { opacity: 0.15; }
          }
          @keyframes twinkle-2 {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.02; }
          }
          .animate-twinkle-1 { animation: twinkle-1 3s infinite ease-in-out; }
          .animate-twinkle-2 { animation: twinkle-2 4s infinite ease-in-out; }
        `}
      </style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-950/90 backdrop-blur-md py-4 shadow-lg shadow-black/50' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3 z-50">
            <img 
              src="https://i.ibb.co/v6FvxjYz/Logo-Ziad.png" 
              alt="Logo" 
              className="h-8 md:h-10 w-auto drop-shadow-[0_0_8px_rgba(74,114,245,0.4)] hover:scale-110 transition-transform duration-300" 
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight">Ziad<span className="text-[#4A72F5]">.</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#about" className="hover:text-[#4A72F5] transition-colors">{t.nav.about}</a>
            <a href="#services" className="hover:text-[#4A72F5] transition-colors">{t.nav.services}</a>
            <a href="#portfolio" className="hover:text-[#4A72F5] transition-colors">{t.nav.portfolio}</a>
            
            <button onClick={toggleLanguage} className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors" title="Change Language">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-bold uppercase">{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>

            <a 
              href="https://wa.me/218914134301" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1B3486] text-white px-6 py-2 rounded-full font-bold hover:bg-[#4A72F5] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(74,114,245,0.6)]"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button onClick={toggleLanguage} className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <button 
              className="text-neutral-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-neutral-900 border-t border-neutral-800 flex flex-col gap-4 shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 p-6 opacity-100 visible' : 'max-h-0 p-0 opacity-0 invisible'}`}>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg hover:text-[#4A72F5]">{t.nav.about}</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg hover:text-[#4A72F5]">{t.nav.services}</a>
          <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg hover:text-[#4A72F5]">{t.nav.portfolio}</a>
          <a 
            href="https://wa.me/218914134301" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#1B3486] text-white px-6 py-3 rounded-lg font-bold w-full mt-4 text-center hover:bg-[#4A72F5] transition-all duration-300 shadow-[0_0_15px_rgba(74,114,245,0.3)]"
          >
            {t.nav.contact}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40 z-10" />
          <img 
            src="https://i.ibb.co/VWtB6rHt/a-close-up-of-the-adobe-after-effects-interface-displaying-a-timeline-with-multiple-layers-and-keyfr.jpg" 
            alt="Workspace" 
            className="w-full h-full object-cover opacity-40 md:opacity-50 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 text-center mt-10 md:mt-20">
          <FadeInSection delay={100}>
            <div className="relative overflow-hidden inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-[#1B3486]/50 bg-[#1B3486]/20 text-white mb-6 md:mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(27,52,134,0.4)]">
              <div className="absolute top-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-light-sweep pointer-events-none z-0"></div>
              <div className="relative flex h-2.5 w-2.5 md:h-3.5 md:w-3.5 z-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3.5 md:w-3.5 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
              </div>
              <span className="text-xs md:text-sm font-bold tracking-wider relative z-10">{t.hero.freelance}</span>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={300}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 leading-tight">
              {t.hero.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A72F5] to-[#1B3486]">{t.hero.title2}</span> <br className="hidden sm:block"/>
              {t.hero.title3}
            </h1>
          </FadeInSection>
          
          <FadeInSection delay={500}>
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
              {t.hero.desc}
            </p>
          </FadeInSection>
          
          <FadeInSection delay={700}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full px-4 sm:px-0">
              <button className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-[#1B3486] text-white rounded-full font-bold text-base md:text-lg hover:bg-[#2A4BBA] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#1B3486]/30">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {t.hero.showreel}
              </button>
              <button className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-transparent border border-neutral-600 text-white rounded-full font-bold text-base md:text-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-2">
                <Headphones className="w-5 h-5" />
                {t.hero.audio}
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative bg-neutral-950 overflow-hidden">
        <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-full md:w-1/2 h-full bg-gradient-to-bl from-[#1B3486]/10 to-transparent blur-3xl rounded-full opacity-50`}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            <FadeInSection delay={100}>
              <div className="relative group max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#4A72F5] to-[#1B3486] rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] border border-neutral-800">
                  <div className="absolute inset-0 bg-neutral-900/40 mix-blend-multiply z-10 hover:bg-transparent transition-all duration-500"></div>
                  <img 
                    src="https://i.ibb.co/hRdhJgJ5/0292.jpg" 
                    alt="Ziad Abulaita" 
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className={`absolute -bottom-6 ${isRTL ? '-right-4 md:-right-8' : '-left-4 md:-left-8'} bg-neutral-900 border border-[#4A72F5]/30 p-4 md:p-6 rounded-2xl shadow-2xl backdrop-blur-xl z-20 animate-bounce`} style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1B3486]/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#4A72F5]" />
                    </div>
                    <div>
                      <p className="font-bold text-base md:text-lg">{t.about.floatingTitle}</p>
                      <p className="text-xs md:text-sm text-neutral-400">{t.about.floatingDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="space-y-6 md:space-y-8 mt-10 lg:mt-0 text-center lg:text-start">
                <div className="inline-flex items-center gap-2 text-[#4A72F5] font-semibold tracking-wider text-sm uppercase">
                  <span className="w-8 h-[2px] bg-[#4A72F5] rounded-full"></span>
                  {t.about.badge}
                  <span className="w-8 h-[2px] bg-[#4A72F5] rounded-full lg:hidden"></span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  {t.about.title1} <br className="hidden sm:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A72F5] to-[#1B3486]">{t.about.title2}</span>
                </h2>
                
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                  {t.about.p1}
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                  {t.about.p2}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4 pt-4">
                  <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-neutral-800 bg-neutral-900 text-xs md:text-sm font-semibold text-neutral-300 hover:border-[#4A72F5] hover:text-[#4A72F5] transition-colors cursor-default">{t.about.tag1}</span>
                  <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-neutral-800 bg-neutral-900 text-xs md:text-sm font-semibold text-neutral-300 hover:border-[#4A72F5] hover:text-[#4A72F5] transition-colors cursor-default">{t.about.tag2}</span>
                  <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-neutral-800 bg-neutral-900 text-xs md:text-sm font-semibold text-neutral-300 hover:border-[#4A72F5] hover:text-[#4A72F5] transition-colors cursor-default">{t.about.tag3}</span>
                </div>
              </div>
            </FadeInSection>

          </div>
        </div>
      </section>

      {/* Features/Stats Section */}
      <section className="py-16 md:py-20 bg-neutral-900 relative z-10 border-y border-neutral-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-center">
            <FadeInSection delay={100}>
              <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-neutral-800/50 transition-colors">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-neutral-950 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-[#1B3486]/30 border border-neutral-800">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-[#4A72F5]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">4</h3>
                <p className="text-sm md:text-base text-neutral-400">{t.stats.exp}</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-neutral-800/50 transition-colors">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-neutral-950 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-[#1B3486]/30 border border-neutral-800">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-[#4A72F5]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">+100</h3>
                <p className="text-sm md:text-base text-neutral-400">{t.stats.clients}</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={500} className="sm:col-span-2 md:col-span-1">
              <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-neutral-800/50 transition-colors">
                <div className={`flex gap-2 mb-4 md:mb-6 justify-center w-full ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg border-2 border-[#31A8FF] text-[#31A8FF] flex items-center justify-center font-bold text-sm md:text-base bg-[#001E36] shadow-[0_0_15px_rgba(49,168,255,0.2)]" title="Photoshop">Ps</div>
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg border-2 border-[#FF9A00] text-[#FF9A00] flex items-center justify-center font-bold text-sm md:text-base bg-[#331E00] shadow-[0_0_15px_rgba(255,154,0,0.2)]" title="Illustrator">Ai</div>
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg border-2 border-[#9999FF] text-[#9999FF] flex items-center justify-center font-bold text-sm md:text-base bg-[#1A1A33] shadow-[0_0_15px_rgba(153,153,255,0.2)]" title="After Effects">Ae</div>
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg border-2 border-[#00E8D2] text-[#00E8D2] flex items-center justify-center font-bold text-sm md:text-base bg-[#002E2A] shadow-[0_0_15px_rgba(0,232,210,0.2)]" title="Audition">Au</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{t.stats.toolsTitle}</h3>
                <p className="text-sm md:text-base text-neutral-400">{t.stats.toolsDesc}</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Programs/Services Section */}
      <section id="services" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-4 md:gap-6 text-center md:text-start">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">{t.servicesSection.title1}<span className="text-[#4A72F5]">{t.servicesSection.title2}</span></h2>
                <p className="text-neutral-400 text-base md:text-lg">{t.servicesSection.desc}</p>
              </div>
              <button className={`flex items-center gap-2 text-[#4A72F5] font-semibold hover:text-[#1B3486] transition-colors group`}>
                {t.servicesSection.browse}
                {isRTL ? <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> : <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {t.servicesSection.items.map((service, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer h-full flex flex-col">
                  <div className="h-48 md:h-56 lg:h-64 overflow-hidden relative shrink-0">
                    <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={serviceImages[index]} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute top-3 md:top-4 ${isRTL ? 'right-3 md:right-4' : 'left-3 md:left-4'} z-20 bg-neutral-950/80 p-2 md:p-3 rounded-xl backdrop-blur-sm border border-neutral-800 group-hover:border-[#1B3486]/50 transition-colors`}>
                      {serviceIcons[index]}
                    </div>
                  </div>
                  <div className="p-5 md:p-6 relative z-20 bg-gradient-to-t from-neutral-950 to-neutral-900 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-[#4A72F5] transition-colors">{service.title}</h3>
                      <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">{service.desc}</p>
                    </div>
                    <div className="flex items-center text-xs md:text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors">
                      {t.servicesSection.details} 
                      {isRTL ? <ChevronLeft className="w-4 h-4 mr-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> : <ChevronRight className="w-4 h-4 ml-1 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#1B3486] text-white">
        <div className="absolute inset-0 animate-twinkle-1" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute inset-0 animate-twinkle-2" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px', backgroundPosition: '15px 15px' }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeInSection>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 uppercase tracking-tight">{t.cta.title}</h2>
            <p className="text-base sm:text-xl md:text-2xl font-medium mb-8 md:mb-10 max-w-2xl mx-auto opacity-90 text-neutral-200 px-4">
              {t.cta.desc}
            </p>
            <a 
              href="https://wa.me/218914134301" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center px-6 py-4 md:px-10 md:py-5 bg-[#4A72F5] text-white rounded-full font-bold text-sm sm:text-base md:text-xl hover:bg-white hover:text-[#1B3486] transition-all duration-300 shadow-[0_0_20px_rgba(74,114,245,0.5)] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] w-[90%] sm:w-auto"
            >
              <div className="absolute top-0 left-0 bottom-0 w-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-light-sweep pointer-events-none z-0"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t.cta.btn}
              </span>
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 md:py-16 border-t border-neutral-900">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 text-center sm:text-start">
          <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <img 
                src="https://i.ibb.co/v6FvxjYz/Logo-Ziad.png" 
                alt="Logo" 
                className="h-8 md:h-10 w-auto drop-shadow-[0_0_8px_rgba(74,114,245,0.4)] hover:scale-110 transition-transform duration-300" 
              />
              <span className="text-xl md:text-2xl font-bold tracking-tight">Ziad<span className="text-[#4A72F5]">.</span></span>
            </div>
            <p className="text-neutral-400 max-w-sm leading-relaxed mb-6 text-sm md:text-base">
              {t.footer.desc}
            </p>
            <div className="text-xs md:text-sm text-neutral-500">
              © {new Date().getFullYear()} {t.footer.rights}
            </div>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">{t.footer.linksTitle}</h4>
            <ul className="space-y-3 md:space-y-4 text-neutral-400 text-sm md:text-base">
              <li><a href="#" className="hover:text-[#4A72F5] transition-colors inline-block">{t.footer.link1}</a></li>
              <li><a href="#" className="hover:text-[#4A72F5] transition-colors inline-block">{t.footer.link2}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 md:space-y-4 text-neutral-400 text-sm md:text-base flex flex-col items-center sm:items-start">
              <li>
                <a href="https://wa.me/218914134301" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 md:gap-3 hover:text-[#4A72F5] transition-all duration-300 ${isRTL ? 'hover:translate-x-[-5px]' : 'hover:translate-x-[5px]'}`}>
                  <span dir="ltr" className="inline-block">+218 91 413 4301</span>
                </a>
              </li>
              <li>
                <a href="mailto:ziadabulaita@gmail.com" className={`flex items-center gap-2 md:gap-3 hover:text-[#4A72F5] transition-all duration-300 ${isRTL ? 'hover:translate-x-[-5px]' : 'hover:translate-x-[5px]'}`}>
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  ziadabulaita@gmail.com
                </a>
              </li>
              <li className="flex gap-3 md:gap-4 pt-2 md:pt-4 justify-center sm:justify-start">
                <a href="https://www.facebook.com/zi4dx" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-[#4A72F5] hover:text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(74,114,245,0.5)] transition-all duration-300" title="Facebook">
                  <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="https://www.instagram.com/zi4idx/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-[#E1306C] hover:text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(225,48,108,0.5)] transition-all duration-300" title="Instagram">
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="https://t.me/zi4dx" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-[#0088cc] hover:text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,136,204,0.5)] transition-all duration-300" title="Telegram">
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

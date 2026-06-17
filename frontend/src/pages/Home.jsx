import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Stethoscope, HeartPulse, Brain, Baby, Sparkles, AlertCircle, Calendar, ShieldCheck, Users, HelpCircle, ChevronDown } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [specialty, setSpecialty] = useState('');

  const specialties = [
    { name: 'Cardiologist', icon: HeartPulse, count: '12 Doctors', color: 'text-red-500 bg-red-500/10 border-red-200' },
    { name: 'Neurologist', icon: Brain, count: '8 Doctors', color: 'text-indigo-500 bg-indigo-500/10 border-indigo-200' },
    { name: 'Dermatologist', icon: Sparkles, count: '15 Doctors', color: 'text-pink-500 bg-pink-500/10 border-pink-200' },
    { name: 'Pediatrician', icon: Baby, count: '18 Doctors', color: 'text-orange-500 bg-orange-500/10 border-orange-200' },
    { name: 'Dentist', icon: Stethoscope, count: '22 Doctors', color: 'text-teal-500 bg-teal-500/10 border-teal-200' },
  ];

  const faqs = [
    { q: "How do I book an appointment?", a: "Find a doctor by searching, click 'Book Appointment', select an available time slot, fill in the reason for appointment, and submit. The doctor will receive it in real-time." },
    { q: "Can I manage medical records?", a: "Yes, patients can upload PDFs, PNGs, and JPGs to their medical reports dashboard. Doctors who have active consultations with you can view them safely." },
    { q: "How do notifications work?", a: "MediGo utilizes Socket.io to push real-time toast alerts and updates. You will be notified instantly when your appointment is confirmed, cancelled, or completed." },
    { q: "Is registration free?", a: "Yes, registering on MediGo as a Patient is completely free. Doctors can register and complete onboarding details to get verified and listed on our directory." }
  ];

  const [faqOpen, setFaqOpen] = useState(Array(faqs.length).fill(false));

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.append('search', searchQuery);
    if (specialty) params.append('specialization', specialty);
    navigate(`/doctors?${params.toString()}`);
  };

  const toggleFaq = (index) => {
    setFaqOpen(prev => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  return (
    <div className="space-y-24 pb-24 bg-slate-50/50 dark:bg-darkBg bg-grid-pattern transition-colors duration-300">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden mesh-gradient text-white py-28 md:py-36 px-4 text-center md:text-left rounded-b-[2.5rem] md:rounded-b-[4.5rem] shadow-2xl border-b border-white/5 bg-grid-pattern">
        {/* Glowing Decorative Radial Spheres */}
        <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-brand-500/15 rounded-full blur-[100px] -z-10 translate-x-1/4 -translate-y-1/4 animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-accent-500/10 rounded-full blur-[90px] -z-10 -translate-x-1/4 translate-y-1/4 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-500/20 to-accent-500/20 border border-brand-500/30 text-brand-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
              <span>Telemedicine Reimagined</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-100">
              Your Health, <br />
              <span className="text-glow-gradient">Our Connected Care.</span>
            </h1>
            <p className="text-slate-300 text-base md:text-xl max-w-lg leading-relaxed font-light">
              Find trusted healthcare specialists, schedule consultations in real-time, upload secure records, and read verified reviews from patients just like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Link to="/doctors" className="bg-brand-500 hover:bg-brand-600 hover:scale-105 active:scale-95 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 group">
                <span>Book Appointment</span>
                <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/register" className="bg-white/10 hover:bg-white/15 hover:scale-105 active:scale-95 border border-white/10 text-white font-bold text-sm px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                <span>Join as Doctor</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:col-span-5 relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative animate-float">
              {/* Outer soft glowing borders */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-brand-500 to-accent-500 opacity-20 blur-xl animate-pulse-glow"></div>
              <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-r from-brand-500 via-teal-400 to-accent-500 opacity-30 blur-sm"></div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                alt="Doctor Telemedicine Consultation"
                className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover h-[380px] border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search Form */}
      <section className="max-w-4xl mx-auto -mt-20 px-4 z-20 relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <form onSubmit={handleSearch} className="glass-effect p-6 md:p-8 rounded-3xl shadow-glass hover:shadow-glass-hover transition-all duration-300 border border-slate-200/50 dark:border-darkBg-border grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search doctors by name, hospital, experience..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50/70 dark:bg-slate-800/80 pl-12 pr-4 py-4 rounded-2xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 border border-slate-100 dark:border-darkBg-border text-slate-800 dark:text-white transition-all shadow-inner placeholder:text-slate-400"
            />
          </div>
          <div className="md:col-span-4 relative">
            <input
              type="text"
              placeholder="Specialty (e.g. Dentist)"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full bg-slate-50/70 dark:bg-slate-800/80 px-4 py-4 rounded-2xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 border border-slate-100 dark:border-darkBg-border text-slate-800 dark:text-white transition-all shadow-inner placeholder:text-slate-400"
            />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="w-full h-full bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-bold text-xs py-4 md:py-0 rounded-2xl transition-all shadow-md shadow-brand-500/20 hover:shadow-brand-600/30">
              Find
            </button>
          </div>
        </form>
      </section>

      {/* 3. Top Specialists Section */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="space-y-4 max-w-xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full">Explore Specialties</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-3">Top Specialist Fields</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">Access highly certified clinical professionals grouped by medical specializations.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {specialties.map((spec) => {
            const Icon = spec.icon;
            return (
              <button
                key={spec.name}
                onClick={() => navigate(`/doctors?specialization=${spec.name}`)}
                className="flex flex-col items-center p-6 bg-white dark:bg-darkBg-card border border-slate-100 dark:border-darkBg-border rounded-3xl premium-card group"
              >
                <div className={`p-4 rounded-2xl ${spec.color} mb-5 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-bold text-slate-800 dark:text-white text-xs group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">{spec.name}</span>
                <span className="text-[10px] text-slate-400 mt-2 font-medium bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded-full">{spec.count}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. Core Features Stats */}
      <section className="bg-white/80 dark:bg-darkBg-card/40 py-20 px-4 border-y border-slate-100 dark:border-darkBg-border glass-effect">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex space-x-5 p-4 text-left hover:scale-[1.02] transition-transform duration-300">
            <div className="p-4 bg-brand-500/10 rounded-2xl text-brand-600 dark:text-brand-500 h-fit shadow-sm">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white text-sm md:text-base">Flexible Scheduling</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-2 leading-relaxed">Book appointments based on precise real-time slots and get approved instantly.</p>
            </div>
          </div>
          <div className="flex space-x-5 p-4 text-left hover:scale-[1.02] transition-transform duration-300">
            <div className="p-4 bg-brand-500/10 rounded-2xl text-brand-600 dark:text-brand-500 h-fit shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white text-sm md:text-base">Onboarding Approval Verification</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-2 leading-relaxed">All doctors undergo credentials audits by admin coordinators prior to platform visibility.</p>
            </div>
          </div>
          <div className="flex space-x-5 p-4 text-left hover:scale-[1.02] transition-transform duration-300">
            <div className="p-4 bg-brand-500/10 rounded-2xl text-brand-600 dark:text-brand-500 h-fit shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white text-sm md:text-base">Community Feedback Reviews</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-2 leading-relaxed">Review ratings are locked exclusively to patients with completed appointment histories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Health Tips Blog Section */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="space-y-4 max-w-xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full">Articles & Tips</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-3">Health Tips Blog</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">Stay informed with daily clinical tips curated by verified practitioners.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white dark:bg-darkBg-card rounded-3xl border border-slate-100 dark:border-darkBg-border overflow-hidden shadow-sm premium-card group">
            <div className="overflow-hidden relative h-52">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" alt="Nutrition" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-[10px] font-bold text-brand-500 uppercase tracking-widest">Nutrition</span>
              <h4 className="font-bold text-slate-800 dark:text-white text-sm md:text-base group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">Top 5 Foods for Cardiac Wellness</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">Boost your heart health by integrating antioxidant-rich items like berries, spinach, and salmon.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-darkBg-card rounded-3xl border border-slate-100 dark:border-darkBg-border overflow-hidden shadow-sm premium-card group">
            <div className="overflow-hidden relative h-52">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80" alt="Mindfulness" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-[10px] font-bold text-brand-500 uppercase tracking-widest">Mental Health</span>
              <h4 className="font-bold text-slate-800 dark:text-white text-sm md:text-base group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">Managing Daily Stress with Mindfulness</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">Reduce workplace fatigue and blood pressure levels through simple 5-minute breathing routines.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-darkBg-card rounded-3xl border border-slate-100 dark:border-darkBg-border overflow-hidden shadow-sm premium-card group">
            <div className="overflow-hidden relative h-52">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80" alt="Fitness" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-[10px] font-bold text-brand-500 uppercase tracking-widest">Fitness</span>
              <h4 className="font-bold text-slate-800 dark:text-white text-sm md:text-base group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">The Importance of Low-Impact Aerobics</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">Strengthen core muscle flexibility and joint durability without overloading physical skeletal frames.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-4 max-w-xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-brand-500 uppercase tracking-widest bg-brand-500/10 px-3.5 py-1.5 rounded-full">Help Center</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-3">Frequently Asked Questions</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">Clear answers on scheduling, clinical safety, record uploads, and verification policies.</p>
        </div>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-darkBg-card border border-slate-100 dark:border-darkBg-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-5 font-bold text-slate-800 dark:text-slate-100 text-xs md:text-sm focus:outline-none"
              >
                <span className="flex items-center gap-3"><HelpCircle className="w-4.5 h-4.5 text-brand-500 flex-shrink-0" /> {faq.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${faqOpen[index] ? 'rotate-180 text-brand-500' : 'text-slate-400'}`} />
              </button>
              {faqOpen[index] && (
                <div className="px-6 pb-5 border-t border-slate-50 dark:border-darkBg-border pt-4">
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

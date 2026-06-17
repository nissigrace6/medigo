import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-400 py-16 border-t border-slate-800/80 overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-500/3 rounded-full blur-[100px] -z-0" />
      <div className="absolute top-0 left-0 w-56 h-56 bg-accent-500/3 rounded-full blur-[80px] -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-2 text-left">
            <Link to="/" className="flex items-center space-x-2.5 text-white font-bold text-xl tracking-wide group">
              <svg className="w-7 h-7 fill-brand-500 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
              </svg>
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">MediGo</span>
            </Link>
            <p className="mt-4 text-sm max-w-md leading-relaxed text-slate-500">
              MediGo is a trusted full-stack healthcare and telemedicine platform facilitating seamless consultations, appointment booking, secure clinical report sharing, and patient reviews.
            </p>
            <div className="flex space-x-3 mt-6">
              {['HIPAA', 'GDPR', 'SOC 2'].map((badge) => (
                <span key={badge} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-800 text-slate-500 bg-slate-900/50 hover:border-brand-500/30 hover:text-brand-400 transition-colors cursor-default">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-5">Discover</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/doctors" className="hover:text-brand-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-brand-500 transition-colors" />
                  Find Specialised Doctors
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="hover:text-brand-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-brand-500 transition-colors" />
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-brand-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-brand-500 transition-colors" />
                  Register as Practitioner
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div className="text-left">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-5">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="block text-slate-500">Email: support@medigo.care</span></li>
              <li><span className="block text-slate-500">Phone: +1 800-MEDI-GO</span></li>
              <li><span className="block text-slate-500">Hours: 24/7 Support</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p className="flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} MediGo Care. Built with
            <Heart className="w-3 h-3 text-red-500/60 fill-current" />
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-slate-400 transition-colors cursor-default">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

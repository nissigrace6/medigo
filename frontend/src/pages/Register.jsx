import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, Phone, UserCheck, ShieldAlert, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('Male');
  const [role, setRole] = useState('Patient'); // Patient or Doctor
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await register(name, email, password, role, phone, gender);
      if (role === 'Doctor') {
        navigate('/doctor-dashboard');
      } else {
        navigate('/patient-dashboard');
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 bg-slate-50 dark:bg-darkBg relative overflow-hidden bg-grid-pattern transition-colors duration-300">
      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-brand-500/8 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-[25rem] h-[25rem] bg-accent-500/8 rounded-full blur-[90px] -z-10 animate-pulse-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-10 right-1/3 w-48 h-48 bg-teal-400/5 rounded-full blur-[60px] -z-10 animate-float" />

      <div className="max-w-md w-full glass-effect p-8 md:p-10 rounded-[2rem] shadow-2xl space-y-7 animate-fade-in-up relative">
        {/* Subtle top accent bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-b-full" />

        <div className="text-center space-y-3">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 dark:text-brand-400 flex items-center justify-center shadow-sm">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white">Create Account</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-light">Join MediGo to schedule clinical care</p>
        </div>

        {error && (
          <div className="flex items-center space-x-3 p-4 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 text-xs font-semibold animate-fade-in-up">
            <ShieldAlert className="w-4.5 h-4.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* Role selector */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Account Type</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole('Patient')}
                className={`py-3 text-xs font-bold rounded-xl transition-all border ${
                  role === 'Patient'
                    ? 'bg-brand-500 text-white border-brand-500 shadow-lg shadow-brand-500/20 scale-[1.02]'
                    : 'bg-slate-50/70 dark:bg-slate-800/50 border-slate-200/60 dark:border-darkBg-border text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-[1.02]'
                }`}
              >
                Patient Portal
              </button>
              <button
                type="button"
                onClick={() => setRole('Doctor')}
                className={`py-3 text-xs font-bold rounded-xl transition-all border ${
                  role === 'Doctor'
                    ? 'bg-brand-500 text-white border-brand-500 shadow-lg shadow-brand-500/20 scale-[1.02]'
                    : 'bg-slate-50/70 dark:bg-slate-800/50 border-slate-200/60 dark:border-darkBg-border text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-[1.02]'
                }`}
              >
                Doctor Practitioner
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors w-4.5 h-4.5" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dr. John Doe / John Doe"
                className="w-full bg-slate-50/70 dark:bg-slate-800/50 pl-11 pr-4 py-3.5 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:bg-white dark:focus:bg-slate-800 border border-slate-200/60 dark:border-darkBg-border text-slate-800 dark:text-white transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors w-4.5 h-4.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full bg-slate-50/70 dark:bg-slate-800/50 pl-11 pr-4 py-3.5 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:bg-white dark:focus:bg-slate-800 border border-slate-200/60 dark:border-darkBg-border text-slate-800 dark:text-white transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors w-4.5 h-4.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50/70 dark:bg-slate-800/50 pl-11 pr-4 py-3.5 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:bg-white dark:focus:bg-slate-800 border border-slate-200/60 dark:border-darkBg-border text-slate-800 dark:text-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone</label>
              <div className="relative group">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors w-4 h-4" />
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="1234567890"
                  className="w-full bg-slate-50/70 dark:bg-slate-800/50 pl-10 pr-3 py-3.5 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:bg-white dark:focus:bg-slate-800 border border-slate-200/60 dark:border-darkBg-border text-slate-800 dark:text-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full bg-slate-50/70 dark:bg-slate-800/50 px-4 py-3.5 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:bg-white dark:focus:bg-slate-800 border border-slate-200/60 dark:border-darkBg-border text-slate-800 dark:text-white transition-all"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm py-4 rounded-xl transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-600/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <span>Create Account</span>
            )}
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200/50 dark:border-darkBg-border">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-brand-500 hover:text-brand-600 transition-colors">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

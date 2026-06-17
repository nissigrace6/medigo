import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Mail, Lock, ShieldAlert, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const redirectPath = location.state?.from || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await login(email, password);
      // Redirect based on role
      if (data.user.role === 'Super Admin') {
        navigate('/super-admin-dashboard');
      } else if (data.user.role === 'Admin') {
        navigate('/admin-dashboard');
      } else if (data.user.role === 'Doctor') {
        navigate('/doctor-dashboard');
      } else {
        navigate(redirectPath);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16 bg-slate-50 dark:bg-darkBg relative overflow-hidden bg-grid-pattern transition-colors duration-300">
      {/* Soft decorative background glows */}
      <div className="absolute top-10 left-10 w-[30rem] h-[30rem] bg-brand-500/10 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-accent-500/10 rounded-full blur-[100px] -z-10 animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-md w-full glass-effect border border-slate-200/50 dark:border-darkBg-border p-8 md:p-10 rounded-[2.5rem] shadow-glass hover:shadow-glass-hover transition-all duration-300 space-y-8 animate-fade-in-up">
        <div className="text-center space-y-3">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center shadow-sm">
            <CheckCircle className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white">Welcome Back</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-light">Access your MediGo portal dashboard</p>
        </div>

        {error && (
          <div className="flex items-center space-x-3 p-4 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 text-xs font-semibold">
            <ShieldAlert className="w-4.5 h-4.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full bg-slate-50/50 dark:bg-slate-800/50 pl-12 pr-4 py-3.5 rounded-2xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 border border-slate-100 dark:border-darkBg-border text-slate-800 dark:text-white transition-all shadow-inner placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50/50 dark:bg-slate-800/50 pl-12 pr-4 py-3.5 rounded-2xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500 border border-slate-100 dark:border-darkBg-border text-slate-800 dark:text-white transition-all shadow-inner placeholder:text-slate-400"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-bold text-xs py-3.5 rounded-2xl transition-all shadow-md shadow-brand-500/20 hover:shadow-brand-600/30 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        <div className="bg-slate-50/70 dark:bg-slate-800/40 p-5 rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-700/60">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 text-center">Fast Credentials Autofill</p>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <button
              type="button"
              onClick={() => { setEmail('superadmin@mediconnect.com'); setPassword('Admin@123'); }}
              className="py-2.5 px-3 bg-indigo-50 dark:bg-indigo-950/20 text-[#4338CA] dark:text-indigo-400 rounded-xl border border-[#4338CA]/20 text-center font-bold hover:bg-indigo-100 dark:hover:bg-indigo-950/40 hover:scale-105 active:scale-95 transition-all"
            >
              Super Admin
            </button>
            <button
              type="button"
              onClick={() => { setEmail('admin@mediconnect.com'); setPassword('Admin@123'); }}
              className="py-2.5 px-3 bg-blue-50 dark:bg-blue-950/20 text-[#2563EB] dark:text-blue-400 rounded-xl border border-blue-500/20 text-center font-bold hover:bg-blue-100 dark:hover:bg-blue-950/40 hover:scale-105 active:scale-95 transition-all"
            >
              Admin
            </button>
            <button
              type="button"
              onClick={() => { setEmail('doctor1@mediconnect.com'); setPassword('Admin@123'); }}
              className="py-2.5 px-3 bg-teal-50 dark:bg-teal-950/20 text-[#14B8A6] dark:text-teal-400 rounded-xl border border-[#14B8A6]/20 text-center font-bold hover:bg-teal-100 dark:hover:bg-teal-950/40 hover:scale-105 active:scale-95 transition-all"
            >
              Doctor
            </button>
            <button
              type="button"
              onClick={() => { setEmail('patient1@mediconnect.com'); setPassword('Admin@123'); }}
              className="py-2.5 px-3 bg-emerald-50 dark:bg-emerald-950/20 text-[#10B981] dark:text-emerald-400 rounded-xl border border-emerald-500/20 text-center font-bold hover:bg-emerald-100 dark:hover:bg-emerald-950/40 hover:scale-105 active:scale-95 transition-all"
            >
              Patient
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-slate-400 dark:text-slate-500 pt-3 border-t border-slate-100 dark:border-darkBg-border/80">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold text-brand-500 hover:text-brand-600 transition-colors">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

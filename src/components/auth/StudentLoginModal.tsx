import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { LogIn, KeyRound, User, School, AlertCircle, CheckCircle2, Shield } from 'lucide-react';

interface StudentLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentLoginModal: React.FC<StudentLoginModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'student' | 'institution'>('student');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!identifier.trim()) {
      setError(`Please enter your ${role === 'student' ? 'Participant ID or Roll No' : 'Institution Code'}`);
      return;
    }

    if (!password.trim()) {
      setError('Please enter your password or passkey');
      return;
    }

    setLoading(true);

    // Mock verification (precursor to Firebase Authentication signInWithEmailAndPassword or custom token)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    }, 1000);
  };

  const handleFillDemo = () => {
    if (role === 'student') {
      setIdentifier('NS-2026-4821');
      setPassword('sahitya@2026');
    } else {
      setIdentifier('INST-TN-042');
      setPassword('institution@pass');
    }
    setError('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Sahityotsav Portal Access"
      subtitle="National Student & Institution Unified Login"
      maxWidth="md"
    >
      <div className="space-y-5">
        
        {/* Role Toggle Tabs */}
        <div className="grid grid-cols-2 p-1 bg-slate-900 rounded-xl border border-slate-800">
          <button
            type="button"
            onClick={() => {
              setRole('student');
              setError('');
            }}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              role === 'student'
                ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Participant Student</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setRole('institution');
              setError('');
            }}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              role === 'institution'
                ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <School className="w-3.5 h-3.5" />
            <span>Institution / Unit</span>
          </button>
        </div>

        {success ? (
          <div className="py-8 text-center space-y-3 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-serif font-bold text-white">Authentication Successful</h4>
            <p className="text-xs text-slate-300">
              Welcome back! Redirecting you to your delegate digital credential dashboard...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {error && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                {role === 'student' ? 'Participant ID / Registration Code' : 'Institution Registration Code'}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={role === 'student' ? 'e.g. NS-2026-4821' : 'e.g. INST-TN-042'}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 uppercase font-mono"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Secret Key / Password
                </label>
                <a href="#contact" onClick={onClose} className="text-[11px] text-amber-400 hover:underline">
                  Forgot Key?
                </a>
              </div>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your security passkey"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Authenticating with Central Registry...</span>
                ) : (
                  <>
                    <LogIn className="w-4 h-4 text-slate-950" />
                    <span>Secure Sign In</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Demo Pre-fill helper */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={handleFillDemo}
                className="text-xs text-amber-400/90 hover:text-amber-300 underline underline-offset-4"
              >
                Auto-fill Sample Delegate Credentials
              </button>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Protected by National Sahityotsav Identity Gateway</span>
            </div>

          </form>
        )}

      </div>
    </Modal>
  );
};

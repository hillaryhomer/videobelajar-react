import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Button from './Button.jsx';

export default function AuthForm({ mode }) {
  const isRegister = mode === 'register';
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState('');
  function submit(event) {
    event.preventDefault();
    setNotice(isRegister ? 'Formulir berhasil diisi. Fitur pendaftaran akun belum terhubung ke backend.' : 'Formulir berhasil diisi. Fitur login belum terhubung ke backend.');
  }
  return <form className="auth-form" onSubmit={submit}>
    {isRegister && <label>Nama lengkap<input name="name" type="text" placeholder="Contoh: Hillary Putri" autoComplete="name" required /></label>}
    <label>Email<input name="email" type="email" placeholder="nama@email.com" autoComplete="email" required /></label>
    {isRegister && <label>Nomor HP <span className="optional">(opsional)</span><input name="phone" type="tel" placeholder="+65 8123 4567" autoComplete="tel" /></label>}
    <label>Kata sandi<div className="password-wrap"><input name="password" type={showPassword ? 'text' : 'password'} placeholder="Minimal 8 karakter" autoComplete={isRegister ? 'new-password' : 'current-password'} minLength="8" required /><button type="button" className="password-toggle" aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}</button></div></label>
    {!isRegister && <div className="form-options"><label className="remember"><input type="checkbox" /> Ingat saya</label><a href="#forgot">Lupa kata sandi?</a></div>}
    {isRegister && <label className="check-line"><input type="checkbox" required /> Saya setuju dengan Syarat Layanan dan Kebijakan Privasi.</label>}
    <Button type="submit">{isRegister ? 'Buat akun' : 'Masuk ke akun'}</Button>
    {notice && <p className="form-notice" role="status">{notice}</p>}
    <div className="separator"><span>atau</span></div>
    <Button variant="social" onClick={() => setNotice('Login Google adalah contoh UI dan belum dihubungkan.')}>G <span>Lanjutkan dengan Google</span></Button>
  </form>;
}

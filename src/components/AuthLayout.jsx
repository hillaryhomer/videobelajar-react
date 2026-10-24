import Brand from './Brand.jsx';
export default function AuthLayout({ children, title, subtitle, switchText, switchLabel, switchHref }) {
  return <main className="auth-shell">
    <div className="auth-top"><Brand /><a href="/">Kembali ke beranda</a></div>
    <section className="auth-card">
      <div className="auth-heading"><span className="eyebrow">MULAI BELAJAR HARI INI</span><h1>{title}</h1><p>{subtitle}</p></div>
      {children}
      <p className="auth-switch">{switchText} <a href={switchHref}>{switchLabel}</a></p>
      <p className="legal-note">Dengan melanjutkan, kamu menyetujui Syarat Layanan dan Kebijakan Privasi kami.</p>
    </section>
    <p className="auth-foot">© 2026 VideoBelajar. Semua hak dilindungi.</p>
  </main>;
}

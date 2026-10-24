import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Brand from './Brand.jsx';
import Button from './Button.jsx';

export default function Header({ active = 'home' }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner">
      <Brand />
      <button className="menu-toggle" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Navigasi utama">
        <a className={active === 'home' ? 'nav-active' : ''} href="/">Beranda</a>
        <a href="/#kelas">Kelas</a>
        <div className="mobile-auth"><Button href="/login" variant="outline">Masuk</Button><Button href="/register">Daftar gratis</Button></div>
      </nav>
      <div className="header-actions"><a className="login-link" href="/login">Masuk</a><Button href="/register">Daftar gratis</Button></div>
    </div>
  </header>;
}

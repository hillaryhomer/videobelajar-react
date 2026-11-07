import { useState } from 'react';
import { Menu, X, UserRound, ChevronDown } from 'lucide-react';
import Brand from './Brand.jsx';

export default function Header({ loggedIn = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Brand />

        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Navigasi utama">
          <a className="category-link" href="/products">Kategori</a>

          {loggedIn ? (
            <div className="profile-nav">
              <button
                className="profile-trigger"
                type="button"
                aria-label="Buka menu profil"
                aria-expanded={profileOpen}
                onClick={() => setProfileOpen((isOpen) => !isOpen)}
              >
                <span className="avatar"><UserRound size={18} /></span>
                <span className="profile-trigger-label">Akun saya</span>
                <ChevronDown className={profileOpen ? 'chevron-up' : ''} size={15} />
              </button>

              {profileOpen && (
                <div className="profile-menu">
                  <a href="/profile">Profil Saya</a>
                  <a href="/my-courses">Kelas Saya</a>
                  <a href="/orders">Pesanan Saya</a>
                  <a className="logout-link" href="/">Keluar</a>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-nav">
              <a className="nav-login" href="/login">Masuk</a>
              <a className="nav-register" href="/register">Daftar</a>
            </div>
          )}
        </nav>

        <button
          className="mobile-menu"
          type="button"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

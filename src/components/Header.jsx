import { useState } from 'react';
import { Menu, X, UserRound, ChevronDown } from 'lucide-react';
import Brand from './Brand.jsx';
export default function Header({loggedIn=false}) {
 const [open,setOpen]=useState(false);
 return <header className="topbar"><div className="topbar-inner"><Brand/><nav className={open?'nav-open':''}><a href="/products">Kategori</a>{loggedIn?<div className="profile-nav"><a className="avatar" href="/profile" aria-label="Profil"><UserRound size={18}/></a><a href="/profile" className="profile-chevron"><ChevronDown size={14}/></a><div className="profile-menu"><a href="/profile">Profil Saya</a><a href="/my-courses">Kelas Saya</a><a href="/orders">Pesanan Saya</a></div></div>:<><a className="nav-login" href="/login">Login</a><a className="nav-register" href="/register">Register</a></>}</nav><button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label={open?'Tutup menu':'Buka menu'}>{open?<X size={21}/>:<Menu size={21}/>}</button></div></header>;
}

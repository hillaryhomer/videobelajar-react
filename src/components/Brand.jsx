export default function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="/" aria-label="VideoBelajar beranda">
    <span className="brand-mark" aria-hidden="true">▶</span><span>video<span className="brand-accent">belajar</span></span>
  </a>;
}

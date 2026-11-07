import logo from '../videobelajar-logo.png';

export default function Brand() {
  return (
    <a className="brand" href="/" aria-label="VideoBelajar beranda">
      <img src={logo} alt="VideoBelajar" />
    </a>
  );
}

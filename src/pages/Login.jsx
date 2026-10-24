import AuthLayout from '../components/AuthLayout.jsx';
import AuthForm from '../components/AuthForm.jsx';
export default function Login() { return <AuthLayout title="Senang melihatmu lagi" subtitle="Masuk untuk lanjut belajar dan cek kelas favoritmu." switchText="Belum punya akun?" switchLabel="Daftar gratis" switchHref="/register"><AuthForm mode="login" /></AuthLayout>; }

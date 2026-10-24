import AuthLayout from '../components/AuthLayout.jsx';
import AuthForm from '../components/AuthForm.jsx';
export default function Register() { return <AuthLayout title="Buat akun gratis" subtitle="Mulai perjalanan belajarmu hari ini. Tidak perlu kartu kredit." switchText="Sudah punya akun?" switchLabel="Masuk" switchHref="/login"><AuthForm mode="register" /></AuthLayout>; }

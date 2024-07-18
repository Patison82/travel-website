import { SignIn } from "@clerk/nextjs";

export default function SignedInPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <SignIn signInFallbackRedirectUrl='/dashboard' />
  </div>
  );
}
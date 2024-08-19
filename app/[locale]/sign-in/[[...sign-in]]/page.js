import { SignIn } from "@clerk/nextjs";

export default function SignedInPage() {
  return (
    <div className= "flex justify-center items-center h-screen" >
    <SignIn signInFallbackRedirectUrl='/dashboard' />
  </div>
  );
}
/* style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} */
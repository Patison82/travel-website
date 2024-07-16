import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <UserProfile signInFallbackRedirectUrl='/dashboard' />
  </div>
  );
}
export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-zinc-300">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Information Collection</h2>
          <p>We collect information when you:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sign in with Spotify</li>
            <li>Use our playlist generation service</li>
            <li>Interact with advertisements</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Advertisement Policy</h2>
          <p>We use Google AdSense to display advertisements. Google AdSense may use cookies and web beacons to serve ads based on your prior visits and other websites.</p>
          <p>You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-purple-400 hover:text-purple-300">Google Ads Settings</a>.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p>For privacy concerns, contact us at: drivas.matt@gmail.com</p>
        </section>
      </div>
    </main>
  );
} 
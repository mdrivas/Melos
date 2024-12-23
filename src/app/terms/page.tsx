export default function Terms() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-4 text-zinc-300">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">1. Service Usage</h2>
          <p>By using Melos, you agree to these terms and our Privacy Policy.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">2. Advertisements</h2>
          <p>Our service includes Google AdSense advertisements. You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Block or interfere with the advertisements</li>
            <li>Use ad-blocking software while using our service</li>
            <li>Click advertisements for fraudulent purposes</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-white">3. Limitation of Liability</h2>
          <p>Melos is provided &ldquo;as is&rdquo; without warranties of any kind.</p>
        </section>
      </div>
    </main>
  );
} 
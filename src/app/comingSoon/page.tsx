"use client";

import { useState } from 'react';
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const PROVIDER_ROLES = [
  "Physician",
  "Physician Associate",
  "Nurse Practitioner",
  "Other"
];

export default function ComingSoonPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    providerRole: '',
    customRole: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const createWaitlistEntry = api.waitlist.create.useMutation({
    onSuccess: () => {
      setShowSuccess(true);
    },
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await createWaitlistEntry.mutateAsync({
        name: formData.name,
        email: formData.email,
        providerRole: formData.providerRole === 'Other' ? formData.customRole : formData.providerRole
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit. Please try again.' });
    }
  };

  const handleClose = () => {
    router.push('/');
  };

  if (showSuccess) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#D4E6FF] via-[#E8F1FF] to-white pt-24">
        <div className="container mx-auto px-4 min-h-[calc(100vh-6rem)] flex items-center">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className={`text-5xl text-[#2E3142] mb-6 ${merriweather.className}`}>Welcome Aboard!</h2>
            <p className="text-xl text-[#2E3142]/80 mb-8">
              Thanks for joining our waitlist! We'll reach out as soon as coaching sessions are available.
            </p>
            <button
              onClick={handleClose}
              className="inline-block px-10 py-4 bg-[#526B61] text-white text-xl font-sans rounded-full hover:bg-[#3A5548] transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-0.5"
            >
              Return Home
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <div className="container mx-auto px-4 min-h-[calc(100vh-6rem)] flex items-center">
        <div className="max-w-4xl mx-auto py-24">
          <div className="text-center mb-12">
            <h2 className={`text-5xl lg:text-6xl text-[#2E3142] mb-6 ${merriweather.className}`}>
              Join the Waitlist
            </h2>
            <p className="text-xl text-[#2E3142]/80 leading-relaxed max-w-3xl mx-auto">
              Coaching sessions are coming soon. Secure your spot to start building a healthier, more fulfilling career.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white/80 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={`mt-1 block w-full rounded-xl px-6 py-4 bg-white border text-lg ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:border-[#526B61] focus:ring-[#526B61]`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className={`mt-1 block w-full rounded-xl px-6 py-4 bg-white border text-lg ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:border-[#526B61] focus:ring-[#526B61]`}
                  placeholder="name@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div className="space-y-3">
                <label htmlFor="providerRole" className="block text-lg font-medium text-[#2E3142] mb-2">
                  Provider Role <span className="text-[#2E3142]/60 font-normal">(optional)</span>
                </label>
                <select
                  id="providerRole"
                  value={formData.providerRole}
                  onChange={(e) => setFormData(prev => ({ ...prev, providerRole: e.target.value, customRole: e.target.value !== 'Other' ? '' : prev.customRole }))}
                  className="block w-full rounded-xl px-6 py-4 bg-white border border-gray-300 text-lg shadow-sm focus:border-[#526B61] focus:ring-[#526B61]"
                >
                  <option value="">Select your role</option>
                  {PROVIDER_ROLES.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>

                {formData.providerRole === 'Other' && (
                  <input
                    type="text"
                    id="customRole"
                    value={formData.customRole}
                    onChange={(e) => setFormData(prev => ({ ...prev, customRole: e.target.value }))}
                    className="block w-full rounded-xl px-6 py-4 bg-white border border-gray-300 text-lg shadow-sm focus:border-[#526B61] focus:ring-[#526B61]"
                    placeholder="Please specify your role"
                  />
                )}
              </div>

              {errors.submit && (
                <p className="text-sm text-red-600">{errors.submit}</p>
              )}

              <button
                type="submit"
                disabled={createWaitlistEntry.isPending}
                className="w-full bg-[#526B61] text-white py-4 px-6 rounded-full text-xl font-medium hover:bg-[#3A5548] transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-0.5 disabled:opacity-50 mt-6"
              >
                {createWaitlistEntry.isPending ? 'Joining...' : "I'm in!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 
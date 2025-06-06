"use client";

import { useState } from 'react';
import type { JSX } from 'react';
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

    if (!formData.providerRole) {
      newErrors.providerRole = 'Provider role is required';
    } else if (formData.providerRole === 'Other' && !formData.customRole.trim()) {
      newErrors.customRole = 'Please specify your role';
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
              className="inline-flex items-center justify-center px-10 py-4 bg-[#1473E6] text-white text-xl font-sans rounded-full hover:bg-[#0f5fc8] transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-0.5"
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
            <h2 className={`text-5xl lg:text-6xl text-[#2E3142] mb-6 mt-4 ${merriweather.className}`}>
              Join the Waitlist
            </h2>
            <p className="text-xl text-[#2E3142]/80 leading-relaxed max-w-3xl mx-auto">
              Coaching sessions are coming soon. Secure your spot to get connected with a coach. 
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white/80 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-[#2E3142] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={`mt-1 block w-full rounded-xl px-6 py-4 bg-white border text-lg ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:border-[#1473E6] focus:ring-[#1473E6]`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-[#2E3142] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className={`mt-1 block w-full rounded-xl px-6 py-4 bg-white border text-lg ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:border-[#1473E6] focus:ring-[#1473E6]`}
                  placeholder="name@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div className="space-y-3">
                <label htmlFor="providerRole" className="block text-lg font-medium text-[#2E3142] mb-2">
                  Provider Role
                </label>
                <div className="relative">
                  <select
                    id="providerRole"
                    value={formData.providerRole}
                    onChange={(e) => setFormData(prev => ({ ...prev, providerRole: e.target.value, customRole: e.target.value !== 'Other' ? '' : prev.customRole }))}
                    className={`block w-full rounded-xl px-6 py-4 bg-white border text-lg ${
                      errors.providerRole ? 'border-red-500' : 'border-gray-300'
                    } shadow-sm focus:border-[#1473E6] focus:ring-[#1473E6] ${!formData.providerRole ? 'text-gray-400' : 'text-[#2E3142]'} appearance-none pr-12`}
                  >
                    <option value="" disabled>Select your role</option>
                    {PROVIDER_ROLES.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8l4 4 4-4" />
                    </svg>
                  </div>
                </div>
                {errors.providerRole && <p className="mt-1 text-sm text-red-600">{errors.providerRole}</p>}

                {formData.providerRole === 'Other' && (
                  <div className="mt-3">
                    <input
                      type="text"
                      id="customRole"
                      value={formData.customRole}
                      onChange={(e) => setFormData(prev => ({ ...prev, customRole: e.target.value }))}
                      className={`block w-full rounded-xl px-6 py-4 bg-white border text-lg ${
                        errors.customRole ? 'border-red-500' : 'border-gray-300'
                      } shadow-sm focus:border-[#1473E6] focus:ring-[#1473E6]`}
                      placeholder="Please specify your role"
                    />
                    {errors.customRole && <p className="mt-1 text-sm text-red-600">{errors.customRole}</p>}
                  </div>
                )}
              </div>

              {errors.submit && (
                <p className="text-sm text-red-600">{errors.submit}</p>
              )}

              <button
                type="submit"
                disabled={createWaitlistEntry.isPending}
                className="w-full bg-[#1473E6] text-white py-4 px-6 rounded-full text-xl font-medium hover:bg-[#0f5fc8] transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-0.5 disabled:opacity-50 mt-6 flex items-center justify-center"
              >
                {createWaitlistEntry.isPending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Joining...
                  </>
                ) : (
                  "I'm in!"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 
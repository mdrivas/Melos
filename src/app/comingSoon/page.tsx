"use client";

import { useState } from 'react';
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

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
      <main className="min-h-screen bg-[#fff8f0] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Aboard!</h2>
            <p className="text-gray-700 text-lg mb-6">
              Thanks for joining our waitlist! We'll reach out as soon as coaching sessions are available.
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-[#ffd481] text-gray-800 py-3 px-6 rounded-xl text-lg font-semibold transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fff8f0] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join the Waitlist
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Coaching sessions are coming soon. Secure your spot to start building a healthier, more fulfilling career.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={`mt-1 block w-full rounded-xl px-4 py-2.5 bg-white border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
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
                  className={`mt-1 block w-full rounded-xl px-4 py-2.5 bg-white border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                  placeholder="name@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div className="space-y-3">
                <label htmlFor="providerRole" className="block text-sm font-semibold text-gray-700 mb-1">
                  Provider Role <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <select
                  id="providerRole"
                  value={formData.providerRole}
                  onChange={(e) => setFormData(prev => ({ ...prev, providerRole: e.target.value, customRole: e.target.value !== 'Other' ? '' : prev.customRole }))}
                  className="mt-1 block w-full rounded-xl px-4 py-2.5 bg-white border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                    className="block w-full rounded-xl px-4 py-2.5 bg-white border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                className="w-full bg-[#ffd481] text-gray-900 py-3 px-6 rounded-xl text-lg font-semibold hover:bg-[#ffca5e] transition-colors disabled:opacity-50 mt-4"
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
"use client";

import { useState, useEffect } from 'react';
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

const PROVIDER_ROLES = [
  "Physician",
  "Physician Assistant",
  "Nurse Practitioner",
  "Other"
];

export function WaitlistForm({ onClose, onDevModeActivated }: { 
  onClose: () => void;
  onDevModeActivated: () => void;
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    providerRole: '',
    customRole: '',
    devCode: ''
  });
  const [showDevInput, setShowDevInput] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle keyboard shortcut for dev mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        setShowDevInput(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const createWaitlistEntry = api.waitlist.create.useMutation({
    onSuccess: () => {
      setShowSuccess(true);
    },
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Check for developer code
    if (formData.devCode === 'banana') {
      onDevModeActivated();
      return false;
    }
    
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
    onClose();
    router.push('/');
  };

  if (showSuccess) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Aboard!</h2>
        <p className="text-gray-700 text-lg mb-6">
          Thanks for joining our waitlist! We'll reach out as soon as coaching sessions are available.
        </p>
        <button
          onClick={handleClose}
          className="w-full bg-[#ffd481] text-gray-800 py-3 px-6 rounded-xl text-lg font-semibold  transition-colors"
        > 
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#fff8f0] p-12 pt-20 rounded-2xl shadow-xl max-w-2xl w-full">
      <div className="text-center mb-16 mt-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Join the Waitlist
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto">
          Coaching sessions are coming soon. Secure your spot to start building a healthier, more fulfilling career.
        </p>
      </div>
      
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
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
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
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
              Provider Role
            </label>
            <select
              id="providerRole"
              value={formData.providerRole}
              onChange={(e) => setFormData(prev => ({ ...prev, providerRole: e.target.value, customRole: e.target.value !== 'Other' ? '' : prev.customRole }))}
              className={`mt-1 block w-full rounded-xl px-4 py-2.5 bg-white border ${
                errors.providerRole ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
            >
              <option value="">Select your role</option>
              {PROVIDER_ROLES.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            {errors.providerRole && <p className="mt-1 text-sm text-red-600">{errors.providerRole}</p>}

            {formData.providerRole === 'Other' && (
              <div>
                <input
                  type="text"
                  id="customRole"
                  value={formData.customRole}
                  onChange={(e) => setFormData(prev => ({ ...prev, customRole: e.target.value }))}
                  className={`block w-full rounded-xl px-4 py-2.5 bg-white border ${
                    errors.customRole ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                  placeholder="Please specify your role"
                />
                {errors.customRole && <p className="mt-1 text-sm text-red-600">{errors.customRole}</p>}
              </div>
            )}
          </div>

          {showDevInput && (
            <div>
              <label htmlFor="devCode" className="block text-sm font-semibold text-gray-700 mb-1">
                Developer Code
              </label>
              <input
                type="password"
                id="devCode"
                value={formData.devCode}
                onChange={(e) => setFormData(prev => ({ ...prev, devCode: e.target.value }))}
                className="mt-1 block w-full rounded-xl px-4 py-2.5 bg-white border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter developer code"
              />
            </div>
          )}

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
  );
} 
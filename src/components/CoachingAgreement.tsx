'use client';

import { useState, useEffect } from 'react';

export function CoachingAgreement({ onSign }: { 
  onSign: (data: { name: string; email: string; date: string; agreed: boolean }) => void 
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    document.body.style.overflow = '';
    onSign({
      name,
      email,
      date: new Date().toISOString(),
      agreed: true
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="prose prose-lg max-w-none mb-8">
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Welcome to The Provider's Coach Project!</h3>
          <p className="text-gray-700">
            We're excited that you're taking this step in your professional development journey. 
            Before we proceed with scheduling your session, please take a moment to review our 
            coaching agreement below. This agreement helps ensure we both have a clear understanding 
            of our coaching relationship and what you can expect from our sessions.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-blue-900 mb-6">Coaching Agreement</h3>
        <p className="mb-6">This Coaching Agreement ("Agreement") is made between The Provider's Coach Project ("Coach") and the undersigned client ("Client"). By signing this Agreement, both parties acknowledge and agree to the following terms:</p>
        
        <h4 className="text-xl font-semibold text-blue-900 mb-4">1. Purpose of Coaching</h4>
        <p className="mb-6">Coaching is a professional relationship designed to support healthcare providers in personal and professional development. It is not therapy, medical treatment, or a substitute for mental health services.</p>
        
        <h4 className="text-xl font-semibold text-blue-900 mb-4">2. Coaching Sessions</h4>
        <p className="mb-6">
          - Sessions will be conducted virtually via Zoom.<br />
          - Each session will last approximately 45 minutes.<br />
          - The Client may schedule sessions as needed.
        </p>

        <h4 className="text-xl font-semibold text-blue-900 mb-4">3. Client Responsibilities</h4>
        <p className="mb-6">
          - The Client understands that coaching is a collaborative process that requires their active participation.<br />
          - The Client is responsible for implementing insights gained through coaching.<br />
          - The Client acknowledges that results are not guaranteed.
        </p>

        <h4 className="text-xl font-semibold text-blue-900 mb-4">4. Confidentiality</h4>
        <p className="mb-6">Coaching sessions are confidential. However, confidentiality may be broken in cases of suspected harm to self or others, legal requirements, or ethical obligations. The Coach may use de-identified information for training or program improvement.</p>

        <h4 className="text-xl font-semibold text-blue-900 mb-4">5. Cancellation Policy</h4>
        <p className="mb-6">
          - The Client agrees to provide at least 24 hours' notice for any session cancellations or rescheduling.<br />
          - Repeated last-minute cancellations may result in a reassessment of coaching availability.
        </p>

        <h4 className="text-xl font-semibold text-blue-900 mb-4">6. No Liability</h4>
        <p className="mb-6">
          - The Client understands that coaching is not a substitute for professional, legal, financial, or medical advice.<br />
          - The Coach is not liable for any decisions or outcomes resulting from coaching sessions.
        </p>

        <h4 className="text-xl font-semibold text-blue-900 mb-4">7. Termination of Coaching</h4>
        <p className="mb-6">
          - Either party may terminate this Agreement at any time.<br />
          - The Coach reserves the right to decline or discontinue coaching if it is determined that coaching is not appropriate for the Client's needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 border-t pt-6">
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter your email address"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            required
            id="agree"
            className="h-4 w-4"
          />
          <label htmlFor="agree" className="text-gray-700">
            I have read and agree to the terms of this Agreement
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sign Agreement and Continue to Schedule
        </button>
      </form>
    </div>
  );
} 
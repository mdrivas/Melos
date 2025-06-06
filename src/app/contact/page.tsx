'use client';

import { Merriweather } from "next/font/google";
import { EnvelopeClosedIcon, LinkedInLogoIcon, DrawingPinIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMutation = api.contact.submit.useMutation({
    onSuccess: () => {
      router.push("/contact/success");
    },
    onError: (error) => {
      setErrors({ submit: error.message });
      setIsSubmitting(false);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    contactMutation.mutate(formData);
  };

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <div>
              <h1 className={`text-4xl lg:text-5xl text-[#2E3142] mb-6 ${merriweather.className}`}>
                Contact Us
              </h1>
              
              <p className="text-lg text-[#2E3142]/80 mb-6">
                Fill out the form or send us an email. We'll get back to you as soon as we can.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-lg text-[#2E3142]">
                  <EnvelopeClosedIcon className="h-5 w-5 text-[#1473E6]" />
                  <a href="mailto:info@providerscoachproject.org" className="hover:text-[#1473E6] transition-colors">
                    info@providerscoachproject.org
                  </a>
                </div>
                <div className="flex items-center gap-3 text-lg text-[#2E3142]">
                  <DrawingPinIcon className="h-5 w-5 text-[#1473E6]" />
                  <span>Based in California • Serving Providers Nationwide</span>
                </div>
                <div>
                  <a 
                    href="https://www.linkedin.com/company/the-providers-coach-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#1473E6] hover:text-[#3A5548] transition-colors"
                  >
                    <LinkedInLogoIcon className="h-5 w-5" />
                    <span>Follow us on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#2E3142] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#1473E6] focus:border-transparent`}
                      placeholder="First"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#2E3142] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#1473E6] focus:border-transparent`}
                      placeholder="Last"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2E3142] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#1473E6] focus:border-transparent`}
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2E3142] mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1473E6] focus:border-transparent"
                    placeholder="xxx-xxx-xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2E3142] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#1473E6] focus:border-transparent`}
                    placeholder="Type your message ..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {errors.submit && (
                  <p className="text-sm text-red-500">{errors.submit}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 bg-[#1473E6] text-white text-lg font-medium rounded-full hover:bg-[#3A5548] transition-all duration-300 ease-in-out ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
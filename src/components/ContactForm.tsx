import React, { useState } from 'react';

// Enum for user types
const SupportUserType = {
  WAITLIST: 'WAITLIST',
  CREATOR: 'CREATOR',
  ADVERTISER: 'ADVERTISER'
} as const;
type SupportUserType = typeof SupportUserType[keyof typeof SupportUserType];
import { InputField } from './forms/InputField';
import { RadioGroup, type RadioOption } from './forms/RadioGroup';
import { TextAreaField } from './forms/TextAreaField';
import { validateContactForm, type ContactFormData } from '../utils/validation';
import { submitContactFormApi } from '../services/contactApi';
import { toast, Toaster } from 'sonner';

interface FormErrors {
  userType?: string;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    userType: SupportUserType.WAITLIST,
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userTypeOptions: RadioOption[] = [
    { value: SupportUserType.WAITLIST, label: 'Contact Us' },
    { value: SupportUserType.CREATOR, label: 'Creator' },
    { value: SupportUserType.ADVERTISER, label: 'Advertiser' }
  ];

  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleUserTypeChange = (value: string) => {
    if (
      value === SupportUserType.WAITLIST ||
      value === SupportUserType.CREATOR ||
      value === SupportUserType.ADVERTISER
    ) {
      setFormData(prev => ({ ...prev, userType: value }));
    }
    // Clear error when user selects
    if (errors.userType) {
      setErrors(prev => ({ ...prev, userType: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      toast.error('Please fix the errors below and try again.', {
        duration: 4000,
        style: { fontFamily: "Nunito, sans-serif" }
      });
      return;
    }

    // Clear errors and start submission
    setErrors({});
    setIsSubmitting(true);

    try {
      // Log payload for debugging before submission
      // This prints to the browser console when running in development
      // and helps confirm what will be sent to the API.
      // Keep this log during debugging and remove it for production if desired.
      // eslint-disable-next-line no-console
      console.log('Submitting contact form payload:', formData);
      const response = await submitContactFormApi(formData);
      
      if (response.success) {
        toast.success('Your message has been sent successfully! 🎉', {
          duration: 4000,
          style: { fontFamily: "Nunito, sans-serif" }
        });
        // Reset form on successful submission
        setFormData({
          userType: SupportUserType.WAITLIST,
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast.error(response.error || 'Failed to send message. Please try again.', {
          duration: 4000,
          style: { fontFamily: "Nunito, sans-serif" }
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An unexpected error occurred. Please try again later.', {
        duration: 4000,
        style: { fontFamily: "Nunito, sans-serif" }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Toaster position="top-center" richColors />
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Type Selection */}
        <div className="mb-6">
          <p 
            style={{ fontFamily: "Nunito, sans-serif" }}
            className="block text-[18px] font-semibold text-[#000000] mb-3"
          >
            Select User Type 
          </p>
          <RadioGroup
            name="userType"
            options={userTypeOptions}
            value={formData.userType}
            onChange={handleUserTypeChange}
            error={errors.userType}
          />
        </div>

        {/* Name Field */}
        <InputField
          type="text"
          placeholder="Your full name"
          label="Name"
          value={formData.name}
          onChange={handleInputChange('name')}
          error={errors.name}
          
          maxLength={50}
        />

        {/* Email Field */}
        <InputField
          type="email"
          placeholder="your.email@example.com"
          label="Email Address"
          value={formData.email}
          onChange={handleInputChange('email')}
          error={errors.email}
          
          maxLength={254}
        />

        {/* Subject Field */}
        <InputField
          type="text"
          placeholder="Brief description of your inquiry"
          label="Subject"
          value={formData.subject}
          onChange={handleInputChange('subject')}
          error={errors.subject}
          
          maxLength={100}
        />

        {/* Message Field */}
        <TextAreaField
          placeholder="Please provide details about your inquiry or message..."
          label="Message"
          value={formData.message}
          onChange={handleInputChange('message')}
          error={errors.message}
          
          maxLength={1000}
          rows={5}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{ fontFamily: "Nunito, sans-serif" }}
          className={`
            w-full py-4 px-6 rounded-lg font-semibold text-white text-lg
            transition-all duration-200 cursor-pointer
            ${isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[#3931C5] hover:bg-[#5B5DF1] focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
            }
          `}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};
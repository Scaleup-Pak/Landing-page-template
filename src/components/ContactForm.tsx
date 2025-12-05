import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

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
import { toast, Toaster } from 'sonner';

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Email recipients configuration for different user types
const EMAIL_RECIPIENTS = {
  WAITLIST: { email: 'contact@lalalaugh.com', name: 'LaLaLaugh Support' },
  CREATOR: { email: 'creator@lalalaugh.com', name: 'Creator Team' },
  ADVERTISER: { email: 'hamza.maqbool@thesoftaims.com', name: 'Advertiser Team' }
} as const;

interface FormErrors {
  userType?: string;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState<ContactFormData>({
    userType: SupportUserType.WAITLIST,
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS with the public key once on mount
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
      } catch (err) {
        console.warn('EmailJS init failed:', err);
      }
    }
  }, []);

  const userTypeOptions: RadioOption[] = [
    { value: SupportUserType.WAITLIST, label: 'Contact Us' },
    { value: SupportUserType.CREATOR, label: 'Creator' },
    { value: SupportUserType.ADVERTISER, label: 'Advertiser' }
  ];

  // Map the selected user type to a recipient (email + name) (fallback to WAITLIST)
  const recipient =
    EMAIL_RECIPIENTS[(formData.userType as keyof typeof EMAIL_RECIPIENTS)] ||
    EMAIL_RECIPIENTS.WAITLIST;

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

    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS is not configured. Please set up environment variables.');
      toast.error('Email service is not configured. Please contact support.', {
        duration: 4000,
        style: { fontFamily: "Nunito, sans-serif" }
      });
      return;
    }

    // Clear errors and start submission
    setErrors({});
    setIsSubmitting(true);

    try {
      if (!formRef.current) {
        throw new Error('Form reference is not available');
      }
      // Build template params (explicitly) so EmailJS uses the dynamic To value.
      const templateParams = {
        to_email: recipient.email,
        to_name: recipient.name,
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        user_type: formData.userType,
        subject: formData.subject,
        message: formData.message,
      } as const;

      console.log('Sending email with template params:', templateParams);

      // Use emailjs.send for explicit template params
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully!', response.status, response.text);
      
      // Show success message
      toast.success('Message sent successfully! We\'ll get back to you soon. 🎉', {
        duration: 5000,
        style: { fontFamily: "Nunito, sans-serif" }
      });
      
      // Reset form
      setFormData({
        userType: SupportUserType.WAITLIST,
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Show error message
      toast.error('Failed to send message. Please try again or contact us directly.', {
        duration: 5000,
        style: { fontFamily: "Nunito, sans-serif" }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Toaster position="top-center" richColors />
  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* User Type Selection */}
        <div className="mb-6">
          <p 
            style={{ fontFamily: "Nunito, sans-serif" }}
            className="block text-[18px] font-semibold text-[#000000] mb-3"
          >
            Select User Type 
          </p>
          <RadioGroup
            name="user_type"
            options={userTypeOptions}
            value={formData.userType}
            onChange={handleUserTypeChange}
            error={errors.userType}
          />
        </div>

        {/* Name Field */}
        <InputField
          type="text"
          name="user_name"
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
          name="user_email"
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
          name="subject"
          placeholder="Brief description of your inquiry"
          label="Subject"
          value={formData.subject}
          onChange={handleInputChange('subject')}
          error={errors.subject}
          
          maxLength={100}
        />

        {/* Message Field */}
        <TextAreaField
          name="message"
          placeholder="Please provide details about your inquiry or message..."
          label="Message"
          value={formData.message}
          onChange={handleInputChange('message')}
          error={errors.message}
          
          maxLength={1000}
          rows={5}
        />

        {/* Hidden inputs for EmailJS template */}
  <input type="hidden" name="to_email" value={recipient.email} />
  <input type="hidden" name="to_name" value={recipient.name} />
  <input type="hidden" name="from_name" value={formData.name || ''} />
  <input type="hidden" name="from_email" value={formData.email || ''} />
        <input type="hidden" name="reply_to" value={formData.email} />

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
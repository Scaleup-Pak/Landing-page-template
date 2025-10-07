import React, { useState } from 'react';
import { InputField } from './forms/InputField';
import { RadioGroup, type RadioOption } from './forms/RadioGroup';
import { TextAreaField } from './forms/TextAreaField';
import { validateContactForm, type ContactFormData } from '../utils/validation';
import { submitContactFormApi } from '../services/contactApi';

interface FormErrors {
  userType?: string;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    userType: 'waitlist',
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const userTypeOptions: RadioOption[] = [
    { value: 'waitlist', label: 'Waitlist' },
    { value: 'creators', label: 'Creators' },
    { value: 'advertisers', label: 'Advertisers' }
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
    
    // Clear submit status when user makes changes
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleUserTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, userType: value }));
    
    // Clear error when user selects
    if (errors.userType) {
      setErrors(prev => ({ ...prev, userType: undefined }));
    }
    
    // Clear submit status when user makes changes
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors below and try again.'
      });
      return;
    }

    // Clear errors and start submission
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await submitContactFormApi(formData);
      
      if (response.success) {
        setSubmitStatus({
          type: 'success',
          message: response.message || 'Your message has been sent successfully!'
        });
        
        // Reset form on successful submission
        setFormData({
          userType: '',
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: response.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Submit Status Message */}
        {submitStatus.type && (
          <div className={`
            p-4 rounded-lg border
            ${submitStatus.type === 'success' 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
            }
          `}>
            <p 
              style={{ fontFamily: "Nunito, sans-serif" }}
              className="text-sm font-medium"
            >
              {submitStatus.message}
            </p>
          </div>
        )}

        {/* User Type Selection */}
        <div className="mb-6">
          <p 
            style={{ fontFamily: "Nunito, sans-serif" }}
            className="block text-[18px] font-semibold text-[#000000] mb-3"
          >
            Select User Type <span className="text-red-500 ml-1">*</span>
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
          required
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
          required
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
          required
          maxLength={100}
        />

        {/* Message Field */}
        <TextAreaField
          placeholder="Please provide details about your inquiry or message..."
          label="Message"
          value={formData.message}
          onChange={handleInputChange('message')}
          error={errors.message}
          required
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
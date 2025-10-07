import type { ContactFormData } from '../utils/validation';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactSubmissionResponse {
  id: string;
  message: string;
}

// API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.yourservice.com';
const API_ENDPOINTS = {
  CONTACT: '/api/contact'
} as const;

class ApiError extends Error {
  status?: number;
  code?: string;
  
  constructor(
    message: string,
    status?: number,
    code?: string
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    // Handle different response statuses
    if (!response.ok) {
      let errorMessage = 'An error occurred while processing your request';
      
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch {
        // If JSON parsing fails, use status text or generic message
        errorMessage = response.statusText || errorMessage;
      }

      throw new ApiError(
        errorMessage,
        response.status,
        response.status.toString()
      );
    }

    // Parse successful response
    const data = await response.json();
    
    return {
      success: true,
      data: data.data || data,
      message: data.message
    };

  } catch (error) {
    if (error instanceof ApiError) {
      return {
        success: false,
        error: error.message
      };
    }

    // Handle network errors, timeout, etc.
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        error: 'Network error. Please check your connection and try again.'
      };
    }

    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.'
    };
  }
}

// Contact form submission function
export async function submitContactForm(
  formData: ContactFormData
): Promise<ApiResponse<ContactSubmissionResponse>> {
  // Prepare the payload
  const payload = {
    userType: formData.userType,
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    subject: formData.subject.trim(),
    message: formData.message.trim(),
    timestamp: new Date().toISOString(),
    source: 'website_contact_form'
  };

  return apiRequest<ContactSubmissionResponse>(API_ENDPOINTS.CONTACT, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// For development/testing - mock API response
export async function submitContactFormMock(
  _formData: ContactFormData
): Promise<ApiResponse<ContactSubmissionResponse>> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate random success/failure for testing
  const shouldSucceed = Math.random() > 0.2; // 80% success rate

  if (shouldSucceed) {
    return {
      success: true,
      data: {
        id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        message: 'Your message has been sent successfully!'
      },
      message: 'Thank you for contacting us. We will get back to you soon.'
    };
  } else {
    return {
      success: false,
      error: 'Failed to send message. Please try again later.'
    };
  }
}

// Export the appropriate function based on environment
export const submitContactFormApi = import.meta.env.PROD 
  ? submitContactForm 
  : submitContactFormMock;
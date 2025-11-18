// API for waitlist submission
export interface WaitlistFormData {
  email: string;
}

export interface WaitlistSubmissionResponse {
  id: string;
  message: string;
}

const API_WAITLIST_ENDPOINT = '/waitlist';

export async function submitWaitlistForm(
  formData: WaitlistFormData
): Promise<ApiResponse<WaitlistSubmissionResponse>> {
  const payload = {
    email: formData.email.trim().toLowerCase(),
  };
  console.log("🚀 ~ submitWaitlistForm ~ payload:", payload);
  return apiRequest<WaitlistSubmissionResponse>(API_WAITLIST_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
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
  CONTACT: '/support'
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
  // Prepare the payload (remove timestamp and source)
  // Ensure userType is a string: 'WAITLIST', 'CREATOR', or 'ADVERTISER'
  const allowedUserTypes = ['WAITLIST', 'CREATOR', 'ADVERTISER'];
  const userType = allowedUserTypes.includes(formData.userType)
    ? formData.userType
    : 'CREATOR'; // fallback or handle error as needed
  const payload = {
    userType,
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    subject: formData.subject.trim(),
    message: formData.message.trim(),
  };
  console.log("🚀 ~ submitContactForm ~ payload:", payload)

  return apiRequest<ContactSubmissionResponse>(API_ENDPOINTS.CONTACT, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// Export the real API integration for contact form
export const submitContactFormApi = submitContactForm;
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Name validation - only letters, spaces, hyphens, and apostrophes
const NAME_REGEX = /^[a-zA-Z\s'-]+$/;

export const validateField = (value: string, rules: ValidationRule): ValidationResult => {
  // Required validation
  if (rules.required && (!value || value.trim().length === 0)) {
    return { isValid: false, error: 'This field is required' };
  }

  // If field is empty and not required, it's valid
  if (!value || value.trim().length === 0) {
    return { isValid: true };
  }

  // Minimum length validation
  if (rules.minLength && value.length < rules.minLength) {
    return { 
      isValid: false, 
      error: `Must be at least ${rules.minLength} characters long` 
    };
  }

  // Maximum length validation
  if (rules.maxLength && value.length > rules.maxLength) {
    return { 
      isValid: false, 
      error: `Must be no more than ${rules.maxLength} characters long` 
    };
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(value)) {
    return { isValid: false, error: 'Invalid format' };
  }

  // Custom validation
  if (rules.custom && !rules.custom(value)) {
    return { isValid: false, error: 'Invalid value' };
  }

  return { isValid: true };
};

// Specific validation functions for form fields
export const validateName = (name: string): ValidationResult => {
  return validateField(name, {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: NAME_REGEX,
    custom: (value) => {
      // Additional check for meaningful names (at least one letter)
      return /[a-zA-Z]/.test(value);
    }
  });
};

export const validateEmail = (email: string): ValidationResult => {
  const result = validateField(email, {
    required: true,
    maxLength: 254, // RFC 5321 limit
    pattern: EMAIL_REGEX
  });

  if (!result.isValid && result.error === 'Invalid format') {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  return result;
};

export const validateSubject = (subject: string): ValidationResult => {
  return validateField(subject, {
    required: true,
    minLength: 3,
    maxLength: 100,
    custom: (value) => {
      // Subject should contain at least some meaningful content
      return value.trim().length >= 3;
    }
  });
};

export const validateMessage = (message: string): ValidationResult => {
  const result = validateField(message, {
    required: true,
    minLength: 10,
    maxLength: 1000,
    custom: (value) => {
      // Message should contain at least some meaningful content
      const trimmed = value.trim();
      return trimmed.length >= 10 && /[a-zA-Z]/.test(trimmed);
    }
  });

  if (!result.isValid && result.error === 'Invalid value') {
    return { 
      isValid: false, 
      error: 'Please provide a meaningful message with at least 10 characters' 
    };
  }

  return result;
};

export const validateUserType = (userType: string): ValidationResult => {
  const validTypes = ['waitlist', 'creators', 'advertisers'];
  
  if (!userType) {
    return { isValid: false, error: 'Please select a user type' };
  }

  if (!validTypes.includes(userType.toLowerCase())) {
    return { isValid: false, error: 'Invalid user type selected' };
  }

  return { isValid: true };
};

// Helper function to validate entire form
export interface ContactFormData {
  userType: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: {
    userType?: string;
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
}

export const validateContactForm = (data: ContactFormData): FormValidationResult => {
  const errors: FormValidationResult['errors'] = {};

  const userTypeResult = validateUserType(data.userType);
  if (!userTypeResult.isValid) {
    errors.userType = userTypeResult.error;
  }

  const nameResult = validateName(data.name);
  if (!nameResult.isValid) {
    errors.name = nameResult.error;
  }

  const emailResult = validateEmail(data.email);
  if (!emailResult.isValid) {
    errors.email = emailResult.error;
  }

  const subjectResult = validateSubject(data.subject);
  if (!subjectResult.isValid) {
    errors.subject = subjectResult.error;
  }

  const messageResult = validateMessage(data.message);
  if (!messageResult.isValid) {
    errors.message = messageResult.error;
  }

  const isValid = Object.keys(errors).length === 0;

  return { isValid, errors };
};
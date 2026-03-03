import type { PostDetail, PostApiResponse } from '../types/post';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.yourservice.com';

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


async function apiRequest(
  endpoint: string,
  options: RequestInit = {}
): Promise<PostApiResponse> {
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
      let errorMessage = 'An error occurred while fetching the post';
      try {
        const errorData = await response.json();
        if (typeof errorData.message === 'object' && errorData.message !== null) {
          errorMessage = errorData.message.message || errorData.message.error || errorMessage;
        } else {
          errorMessage = errorData.message || errorData.error || errorMessage;
        }
      } catch {
        errorMessage = response.statusText || errorMessage;
      }
      
      throw new ApiError(
        errorMessage,
        response.status,
        response.status.toString()
      );
    }

    const data = await response.json();
    
    return {
      success: true,
      data: data as PostDetail,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        success: false,
        error: error.message,
      };
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}


export async function getPostById(postId: string): Promise<PostApiResponse> {
  if (!postId || postId.trim() === '') {
    return {
      success: false,
      error: 'Post ID is required',
    };
  }

  return apiRequest(`/post/${postId}/public`, {
    method: 'GET',
  });
}

export const postService = {
  getPostById,
};

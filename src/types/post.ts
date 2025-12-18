/**
 * Post-related types for the Lalalaugh application
 */

export interface PostUser {
  id: string;
  username?: string | null;
  fullName: string;
  profilePicture?: string | null;
  followers?: number;
}

export interface PostDetail {
  id: string;
  userId: string;
  url: string;
  title: string;
  mediaProcessingStatus: string;
  views: number;
  shares: number;
  saves: number;
  laughs: number;
  duration: number | null;
  previewUrl: string | null;
  thumbnailUrl?: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
  user: PostUser;
  isLiked?: boolean;
  isSaved?: boolean;
}

export interface PostApiResponse {
  success: boolean;
  data?: PostDetail;
  error?: string;
  message?: string;
}

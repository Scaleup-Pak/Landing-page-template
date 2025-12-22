import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { postService } from "../services/postService";
import type { PostDetail } from "../types/post";
import shareicon from "../assets/share.svg";
import saveicon from "../assets/save.svg";
import laughicon from "../assets/laugh.svg";

const formatCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

export function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setError("Post ID is missing");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await postService.getPostById(id);

        if (response.success && response.data) {
          setPost(response.data);
        } else {
          setError(response.error || "Failed to load post");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // Detect video aspect ratio


  // Loading state
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-6">
            <svg
              className="mx-auto h-20 w-20 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Video not available
          </h2>
          <p className="text-gray-400 mb-6">
            {error || "This video may have been deleted."}
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Determine video source and fallback image
  const videoUrl = post?.convertedUrl;
  return (
    <div className="fixed inset-0 bg-black overflow-hidden flex items-center justify-center">
      {/* Video Container - Constrained to mobile-like width on large screens */}
      <div className="w-full h-full ">
        {/* Video Player or Image Fallback */}
        {videoUrl && !videoError ? (
          <video
            ref={videoRef}
            controls
            autoPlay
            loop
            muted={isMuted}
            className=" w-full h-full object-contain"
            playsInline
            preload="metadata"
            onError={() => setVideoError(true)}
          >
            {/* Support multiple video formats */}
            <source src={videoUrl} type="video/mp4" />
            <source src={videoUrl} type="video/webm" />
            <source src={videoUrl} type="video/ogg" />
            {/* Fallback text */}
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="flex items-center justify-center h-full w-full bg-gray-900">
            <svg
              className="w-24 h-24 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}

        {/* Mute/Unmute Button */}
        {videoUrl && !videoError && (
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all active:scale-95"
          >
            {isMuted ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </button>
        )}

        {/* Right Side Action Bar - TikTok Style - INSIDE video container */}
        <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5 z-20">
          {/* User Avatar with Follow Button */}
          <div className="relative">
            {post.user.profilePicture ? (
              <img
                src={post.user.profilePicture}
                alt={post.user.fullName}
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold">
                {post.user.fullName.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="absolute -bottom-2 -right-0 transform bg-[#3A2DCA] rounded-full w-6 h-6 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <button className="flex flex-col items-center gap-1 active:scale-95 transition-transform">
            <img
              src={shareicon}
              alt="Share"
              className="w-8 h-8 text-white drop-shadow-lg"
            />
            <span className="text-white text-xs font-semibold drop-shadow-lg">
              {formatCount(post.shares)}
            </span>
          </button>
          <button className="flex flex-col items-center gap-1 active:scale-95 transition-transform">
            <img
              src={saveicon}
              alt="Save"
              className="w-8 h-8 text-white drop-shadow-lg"
            />
            <span className="text-white text-xs font-semibold drop-shadow-lg">
              {formatCount(post.saves)}
            </span>
          </button>
          <button className="flex flex-col items-center gap-1 active:scale-95 transition-transform">
            <img
              src={laughicon}
              alt="Laugh"
              className="w-8 h-8 text-white drop-shadow-lg"
            />
            <span className="text-white text-xs font-semibold drop-shadow-lg">
              {formatCount(post.laughs)}
            </span>
          </button>
        </div>

        {/* Bottom Info Section - Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
          <div className="max-w-md">
            {/* Username */}
            <div className="flex items-center gap-1 mb-0">
              <Link
                to="/"
                className="font-bold text-white text-lg drop-shadow-lg hover:underline"
              >
                @
                {post.user.username ||
                  post.user.fullName.toLowerCase().replace(/\s+/g, "")}
              </Link>
              {post.user.followers !== undefined && (
                <span className="text-gray-300 text-sm">
                  • {formatCount(post.user.followers)} followers
                </span>
              )}
            </div>

            {/* Title/Caption */}
            <p className="text-white text-sm mb-3 drop-shadow-lg leading-relaxed">
              {post.title || "Joke title here Joke title here"}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}

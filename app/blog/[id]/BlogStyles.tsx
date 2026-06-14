'use client';

export default function BlogStyles() {
  return (
    <style jsx global>{`
      .blog-content { font-family: Arial, sans-serif; }
      .blog-content h1 {
        font-size: 3rem !important; line-height: 1 !important; font-weight: 900 !important;
        letter-spacing: -0.05em !important; text-transform: uppercase !important;
        font-style: italic !important; color: white !important; margin-bottom: 2rem !important;
      }
      .blog-content h2 {
        font-size: 1.875rem !important; line-height: 1.25 !important; font-weight: 900 !important;
        letter-spacing: -0.025em !important; color: white !important;
        margin-top: 3rem !important; margin-bottom: 1.5rem !important;
      }
      .blog-content p {
        font-size: 1.125rem !important; line-height: 1.8 !important;
        margin-bottom: 1.5rem !important; color: rgba(255, 255, 255, 0.7) !important;
      }
      .blog-content strong { font-weight: 900 !important; color: white !important; }
      .blog-content blockquote {
        border-left: 4px solid #2563eb !important;
        background-color: rgba(37, 99, 235, 0.1) !important;
        padding: 2rem 2.5rem !important; font-style: italic !important;
        margin: 3rem 0 !important; border-radius: 0 1rem 1rem 0 !important;
        color: rgba(255, 255, 255, 0.9) !important; font-size: 1.25rem !important;
      }
      .blog-content u {
        text-decoration: underline !important; text-decoration-color: white !important;
        text-underline-offset: 4px !important;
      }
      .blog-content img {
        border-radius: 24px; margin: 4rem 0;
        border: 1px solid rgba(255, 255, 255, 0.1); width: 100%;
      }
    `}</style>
  );
}

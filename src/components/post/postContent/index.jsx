import DOMPurify from "dompurify";

export const PostContent = ({ content }) => {
  const sanitizedContent = DOMPurify.sanitize(content, 
    { ALLOWED_TAGS: ['img', 'p', 'b', 'i', 'u', 'a', 'div', 'strong', 'br'], ALLOWED_ATTR: ['src', 'alt', 'href'] });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

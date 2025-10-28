import * as S from "./styles";
import DOMPurify from "dompurify";

export const PostContent = ({ content }) => {
  const sanitizedContent = DOMPurify.sanitize(content, 
    { ALLOWED_TAGS: ['img', 'p', 'b', 'i', 'u', 'a', 'div', 'strong', 'br', 'ul', 'ol', 'li'], ALLOWED_ATTR: ['src', 'alt', 'href'] });

  return (
    <S.StyledPostContent
      className="post-content"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

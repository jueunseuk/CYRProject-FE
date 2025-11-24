import styled from "styled-components";

export const StyledPostContent = styled.div`
  word-break: break-word;
  width: 100%;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }

  a {
    color: #0073e6;
    text-decoration: underline;
  }

  p {
    line-height: 1.5;
    margin: 0.3rem 0;
  }

  ul, ol {
    margin: 1rem 0 1rem 1.5rem;
    padding-left: 0;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    margin: 0.35rem 0;
  }
`;
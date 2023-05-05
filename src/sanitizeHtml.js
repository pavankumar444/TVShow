import DOMPurify from 'dompurify';

export const sanitizeHtml = (dirtyHtml) => {
  const cleanHtml = DOMPurify.sanitize(dirtyHtml);
  return { __html: cleanHtml };
};

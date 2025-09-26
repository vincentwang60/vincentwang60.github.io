// Text utility functions for dynamic mobile/desktop rendering
import React from "react";

/**
 * Formats title text for mobile vs desktop
 * @param {string} text - The title text
 * @param {boolean} mobile - Whether to format for mobile
 * @returns {string} - Formatted title text
 */
export const formatTitle = (text, mobile) => {
  if (mobile) {
    return text;
  }
  // Add newlines between each character for desktop vertical layout
  return text.split('').join('\n');
};

/**
 * Gets appropriate CSS classes for mobile vs desktop
 * @param {string} baseClass - Base CSS class name
 * @param {boolean} mobile - Whether to use mobile classes
 * @returns {string} - CSS class string
 */
export const getResponsiveClass = (baseClass, mobile) => {
  return mobile ? `${baseClass} mobile` : baseClass;
};

/**
 * Gets appropriate size for icons based on mobile vs desktop
 * @param {string} mobileSize - Size for mobile (e.g., '2.5vh')
 * @param {string} desktopSize - Size for desktop (e.g., '2vw')
 * @param {boolean} mobile - Whether to use mobile size
 * @returns {string} - Icon size
 */
export const getResponsiveSize = (mobileSize, desktopSize, mobile) => {
  return mobile ? mobileSize : desktopSize;
};

/**
 * Gets responsive container class
 * @param {string} baseClass - Base container class
 * @param {boolean} mobile - Whether to use mobile classes
 * @returns {string} - Container class string
 */
export const getContainerClass = (baseClass, mobile) => {
  if (mobile) {
    return `${baseClass} mobile`;
  }
  return baseClass;
};

/**
 * Creates a responsive text element with proper classes
 * @param {string} text - Text content
 * @param {string} className - Base CSS class
 * @param {boolean} mobile - Whether to use mobile classes
 * @param {object} style - Additional inline styles
 * @returns {JSX.Element} - Text element
 */
export const ResponsiveText = ({ text, className, mobile, style = {} }) => {
  const responsiveClass = getResponsiveClass(className, mobile);
  return (
    <div className={responsiveClass} style={style}>
      {text}
    </div>
  );
};

/**
 * Creates a responsive title element
 * @param {string} text - Title text
 * @param {boolean} mobile - Whether to use mobile layout
 * @param {object} style - Additional inline styles
 * @returns {JSX.Element} - Title element
 */
export const ResponsiveTitle = ({ text, mobile, style = {} }) => {
  const formattedText = formatTitle(text, mobile);
  const defaultStyle = mobile 
    ? { fontSize: "6vh" }
    : { fontSize: "6vh", lineHeight: "6vh" };
  const titleStyle = { ...defaultStyle, ...style };
  
  return (
    <ResponsiveText 
      text={formattedText} 
      className="content-text title" 
      mobile={mobile} 
      style={titleStyle}
    />
  );
};

/**
 * Creates a responsive heading element
 * @param {string} text - Heading text
 * @param {boolean} mobile - Whether to use mobile layout
 * @param {object} style - Additional inline styles
 * @returns {JSX.Element} - Heading element
 */
export const ResponsiveHeading = ({ text, mobile, style = {} }) => {
  const className = mobile ? "content-text heading" : "content-text subject";
  return (
    <ResponsiveText 
      text={text} 
      className={className} 
      mobile={mobile} 
      style={style}
    />
  );
};

/**
 * Creates a responsive body text element
 * @param {string} text - Body text
 * @param {string} variant - Text variant (body, body2, body3)
 * @param {boolean} mobile - Whether to use mobile layout
 * @param {object} style - Additional inline styles
 * @returns {JSX.Element} - Body text element
 */
export const ResponsiveBody = ({ text, variant = "body", mobile, style = {} }) => {
  return (
    <ResponsiveText 
      text={text} 
      className={`content-text ${variant}`} 
      mobile={mobile} 
      style={style}
    />
  );
};

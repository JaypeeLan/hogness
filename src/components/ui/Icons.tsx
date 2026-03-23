import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const TwitterIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const FacebookIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const LinkedInIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const YouTubeIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const NodeIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 17.5C20.3769 17.5032 19.7663 17.6746 19.2325 17.9961L15.8961 14.6589C16.3715 13.9454 16.6251 13.1073 16.6251 12.25C16.6251 11.3927 16.3715 10.5546 15.8961 9.84113L18.1248 7.6125C18.6885 7.88406 19.3302 7.94731 19.9361 7.79104C20.5421 7.63478 21.0732 7.26909 21.4353 6.75876C21.7974 6.24843 21.9672 5.62639 21.9147 5.00284C21.8621 4.37929 21.5905 3.79448 21.148 3.352C20.7055 2.90952 20.1207 2.63793 19.4972 2.58535C18.8736 2.53277 18.2516 2.70258 17.7412 3.06471C17.2309 3.42685 16.8652 3.95792 16.709 4.56386C16.5527 5.16979 16.6159 5.81148 16.8875 6.37525L14.6589 8.60388C13.9454 8.12852 13.1073 7.87488 12.25 7.87488C11.3927 7.87488 10.5546 8.12852 9.84113 8.60388L6.50388 5.26663C6.82521 4.73312 6.99661 4.12279 7 3.5C7 2.80777 6.79473 2.13108 6.41014 1.55551C6.02556 0.979934 5.47893 0.53133 4.83939 0.266423C4.19985 0.00151648 3.49612 -0.0677952 2.81719 0.0672531C2.13825 0.202301 1.51461 0.535644 1.02513 1.02513C0.535644 1.51461 0.202301 2.13825 0.0672531 2.81719C-0.0677952 3.49612 0.00151648 4.19985 0.266423 4.83939C0.53133 5.47894 0.979934 6.02556 1.55551 6.41015C2.13108 6.79473 2.80777 7 3.5 7C4.12309 6.99677 4.73374 6.82536 5.2675 6.50388L8.60388 9.84113C8.12852 10.5546 7.87487 11.3927 7.87487 12.25C7.87487 13.1073 8.12852 13.9454 8.60388 14.6589L5.26663 17.9961C4.73311 17.6748 4.12279 17.5034 3.5 17.5C2.80777 17.5 2.13108 17.7053 1.55551 18.0899C0.979934 18.4744 0.53133 19.0211 0.266423 19.6606C0.00151648 20.3002 -0.0677952 21.0039 0.0672531 21.6828C0.202301 22.3618 0.535644 22.9854 1.02513 23.4749C1.51461 23.9644 2.13825 24.2977 2.81719 24.4328C3.49612 24.5678 4.19985 24.4985 4.83939 24.2336C5.47893 23.9687 6.02556 23.5201 6.41014 22.9445C6.79473 22.3689 7 21.6922 7 21C6.99676 20.3769 6.82536 19.7663 6.50388 19.2325L9.84113 15.8961C10.3065 16.2063 10.8273 16.4238 11.375 16.5366V19.411C10.7912 19.6174 10.2991 20.0236 9.98582 20.5577C9.67251 21.0918 9.55809 21.7195 9.66281 22.3298C9.76752 22.9401 10.0846 23.4937 10.558 23.8928C11.0315 24.292 11.6308 24.5109 12.25 24.5109C12.8692 24.5109 13.4685 24.292 13.942 23.8928C14.4154 23.4937 14.7325 22.9401 14.8372 22.3298C14.9419 21.7195 14.8275 21.0918 14.5142 20.5577C14.2009 20.0236 13.7088 19.6174 13.125 19.411V16.5366C13.6727 16.4238 14.1935 16.2063 14.6589 15.8961L17.9961 19.2334C17.6748 19.7669 17.5034 20.3772 17.5 21C17.5 21.6922 17.7053 22.3689 18.0899 22.9445C18.4744 23.5201 19.0211 23.9687 19.6606 24.2336C20.3002 24.4985 21.0039 24.5678 21.6828 24.4328C22.3618 24.2977 22.9854 23.9644 23.4749 23.4749C23.9644 22.9854 24.2977 22.3618 24.4328 21.6828C24.5678 21.0039 24.4985 20.3002 24.2336 19.6606C23.9687 19.0211 23.5201 18.4744 22.9445 18.0899C22.3689 17.7053 21.6922 17.5 21 17.5ZM12.25 9.625C12.7692 9.625 13.2767 9.77896 13.7084 10.0674C14.1401 10.3558 14.4765 10.7658 14.6752 11.2455C14.8739 11.7251 14.9258 12.2529 14.8246 12.7621C14.7233 13.2713 14.4733 13.739 14.1062 14.1062C13.739 14.4733 13.2713 14.7233 12.7621 14.8246C12.2529 14.9259 11.7251 14.8739 11.2455 14.6752C10.7658 14.4765 10.3558 14.1401 10.0674 13.7084C9.77896 13.2767 9.625 12.7692 9.625 12.25C9.6257 11.554 9.90248 10.8867 10.3946 10.3946C10.8867 9.90248 11.554 9.6257 12.25 9.625ZM1.75 3.5C1.75 3.15388 1.85264 2.81554 2.04493 2.52775C2.23722 2.23997 2.51053 2.01567 2.83031 1.88321C3.15008 1.75076 3.50194 1.7161 3.84141 1.78363C4.18088 1.85115 4.4927 2.01782 4.73744 2.26256C4.98218 2.50731 5.14885 2.81913 5.21638 3.15859C5.2839 3.49806 5.24924 3.84993 5.11679 4.1697C4.98434 4.48947 4.76004 4.76278 4.47225 4.95507C4.18446 5.14737 3.84612 5.25 3.5 5.25C3.03602 5.24954 2.59116 5.06502 2.26308 4.73693C1.93499 4.40884 1.75046 3.96399 1.75 3.5ZM3.5 22.75C3.15388 22.75 2.81554 22.6474 2.52775 22.4551C2.23997 22.2628 2.01567 21.9895 1.88321 21.6697C1.75076 21.3499 1.7161 20.9981 1.78363 20.6586C1.85115 20.3191 2.01782 20.0073 2.26256 19.7626C2.50731 19.5178 2.81913 19.3512 3.15859 19.2836C3.49806 19.2161 3.84993 19.2508 4.1697 19.3832C4.48947 19.5157 4.76278 19.74 4.95507 20.0278C5.14737 20.3155 5.25 20.6539 5.25 21C5.24954 21.464 5.06501 21.9088 4.73693 22.2369C4.40884 22.565 3.96399 22.7495 3.5 22.75ZM21 22.75C20.6539 22.75 20.3155 22.6474 20.0278 22.4551C19.74 22.2628 19.5157 21.9895 19.3832 21.6697C19.2508 21.3499 19.2161 20.9981 19.2836 20.6586C19.3512 20.3191 19.5178 20.0073 19.7626 19.7626C20.0073 19.5178 20.3191 19.3512 20.6586 19.2836C20.9981 19.2161 21.3499 19.2508 21.6697 19.3832C21.9895 19.5157 22.2628 19.74 22.4551 20.0278C22.6474 20.3155 22.75 20.6539 22.75 21C22.7493 21.4639 22.5647 21.9086 22.2367 22.2367C21.9086 22.5647 21.4639 22.7493 21 22.75Z" fill="#0088FF"/>
</svg>

);

export const ChevronDownIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export const DotIcon = ({ size = 8, color = "#008EFF", className, ...props }: IconProps & { color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" fill="none" className={className} {...props}>
    <circle cx="4" cy="4" r="4" fill={color}/>
  </svg>
);

export const CheckCircleIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className} {...props}>
    <circle cx="10" cy="10" r="10" fill="rgba(108,43,217,0.10)"/>
    <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="#6C2BD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PhoneIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/><path d="M14.05 2a9 9 0 018 7.94"/><path d="M14.05 6A5 5 0 0118 10"/>
  </svg>
);

export const EmailIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
);

export const ChatIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

export const ToolsIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

export const ProblemsIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2v1"/><path d="M12 7a5 5 0 0 0-3.3 8.5H15.3A5 5 0 0 0 12 7z"/>
  </svg>
);

export const ConceptsIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
  </svg>
);

export const ConfidenceIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);

export const AIIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
);

export const DataScienceIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

export const DataAnalysisIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

export const DigitalLitIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

export const PythonIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

export const CodeKidsIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

export const SVCDataIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

export const SVCTechIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 12h-4l-3 9L9 3 l-3 9H2"/>
  </svg>
);

export const SVCDesignIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

export const SVCConsultIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

export const SVCResourcesIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

export const FAQPlusIcon = ({ size = 18, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className} {...props}>
    <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const FAQMinusIcon = ({ size = 18, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className} {...props}>
    <path d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const BulletIcon = ({ size = 18, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className} {...props}>
    <circle cx="9" cy="9" r="9" fill="#E0F2FE"/>
    <path d="M6 9l2 2 4-4" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BookIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

export const PaletteIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10a10 10 0 0 0 10-10c0-1.66-1.34-3-3-3h-1c-1.66 0-3-1.34-3-3V2z"/><path d="M7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M16 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>
);

export const ChartIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
  </svg>
);

export const TrendingIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);



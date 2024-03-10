import { ReactNode } from "react";

interface SocialProps {
  url: string;
  children: ReactNode;
}

export function Social({ url, children }: SocialProps) {
  return (
    <a 
      href={url}
      className="mr-3"
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  )
}
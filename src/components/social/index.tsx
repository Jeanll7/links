import { ReactNode } from "react";

interface SocialProps {
  url: string;
  children: ReactNode;
}

export function Social({ url, children }: SocialProps) {
  return (
    <a href={url} className="text-blue-500 hover:text-blue-600">
      {children}
    </a>
  )
}
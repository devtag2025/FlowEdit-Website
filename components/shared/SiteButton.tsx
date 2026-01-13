import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button as SanityButton } from "@/types/siteSettings";
import { getLinkProps } from "@/lib/linkHelper";
import { ComponentProps } from "react";

interface SiteButtonProps {
  // New API: Pass Sanity Button object
  button?: SanityButton;
  // Legacy API: For backward compatibility
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

// Allow additional Link props when button is provided (excluding href since it's handled internally)
type SiteButtonComponentProps = SiteButtonProps & 
  Omit<Partial<ComponentProps<typeof Link>>, 'href' | 'children'>;

const SiteButton = ({
  button,
  children,
  className,
  variant = "default",
  size = "default",
  ...restProps
}: SiteButtonComponentProps) => {
  // Map Sanity button variant to UI button variant
  const mapVariant = (variant?: string): "default" | "outline" | "ghost" | "secondary" => {
    if (!variant) return "default";
    // Map Sanity variants to UI variants
    // You can extend this mapping as needed
    return variant === "outline" ? "outline" : 
           variant === "ghost" ? "ghost" : 
           variant === "secondary" ? "secondary" : "default";
  };

  const buttonContent = (
    <div className="p-0.5 bg-linear-to-r from-white/60 to-white rounded-lg">
      <Button
        variant={button ? mapVariant(button.variant) : variant}
        size={size}
        className={cn(
          "bg-[#B6C7F5] hover:bg-[#B6C7F5] text-black px-[26px] py-[18px] font-medium text-sm leading-5 shadow-md cursor-pointer",
          className
        )}
      >
        <span className="relative z-20">{children || (button ? button.text : null)}</span>
      </Button>
    </div>
  );

  // If button prop is provided, wrap in Link with proper link handling
  if (button) {
    const linkProps = getLinkProps(button);
    return (
      <Link {...linkProps} {...restProps}>
        {buttonContent}
      </Link>
    );
  }

  // Otherwise, return button without link (legacy behavior)
  return buttonContent;
};

export default SiteButton;

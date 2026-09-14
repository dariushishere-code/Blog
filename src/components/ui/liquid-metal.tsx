

import React, { memo, forwardRef } from "react";
import { LiquidMetal as LiquidMetalShader } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

// ============================================================================
// LiquidMetal - Base shader wrapper component
// ============================================================================

export interface LiquidMetalProps {
  colorBack?: string;
  colorTint?: string;
  speed?: number;
  repetition?: number;
  distortion?: number;
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const LiquidMetal = memo(function LiquidMetal({
  colorBack = "#aaaaac",
  colorTint = "#ffffff",
  speed = 0.5,
  repetition = 4,
  distortion = 0.1,
  scale = 1,
  className,
  style,
}: LiquidMetalProps) {
  return (
    <div
      className={cn("absolute inset-0 z-0 overflow-hidden", className)}
      style={style}
    >
      <LiquidMetalShader
        colorBack={colorBack}
        colorTint={colorTint}
        speed={speed}
        repetition={repetition}
        distortion={distortion}
        softness={0}
        shiftRed={0.3}
        shiftBlue={-0.3}
        angle={45}
        shape="none"
        scale={scale}
        fit="cover"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
});

LiquidMetal.displayName = "LiquidMetal";

// ============================================================================
// LiquidMetalButton - Premium button with liquid metal border effect
// ============================================================================

export interface LiquidMetalButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  borderWidth?: number;
  metalConfig?: Omit<LiquidMetalProps, "className" | "style">;
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export const LiquidMetalButton = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  LiquidMetalButtonProps
>(
  (
    {
      children,
      icon,
      href,
      target,
      rel,
      onClick,
      borderWidth = 4,
      metalConfig,
      size = "md",
      className,
      disabled,
    },
    ref
  ) => {
    const sizeStyles = {
      sm: "py-2 pl-2 pr-6 gap-3 text-sm",
      md: "py-3 pl-3 pr-8 gap-4 text-base",
      lg: "py-4 pl-4 pr-10 gap-6 text-lg",
    };

    const iconSizes = {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
    };

    const commonProps = {
      ref,
      href,
      target,
      rel,
      onClick,
      "aria-disabled": disabled || undefined,
      tabIndex: disabled ? -1 : undefined,
      className: cn(
        "relative group cursor-pointer border-none bg-transparent p-0 outline-none transition-transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        className
      ),
    };

    return href ? (
      <a {...commonProps} ref={ref as React.Ref<HTMLAnchorElement>}>
        <ButtonBody
          icon={icon}
          children={children}
          borderWidth={borderWidth}
          metalConfig={metalConfig}
          size={size}
          sizeStyles={sizeStyles}
          iconSizes={iconSizes}
        />
      </a>
    ) : (
      <button
        {...commonProps}
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
      >
        <ButtonBody
          icon={icon}
          children={children}
          borderWidth={borderWidth}
          metalConfig={metalConfig}
          size={size}
          sizeStyles={sizeStyles}
          iconSizes={iconSizes}
        />
      </button>
    );
  }
);

function ButtonBody({
  icon,
  children,
  borderWidth,
  metalConfig,
  size,
  sizeStyles,
  iconSizes,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
  borderWidth: number;
  metalConfig?: LiquidMetalButtonProps["metalConfig"];
  size: "sm" | "md" | "lg";
  sizeStyles: Record<string, string>;
  iconSizes: Record<string, string>;
}) {
  return (
    <div
      className="relative rounded-full overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]"
      style={{ padding: borderWidth }}
    >
      {/* Liquid Metal Border Layer */}
      <LiquidMetal
        colorBack={metalConfig?.colorBack ?? "#888888"}
        colorTint={metalConfig?.colorTint ?? "#ffffff"}
        speed={metalConfig?.speed ?? 0.4}
        repetition={metalConfig?.repetition ?? 4}
        distortion={metalConfig?.distortion ?? 0.15}
        scale={metalConfig?.scale ?? 1}
        className="absolute inset-0 z-0 rounded-full"
      />

      {/* Inner Button Body */}
      <div
        className={cn(
          "relative z-10 rounded-full flex items-center",
          "bg-ink transition-colors duration-200",
          "group-hover:bg-white/[0.06]",
          sizeStyles[size]
        )}
      >
        {icon && (
          <div
            className={cn(
              "rounded-full flex items-center justify-center",
              "bg-white/[0.06]",
              "shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]",
              iconSizes[size]
            )}
          >
            <span className="text-paper/80">{icon}</span>
          </div>
        )}
        <span className="font-medium tracking-tight text-paper">
          {children}
        </span>
      </div>
    </div>
  );
}

LiquidMetalButton.displayName = "LiquidMetalButton";

export default LiquidMetalButton;
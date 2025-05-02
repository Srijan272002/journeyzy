"use client";

import React from "react";

type MotionProps = {
  children: React.ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
  whileHover?: Record<string, any>;
  whileTap?: Record<string, any>;
  whileInView?: Record<string, any>;
  viewport?: Record<string, any>;
  className?: string;
};

// This is a simplified motion component that provides animation props
// without requiring the framer-motion library
export const motion = {
  div: React.forwardRef<HTMLDivElement, MotionProps & React.HTMLAttributes<HTMLDivElement>>(
    ({ children, className, initial, animate, exit, transition, whileHover, whileTap, whileInView, viewport, ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={className}
          {...props}
        >
          {children}
        </div>
      );
    }
  ),
  h1: React.forwardRef<HTMLHeadingElement, MotionProps & React.HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, initial, animate, exit, transition, whileHover, whileTap, whileInView, viewport, ...props }, ref) => {
      return (
        <h1
          ref={ref}
          className={className}
          {...props}
        >
          {children}
        </h1>
      );
    }
  ),
  h2: React.forwardRef<HTMLHeadingElement, MotionProps & React.HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, initial, animate, exit, transition, whileHover, whileTap, whileInView, viewport, ...props }, ref) => {
      return (
        <h2
          ref={ref}
          className={className}
          {...props}
        >
          {children}
        </h2>
      );
    }
  ),
  h3: React.forwardRef<HTMLHeadingElement, MotionProps & React.HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, initial, animate, exit, transition, whileHover, whileTap, whileInView, viewport, ...props }, ref) => {
      return (
        <h3
          ref={ref}
          className={className}
          {...props}
        >
          {children}
        </h3>
      );
    }
  ),
  p: React.forwardRef<HTMLParagraphElement, MotionProps & React.HTMLAttributes<HTMLParagraphElement>>(
    ({ children, className, initial, animate, exit, transition, whileHover, whileTap, whileInView, viewport, ...props }, ref) => {
      return (
        <p
          ref={ref}
          className={className}
          {...props}
        >
          {children}
        </p>
      );
    }
  ),
  section: React.forwardRef<HTMLElement, MotionProps & React.HTMLAttributes<HTMLElement>>(
    ({ children, className, initial, animate, exit, transition, whileHover, whileTap, whileInView, viewport, ...props }, ref) => {
      return (
        <section
          ref={ref}
          className={className}
          {...props}
        >
          {children}
        </section>
      );
    }
  ),
  span: React.forwardRef<HTMLSpanElement, MotionProps & React.HTMLAttributes<HTMLSpanElement>>(
    ({ children, className, initial, animate, exit, transition, whileHover, whileTap, whileInView, viewport, ...props }, ref) => {
      return (
        <span
          ref={ref}
          className={className}
          {...props}
        >
          {children}
        </span>
      );
    }
  ),
  button: React.forwardRef<HTMLButtonElement, MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ children, className, initial, animate, exit, transition, whileHover, whileTap, whileInView, viewport, ...props }, ref) => {
      return (
        <button
          ref={ref}
          className={className}
          {...props}
        >
          {children}
        </button>
      );
    }
  ),
};
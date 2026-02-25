/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        border: "color-mix(in srgb, var(--border) calc(100% * <alpha-value>), transparent)",
        input: "color-mix(in srgb, var(--input) calc(100% * <alpha-value>), transparent)",
        ring: "color-mix(in srgb, var(--ring) calc(100% * <alpha-value>), transparent)",
        background: "color-mix(in srgb, var(--background) calc(100% * <alpha-value>), transparent)",
        foreground: "color-mix(in srgb, var(--foreground) calc(100% * <alpha-value>), transparent)",
        primary: {
          DEFAULT: "color-mix(in srgb, var(--primary) calc(100% * <alpha-value>), transparent)",
          foreground: "color-mix(in srgb, var(--primary-foreground) calc(100% * <alpha-value>), transparent)",
        },
        secondary: {
          DEFAULT: "color-mix(in srgb, var(--secondary) calc(100% * <alpha-value>), transparent)",
          foreground: "color-mix(in srgb, var(--secondary-foreground) calc(100% * <alpha-value>), transparent)",
        },
        destructive: {
          DEFAULT: "color-mix(in srgb, var(--destructive) calc(100% * <alpha-value>), transparent)",
          foreground: "color-mix(in srgb, var(--destructive-foreground) calc(100% * <alpha-value>), transparent)",
        },
        muted: {
          DEFAULT: "color-mix(in srgb, var(--muted) calc(100% * <alpha-value>), transparent)",
          foreground: "color-mix(in srgb, var(--muted-foreground) calc(100% * <alpha-value>), transparent)",
        },
        accent: {
          DEFAULT: "color-mix(in srgb, var(--accent) calc(100% * <alpha-value>), transparent)",
          foreground: "color-mix(in srgb, var(--accent-foreground) calc(100% * <alpha-value>), transparent)",
        },
        popover: {
          DEFAULT: "color-mix(in srgb, var(--popover) calc(100% * <alpha-value>), transparent)",
          foreground: "color-mix(in srgb, var(--popover-foreground) calc(100% * <alpha-value>), transparent)",
        },
        card: {
          DEFAULT: "color-mix(in srgb, var(--card) calc(100% * <alpha-value>), transparent)",
          foreground: "color-mix(in srgb, var(--card-foreground) calc(100% * <alpha-value>), transparent)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
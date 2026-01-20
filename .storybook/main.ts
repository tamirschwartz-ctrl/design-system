import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-vite",
  
  // Add this to allow tunnel access (ngrok, cloudflare, etc.)
  async viteFinal(config) {
    return {
      ...config,
      server: {
        ...config.server,
        host: true, // Allow external access
        strictPort: false,
      },
    };
  },
};

export default config;

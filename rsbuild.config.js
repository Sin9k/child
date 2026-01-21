// @ts-check
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  output: {
    assetPrefix: 'https://mfe-child-sin9k.web.app/',
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'child',
      exposes: {
        './ChildComponent': './src/ChildComponent.jsx',
      },
    }),
  ],
});

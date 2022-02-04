import { logger } from "./utils";
import { hashSync } from "bcryptjs";

import type {
  WebpackBundlerOptions,
  WebpackConfiguration,
} from "@vuepress/bundler-webpack";
import type { App } from "@vuepress/core";
import type { HopeThemeEncryptOptions } from "../shared";

export const handleWebpackOptions = (app: App): void => {
  const { bundler, bundlerConfig } = app.options;

  // for webpack
  if (app.env.isDev && bundler.endsWith("webpack")) {
    const webpackBundlerConfig: WebpackBundlerOptions =
      bundlerConfig as WebpackBundlerOptions;
    const { configureWebpack } = webpackBundlerConfig;

    webpackBundlerConfig.configureWebpack = (
      config: WebpackConfiguration,
      isServer: boolean,
      isBuild: boolean
    ): WebpackConfiguration => {
      if (!config.resolve) config.resolve = {};

      config.resolve.fallback = { crypto: false, ...config.resolve.fallback };

      return (
        (configureWebpack?.(
          config,
          isServer,
          isBuild
          // FIXME: Upchain type issues
        ) as WebpackConfiguration) || {}
      );
    };
  }
};

export const resolveEncrypt = (encrypt: HopeThemeEncryptOptions): void => {
  // handle global token
  if (encrypt.global)
    if (typeof encrypt.global === "string")
      encrypt.global = hashSync(encrypt.global);
    else if (Array.isArray(encrypt.global))
      encrypt.global = encrypt.global
        .map((globalToken) => {
          if (typeof globalToken === "string") return hashSync(globalToken);

          logger.error(`You config "themeConfig.encrypt.global", but your config is invalid. 

          All password MUST be string. But we found one’s type is ${typeof globalToken}. Please fix it!`);

          return null;
        })
        .filter((item): item is string => item !== null);
    else {
      logger.error(
        `You are asking for global encryption but you provide invalid "global" config. 
        
        Please check "global" in your "themeConfig.encrypt" config. It can be string or string[], but you are providing ${typeof encrypt.global}. Please fix it!`
      );

      delete encrypt.global;
    }

  const tokenConfig = encrypt.config || {};

  Object.keys(tokenConfig).forEach((key) => {
    const token = tokenConfig[key];

    if (typeof token === "string") tokenConfig[key] = hashSync(token);
    else if (Array.isArray(token))
      tokenConfig[key] = token
        .map((configToken) => {
          const hash = hashSync(configToken);
          console.log(configToken, hash);

          if (typeof configToken === "string") return hash;

          logger.error(`You config "themeConfig.encrypt.config", but your config is invalid. 
        
Key ${key}’s value MUST be string or string[]. But it’s type is ${typeof configToken}. Please fix it!`);

          return null;
        })
        .filter((item): item is string => item !== null);
    else {
      logger.error(
        `[You config "themeConfig.encrypt.config", but your config is invalid. 
        
        The value of key ${key} MUST be string or string[]. But not it’s ${typeof token}. Please fix it!`
      );

      delete tokenConfig[key];
    }
  });
};
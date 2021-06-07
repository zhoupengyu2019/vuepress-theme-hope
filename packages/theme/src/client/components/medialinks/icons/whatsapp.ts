import { IconBase } from "@mr-hope/vuepress-shared/client";
import { h } from "vue";
import type { FunctionalComponent } from "vue";

export const WhatsappIcon: FunctionalComponent = () =>
  h(
    IconBase,
    { name: "whatsapp" },
    {
      default: () => [
        h("circle", {
          cx: "512",
          cy: "512",
          r: "512",
          fill: "#31B84C",
        }),
        h("path", {
          d: "m192.021 832 45.227-164.33a315.413 315.413 0 0 1-42.539-158.529C194.731 334.251 337.707 192 513.344 192c84.587-.213 165.76 33.28 225.387 93.013A314.453 314.453 0 0 1 832 509.376c-.085 174.848-143.04 317.141-318.656 317.141h-.15a319.61 319.61 0 0 1-152.277-38.613L192 832h.021zm241.686-455.467c-6.443-15.445-13.014-13.354-17.92-13.61-4.63-.214-9.942-.256-15.254-.256a29.227 29.227 0 0 0-21.226 9.898c-7.296 7.958-27.84 27.136-27.84 66.134s28.501 76.672 32.49 81.962c3.968 5.291 56.15 85.334 136 119.638 19.008 8.17 33.814 13.056 45.398 16.704 19.072 6.037 36.437 5.184 50.133 3.157 15.296-2.283 47.125-19.2 53.76-37.675 6.613-18.56 6.613-34.389 4.65-37.717-1.983-3.264-7.295-5.27-15.274-9.237-7.957-3.947-47.125-23.126-54.4-25.771-7.296-2.667-12.587-3.968-17.92 3.947-5.312 7.936-20.565 25.792-25.195 31.061-4.65 5.312-9.301 5.973-17.258 2.005-7.979-3.968-33.622-12.33-64-39.338-23.68-20.992-39.68-46.955-44.331-54.912-4.65-7.915-.47-12.203 3.52-16.15 3.563-3.541 7.936-9.258 11.904-13.866 3.99-4.651 5.333-7.958 7.979-13.227 2.645-5.29 1.322-9.92-.64-13.888-2.006-3.968-17.92-42.987-24.555-58.859h-.021z",
          fill: "#fff",
        }),
      ],
    }
  );

WhatsappIcon.displayName = "WhatsappIcon";

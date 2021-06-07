import { IconBase } from "@mr-hope/vuepress-shared/client";
import { h } from "vue";
import type { FunctionalComponent } from "vue";

export const GmailIcon: FunctionalComponent = () =>
  h(
    IconBase,
    { name: "gmail" },
    {
      default: () => [
        h("circle", {
          cx: "512",
          cy: "512",
          r: "512",
          fill: "#DB4437",
        }),
        h("path", {
          d: "M277.48 285.567h465.767v441.362H277.48V285.567z",
          fill: "#E67C73",
        }),
        h("path", {
          d: "M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z",
          fill: "#FFF",
        }),
      ],
    }
  );

GmailIcon.displayName = "GmailIcon";

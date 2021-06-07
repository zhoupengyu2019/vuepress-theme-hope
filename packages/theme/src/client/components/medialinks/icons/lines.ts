import { IconBase } from "@mr-hope/vuepress-shared/client";
import { h } from "vue";
import type { FunctionalComponent } from "vue";

export const LinesIcon: FunctionalComponent = () =>
  h(
    IconBase,
    { name: "lines" },
    {
      default: () => [
        h("circle", {
          cx: "512",
          cy: "512",
          r: "512",
          fill: "#00C300",
        }),
        h("path", {
          d: "M861.44 469.76C861.44 313.28 704 186.08 512 186.08s-349.44 127.2-349.44 283.68C162.56 608 286.88 727.52 454.88 752c11.52 2.4 26.88 7.68 30.72 17.28a71.04 71.04 0 0 1 0 31.68l-5.28 29.76c0 8.64-7.2 34.56 30.24 18.72a1104 1104 0 0 0 274.56-202.56A251.52 251.52 0 0 0 860 472.16zM375.2 562.88h-69.12a17.76 17.76 0 0 1-18.24-18.24v-139.2a17.76 17.76 0 0 1 18.24-18.24 18.24 18.24 0 0 1 18.24 18.24v120.48h50.88a18.72 18.72 0 0 1 18.24 18.72 18.24 18.24 0 0 1-18.24 18.24zm72-18.24a18.24 18.24 0 1 1-36.48 0v-139.2a18.24 18.24 0 0 1 36.48 0zm167.04 0a18.24 18.24 0 0 1-12.48 17.28H596a18.24 18.24 0 0 1-14.4-7.2l-69.6-96v85.92a18.24 18.24 0 1 1-36.48 0v-139.2A18.24 18.24 0 0 1 488 388.16h5.76a18.24 18.24 0 0 1 14.4 7.2l71.52 96v-85.92a18.24 18.24 0 1 1 36.48 0zm112.32-87.84a18.24 18.24 0 0 1 18.24 18.24 17.76 17.76 0 0 1-18.24 18.24h-50.88v32.64h50.88a18.72 18.72 0 0 1 18.24 18.72 18.24 18.24 0 0 1-18.24 18.24H656a18.24 18.24 0 0 1-18.24-18.24v-139.2A18.24 18.24 0 0 1 656 387.2h69.12a18.24 18.24 0 0 1 18.24 18.24 18.24 18.24 0 0 1-18.24 18.72h-49.44v32.64zm0 0",
          fill: "#fff",
        }),
      ],
    }
  );

LinesIcon.displayName = "LinesIcon";

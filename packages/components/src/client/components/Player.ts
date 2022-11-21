import Plyr from "plyr";
import {
  computed,
  defineComponent,
  h,
  onBeforeMount,
  onMounted,
  ref,
} from "vue";

import { useSize } from "../composables/index.js";

import type { UseMediaTextTrackSource } from "@vueuse/core";
import type { Options as PlyrOptions } from "plyr";
import type { PropType, VNode } from "vue";

import "plyr/dist/plyr.css";
import { useYoutubeLink } from "../composables/youtube.js";

export default defineComponent({
  name: "Player",

  props: {
    type: {
      type: String as PropType<"bilibili" | "video" | "youtube">,
      default: "video",
    },
    /** Options object for plyr config. **/
    options: {
      type: Object as PropType<PlyrOptions>,
      required: false,
      default() {
        return {};
      },
    },

    /** Video props */
    src: {
      type: String,
      default: "",
    },

    srcType: {
      type: String,
      default: "",
    },

    tracks: {
      type: Array as PropType<UseMediaTextTrackSource[]>,
      default: (): UseMediaTextTrackSource[] => [],
    },

    poster: {
      type: String,
      default: "",
    },

    /** Youtube Props */
    id: {
      type: String,
      default: "",
    },

    width: {
      type: [String, Number],
      default: "100%",
    },

    height: {
      type: [String, Number],
      default: undefined,
    },

    ratio: {
      type: Number,
      default: 16 / 9,
    },

    autoplay: Boolean,
    loop: Boolean,
    showCc: Boolean,
    showAnnotations: Boolean,

    start: {
      type: Number,
      default: undefined,
    },

    end: {
      type: Number,
      default: undefined,
    },

    defaultCcLang: {
      type: String,
      default: "",
    },

    uiLang: {
      type: String,
      default: "",
    },

    listType: {
      type: String,
      default: "",
    },

    list: {
      type: String,
      default: "",
    },

    playlist: {
      type: String,
      default: "",
    },

    disableControls: Boolean,
    disableFullscreen: Boolean,
    disableKeyboard: Boolean,
  },

  setup(props) {
    let player: Plyr | null = null;
    const { el, width, height } = useSize<HTMLIFrameElement>(props);
    const video = ref();

    const youtubeLink = useYoutubeLink(props);

    const plyrOptions = computed(() => ({
      hideYouTubeDOMError: true,
      ...props.options,
    }));

    onMounted(() => {
      player = new Plyr(video.value, plyrOptions.value);
    });

    onBeforeMount(() => {
      try {
        player?.destroy();
      } catch (err: unknown) {
        if (
          !(
            plyrOptions.value.hideYouTubeDOMError &&
            (<Error>err).message ===
              "The YouTube player is not attached to the DOM."
          )
        )
          console.error(err);
      }
    });

    return (): VNode[] | VNode | null =>
      props.type === "youtube"
        ? h("iframe", {
            ref: el,
            src: youtubeLink.value,
            class: "youtube-iframe",
            allow:
              "accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture",
            style: {
              width: width.value,
              height: height.value,
            },
          })
        : props.src
        ? h(
            "div",
            {
              class: "video-wrapper",
              ref: el,
              style: {
                width: width.value,
                height: height.value,
              },
            },
            h(
              "video",
              {
                ref: video,
                crossorigin: "anonymous",
                poster: props.poster,
                controls: "",
                ...(props.loop ? { loop: "" } : {}),
              },
              [
                ...props.tracks.map((track) => h("track", track)),
                h("source", { src: props.src, type: props.srcType }),
              ]
            )
          )
        : null;
  },
});

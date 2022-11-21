import { usePageLang } from "@vuepress/client";
import { computed, Ref } from "vue";

export interface YoutubeLinkOptions {
  type: unknown;
  id: string;

  autoplay: boolean;
  loop: boolean;
  showCc: boolean;
  showAnnotations: boolean;
  start: number | undefined;
  end: number | undefined;
  defaultCcLang: string;
  uiLang: string;
  listType: string;
  list: string;
  playlist: string;
  disableControls: boolean;
  disableFullscreen: boolean;
  disableKeyboard: boolean;
}

export const useYoutubeLink = (
  options: YoutubeLinkOptions
): Ref<string | null> => {
  const lang = usePageLang();

  const coreURL = computed(() =>
    options.type === "youtube"
      ? options.id
        ? `${options.id}?`
        : options.listType === "playlist" && options.list
        ? `?listType=playlist&list=${
            options.list.startsWith("PL") ? options.list : `PL${options.list}`
          }&`
        : null
      : null
  );

  const params = computed(() => {
    if (options.type !== "youtube") return null;

    const params = new URLSearchParams();

    if (options.autoplay) params.set("autoplay", "1");
    if (options.loop) params.set("loop", "1");
    if (options.showCc) params.set("cc_load_policy", "1");
    if (options.showAnnotations) params.set("iv_load_policy", "3");

    if (options.start) params.set("start", options.start.toString());
    if (options.end) params.set("end", options.end.toString());

    params.set("hl", options.uiLang || lang.value);
    params.set("cc_lang_pref", options.defaultCcLang || lang.value);
    params.set("color", "white");

    if (options.disableControls) params.set("controls", "0");
    if (options.disableFullscreen) params.set("fs", "0");
    if (options.disableKeyboard) params.set("disablekb", "1");

    if (options.playlist) params.set("playlist", options.playlist);

    return params.toString();
  });

  const youtubeLink = computed(() =>
    coreURL.value
      ? `https://www.youtube.com/embed/${coreURL.value}${params.value}`
      : null
  );

  return youtubeLink;
};

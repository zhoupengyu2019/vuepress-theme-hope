---
title: 主题基本选项
icon: config
order: 1
category:
  - 配置
tag:
  - 主题配置
  - 基础
---

::: danger

这些选项很重要，需要你正确配置。

:::

## hostname <Badge text="仅限 Root" type="warning" />

- 类型: `string`
- 必填: 是

当前网站部署到的域名。

::: tip

它应该包含完整协议 (如: `https://example.com`)。

:::

## author

- 类型: `Author`

  ```ts
  type AuthorName = string;

  interface AuthorInfo {
    /**
     * 作者姓名
     */
    name: string;

    /**
     * 作者网站
     */
    url?: string;

    /**
     * 作者 Email
     */
    email?: string;
  }

  type Author = AuthorName | AuthorName[] | AuthorInfo | AuthorInfo[];
  ```

- 必填: 否

文章显示的默认作者

## navbar

- 类型: `NavbarConfig`

  ```ts
  interface TextItemOptions {
    /**
     * 项目文字
     */
    text: string;

    /**
     * 项目图标
     */
    icon?: string;

    /**
     * 项目无障碍标签
     */
    ariaLabel?: string;
  }

  interface AutoLinkOptions extends TextItemOptions {
    /**
     * 当前页面链接
     */
    link: string;

    /**
     * `<a>` 标签的 `rel` 属性
     */
    rel?: string;

    /**
     * `<a>` 标签的 `target` 属性
     */
    target?: string;

    /**
     * 匹配激活的正则表达式
     */
    activeMatch?: string;
  }

  interface NavGroup<T> extends TextItemOptions {
    /**
     * 当前分组的页面前缀
     */
    prefix?: string;

    /**
     * 当前分组的链接
     */
    link?: string;

    /**
     * 当前分组的子项
     */
    children: T[];
  }

  type NavbarItem = AutoLinkOptions;
  type NavbarGroup = NavGroup<NavbarGroup | NavbarItem | string>;
  type NavbarConfig = (NavbarItem | NavbarGroup | string)[];
  ```

- 详情: [布局 → 导航栏](../../guide/layout/navbar.md)

导航栏配置

## sidebar

- 类型: `SidebarConfig`

  ```ts
  interface TextItemOptions {
    /**
     * 项目文字
     */
    text: string;

    /**
     * 项目图标
     */
    icon?: string;

    /**
     * 项目无障碍标签
     */
    ariaLabel?: string;
  }

  interface AutoLinkOptions extends TextItemOptions {
    /**
     * 当前页面链接
     */
    link: string;

    /**
     * `<a>` 标签的 `rel` 属性
     */
    rel?: string;

    /**
     * `<a>` 标签的 `target` 属性
     */
    target?: string;

    /**
     * 匹配激活的正则表达式
     */
    activeMatch?: string;
  }

  type SidebarPageItem = AutoLinkOptions;

  interface SidebarGroupItem extends TextItemOptions {
    /**
     * 当前分组的页面前缀
     */
    prefix?: string;

    /**
     * 当前分组的链接
     */
    link?: string;

    /**
     * 当前分组的链接是否可折叠
     *
     * @default false
     */
    collapsible?: boolean;

    /**
     * 当前分组的子项
     */
    children: (
      | SidebarPageItem
      | SidebarGroupItem
      | SidebarStructureItem
      | string
    )[];
  }

  interface SidebarStructureItem extends TextItemOptions {
    /**
     * 当前分组的页面前缀
     */
    prefix?: string;

    /**
     * 当前分组的链接
     */
    link?: string;

    /**
     * 当前分组的链接是否可折叠
     *
     * @default false
     */
    collapsible?: boolean;

    children: "structure";
  }

  type SidebarItem =
    | SidebarPageItem
    | SidebarGroupItem
    | SidebarStructureItem
    | string;

  type SidebarArrayConfig = SidebarItem[];

  type SidebarObjectConfig = Record<
    string,
    SidebarArrayConfig | "structure" | false
  >;

  type SidebarConfig = SidebarArrayConfig | SidebarObjectConfig;
  ```

- 详情: [布局 → 侧边栏](../../guide/layout/sidebar.md)

侧边栏配置

## locales

- 类型: `Record<string, ThemeLocaleOptions>`
- 详情:
  - [主题多语言配置](./i18n.md)

主题的多语言配置，你可以在这里分别为每个语言设置单独的选项。

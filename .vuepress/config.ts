import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  base: "/zhangbaolian/",
  title: "张报连's Bolg",
  description: "Just to to",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "张报连",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    colorMode: 'dark',
    catalogTitle: '此页导航',

    navbar: [
      { text: "首页", link: "/" },
      { text: "分类", link: "/categories/reco/1/" },
      {
        text: "编码",
        icon: 'Code',
        children: [
          { text: "golang", link: "/docs/code/golang" },
          { text: "vue", link: "/docs/code/bb/vue" },
        ],

      },

      {
        text: "游戏",
        icon: 'GameConsole',
        children: [
          { text: "十字军之王", link: "/docs/games/ck3/ck3" },
          { text: "战场兄弟", link: "/docs/games/bb/bb" },
        ],

      },
      { text: "Tags", link: "/tags/tag1/1/" },


      {
        text: "Docs",
        icon: 'Document',
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],

    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
      '/docs/games/ck3/': [
        {
          text: '模组推荐',
          children: ['ck3', 'test'],
        },
        {
          text: '模组制作',
          children: ['map'],
        },
        {
          text: '模组汉化',
          children: ['lotr'],
        },
        {
          text: '代码解析',
          children: ['lotr'],
        },
      ],
    },
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
  }),
});

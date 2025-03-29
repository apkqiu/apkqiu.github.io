import { defineConfig } from "vitepress";


// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "src",
    lang: "zh-Hans",
    title: "惠阴校园",
    description: "描述",
    sitemap: {
        hostname: "https://apkqiu.github.io"
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "“周恩来”报社", link: "/newspaper/index", activeMatch: "/newspaper" },
        ],
        sidebar: [
            {
                text: "2025年",
                collapsed: false,
                items: [
                    { text: "2月23日", link: "/newspaper/2025-02-23" },
                ]
            },
        ],
        editLink: {
            pattern: "https://github.com/apkqiu/apkqiu.github.io/edit/main/src/:path",
            text: "编辑此页面"
        },
        lastUpdated: {
            text: "最后更新",
            formatOptions: {
                dateStyle: "medium",
                timeStyle: "short"
            }
        },
        docFooter: {
            prev: "上一页",
            next: "下一页"
        },
        search: {
            provider: "local",
        },
        footer: {
            message: "没意思的网站",
            copyright: "Copyright © 2025-present apkqiu"
        },
        externalLinkIcon: true
    }
});

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
            { text: "“周恩来”报社", link: "/newspaper", activeMatch: "/newspaper" },
            { text: "热门话题", link: "/hot", activeMatch: "/hot" },
        ],
        sidebar: [
            {
                text: "报社",
                collapsed: false,
                items: [
                    { text: "索引", link: "/newspaper" },
                    { text: "2025年2月23日", link: "/newspaper/2025-02-23" },
                ]
            },
            {
                text: "热门话题",
                collapsed: false,
                items: [
                    { text: "索引", link: "/hot" },
                    { text: "班级新闻", link: "/hot/class" },
                    { text: "校园生活", link: "/hot/school" },
                    { text: "一周食谱", link: "/hot/food", collapsed: true, items: [[!!food_items]] },
                ]
            }
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
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索',
                                buttonAriaLabel: '搜索'
                            },
                            modal: {
                                noResultsText: '无结果',
                                resetButtonTitle: '清除',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
        footer: {
            message: "没意思的网站",
            copyright: "Copyright © 2025-present apkqiu"
        },
        externalLinkIcon: true
    }
});

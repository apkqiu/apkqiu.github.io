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
        nav: [{"text": "\u70ed\u95e8\u8bdd\u9898", "link": "hot", "activeMatch": "hot"}, {"text": "\u201c\u5468\u6069\u6765\u201d\u62a5\u793e", "link": "newspaper", "activeMatch": "newspaper"}],
        sidebar: [{"text": "\u70ed\u95e8\u8bdd\u9898", "items": [{"text": "\u4e00\u5468\u98df\u8c31", "items": [{"text": "\u4e00\u5468\u83dc\u5355\uff089.2-9.6\uff09", "link": "hot/food/2024-09-06"}, {"text": "\u4e00\u5468\u83dc\u5355\uff089.18-9.20\uff09", "link": "hot/food/2024-09-14"}, {"text": "\u4e00\u5468\u83dc\u5355\uff089.23-9.29\uff09", "link": "hot/food/2024-09-20"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0810.8-10.12\uff09", "link": "hot/food/2024-10-11"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0810.14-10.18\uff09", "link": "hot/food/2024-10-18"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0810.28-11.01\uff09", "link": "hot/food/2024-10-25"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0811.11-11.15\uff09", "link": "hot/food/2024-11-07"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0811.18-11.22\uff09", "link": "hot/food/2024-11-14"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0811.25-11.30\uff09", "link": "hot/food/2024-11-20"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0812.02-12.06\uff09", "link": "hot/food/2024-11-28"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0812.09-12.13\uff09", "link": "hot/food/2024-12-06"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0812.16-12.20\uff09", "link": "hot/food/2024-12-12"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0812.23-12.27\uff09", "link": "hot/food/2024-12-23"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0812.30-1.3\uff09", "link": "hot/food/2024-12-27"}, {"text": "\u4e00\u5468\u83dc\u5355\uff082.13-2.14\uff09", "link": "hot/food/2025-02-14"}, {"text": "\u4e00\u5468\u83dc\u5355(2.17--2.21\uff09", "link": "hot/food/2025-02-17"}, {"text": "\u4e00\u5468\u83dc\u5355\uff082.24-2.28\uff09", "link": "hot/food/2025-02-21"}], "collapsed": true, "link": "hot/food"}], "collapsed": false, "link": "hot"}, {"text": "\u201c\u5468\u6069\u6765\u201d\u62a5\u793e", "items": [{"text": "\u60e0\u9634\u6821\u56ed\u2014\u2014\u201c\u5468\u6069\u6765\u201d\u62a5\u793e", "link": "newspaper/2025-02-23"}, {"text": "\u6dfb\u52a0\u65b0\u95fb\u7a3f", "link": "newspaper/add"}], "collapsed": false, "link": "newspaper"}],
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

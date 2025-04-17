import markdownItKatex from 'markdown-it-katex'
import { withMermaid } from "vitepress-plugin-mermaid";
import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
    'mjx-container',
    'mjx-assistive-mml',
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mi',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'mscarries',
    'msgroup',
    'mstack',
    'mlongdiv',
    'msline',
    'mstack',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mspace',
    'mtext',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'msqrt',
    'mstyle',
    'mmultiscripts',
    'mover',
    'mprescripts',
    'msub',
    'msubsup',
    'msup',
    'munder',
    'munderover',
    'none',
    'maligngroup',
    'malignmark',
    'mtable',
    'mtd',
    'mtr',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'msrow',
    'mstack',
    'maction',
    'semantics',
    'annotation',
    'annotation-xml',
];
// https://vitepress.dev/reference/site-config
export default withMermaid({
    srcDir: "docs",
    lang: "zh-Hans",
    title: "惠阴校园",
    description: "描述",
    sitemap: {
        hostname: "https://apkqiu.github.io"
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [{"text": "\u70ed\u95e8\u8bdd\u9898", "link": "hot", "activeMatch": "hot"}, {"text": "\u201c\u5468\u6069\u6765\u201d\u62a5\u793e", "link": "newspaper", "activeMatch": "newspaper"}, {"text": "\u5b98\u65b9\u7f51\u7ad9", "link": "offical_pages", "activeMatch": "offical_pages"}, {"text": "\u7167\u7247\u96c6\u9526", "link": "old_imgs", "activeMatch": "old_imgs"}, {"text": "\u4f18\u79c0\u4f5c\u6587", "link": "perfect_work", "activeMatch": "perfect_work"}, {"text": "\u5929\u6c14", "link": "weather", "activeMatch": "weather"}],
        sidebar: [{"text": "\u70ed\u95e8\u8bdd\u9898", "items": [{"text": "\u73ed\u7ea7\u70ed\u70b9", "link": "hot/class"}, {"text": "\u4e00\u5468\u98df\u8c31", "items": [{"text": "\u4e00\u5468\u83dc\u5355\uff089.2-9.6\uff09", "link": "hot/food/2024-09-06"}, {"text": "\u4e00\u5468\u83dc\u5355\uff089.18-9.20\uff09", "link": "hot/food/2024-09-14"}, {"text": "\u4e00\u5468\u83dc\u5355\uff089.23-9.29\uff09", "link": "hot/food/2024-09-20"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0810.8-10.12\uff09", "link": "hot/food/2024-10-11"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0810.14-10.18\uff09", "link": "hot/food/2024-10-18"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0810.28-11.01\uff09", "link": "hot/food/2024-10-25"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0811.11-11.15\uff09", "link": "hot/food/2024-11-07"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0811.18-11.22\uff09", "link": "hot/food/2024-11-14"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0811.25-11.30\uff09", "link": "hot/food/2024-11-20"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0812.02-12.06\uff09", "link": "hot/food/2024-11-28"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0812.09-12.13\uff09", "link": "hot/food/2024-12-06"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0812.16-12.20\uff09", "link": "hot/food/2024-12-12"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0812.23-12.27\uff09", "link": "hot/food/2024-12-23"}, {"text": "\u4e00\u5468\u83dc\u5355\uff0812.30-1.3\uff09", "link": "hot/food/2024-12-27"}, {"text": "\u4e00\u5468\u83dc\u5355\uff082.13-2.14\uff09", "link": "hot/food/2025-02-14"}, {"text": "\u4e00\u5468\u83dc\u5355(2.17--2.21\uff09", "link": "hot/food/2025-02-17"}, {"text": "\u4e00\u5468\u83dc\u5355\uff082.24-2.28\uff09", "link": "hot/food/2025-02-21"}], "collapsed": true, "link": "hot/food"}, {"text": "\u5b66\u6821\u65b0\u95fb", "link": "hot/school"}], "collapsed": false, "link": "hot"}, {"text": "\u201c\u5468\u6069\u6765\u201d\u62a5\u793e", "items": [{"text": "\u60e0\u9634\u6821\u56ed\u2014\u2014\u201c\u5468\u6069\u6765\u201d\u62a5\u793e", "link": "newspaper/2025-02-23"}, {"text": "\u5468\u6069\u6765\u5468\u62a5 \u7b2c\u4e94\u671f 2025.4.15", "link": "newspaper/5"}, {"text": "\u6dfb\u52a0\u65b0\u95fb\u7a3f", "link": "newspaper/add"}, {"text": "\u964b\u8bd5\u94ed", "link": "newspaper/interesting-1"}, {"text": "\u6211\u7684\u4e00\u5929", "link": "newspaper/personal-1"}], "collapsed": false, "link": "newspaper"}, {"text": "\u5b98\u65b9\u7f51\u7ad9", "link": "offical_pages"}, {"text": "\u7167\u7247\u96c6\u9526", "items": [{"text": "\u6821\u56ed\u666f\u81f4", "link": "old_imgs/school"}, {"text": "\u5404\u4f4d\u8001\u5e08\u4eec", "link": "old_imgs/teachers"}, {"text": "\u8001\u5e08\u4eec\u7684\u6559\u5b66", "link": "old_imgs/teaching"}], "collapsed": false, "link": "old_imgs"}, {"text": "\u4f18\u79c0\u4f5c\u6587", "items": [{"text": "\u8003\u8bd5\u7684\u8a93\u8a00", "link": "perfect_work/1475"}, {"text": "\u89c9\u9192", "link": "perfect_work/3961"}, {"text": "\u4eb2\u60c5", "link": "perfect_work/3971"}, {"text": "\u6211\u7684\u5fc3\u91cc\u53ea\u6709\u4f60", "link": "perfect_work/3991"}, {"text": "\u7ed9\u5b54\u5b50\u7684\u4e00\u5c01\u4fe1", "link": "perfect_work/4021"}, {"text": "\u62fc\u640f\u7684\u82b1\u857e", "link": "perfect_work/4031"}, {"text": "\u6559\u5e08\u505a\u79d1\u7814\u7684\u5341\u6761\u5efa\u8bae", "link": "perfect_work/4041"}], "collapsed": false, "link": "perfect_work"}, {"text": "\u5929\u6c14", "items": [{"text": "\u751f\u6d3b\u6307\u6570", "link": "weather/today_life"}], "collapsed": false, "link": "weather"}],
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
        externalLinkIcon: true,
    },
    markdown: {
        lineNumbers: true,
        config: (md) => {
            md.use(mathjax3)
        }
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag)
            }
        }
    }
});

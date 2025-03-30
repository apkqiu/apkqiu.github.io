import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
    },
    setup() {
        const { frontmatter } = toRefs(useData());
        const route = useRoute();

        giscusTalk(
            {
                repo: 'apkqiu/apkqiu.github.io',
                repoId: 'R_kgDOOQrolQ',
                category: 'General', // 默认: `General`
                categoryId: 'DIC_kwDOOQrolc4Colvm',
                mapping: 'pathname', // 默认: `pathname`
                inputPosition: 'top', // 默认: `top`
                lang: 'zh-CN', // 默认: `zh-CN`
                lightTheme: 'light', // 默认: `light`
                darkTheme: 'dark', // 默认: `transparent_dark`
                //loading: 'lazy',

            },
            {
                frontmatter,
                route,
            },
            // 是否全部页面启动评论区。
            // 默认为 true，表示启用，此参数可忽略；
            // 如果为 false，表示不启用。
            // 可以在页面使用 `comment: true` 前言单独启用
            true
        );
    }
}; 
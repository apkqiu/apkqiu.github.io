<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import Axios from 'axios'
const { Layout } = DefaultTheme
const ads = [
    `<h1>这儿没有广告</h1>`
]
if (typeof window !== "undefined") 
if (localStorage.getItem("prevent") == "true")

    onMounted(() => {
        // var id = parseInt(Math.random() * Number.MAX_SAFE_INTEGER / 14) % ads.length;
        // document.getElementById("ads").innerHTML = ads[id];
    })
</script>

<script>
if (typeof window !== "undefined") 

if (localStorage.getItem("prevent") != "true") {
    if (window.location.href.indexOf("_ads/") != -1 && !window.location.href.endsWith("_closed.html"))
        window.location.replace("/_ads/_closed.html")
    else if (!window.location.href.endsWith("_closed.html"))
        window.location.replace("/_closed.html")

} else {

}
</script>

<style>
@media (min-width: 768px) {
    .NotFound {
        padding: 96px 32px 168px;
    }
}

.NotFound {
    padding: 64px 24px 96px;
    text-align: center;
}

.NotFound>.code {
    line-height: 64px;
    font-size: 64px;
    font-weight: 600;
}

.NotFound>.title {
    padding-top: 12px;
    letter-spacing: 2px;
    line-height: 20px;
    font-size: 20px;
    font-weight: 700;
}

.NotFound>.quote {
    margin: 0 auto;
    max-width: 40%;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.NotFound>.action {
    padding-top: 20px;
}

.NotFound>.action>.link {
    display: inline-block;
    border: 1px solid var(--vp-c-brand-1);
    border-radius: 16px;
    padding: 3px 16px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-brand-1);
    transition: border-color .25s, color .25s;
}
</style>
<template>
    <Layout>
        <template #not-found>
            <div class="NotFound">
                <p class="code">您追寻的页面已化作流星</p>
                <h1 class="title">建议您循光返回导航港湾，让新墨为您勾勒下一幅风景</h1>
                <div class="divider"></div>
                <blockquote class="quote">
                    方向若是总不调整，脚步却从未停息地往前赶，这般固执的旅程说不定真能走到自己认定的远方，就像星辰追着光年外的坐标，我们闷头赶路时，早把答案刻进了脚下的每寸路。
                </blockquote>
                <div class="action">
                    <a class="link" href="/">带我启航归湾</a>
                </div>
            </div>
        </template>
        <template #aside-ads-before>
            <div id="ads" class="info custom-block">

            </div>
            <button onclick="document.getElementById('ads').style.display=this.style.display='none'">× 关闭</button>
        </template>
    </Layout>
</template>

---
title: 生活指数
---
# 今日生活指数
<script setup>
    import { ref, onMounted } from "vue"
    import axios from "axios"
if( typeof document !== 'undefined'){
    onMounted(() => {
        console.log(`Test test`)
        
            const life = document.getElementById("life");
    })
    axios({
        method: "post",
        url: "https://h5ctywhr.api.moji.com/indexDetail",
        data: '{"cityId":"1093"}'
    }).then((resp) => {
        resp.data.indexs.forEach((val, idx, arr) => {
            const header = document.createElement("h2")
            header.innerText = val.indexType
            const value = document.createElement("p")
            value.innerText = "["+val.indexLevel+"]"+val.indexLevelDesc
            const quote = document.createElement("blockquote")
            quote.innerText = val.indexDesc
            life.appendChild(header)
            life.appendChild(value)
            life.appendChild(quote)
        })
    })}
</script>

<div id="life"></div>

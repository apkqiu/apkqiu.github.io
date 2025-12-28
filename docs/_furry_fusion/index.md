# 兽聚列表

> 哇哦，你居然发现了这个页面！

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // 构建xmlhttp
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.furryfusion.net/service/activity')
    xhr.send()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            const data = response.data
            for(var i=0; i<data.length; i++) {
                const item = data[i]
                const title = document.createElement('h2')
                if(item.title === item.name)
                    title.innerText = item.title
                else
                    title.innerText = item.title + ' · ' + item.name
                const place = document.createElement('p')
                place.innerText = item.address
                if(item.address === "江苏·苏州")
                    place.style.color = '#00aaff'
                const time = document.createElement('p')
                time.innerText = item.time_start + ' - ' + item.time_end
                // 在范围内？time_start和time_end都是yyyy.mm.dd
                var current = new Date();
                var start = new Date(item.time_start);
                var end = new Date(item.time_end);
                end.setDate(end.getDate() + 1);
                if(current >= start && current <= end)
                    time.style.color = '#3affa3'
                
                const details = document.createElement('a')
                details.innerText = '详情'
                details.target = '_blank'
                details.href = "https://www.furryfusion.net"+item.path;
                const container = document.createElement('div')
                container.appendChild(title)
                container.appendChild(place)
                container.appendChild(time)
                container.appendChild(details)
                document.getElementById('activity').appendChild(container)
            }
        }
    }
})
</script>
<ClientOnly>
<div id="activity"></div>
</ClientOnly>
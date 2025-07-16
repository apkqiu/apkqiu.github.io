# 隐藏的界面

> 一些页面已经被隐藏，你需要使用"页面跳转码"来访问它们。
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    function loadtoavailability() {
        var res = confirm("你确定要跳转到这个页面吗？这个页面的维护者与当前页面的维护者不同，可能会引起舒适或不适。")
        if(res) {
            window.location.href = "/availability"
        }
    }
    window.mapping = {
        "furry":"/_furry_fusion",
        "availability":availability,
    }
    window.run_mapping = (value) => {
        if(value.startsWith("/")) {
            window.location.href = value
        }
        var val = mapping[value]
        if (val) {
            document.getElementById('result').style.visibility = "hidden"
            // check if it is a function
            if (typeof val === 'function') {
                val()
            } else {
                window.location.href = val
            }
        } else {
            document.getElementById('result').style.visibility = "visible"
        }
    }
})
</script>
<ClientOnly>
    <input type="text" placeholder="输入页面跳转码" id="code"/>
    <button onclick="run_mapping(document.getElementById('code').value)">跳转</button>
    <p id="result" style="color: red;visibility: collapse;">跳转码错误</p>
</ClientOnly>

> 页面跳转码可能是爱好、圈子等等，请自行探索。

---

觉得无聊？不妨试试

- availability
- /fake_1cz




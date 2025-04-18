---
title: 网站关闭
titleTemplate: 网站关闭
navbar: false
sidebar: false
footer: false
editLink: false
prev: false
next: false

# fake closed page
# to prevent ddos and anomyous access
---

# 网站关闭

<script setup>
    import { ref, onMounted } from "vue"
    onMounted(() => {
        const x = document.getElementById("x");
        if (localStorage.getItem("prevent") == "true") {
            var a = document.createElement("a")
            a.href = "/"
            a.innerText = "作为内部人员，你有资格访问这个网站"
            x.appendChild(a)
            x.appendChild(document.createElement("br"))
            var b = document.createElement("button")
            b.onclick = () => {
                localStorage.setItem("prevent", false);
                var key = parseInt(Math.random() * 1000000) + ""
                key = (key+key+key+key+key+key).substr(0,6)
                localStorage.setItem("restore", key);
                alert("请牢记恢复密钥：" + key)
                window.history.go(0)
            }
            b.innerText = "撤回访问权限"
            x.appendChild(b)
        } else {
            var sayings = [
                "进了一班，就不等于进了保险箱！——Soil Grass",
                "首先，态度是最重要的，五班他们其实一点都不比你们差，学习态度一个比一个认真。——Soil Grass",
                "不要被周恩来班的光环，闪瞎了眼！——Soil Grass",
                "你有没有抄吴琼（无穷）的作业？——Soil Grass",
                "我教你们发面，你们做馒头花卷，可总有几个人，发面不会做，就开始做各种各样的糕点。——Soil Grass",
                "我对你们客气，你们把我当福气了是吧！——Soil Grass",
            ]
            var a = document.createElement("button")
            var key;
            a.onclick = () => {
                
                key = prompt("输入恢复密钥",key=="Soil Grass"?( localStorage.getItem("restore")):"");
                if(key==null) return
                if(key=="Soil Grass"&& localStorage.getItem("restore")==null){
                    key = localStorage.getItem("restore")
                    localStorage.setItem("restore",key)
                }
                if (key == localStorage.getItem("restore")) {
                    localStorage.setItem("prevent", true);
                    window.history.go(0)
                    return
                }
                alert("错误的恢复密钥")

            }
            a.innerText = sayings[parseInt(Math.random() * 100) % 6] + ""
            x.appendChild(a)
        }
    })
</script>

<p>开放时间待定</p>
<p>在评论区默哀一下吧</p>
<div id="x">
</div>

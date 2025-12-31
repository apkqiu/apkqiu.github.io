---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 啸猫和蓝莓
  text: 的生活日记
  tagline: 其实是个个人小网站而已
  actions:
    - theme: alt
      text: 洽隐山房
      link: https://apkqiu.oc.com.ar/avaliability_beta/
    - theme: alt
      text: 洽隐山房(稳定版)
      link: https://apkqiu.oc.com.ar/availability/
    - theme: sponsor
      text: Github
      link: https://github.com/apkqiu/apkqiu.github.io

features:
  - icon: 🦊
    title: 兽聚列表
    details: 天下大事，事事关心
    link: /furry_fusion
    linkText: 查看
  - icon: 📚
    title: 自设
    details: 画画能够治愈一切
    link: /oc
    linkText: 查看
  - icon: 💻
    title: 编程小屋
    details: 代码如诗，生活如歌
    link: /coding
    linkText: 查看
  - icon: ☀
    title: 有趣的事情
    details: 每天都有新发现
    link: /funny_things
    linkText: 查看
  - icon: 📰
    title: 班级热点
    details: 班级最近有什么有趣的新闻？
    link: /hot/class
    linkText: 了解更多
  - icon: 🏫
    title: 学校新闻
    details: 学校最近有什么新鲜事？
    link: /hot/school
  - icon: 🍴
    title: 一周食谱
    details: 这一周吃什么？有冰红茶？还是菠萝古老肉？
    link: /hot/food
  - icon: 🤡
    title: 小彩蛋
    details: 网站关闭了？
    link: /_closed
  - icon: 📷
    title: 照片集锦
    details: 学校的一些照片，摘自学校的官网
    link: /old_imgs/school
  - icon: 🖊
    title: 优秀作文
    details: 来自学生们的投稿，互相学习，互相进步
    link: /perfect_work/
  - icon: ⛅
    title: 天气
    details: 每日更新的天气预报，皆在为学生们的明天做好打算
    link: /weather/
  - icon: 🎓
    title: 知识库
    details: 一些学习资料，供学生们参考
    link: https://apkqiu.github.io/knowledge/
---
<br>

# 欢迎来到我的博客！

作者成分分析

> 1. 技术佬
> 2. 宅男
> 3. 福瑞控

----

# 关于我

你好，我是一个喜欢编程、动漫和福瑞的宅男，可以叫我“啸猫”，也可以叫我“蓝莓”。我的博客主要分享我的生活、编程和动漫心得。如果你也对这些感兴趣，欢迎来我的博客看看！

这里包含了我的个人博客内容，也有以前的网站内容，欢迎访问！


<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/83914008',
    name: 'apkqiu',
    title: '网站制作者',
    links: [
      { icon: 'github', link: 'https://github.com/apkqiu'},
      { icon: 'x', link: 'https://twitter.com/apkqiu' },
      { icon: 'wechat', link: 'weixin://contacts/profile/PuroMas' },
      { icon: 'qq' , link: 'tencent://message/?uin=1145328374' },
      { icon: 'maildotru', link: 'mailto:apkqiu@qq.com' },
      { icon: 'discord', link: 'https://discord.gg/apkqiu' },
    ]
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/221084849",
    name: "bantang32",
    title: "“半糖一班”网站制作者",
    links:[
      { icon: 'github', link: 'https://github.com/bantang32' },
      { icon: 'maildotru', link: 'mailto:Caixukun11451489@outlook.com' },
      { icon: 'wechat', link: 'weixin://contacts/profile/Chaoxi11451454188' },
      
    ]
  },
  {
    avatar:"https://cn.cravatar.com/avatar/?d=mp&s=512",
    name:"期待你的加入"
  }
]
</script>
<br>
<br>

<VPTeamPage id="team">
  <VPTeamPageTitle>
    <template #title>
      制作团队
    </template>
    <template #lead>
      我们是一群热爱八卦的人，喜欢分享学校新闻，喜欢分享美食。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members"/>
</VPTeamPage>


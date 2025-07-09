---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: “惠阴”新闻网
  text: 惠阴校园中你不知道的事情
  tagline: 其实是个个人小网站而已
  actions:
    - theme: brand
      text: “周恩来”报社（非官方）
      link: /newspaper
    - theme: alt
      text: 热门话题
      link: /hot
    - theme: sponsor
      text: Github
      link: https://github.com/apkqiu/apkqiu.github.io

features:
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
      { icon: 'wechat', link: 'weixin://contacts/profile/HasPingLink' },
      { icon: 'qq' , link: 'tencent://message/?uin=1145328374' },
      { icon: 'maildotru', link: 'mailto:apkqiu@qq.com' },
      //{ icon: 'discord', link: 'https://discord.gg/' },
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

[声明&合法性](/_law)

<!-- 
[为什么限制网站访问？](/_why) -->

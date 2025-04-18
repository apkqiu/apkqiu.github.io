<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
if(localStorage.getItem("prevent")!="true"&&!window.location.href.endsWith("closed.html")){
    window.location.href = "/_closed.html"
}
</script>



<style>
    .card{
        background-color: #efefef; border-radius: 5px; padding: 1em 2em;margin:1em
    }
</style>
<template>
    <Layout>
        
    </Layout>
</template>


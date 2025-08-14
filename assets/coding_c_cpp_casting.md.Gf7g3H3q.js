import{_ as t,c as n,o as a,a6 as e}from"./chunks/framework.Bfj_fQo8.js";const g=JSON.parse('{"title":"C/C++ 类型显式转换","description":"","frontmatter":{},"headers":[],"relativePath":"coding/c_cpp_casting.md","filePath":"coding/c_cpp_casting.md","lastUpdated":1755150079000}'),i={name:"coding/c_cpp_casting.md"};function c(o,p,r,s,_,d){return a(),n("div",null,p[0]||(p[0]=[e(`<h1 id="c-c-类型显式转换" tabindex="-1">C/C++ 类型显式转换 <a class="header-anchor" href="#c-c-类型显式转换" aria-label="Permalink to &quot;C/C++ 类型显式转换&quot;">​</a></h1><p>上一章，我提到了下面的代码</p><pre class="highlighter-prismjs language-c prismjs-lines-highlighted" tabindex="0"><code>#include &lt;stdio.h&gt;
int a = (long)4;
extern char k = (int)&#39;m&#39;;
void main(void)
{
    printf(&quot;%s&quot;, a);
    printf(&quot;%f&quot;, k);
}</code></pre><p>这里我需要纠正上一篇文章的错误，C语言不存在bool类型</p><p>只要数字是大于0，那么相当于true</p><p>否则就是false</p><p> </p><p>其中，int a表示声明一个变量，名字为a，它的类型是int</p><p>它的值为long类型的4</p><p>显式转换为 (long)4</p><p>然后再隐式转换为int类型</p><p> </p><p>extern char k = (int)&#39;m&#39;</p><p>这个就涉及到ascii字符码表</p><p> </p><p>字母m在那里对应数字101</p><p>所以k的值是101</p><p>然后再隐式转换char类型</p><p> </p><p>printf(&quot;%s&quot;,a)和printf(&quot;%f&quot;,k)中也包含隐式转换，关于Printf将在下篇在讲述</p><p> </p>`,21)]))}const u=t(i,[["render",c]]);export{g as __pageData,u as default};

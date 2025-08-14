# C/C++ 类型显式转换

<p>上一章，我提到了下面的代码</p>
<pre class="highlighter-prismjs language-c prismjs-lines-highlighted" tabindex="0"><code>#include &lt;stdio.h&gt;
int a = (long)4;
extern char k = (int)'m';
void main(void)
{
    printf("%s", a);
    printf("%f", k);
}</code></pre>
<p>这里我需要纠正上一篇文章的错误，C语言不存在bool类型</p>
<p>只要数字是大于0，那么相当于true</p>
<p>否则就是false</p>
<p>&nbsp;</p>
<p>其中，int a表示声明一个变量，名字为a，它的类型是int</p>
<p>它的值为long类型的4</p>
<p>显式转换为 (long)4</p>
<p>然后再隐式转换为int类型</p>
<p>&nbsp;</p>
<p>extern char k = (int)'m'</p>
<p>这个就涉及到ascii字符码表</p>
<p>&nbsp;</p>
<p>字母m在那里对应数字101</p>
<p>所以k的值是101</p>
<p>然后再隐式转换char类型</p>
<p>&nbsp;</p>
<p>printf("%s",a)和printf("%f",k)中也包含隐式转换，关于Printf将在下篇在讲述</p>
<p>&nbsp;</p>
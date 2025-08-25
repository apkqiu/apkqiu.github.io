# C/C++ 类型显式转换

上一章，我提到了下面的代码

```cpp
#include <stdio.h>
int a = (long)4;
extern char k = (int)'m';
void main(void)
{
    printf("%s", a);
    printf("%f", k);
}
```
这里我需要纠正上一篇文章的错误，C语言不存在`bool`类型

只要数字是大于0，那么相当于`true`

否则就是`false`



其中，`int a`表示声明一个变量，名字为`a`，它的类型是`int`

它的值为`long`类型的4

显式转换为 `(long)4`

然后再隐式转换为`int`类型


```cpp
extern char k = (int)'m'
```

这个就涉及到ascii字符码表



字母m在那里对应数字101

所以k的值是101

然后再隐式转换`char`类型



`printf("%s",a)`和`printf("%f",k)`中也包含隐式转换，关于`printf`将在下篇在讲述



# 让你的python文件可以独立运行

::: warning 警告
这篇文章写于2020年，可能存在过时问题
:::

我们都知道，python文件必须要安装python，那么有没有一种方法使其可以独立运行呢？下面让我们了解一下


## 准备

1. 安装pyinstaller
    > 在命令提示符中输入
    > ```bash
    > pip install pyinstaller -i http://mirrors.aliyun.com/pypi/simple/
    > ```
2. 将[python安装目录]\Scripts添加到Path
    > 按下Win+R并输入"C:\Windows\System32\control.exe system"
    >
    > 打开"高级系统设置"
    >
    > 选择"高级"选项卡，并打开"环境变量..."
    >
    > win7/更早版本在"Path"中需要在前面加一个";"
3. 安装setup factory
    > 下载：http://y.downya.com/down2/setupfactory_v9.1.0_downyi.com.zip 
    >
    > 激活码：SUF-BMDP-F2NS-GN82-FS3J
4. 导入要独立运行的python文件
5. 成功制作

## 示例
`pyinstaller <file> [-F | -D] [-c | -w] [-p <lib_path>] [-i <icon_path>]`

|参数名	|是否必选/必选条件	|描述|
|------|-----------------|---|
|file	|✔️	|python文件的 cmd/powershell的相对路径 或 绝对路径|
|-F	|❌	|只生成单个exe格式文件，建议小型程序使用此方式(与-D相反)|
|-D	|❌	|创建一个目录，包含exe文件以及大量依赖文件(默认，与-F相反)|
|-c	|❌	|唤醒cmd窗口来运行程序(默认，与-w相反)|
|-w	|❌	|直接运行程序，不唤醒cmd窗口(与-c相反)|
|-p	|❌	|在lib_path下查找库文件|
|lib_path	|指定-p时	|指定在哪里查找库文件|
|-i	|❌	|指定是否使用自定义程序图标|
|icon_path	|指定-i时	|指定程序图标的 cmd/powershell的相对路径 或 绝对路径|

```
pyinstaller test.py
pyinstaller test.py -F
pyinstaller test.py -w
```
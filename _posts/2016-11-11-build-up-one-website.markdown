---
layout: post
category: Info
title: 域名+解析+GitHub来搭建自己的个人网站
date: 2016-11-11 19:36:00.000000000 +08:00
tags: GitHub使用技巧 , 网站搭建
---

---

>版权声明：本文为 @icurious
的原创文章，可以转载，但请务必注明作者和出处！！！
原文链接：[www.blankspace.cn](http://www.blankspace.cn/2016/11/build-up-one-website/)

## 摘要
本文主要介绍如何申请注册域名，使用GitHub上的开源项目来搭建一个网站/个人博客。由于无需购买服务器，所以没有数据库访问，很适合建立自己的博客或者个人网站，而不适合大型网站。本方法已经经过作者实际验证，真实有效，操作简单，适合没有任何网站开发经验的小白。

## 最终效果
![欢迎界面][1]

![内容][2]


## 总流程
>1. 购买域名
2. 注册GitHub账号，并创建一个代码仓库（repository）
3. 编写网站代码或者使用开源的网站项目
4. 将域名和刚创建的网站代码仓库相关联

## 具体步骤
**1. 购买域名**
向域名提供商购买域名。作者熟悉的域名提供商：
国外：[godaddy](http://www.godaddy.com/)
国内：[腾讯云](http://www.qcloud.com/)、[阿里云](https://www.aliyun.com/)
其余的可以百度/谷歌一下。申请方法步骤和步骤大同小异。
由于作者还是在校生，针对在校生腾讯云和阿里云都提供了相应的优惠，在校生可以关注一下他们的优惠信息。godaddy也有一些优惠码，购买域名之前可以搜索一些优惠码。

这里我选择的是`阿里云`,注册-验证-登录，找到其下的万网，
![万网][3]

在域名查询栏中搜索自己想要的域名，
![域名查询][4]
一般比较容易想到的别人都注册了，可以多试几次，实在不行就购买比较不常见的后缀（一级域名）的域名。

![domin][5]

![此处输入图片的描述][6]

添加到订单-支付-支付成功，于是你就有了属于自己的域名了。
在阿里云购买的域名提供了云解析（就是将网站的IP地址和域名关联起来），其他地方我不是很清楚，如果没有，在购买相应的DNS（域名解析系统）的服务就可以了。由于无需购买云服务器或者云主机，所需的花费还是十分低廉的。

当然选择国内的域名提供商还需要通过实名认证，选择`实名认证`，提交自己的身份信息，一般3-5个工作日就好了（实际上我的第一个域名审核通过只花了2天不到）。
![此处输入图片的描述][7]

这时候你就可以学习如何使用GitHub了。

**2. 注册GitHub账号，并创建一个代码仓库（repository）**

关于GitHub是什么，如何使用，许多热心的大牛们已经写过很多相关介绍的文章了，这里推荐[@StormZhang](http://stormzhang.com)的[从0开始学习 GITHUB 系列](http://stormzhang.com/github/2016/05/26/learn-github-from-zero2/)，语言通俗易懂，对于初步了解GitHub很有帮助。

这里我只介绍与本文相关的GitHub说明和使用。GitHub，你可以初步认为它就相当于**专门存放代码的云盘**，当然，GitHub的功能不止于此。

使用邮箱到[github](https://github.com/)上注册一个GitHub账号，推荐使用@hotmail/@outlook/@gmail或者自己学校的提供的邮箱后缀的邮箱注册。

注册-认证-登录，然后就可以开始创建自己的代码仓库了。创建的方法[@StormZhang](http://stormzhang.com)的[从0开始学习 GITHUB 系列](http://stormzhang.com/github/2016/05/26/learn-github-from-zero2/)，中也有详细的介绍。对于本项目来说也可以先不看。


**3. 编写网站代码或者使用开源的网站项目**
先别着急，要是一点网站建立的经验都没有，最好使用开源的项目。GitHub是全世界最大的开源项目社区，上面关于网站制作的项目非常多。

关于网站制作的比较著名开源主题有`jekyll`、`hexo`等，可以从网站找到相应创建网站的方法。这里我使用的大牛[@onecat](https://github.com/onevcat)的开源项目[vno-jekyll](https://github.com/onevcat/vno-jekyll)主题。

一个简便的方法就是，点击右上角的fork，直译是叉子，也就是创建该项目的一个分支，自己进行编辑，自己编辑的内容不会和项目创建者的版本相冲突。

![fork][8]

点击之后你就有了一个与之同名的项目，现在它就是你的了。
还有两步就可以搭建自己的网站了。接下来的工作，简单得超乎你的想象。

**4. 将域名和刚创建的网站代码仓库相关联**
GitHub为每个注册的用户提供了一个专有的`[用户名].github.io`（只有一个）这样一个网址，你就可以使用它来和自己购买的域名相关联。之所以不需要购买服务器或者云主机，原因就在GitHub服务器会帮你托管这个`[用户名].github.io`所用到的全部代码，自动运行。

你要做的就是将刚刚fork的开源网站项目和自己购买的域名关联起来，还有最后三步就可完成。

- **倒数第三步**
将刚才fork的项目，修改名称为`[用户名].github.io`，用户名就是你注册GitHub使用的名称。

![rename1][9]

![rename2][10]

> *注：*删除某个项目，也是在setting中，页面最下方。

- **倒数第二步**
在该项目下新建文件，命名为CNAME,内容为你的域名。
![creat_newfile][11]

![CNAME][12]

- **最后一步**
到自己的域名管理控制台>>点击解析>>进入如下页面，添加如下信息：
记录类型：CNAME，主机记录：随便填都行，记录值一定要是`[用户名].github.io`，TTL：从下拉选项中选择一项。

![DNS][13]

解析成功。你的网站就建立成功了。在浏览器地址栏输入：
http://主机记录值.域名
（例如www.blankspace.cn）,就可以转到你自己的网站了。

![ONECAT][14]

当然由于是开源的项目，此时的界面是大牛[@onecat](https://github.com/onevcat)的样式和内容，距离文章开头的样式还需要进行一定的修改。至于如何修改，以及往其中添加新的页面，如何进行文章的更新，将在以后进行介绍。感谢你的阅读。

>版权声明：本文为 @icurious
的原创文章，可以转载，但请务必注明作者和出处！！！
原文链接：[www.blankspace.cn](http://www.blankspace.cn)


  [1]: http://ww2.sinaimg.cn/mw690/005Q2IiXgw1f9oczwoji1j311x0lb787.jpg
  [2]: http://ww3.sinaimg.cn/mw690/005Q2IiXgw1f9oeaiiq9hj311x0lbdqd.jpg
  [3]: http://ww1.sinaimg.cn/mw690/005Q2IiXgw1f9ocynqxdtj30zo04qab0.jpg
  [4]: http://ww3.sinaimg.cn/mw690/005Q2IiXgw1f9ocym9yezj30wq0220th.jpg
  [5]: http://ww1.sinaimg.cn/mw690/005Q2IiXgw1f9ocymyl3hj30qz0hl0x4.jpg
  [6]: http://ww3.sinaimg.cn/mw690/005Q2IiXgw1f9ocyftvm7j30zq0hlad7.jpg
  [7]: http://ww1.sinaimg.cn/mw690/005Q2IiXgw1f9odpxxloyj30zr082abs.jpg
  [8]: http://ww3.sinaimg.cn/mw690/005Q2IiXgw1f9ocyja1n9j30s50jhgpl.jpg
  [9]: http://ww2.sinaimg.cn/mw690/005Q2IiXgw1f9ocymd7rvj30s204t755.jpg
  [10]: http://ww3.sinaimg.cn/mw690/005Q2IiXgw1f9ocylebq6j30rt07yq49.jpg
  [11]: http://ww1.sinaimg.cn/mw690/005Q2IiXgw1f9ocyh7d30j30rf03e0tc.jpg
  [12]: http://ww1.sinaimg.cn/mw690/005Q2IiXgw1f9ode0zjpuj30rj0b9jso.jpg
  [13]: http://ww1.sinaimg.cn/mw690/005Q2IiXgw1f9ocyj9waij30zr0dkjv9.jpg
  [14]: http://ww2.sinaimg.cn/mw690/005Q2IiXgw1f9ode7nsbvj311y0k0dmb.jpg

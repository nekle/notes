(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{636:function(t,e,s){"use strict";s.r(e);var a=s(33),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[s("a",{attrs:{href:"#%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2"}},[t._v("手动部署")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#github"}},[t._v("GitHub")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E8%87%AA%E5%B7%B1%E6%9C%8D%E5%8A%A1%E5%99%A8"}},[t._v("自己服务器")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#github-%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2"}},[t._v("GitHub 自动部署")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E7%94%9F%E6%88%90-token"}},[t._v("生成 Token")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE%E7%A7%98%E9%92%A5"}},[t._v("配置秘钥")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E8%87%AA%E5%B7%B1%E6%9C%8D%E5%8A%A1%E5%99%A8"}},[t._v("自动部署自己服务器")])])]),t._v(" "),s("h2",{attrs:{id:"手动部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动部署"}},[t._v("#")]),t._v(" 手动部署")]),t._v(" "),s("h3",{attrs:{id:"github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[t._v("#")]),t._v(" GitHub")]),t._v(" "),s("p",[t._v("创建分支："),s("code",[t._v("gh-pages")])]),t._v(" "),s("p",[t._v("更改文件"),s("code",[t._v("deploy.sh")]),t._v("内容")]),t._v(" "),s("p",[t._v("仓库地址替换成自己的：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("githubUrl=git@github.com:oddfar/notes.git")])]),t._v(" "),s("li",[s("p",[t._v("githubUrl=https://oddfar:${GITHUB_TOKEN}@github.com/oddfar/notes.git")])]),t._v(" "),s("li",[s("p",[t._v("initDist \"module.exports = '/notes/'\"")])])]),t._v(" "),s("p",[t._v("修好完后，双击运行 "),s("code",[t._v("deploy.sh")])]),t._v(" "),s("p",[t._v("之后配置 "),s("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pages"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/20210517151356.png",alt:"image-20210517151354287"}})]),t._v(" "),s("h3",{attrs:{id:"自己服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自己服务器"}},[t._v("#")]),t._v(" 自己服务器")]),t._v(" "),s("p",[t._v("根目录下执行命令")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("生成文件在 "),s("code",[t._v("docs\\.vuepress\\dist\\")]),t._v(" 目录下")]),t._v(" "),s("p",[t._v("打包到服务器即可")]),t._v(" "),s("p",[t._v("注：本地不可直接访问，需要配合插件，详情看官方文档")]),t._v(" "),s("h2",{attrs:{id:"github-自动部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-自动部署"}},[t._v("#")]),t._v(" GitHub 自动部署")]),t._v(" "),s("p",[t._v("目录 "),s("code",[t._v(".github\\workflows\\")]),t._v(" 下的 "),s("code",[t._v("ci.yml")]),t._v(" 文件为配置文件")]),t._v(" "),s("p",[s("font",{staticStyle:{color:"red"}},[t._v("若不需要同步到 Gitee 镜像，且需要配置对，否则把文件里面的 步骤三和步骤四 删掉")])],1),t._v(" "),s("p",[t._v("配置文件已经写好了，我们只需要在 github 上配置下秘钥（secrets）")]),t._v(" "),s("p",[t._v("前提已经配置了 "),s("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pages"),s("OutboundLink")],1),t._v(" 服务并能正常访问")]),t._v(" "),s("h3",{attrs:{id:"生成-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-token"}},[t._v("#")]),t._v(" 生成 Token")]),t._v(" "),s("p",[s("strong",[t._v("Settings -> Developer settings->Personal access tokens")])]),t._v(" "),s("p",[t._v("1、Settings")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/20210517142418.png",alt:"image-20210517142414602"}})]),t._v(" "),s("p",[t._v("2、Developer settings")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/20210517142546.png",alt:"image-20210517142543311"}})]),t._v(" "),s("p",[t._v("3、Personal access tokens")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/20210517142616.png",alt:"image-20210517142607486"}})]),t._v(" "),s("p",[t._v("4、Generate new token")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/20210517142730.png",alt:"image-20210517142727516"}})]),t._v(" "),s("p",[s("strong",[t._v("创建成功后，会生成一串token，这串token之后不会再显示，请认真保存")])]),t._v(" "),s("h3",{attrs:{id:"配置秘钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置秘钥"}},[t._v("#")]),t._v(" 配置秘钥")]),t._v(" "),s("p",[t._v("仓库Setting -> secrets -> New repository secret")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/20210517152655.png",alt:"image-20210517152652936"}})]),t._v(" "),s("p",[t._v("Name必须填 "),s("code",[t._v("ACCESS_TOKEN")])]),t._v(" "),s("p",[t._v("Value填写上一步生成的Token")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/20210517152825.png",alt:"image-20210517152823937"}})]),t._v(" "),s("p",[t._v("至此已全部配置好")]),t._v(" "),s("p",[t._v("每当我们 push 到主分支 master 时候，github pages 会自动部署")]),t._v(" "),s("h2",{attrs:{id:"自动部署自己服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动部署自己服务器"}},[t._v("#")]),t._v(" 自动部署自己服务器")]),t._v(" "),s("p",[t._v("用到 "),s("code",[t._v("WebHooks")]),t._v("  和 "),s("code",[t._v("Jenkins")]),t._v("，每次提交或其他操作时候，会访问设置的URL")]),t._v(" "),s("p",[t._v("Jenkin教程：<"),s("a",{attrs:{href:"http://note.oddfar.com/jenkins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jenkins - 知识体系 | OddFar's Notes"),s("OutboundLink")],1),t._v(">")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/PicGo/20211112125800.png",alt:"image-20211112124946135"}})]),t._v(" "),s("p",[t._v("跑一遍脚本命令就行")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf notes\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b gh-pages https://gitee.com/oddfar/notes.git\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("因为我的github配置，每次提交会同步到gitee")]),t._v(" "),s("p",[t._v("然后触发webhooks，使jenkins构建同步到自己服务器")]),t._v(" "),s("p",[t._v("最后访问地址：")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://note.oddfar.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://note.oddfar.com"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://oddfar.github.io/notes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://oddfar.github.io/notes"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
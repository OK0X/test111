(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,a){e.exports=a("2f39")},"034f":function(e,t,a){"use strict";var n=a("fb1c"),s=a.n(n);s.a},"1e5d":function(e,t,a){},"2f39":function(e,t,a){"use strict";a.r(t);a("ac6a"),a("a114"),a("d14b"),a("1e5d"),a("7e6d");var n=a("2b0e"),s=a("d1e7"),i=a("e84f"),o=a("4487"),r=a("7051"),u=a("46a9"),l=a("32a1"),p=a("c563"),c=a("db7b"),d=a("482e"),m=a("5d8b"),b=a("52b5"),f=a("1180"),y=a("506f"),h=a("b8d9"),g=a("0388"),v=a("d3e7"),w=a("1c93"),_=a("1526"),A=a("a9a0"),R=a("6780");n["a"].use(i["a"],{config:{cordova:{backButtonExit:!0}},i18n:s["a"],components:{QLayoutFooter:o["a"],QLayout:r["a"],QPageContainer:u["a"],QPage:l["a"],QTabs:p["a"],QTab:c["a"],QBtn:d["a"],QInput:m["a"],QIcon:b["a"],QList:f["a"],QItem:y["a"],QItemMain:h["a"],QDialog:g["a"],QProgress:v["a"],QRating:w["a"]},directives:{Ripple:_["a"]},plugins:{Loading:A["a"],Dialog:R["a"]}});var I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},P=[];I._withStripped=!0;a("7f7f"),a("4917");var M=a("e7ea"),B=a("a002"),U=a.n(B),x=a("96a1"),k={name:"App",data:function(){return{isGrayRelease:!1,latestVersionCode:0,updateTips:""}},created:function(){console.log("----app created")},mounted:function(){console.log("----app mounted"),this.openinWeixinQQtips(),this.global.defaultProvider=new M["ethers"].providers.InfuraProvider(this.global.ethersNet,this.global.infuraPROJECTID),this.global.m3gameContract=new M["ethers"].Contract(this.global.smartFinaceAddress,this.global.m3gameABI,this.global.defaultProvider),this.global.nabContract=new M["ethers"].Contract(this.global.nabAddress,this.global.nabABI,this.global.defaultProvider),this.checkAppUpdate()},methods:{openinWeixinQQtips:function(){var e=this;e.global.isWebVersion&&e.isWXQQBrowser()&&U.a.getItem("istip").then(function(t){null===t&&(e.$q.dialog({message:"请用手机自带浏览器(或谷歌，火狐，UC，360等常用手机浏览器)打开，微信和QQ里面不具备标准浏览器的功能，无法正常使用。若不是在微信和QQ里面使用请忽略该提示",color:"secondary"}),U.a.setItem("istip",!0))})},isWXQQBrowser:function(){return null!==navigator.userAgent.match("MicroMessenger|MQQBrowser")},checkAppUpdate:function(){var e=this;this.$axios.get(this.global.BmobRestAPIUrl+"cmaconfig",{headers:this.global.BmobRestAPIHeaders}).then(function(t){if(200===t.status){for(var a=t.data.results,n=0;n<a.length;n++)switch(a[n].name){case"latestVersionCode":e.latestVersionCode=a[n].value;break;case"updateTips":e.updateTips=a[n].value;break;case"updateUrl":e.global.downloadUrl=a[n].value;break;case"referUrl":e.global.referUrl=a[n].value;break;case"investDistrice24":e.global.investDistrice24=a[n].value;break;case"grayScaleRelease":e.isGrayRelease="true"===a[n].value;break;case"minPerInvest":e.global.minPerInvest=a[n].value;break}e.getLocalAddress()}})},getLocalAddress:function(){var e=this;U.a.getItem("ethAddress").then(function(t){null!==t&&(e.global.wallet.ethAddress=t.toLowerCase(),e.getBmobLoginfo(t.toLowerCase()))})},getBmobLoginfo:function(e){var t=this,a={address:e};this.$axios.get(this.global.BmobRestAPIUrl+"login?where="+encodeURI(JSON.stringify(a)),{headers:this.global.BmobRestAPIHeaders}).then(function(e){200===e.status&&(0===e.data.results.length?t.bmobLoginSave():(t.bmobLoginUpdate(e.data.results[0].objectId),t.global.isGrayUser="undefined"!==typeof e.data.results[0].AUser&&e.data.results[0].AUser,!t.global.isWebVersion&&t.latestVersionCode>t.global.versionCode&&(t.isGrayRelease?t.global.isGrayUser&&t.showUpdateDialog():t.showUpdateDialog())))})},showUpdateDialog:function(){var e=this;this.$q.dialog({title:"有新的版本！",message:e.updateTips,ok:"下载更新",cancel:"暂不更新"}).then(function(){Object(x["a"])(e.global.downloadUrl)}).catch(function(){})},bmobLoginUpdate:function(e){this.$axios.put(this.global.BmobRestAPIUrl+"login/"+e,{appVersion:this.global.versionCode+"",webviewVersion:navigator.userAgent},{headers:this.global.BmobRestAPIHeaders}).then(function(e){})},bmobLoginSave:function(){this.$axios.post(this.global.BmobRestAPIUrl+"login",{address:this.global.wallet.ethAddress,appVersion:this.global.versionCode+"",webviewVersion:navigator.userAgent},{headers:this.global.BmobRestAPIHeaders}).then(function(e){})}}},Q=k,L=(a("034f"),a("2877")),C=Object(L["a"])(Q,I,P,!1,null,null,null);C.options.__file="App.vue";var D=C.exports,T=a("2f62"),V={},N=a("a709"),W=a("8d6f"),E=a("5781"),F={namespaced:!0,state:V,getters:N,mutations:W,actions:E};n["a"].use(T["a"]);var H=function(){var e=new T["a"].Store({modules:{example:F}});return e},S=a("8c4f"),O=[{path:"/",component:function(){return Promise.all([a.e("c92045f6"),a.e("50984092"),a.e("2d0a4887"),a.e("6d839c50")]).then(a.bind(null,"f241"))}},{path:"/walletfirst",component:function(){return a.e("7933fb6e").then(a.bind(null,"d4c0"))}},{path:"/walletcreate",component:function(){return Promise.all([a.e("c92045f6"),a.e("50984092"),a.e("2d0a4887"),a.e("5298a240")]).then(a.bind(null,"41d7"))}},{path:"/ethtransfer",component:function(){return Promise.all([a.e("c92045f6"),a.e("50984092"),a.e("58e80019")]).then(a.bind(null,"63d0"))}},{path:"/transfereth",component:function(){return Promise.all([a.e("c92045f6"),a.e("50984092"),a.e("2d0a4887"),a.e("2158a490")]).then(a.bind(null,"845e"))}},{path:"/receipteth",component:function(){return a.e("787323fa").then(a.bind(null,"7350"))}},{path:"/importwallet",component:function(){return Promise.all([a.e("c92045f6"),a.e("2d0a4887"),a.e("d9a73c08")]).then(a.bind(null,"33c5"))}},{path:"/invest",component:function(){return Promise.all([a.e("c92045f6"),a.e("61c1620b")]).then(a.bind(null,"47b2"))}},{path:"/investdetail",component:function(){return Promise.all([a.e("c92045f6"),a.e("50984092"),a.e("6d8e3e7d")]).then(a.bind(null,"1e34"))}},{path:"/withdrawreadme",component:function(){return a.e("73e48d9d").then(a.bind(null,"8b60"))}},{path:"/transferdetail",component:function(){return a.e("9a7f2b10").then(a.bind(null,"6302"))}},{path:"/registeens",component:function(){return Promise.all([a.e("c92045f6"),a.e("50984092"),a.e("2060baaf")]).then(a.bind(null,"2348"))}}];O.push({path:"*",component:function(){return a.e("4b47640d").then(a.bind(null,"e51e"))}});var z,$,J,j,G,q,X,K=O,Y=a("a65d"),Z=a.n(Y),ee=a("5938"),te=a("f50e"),ae="0xf3acc32d38f2ea582c8ed54dd1b5b602d684661b",ne="0x5e11b24f5d03a48f7868f76b73bb8f1072403954",se="0x7a45c9c1b3cef3865b8c165e10e0e341692e55f9",ie="homestead",oe=7162382,re="1.5.5",ue=155,le=!0,pe="",ce="www.cmadao.com",de=.001,me={ethAddress:"",lastEthbalance:"0.0000",lastMcoinBalance:"0.0000"},be="https://api2.bmob.cn/1/classes/",fe={"X-Bmob-Application-Id":"ac7f17d258941e666eb88514048c351a","X-Bmob-REST-API-Key":"f31e47e1bcf4d276e1bc19226abee442","Content-Type":"application/json"},ye="302e28323be84e288f504f5d1ad75cce",he="HTVDPVIB3UCKJVVVFHMJ9B9WPJWEWFRUS8",ge="homestead"===ie?"https://api":"https://api-ropsten",ve="homestead"===ie?"https://etherscan.io/":"https://ropsten.etherscan.io/",we="wallet",_e="0x0000000000000000000000000000000000000000",Ae=21e4,Re=3e3,Ie=.1,Pe={referLevel3Num:3,referLevel4Num:4,referLevel5Num:5,week1Ratio:100,week2Ratio:200,week3Ratio:300,week4Ratio:400,totolApproveAmt:1e3,maxPerInvest:10,handlingFee:100,intervalHours:1e16,referDrawInterval:24,referAwardsRatio1:100,referAwardsRatio2:100,referAwardsRatio3:100,referAwardsRatio4:100,referAwardsRatio5:100},Me={value:"",updatedAt:""},Be=!1;function Ue(e){function t(e){return e>9?e:"0"+e}var a=new Date(e),n=a.getFullYear(),s=t(a.getMonth()+1),i=t(a.getDate()),o=a.getHours();o=t(o);var r=t(a.getMinutes()),u=n+"-"+s+"-"+i+" "+o+":"+r;return u}function xe(e,t,a){(a+"").indexOf("insufficient funds")>=0?toast("ETH余额不足"):toast("出错了,请稍后重试"),e.$axios.post(e.global.BmobRestAPIUrl+"errorlog",{address:e.global.wallet.ethAddress,error:a+"",method:t},{headers:e.global.BmobRestAPIHeaders}).then(function(e){console.log(e)})}var ke,Qe,Le={m3gameABI:ee,smartFinaceAddress:ae,defaultProvider:z,wallet:me,ethersNet:ie,etherscanAPIKey:he,etherscanAPIPrefix:ge,m3gameContract:$,mcoinPrice:de,currentTab:we,emptyAddress:_e,eventFromBlock:oe,convertUTCTimeToLocalTime:Ue,totalPrincipal:j,totalInterest:G,ethPrice:q,config:Pe,gasLimit:Ae,etherscanio:ve,taskInterval:Re,versionName:re,versionCode:ue,downloadUrl:pe,referUrl:ce,notify:Me,infuraPROJECTID:ye,isWebVersion:le,BmobRestAPIUrl:be,BmobRestAPIHeaders:fe,isGrayUser:Be,nabAddress:se,nabContract:J,nabABI:te,minPerInvest:Ie,ensname:X,ok0xcoinAddress:ne,reprotError2Bmob:xe},Ce=Le,De=Object(L["a"])(Ce,ke,Qe,!1,null,null,null);De.options.__file="Global.vue";var Te=De.exports;n["a"].prototype.global=Te,n["a"].use(S["a"]),n["a"].use(Z.a),window.toast=function(e){n["a"].toasted.show(e,{theme:"bubble",position:"top-center",duration:3e3})},console.log("----route-indexjs");var Ve=function(){var e=new S["a"]({scrollBehavior:function(){return{y:0}},routes:K,mode:"hash",base:""});return e},Ne=function(){var e="function"===typeof H?H():H,t="function"===typeof Ve?Ve({store:e}):Ve;e.$router=t;var a={el:"#q-app",router:t,store:e,render:function(e){return e(D)}};return{app:a,store:e,router:t}},We=a("a925"),Ee={failed:"Action failed",success:"Action was successful"},Fe=(a("28a5"),{lang:"zh-hans",label:{clear:"清空",ok:"确定",cancel:"取消",close:"关闭",set:"设置",select:"选择",reset:"重置",remove:"移除",update:"更新",create:"创建",search:"搜索",filter:"过滤",refresh:"刷新"},date:{days:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),daysShort:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"一_二_三_四_五_六_七_八_九_十_十一_十二".split("_"),firstDayOfWeek:0,format24h:!1},pullToRefresh:{pull:"下拉刷新",release:"释放刷新",refresh:"正在刷新..."},table:{noData:"没有可用数据",noResults:"找不到匹配的数据",loading:"正在加载...",selectedRecords:function(e){return"已选择"+e+"行"},recordsPerPage:"每页的行数:",allRows:"全部",pagination:function(e,t,a){return e+"-"+t+" / "+a},columns:"列"},editor:{url:"URL",bold:"粗体",italic:"斜体",strikethrough:"删除线",underline:"下划线",unorderedList:"无序列表",orderedList:"有序列表",subscript:"下标",superscript:"上标",hyperlink:"超链接",toggleFullscreen:"全屏切换",quote:"引号",left:"左对齐",center:"居中对齐",right:"右对齐",justify:"两端对齐",print:"打印",outdent:"减少缩进",indent:"增加缩进",removeFormat:"清除样式",formatting:"格式化",fontSize:"字体大小",align:"对齐",hr:"插入水平线",undo:"撤消",redo:"重做",header1:"标题一",header2:"标题二",header3:"标题三",header4:"标题四",header5:"标题五",header6:"标题六",paragraph:"段落",code:"代码",size1:"非常小",size2:"比较小",size3:"正常",size4:"中等偏大",size5:"大",size6:"非常大",size7:"超级大",defaultFont:"默认字体"},tree:{noNodes:"没有可用节点",noResults:"找不到匹配的节点"}}),He={"en-us":Ee,"zh-cn":Fe},Se=function(e){var t=e.app,a=e.Vue;a.use(We["a"]),t.i18n=new We["a"]({locale:"en-us",fallbackLocale:"en-us",messages:He})},Oe=a("bc3a"),ze=a.n(Oe),$e=function(e){var t=e.Vue;t.prototype.$axios=ze.a},Je=Ne(),je=Je.app,Ge=Je.store,qe=Je.router;[Se,$e].forEach(function(e){e({app:je,router:qe,store:Ge,Vue:n["a"],ssrContext:null})}),new n["a"](je)},5781:function(e,t){},5938:function(e){e.exports=[{constant:!0,inputs:[{name:"",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referNums",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referAwards",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referLastdrawTi",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"totalInvest",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"refermap",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"getStatus",outputs:[{name:"_status",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"tAlreadyDrawById",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawAcctBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawAcct",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getConfigInfo",outputs:[{name:"_referLevel3Num",type:"uint256"},{name:"_referLevel4Num",type:"uint256"},{name:"_referLevel5Num",type:"uint256"},{name:"_week1Ratio",type:"uint256"},{name:"_week2Ratio",type:"uint256"},{name:"_week3Ratio",type:"uint256"},{name:"_week4Ratio",type:"uint256"},{name:"_totolApproveAmt",type:"uint256"},{name:"_minPerInvest",type:"uint256"},{name:"_maxPerInvest",type:"uint256"},{name:"_handlingFee",type:"uint256"},{name:"_referDrawInterval",type:"uint256"},{name:"_intervalHours",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReferRatio",outputs:[{name:"_referAwardsRatio1",type:"uint256"},{name:"_referAwardsRatio2",type:"uint256"},{name:"_referAwardsRatio3",type:"uint256"},{name:"_referAwardsRatio4",type:"uint256"},{name:"_referAwardsRatio5",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"price",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"amt",type:"uint256"}],name:"referWithdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"inverstOnce",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"refer",type:"address"}],name:"referAndInvestOnce",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"id",type:"uint256"},{name:"amt",type:"uint256"}],name:"investWithdraw",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"amt",type:"uint256"}],name:"contrDraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"number",type:"uint256"}],name:"buyMCoin",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"inverstor",type:"address"},{indexed:!1,name:"investid",type:"uint256"},{indexed:!1,name:"amt",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"investEvent",type:"event"}]},"7e6d":function(e,t,a){},"8d6f":function(e,t){},a709:function(e,t){},f50e:function(e){e.exports=[{constant:!1,inputs:[{name:"name",type:"string"}],name:"registeNameByEth",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"ensname",type:"string"},{name:"recipient",type:"address"},{name:"mobile",type:"string"},{name:"name",type:"string"},{name:"payMethod1",type:"string"},{name:"payMethod2",type:"string"},{name:"payMethod3",type:"string"}],name:"registeNameWithNotify",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"name",type:"string"}],name:"getAddress",outputs:[{name:"_address",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_address",type:"address"}],name:"getName",outputs:[{name:"name",type:"string"}],payable:!1,stateMutability:"view",type:"function"}]},fb1c:function(e,t,a){}},[[0,"runtime","vendor"]]]);
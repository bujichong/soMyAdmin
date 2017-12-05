/**console.log **/
(function(){var method;var noop=function(){};var methods=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var length=methods.length;var console=(window.console=window.console||{});while(length--){method=methods[length];if(!console[method]){console[method]=noop}}}());//兼容浏览器console

var v=".js?v="+(new Date()).getTime();//获取时间戳
var airBaseRoot = '/';
require.config({
    // baseUrl : '/js/',
    map: {
        "*": {"css": "css.min"}
    },
    paths: {
        // "my97":"lib/my97/WdatePicker",//日历控件
        "jquery": "jquery-1.11.3.min",//jquery
        "easyui":"lib/easyui/jquery.easyui.min",//easyui ，细节有修改
        "easyui.extend":"lib/easyui/jquery.easyui.base.extend",//基础扩展，包括语言包、官方gridedit、扁平树扩展 和requirejs结合修正
        "md5":"lib/md5",//md5加密脚本，仅供参考
        // "jquery.validate": "plus/jquery.validate",
        "jquery.extend": "plus/jquery.extend",//jquery基础扩展
        "easyvalidate.extend": "plus/easyvalidate.extend",//easyui验证扩展，包括各种验证规则
        "easygridEdit": "plus/easygridEdit.extend",//easyui gridedit方法扩展
        "param":"plus/param", //全局公用变量
        "pub":"plus/pub"+v,//基于基础扩展写的公共处理脚本库
        // "print":"plus/print",
        "layer.min":"lib/layer/layer.min",//layer弹窗控件
        "pinyin_dict":"lib/pinyinjs/dict/pinyin_dict",//拼音库
        "pinyin":"lib/pinyinjs/pinyinUtil",//拼音库支持工具
        "template":"lib/template",//art template
        "hotkeys" : "lib/hotkeys",//快捷键注册库
        "echarts":"lib/echarts/echarts",//echarts完整库
        "echartsMap":"lib/echarts/echarts-map",//echarts扩展地图
        "chinaMap":"lib/echarts/china",//echarts中国地图
        "WebUploader":"lib/webuploader/webuploader.min",//百度上传控件
        "myupload":"lib/webuploader/MyAmdWebUpload",//上传控件扩展amd版，上传require此文件
        "fancybox":"lib/fancybox/jquery.fancybox-1.3.4.pack",//fancybox弹窗控件
        "baidueditor": "lib/ueditor1.4.3.3-utf8-jsp/myue",//ue编辑器
        "bdlang": "lib/ueditor1.4.3.3-utf8-jsp/lang/zh-cn/zh-cn",//ue编辑器
        "zeroclipboard": "lib/ueditor1.4.3.3-utf8-jsp/third-party/zeroclipboard/ZeroClipboard.min"//ue编辑器
        // "hightlight": "lib/SyntaxHighlighter/brush"//代码高亮
    },
    shim:{
        "jquery.validate":["jquery"],
        "layer.min":["jquery"],
        "fancybox":["jquery"],
        // "hightlight":["jquery"],
        // "jquery.extend":["param","layer.min","my97"],//依赖这些基础配置
        "jquery.extend":["param","layer.min"],//依赖这些基础配置
        "easyui":["jquery"],
        // "jquery.jdirk":["jquery"],
        "easyui.extend":["easyui"],
        "easyvalidate.extend":["easyui"],
        "easygridEdit":["easyui"],
        "bootstrap":["jquery"],
        "pinyin": ["pinyin_dict"],
        // "template": {exports: "template"},
        "chinaMap":["echarts","echartsMap"],
        "pub":["jquery.extend","easyui.extend","easyvalidate.extend"],//依赖
        "baidueditor": {deps: ["lib/ueditor1.4.3.3-utf8-jsp/ueditor.config", "css!lib/ueditor1.4.3.3-utf8-jsp/themes/default/css/ueditor"]},
        "bdlang":{deps: ["baidueditor"]}
    }
});

require(["pub"],function(){//默认只引入pub及相关依赖的所有文件，个体文件需要依赖，文件内require

// require(["pub","hightlight"],function(){
    // SyntaxHighlighter.config.clipboardSwf = 'js/lib/SyntaxHighlighter/clipboard.swf';//代码高亮
    // SyntaxHighlighter.highlight();

    //通过body上的 data-js来寻找执行文件及对应函数格式： data-js="文件名:函数名"，文件统一放置在js/app 扁平目录下，如：<body data-js="sys:group">
    //需要执行多个函数用 || 隔开，如：<body data-js="sys:group||api:init">
    //如果是init函数可直接省略冒号及函数名，如：<body data-js="api:init">可简写为<body data-js="api">
    var crumb=$('body').attr("data-js");
    if(crumb){
        var crumbArr = crumb.split('||');
        $.each(crumbArr,function(i,v){
            var vArr = v.split(":");
            var modId = vArr[0] , funcId = vArr[1]||'init';
            window.console && console.log('page执行 app/'+modId+'.js中的'+funcId+'方法');//打开页面时，注意看控制台提示执行的是哪个页面的哪个方法
            // require(['/js/app/'+modId+v],function(mod){
            require(['app/'+modId],function(mod){
                if(mod){
                    var init=mod[funcId];
                    if(init&&$.isFunction(init)){
                        mod[funcId](window);
                    }else{
                        window.console && console.log("请在"+modId+".js文件中定义"+funcId+"方法");//不存在提示
                    }
                }
            });
        });
    }
});

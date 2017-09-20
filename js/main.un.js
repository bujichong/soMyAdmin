/**console.log **/
(function(){var method;var noop=function(){};var methods=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var length=methods.length;var console=(window.console=window.console||{});while(length--){method=methods[length];if(!console[method]){console[method]=noop}}}());

var v=".js?v="+(new Date()).getTime();
var airBaseRoot = '/';
require.config({
    // baseUrl : '/js/',
    map: {
        "*": {"css": "css.min"}
    },
    paths: {
        "my97":"lib/my97/WdatePicker",
        "jquery": "jquery-1.11.3.min",
        "easyui":"lib/easyui/jquery.easyui.min",
        // "jquery.jdirk": "lib/easyui/jquery.jdirk",
        "easyui.extend":"lib/easyui/jquery.easyui.base.extend",
        "md5":"lib/md5",
        "jquery.validate": "plus/jquery.validate",
        "jquery.extend": "plus/jquery.extend",
        "param":"plus/param",
        "pub":"plus/pub"+v,
        "print":"plus/print",
        "layer.min":"lib/layer/layer.min",
        "pinyin_dict":"lib/pinyinjs/dict/pinyin_dict",
        "pinyin":"lib/pinyinjs/pinyinUtil",
        "template":"lib/template",
        "echarts":"lib/echarts/echarts",
        "echartsMap":"lib/echarts/echarts-map",
        "chinaMap":"lib/echarts/china",
        "WebUploader":"lib/webuploader/webuploader.min",
        "fancybox":"lib/fancybox/jquery.fancybox-1.3.4.pack",
        "myupload":"lib/webuploader/MyAmdWebUpload",
        "baidueditor": "lib/ueditor1.4.3.3-utf8-jsp/myue",
        "bdlang": "lib/ueditor1.4.3.3-utf8-jsp/lang/zh-cn/zh-cn",
        "zeroclipboard": "lib/ueditor1.4.3.3-utf8-jsp/third-party/zeroclipboard/ZeroClipboard.min",
        "hightlight": "lib/SyntaxHighlighter/brush"
    },
    shim:{
        "jquery.validate":["jquery"],
        "layer.min":["jquery"],
        "fancybox":["jquery"],
        "hightlight":["jquery"],
        "jquery.extend":["param","layer.min","jquery.validate","my97"],
        "easyui":["jquery"],
        // "jquery.jdirk":["jquery"],
        "easyui.extend":["easyui"],
        "bootstrap":["jquery"],
        "pinyin": ["pinyin_dict"],
        // "template": {exports: "template"},
        "chinaMap":["echarts","echartsMap"],
        "pub":["jquery.extend","easyui.extend"],
        "baidueditor": {deps: ["lib/ueditor1.4.3.3-utf8-jsp/ueditor.config", "css!lib/ueditor1.4.3.3-utf8-jsp/themes/default/css/ueditor"]},
        "bdlang":{deps: ["baidueditor"]}
    }
});

require(["pub","hightlight"],function(){
    SyntaxHighlighter.config.clipboardSwf = 'js/lib/SyntaxHighlighter/clipboard.swf';
    SyntaxHighlighter.highlight();

    var crumb=$('body').attr("data-js");
    if(crumb){
        var crumbArr = crumb.split('||');
        $.each(crumbArr,function(i,v){
            var vArr = v.split(":");
            var modId = vArr[0] , funcId = vArr[1]||'init';
            window.console && console.log('page执行 app/'+modId+'.js中的'+funcId+'方法');
            // require(['/js/app/'+modId+v],function(mod){
            require(['app/'+modId],function(mod){
                if(mod){
                    var init=mod[funcId];
                    if(init&&$.isFunction(init)){
                        mod[funcId](window);
                    }else{
                        window.console && console.log("请在"+modId+".js文件中定义"+funcId+"方法");
                    }
                }
            });
        });
    }
});

/**--jQuery.json-2.3.js--**/
(function($){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
    var type=typeof o;if(type==='undefined'){return undefined;}
    if(type==='number'||type==='boolean'){return''+o;}
    if(type==='string'){return $.quoteString(o);}
    if(type==='object'){if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
        if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
            if(day<10){day='0'+day;}
            if(hours<10){hours='0'+hours;}
            if(minutes<10){minutes='0'+minutes;}
            if(seconds<10){seconds='0'+seconds;}
            if(milli<100){milli='0'+milli;}
            if(milli<10){milli='0'+milli;}
            return'"'+year+'-'+month+'-'+day+'T'+
                hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
        if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||'null');}
            return'['+ret.join(',')+']';}
        var name,val,pairs=[];for(var k in o){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
            type=typeof o[k];if(type==='function'||type==='undefined'){continue;}
            val=$.toJSON(o[k]);pairs.push(name+':'+val);}
        return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){return eval('('+src+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+src+')');}else{throw new SyntaxError('Error parsing JSON, source is not valid.');}};$.quoteString=function(string){if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
        c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
    return'"'+string+'"';};})(jQuery);

//jQuery.cookie
jQuery.cookie=function(a,b,c){var d,e,f,g,h,i,j,k,l;if("undefined"==typeof b){if(i=null,document.cookie&&""!=document.cookie)for(j=document.cookie.split(";"),k=0;k<j.length;k++)if(l=jQuery.trim(j[k]),l.substring(0,a.length+1)==a+"="){i=decodeURIComponent(l.substring(a.length+1));break}return i}c=c||{},null===b&&(b="",c.expires=-1),d="",c.expires&&("number"==typeof c.expires||c.expires.toUTCString)&&("number"==typeof c.expires?(e=new Date,e.setTime(e.getTime()+1e3*60*60*24*c.expires)):e=c.expires,d="; expires="+e.toUTCString()),f=c.path?"; path="+c.path:"",g=c.domain?"; domain="+c.domain:"",h=c.secure?"; secure":"",document.cookie=[a,"=",encodeURIComponent(b),d,f,g,h].join("")};

//jQuery.color
(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.css(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);

/* soChange 1.6.2 - simple object change with jQuery */
(function(a){a.fn.extend({soChange:function(b){b=a.extend({thumbObj:null,btnPrev:null,btnNext:null,changeType:"fade",thumbNowClass:"now",thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300,callback:function(){}},b||{});var h=a(this);var i;var k=h.size();var e=0;var g;var c;var f;function d(){if(e!=g){if(b.thumbObj){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)}if(b.slideTime<=0){h.eq(e).hide();h.eq(g).show()}else{if(b.changeType=="fade"){h.eq(e).fadeOut(b.slideTime);h.eq(g).fadeIn(b.slideTime)}else{h.eq(e).slideUp(b.slideTime);h.eq(g).slideDown(b.slideTime)}}if(b.callback){b.callback(e,g)}e=g}}function j(){g=(e+1)%k;d()}h.hide().eq(0).show();if(b.thumbObj){i=a(b.thumbObj);i.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);i.click(function(){g=i.index(a(this));d();if(b.clickFalse){return false}});if(b.thumbOverEvent){i.hover(function(){g=i.index(a(this));f=setTimeout(d,b.delayTime)},function(){clearTimeout(f)})}}if(b.btnNext){a(b.btnNext).click(function(){if(h.queue().length<1){j()}return false})}if(b.btnPrev){a(b.btnPrev).click(function(){if(h.queue().length<1){g=(e+k-1)%k;d()}return false})}if(b.autoChange){c=setInterval(j,b.changeTime);if(b.overStop){h.hover(function(){clearInterval(c)},function(){c=setInterval(j,b.changeTime)})}}}})})(jQuery);

$.extend({
    /**
     * 地址转换 tree:dept -> /base/treeUrl?_code=dept
     */
    url : function(url) {
        var rst = '';
        if (url.indexOf('/') == -1) {
            var ar = url.split(":");
            rst+=$p[ar[0] + "Url"];
            if(ar[1]) rst+= "?_code=" + ar[1];
        } else {
            rst = url;
        }
        return rst;
    },
    /**
     * 默认值赋值
     * @param o 目标对象
     * @param c 默认值
     * @returns
     */
    applyIf : function(o, c) {
        if (o && c) {
            for ( var p in c) {
                if (typeof o[p] == "undefined") {
                    o[p] = c[p];
                }
            }
        }
        return o;
    },
    fmtDate: function (format, date) {
        date = date || new Date();
        if (typeof(date) == 'number') {
            date = new Date(date);
        }
        var o = {
            "M+": date.getMonth() + 1, //month
            "d+": date.getDate(), //day
            "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //hour
            "H+": date.getHours(), //hour
            "m+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
            "S": date.getMilliseconds() //millisecond
        };
        var week = {
            "0": "\u65e5",
            "1": "\u4e00",
            "2": "\u4e8c",
            "3": "\u4e09",
            "4": "\u56db",
            "5": "\u4e94",
            "6": "\u516d"
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        if (/(E+)/.test(format)) {
            format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[this.getDay() + ""]);
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    },
    getFullDate : function (date,type) {// Date,'long/short'
        var that = this;
        if (!(date instanceof Date)) {
            date = new Date(date);
        }
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hh = date.getHours();// 时
        var mm = date.getMinutes();// 分
         var ss = date.getSeconds();//秒

        month = ('0'+month).slice(-2);
        day = ('0'+day).slice(-2);
        hh = ('0'+hh).slice(-2);
        mm = ('0'+mm).slice(-2);
        ss = ('0'+ss).slice(-2);
        if (type=='short') {
            //return year+'-'+month+'-'+day;
            return month+'-'+day+' '+hh+':'+mm+':'+ss;
        }else {
            return year+'-'+month+'-'+day+' '+hh+':'+mm;
        }
    },
    getLocalTime :function (nS) {// 转时间戳为本地时间
        return new Date(nS*1).toLocaleString().replace(/年|月/g, "-").replace(/日/g," ");
    },
    toHour: function (v) {
        v = v * 1 || 0;
        return Math.ceil((v * 100) / (1000 * 60 * 60)) / 100;
    },
    toDay: function (v) {
        v = v * 1 || 0;
        return Math.ceil((v * 100) / (1000 * 60 * 60 * 24)) / 100;
    },
    getTimeLong : function (s) {
        var h = Math.floor(s/3600);
        h = h>9?h:('0'+h);
        var m = Math.floor(s%3600/60);
        m = m>9?m:('0'+m);
        var s = s%3600%60;
        s = s>9?s:('0'+s);
        return h==0?(m+':'+s):(h+':'+m+':'+s);
    },
    arrHasVal : function (arr,val) {
        var l = arr.length;
        for (i = 0; i < l; i++) {
            if (arr[i] === val) {
                return i;
            }
        }
        return -1;
    },
    fullscreen : function (tofull) {
      if(tofull){
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
          window.console && console.log(11);
          docElm.requestFullscreen();
        }
        else if (docElm.mozRequestFullScreen) {
          window.console && console.log(12);
          docElm.mozRequestFullScreen();
        }
        else if (docElm.webkitRequestFullScreen) {
          window.console && console.log(13);
          docElm.webkitRequestFullScreen();
        }
      }else{
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    winW : $(window).width(),
    winH :$(window).height()
});


/**
 * 扩充方法
 */
$.fn.extend({
    hoverClass:function(b){var a=this;a.each(function(c){a.eq(c).mouseenter(function(){$(this).addClass(b)});a.eq(c).mouseleave(function(){$(this).removeClass(b)})});return a},
    focusChangeStyle : function(b){var a=this;var b=(b==null)?"txt_focus":b;a.focus(function(){$(this).addClass(b)});a.blur(function(){$(this).removeClass(b)});return a},
    tabChange:function (o) {
        o= $.extend({
            thumbObj:null,//导航对象
            thumbNowClass:'now',//导航对象当前的class,默认为now
            eventClass:'eventStat',
            defaultEvent:function(){},
            callback:function () {},
            oneback:function(){}
        }, o || {});
        var _self = $(this);
        var size = _self.size();
        var thumbObj = $(o.thumbObj);
        _self.removeClass(o.eventClass).eq(0).addClass(o.eventClass);
        thumbObj.eq(0).addClass(o.thumbNowClass);
        o.defaultEvent();

        thumbObj.click(function () {
            var indx = thumbObj.index($(this));
            thumbObj.removeClass(o.thumbNowClass);
            $(this).addClass(o.thumbNowClass);
            _self.removeClass(o.eventClass).eq(indx).addClass(o.eventClass);
            return o.callback(indx);
        });
        thumbObj.each(function (i) {
            if (i>0) {
                $(this).one('click',function () {
                    return o.oneback(i);
                });
            }
        });
    },
    switchShow:function(cls,scope){
        $(this).click(function(){
            var $scope=scope?$(scope):$("body");
            $scope.find(cls).hide();
            var vl=$(this).val()||$(this).attr("data-value");
            $scope.find(cls+"_"+vl).show();
        });
        return $(this);
    },
    // clear : function(data) {
    //     $(":input:not(:submit)", this).val("");
    //     if (data)
    //         $(this).vals(data);
    // },
    sovals : function(dataToString) {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [ o[this.name] ];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        if (dataToString) {
            $.each(o,function (k,v) {
                if (v.push) {
                    o[k] = v.join(',');
                }
            });
        };
        return o;
    }
});

var $event = {
    stopBubble: function (e) {
      if (e && e.stopPropagation) {//非IE浏览器
        e.stopPropagation();
      } else {
        window.event.cancelBubble = true;
      }
    },
    stopDefault: function (e) {
      // 阻止默认浏览器动作(W3C)
      if (e && e.preventDefault) {
        e.preventDefault();
      } else {
          // IE中阻止函数器默认动作的方式
        window.event.returnValue = false;
      }
      return false;
    }
};


var $T = {
    mul : function (a, b) {//修正版乘法
        var c = 0,
            d = a.toString(),
            e = b.toString();
        try {
            c += d.split(".")[1].length;
        } catch (f) {}
        try {
            c += e.split(".")[1].length;
        } catch (f) {}
        return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
    },
    add : function (a,b) {//修正版加法
        var me = this;
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (me.mul(a, e) + me.mul(b, e)) / e;
    },
    sub : function (a,b) {//修正版减法
        var me = this;
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (me.mul(a, e) - me.mul(b, e)) / e;
    },
    div : function (a,b) {//修正版除法
        var me = this;
        var c, d, e = 0,
            f = 0;
        try {
            e = a.toString().split(".")[1].length;
        } catch (g) {}
        try {
            f = b.toString().split(".")[1].length;
        } catch (g) {}
        return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), me.mul(c / d, Math.pow(10, f - e));
    },
    getCookie : function (key,co) {//增强版取cookie
        var co = co||'aso',$co = $.cookie(co);
        if ($co!==null) {
            var coArr = $co.split('||');
            var coLen = coArr.length;
            for (i = 0; i < coLen; i++) {
                var vk = coArr[i].split(':=');
                if (vk[0] === key) {
                    return vk[1];
                }
            }
        }else {
            return null;
        }
    },
    setCookie : function (key,value,co,root) {//增强版设置cookie
        root = root==undefined?true:root;//默认cookie都定义在root目录下，不到子目录下
        var co = co||'aso',$co = $.cookie(co);
        var coVal;
        if ($co!==null) {
            if ($co.indexOf(key)>-1) {
                var coArr = $co.split('||');
                var coLen = coArr.length;
                for (i = 0; i < coLen; i++) {
                    var vk = coArr[i].split(':=');
                    if (vk[0] === key) {
                        coArr[i] = key+':='+value;
                    }
                }
                coVal = coArr.join('||');
            }else {
                coVal = $co+'||'+key+':='+value;
            }
        }else {
            coVal = key+':='+value;
        }
        if (root) {
            $.cookie(co,coVal,{ path: '/'});
        }else {
            $.cookie(co,coVal);
        }
        window.console && console.log('cooke中 '+co+'更新为 " '+$.cookie(co)+' " ');
    },
    data: function (el, attrName) {
        attrName = attrName || 'data-opt';
        var data = $(el).attr(attrName), m = /({.*})/.exec(data);
        if (m)data = m[1];
        data = data ? eval("(" + data + ")") : {};
        return data;
    },
    format: function (tpl, params) {
        if (arguments.length > 2 && params.constructor != Array) {
            params = $.makeArray(arguments).slice(1);
        }
        if (params.constructor == String || params.constructor == Number) {
            params = [params];
        }
        function _replace(m, word) {
            var rst;
            if (Boolean(word.match(/^[0-9]+$/)) && params.constructor == Array) {
                rst = params[word * 1];
            } else {
                rst = params[word];
            }
            return rst === undefined || rst === null ? "" : rst;
        }

        return tpl.replace(/#?\{([A-Za-z_0-9]+)\}/g, _replace);
    },
    parseParam : function(param, key){
        var paramStr="";
        if(param instanceof String||param instanceof Number||param instanceof Boolean){
            paramStr+="&"+key+"="+encodeURIComponent(param);
        }else{
            $.each(param,function(i){
                var k=key==null?i:key+(param instanceof Array?"["+i+"]":"."+i);
                paramStr+='&'+$T.parseParam(this, k);
            });
        }
        return paramStr.substr(1);
    },
    notNull: function (obj, msg) {
        if (!$(obj).val()) {
            layer.msg( msg || '不能为空!',{icon:0});
            return false;
        }
        return true;
    }
}

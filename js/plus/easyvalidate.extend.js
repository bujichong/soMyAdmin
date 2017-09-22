/**
* jQuery EasyUI 1.4.3
* Copyright (c) 2009-2015 www.jeasyui.com. All rights reserved.
*
* Licensed under the GPL license: http://www.gnu.org/licenses/gpl.txt
* To use it on other terms please contact us at info@jeasyui.com
* http://www.jeasyui.com/license_commercial.php
*
* jQuery EasyUI validatebox 扩展
* jeasyui.extensions.validatebox.rules.js
* 开发 流云
* 由 落阳 整理
* 最近更新：2015-10-27
*
* 依赖项：
*   1、jquery.jdirk.js
*   2、jeasyui.extensions.validatebox.css
*
* Copyright (c) 2015 ChenJianwei personal All rights reserved.
*/
(function () {

    $.extend($.fn.validatebox.defaults.rules, {
      // multipleValidType :{//多个校验的使用
      many :{//多个校验的使用
          validator: function(value, param){
              var options = $.fn.validatebox.defaults;//获取校验属性
              var returnFlag = true;
              for(var i = 0 ; i < param.length ; i++){
                  var result = /([a-zA-Z_0-9]+)(.*)/.exec(param[i]); //匹配校验方法
                  var rule = options.rules[result[1]];  //获取校验方法
                  if(value && rule){
                      var ruleParam = eval(result[2]);  //获取校验参数
                      if(!rule["validator"].call(this,value, ruleParam)){
                      // if(!rule["validator"](value, ruleParam,this)){
                          var message = rule["message"];
                          if (ruleParam) {
                              for ( var i = 0; i < ruleParam.length; i++) {
                                message = message.replace(new RegExp("\\{" + i + "\\}", "g"), ruleParam[i]);
                              }
                          }
                        //  $.fn.validatebox.defaults.rules.multipleValidType.message = message;
                         $.fn.validatebox.defaults.rules.many.message = message;
                         returnFlag = false;
                         break;
                      }
                  }
              }
              return returnFlag;
          },
          message:""
      },
      minlength : {
        validator: function (value,param) {
            return getLength($.trim(value), $(this)) >= param[0];
        },
        message: '最小长度{0}'
      },
      maxlength : {
        validator: function (value,param) {
            return getLength($.trim(value), $(this)) <= param[0];
        },
        message: '最大长度{0}'
      },
      rangelength : {
        validator: function (value,param) {
          var length = getLength($.trim(value), element);
    			return length >= param[0] && length <= param[1];
        },
        message: '最小长度{0}，最大长度{1}'
      },
      min : {
        validator: function (value,param) {
            return value >= param[0];
        },
        message: '数字最小为{0}'
      },
      max : {
        validator: function (value,param) {
            return value <= param[0];
        },
        message: '数字最大为{0}'
      },
      range : {
        validator: function (value,param) {
            return  value >= param[0] && value <= param[1];
        },
        message: '数字只能在{0}与{1}之间'
      },
      //  只允许输入英文字母或数字
      username : {
        validator: function (value) {
            return /^[0-9a-zA-Z_]{1,}$/.test(value);
        },
        message: '请输入字母、数字或下划线'
      },
      normalPass : {
        validator: function (value) {
            return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).*$/.test(value);
        },
        message: '必须含大小写字母及数字'
      },
      complexPass : {
        validator: function (value) {
            return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[-`=\\\[\];',./~!@#$%^&*()_+|{}:"<>?]).*$/.test(value);
        },
        message: '必须含大小写字母、数字及特殊字符'
      },
      cn : {
        validator: function (value) {
            return /^[\u0391-\uFFE5]+$/.test(value);
        },
        message: '请输入中文'
      },
      ip : {
        validator: function (value) {
            return /^[0-2]?[0-9]?[0-9]\.[0-2]?[0-9]?[0-9]\.[0-2]?[0-9]?[0-9]\.[0-2]?[0-9]?[0-9]$/.test(value);
        },
        message: '请输入合法的IP'
      },
      pNumber : {
        validator: function (value) {
            return /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(value);
        },
        message: '请输入一个正数'
      },
      pInt : {
        validator: function (value) {
            return /^(0|[1-9]\d*)$/.test(value);
        },
        message: '请输入一个正整数'
      },
      int : {
        validator: function (value) {
            return /^-?\d+$/.test(value);
        },
        message: '请输入一个整数'
      },
      diymonth : {
        validator: function (value) {
            return /^[0-9]+(\.[0-9]{1})?$/.test(value);
        },
        message: '月数为正整数或一位小数'
      },
      normalDate : {
        validator: function (value) {
            return /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(value);
        },
        message: '日期格式如：1980-01-01'
      },
      isFloatGteZero : {
        validator: function (value) {
            return /^\d+(\.\d+)?$/.test(value);
        },
        message: '浮点数必须大于或等于0'
      },
      pFloatFix : {
        validator: function (value,opt) {
          var state = /^\d+(\.\d+)?$/.test(value);
          if(value&&state){
            var _self = $(this);
            if(_self instanceof Array){_self = _self[0]};
            var opt = opt || 2;
            _self.blur(function () {
             _self.val(new Number(value).toFixed(opt)).unbind('blur');
            });
          }
          return state;
        },
        message: '请填写正确的正数'
      },
      isFloatNEqZero : {// 判断浮点数value是否不等于0
        validator: function (value) {
          var value = parseFloat(value);
          return value!=0;
        },
        message: '浮点数不可以等于0'
      },
      isFloatLtZero : {
       validator: function (value) {
         var value = parseFloat(value);
         return value<0;
       },
       message: '浮点数必须小于0'
     },
     isFloatLteZero : { // 判断浮点数value是否小于或等于0
      validator: function (value) {
        var value = parseFloat(value);
        return value<=0;
      },
      message: '浮点数必须小于或等于0'
    },
    isFloat : {// 判断浮点型
      validator: function (value) {
        return /^[-\+]?\d+(\.\d+)?$/.test(value);
      },
      message: '只能包含数字、小数点等字符'
    },
    isInteger : {// 判断浮点型
      validator: function (value) {
        return /^[-\+]?\d+$/.test(value) && parseInt(value)>=0;
      },
      message: '匹配integer'
    },
    isAge : {
      validator: function (value) {
        return /^[-\+]?\d+$/.test(value) && parseInt(value)>0&&parseInt(value)<120;
      },
      message: '请输入正确的年龄'
    },
    isNumber : {// 匹配数值类型，包括整数和浮点数
      validator: function (value) {
        return /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);
      },
      message: '请输入正确的数字'
    },
    isDigits : {// 只能输入[0-9]数字
      validator: function (value) {
        return /^\d+$/.test(value);
      },
      message: '只能输入0-9数字'
    },
    isChinese : {// 判断中文字符
      validator: function (value) {
        return /^[\u0391-\uFFE5]+$/.test(value);
      },
      message: '只能包含中文字符'
    },
    isEnglish : {// 判断英文字符
      validator: function (value) {
        return /^[A-Za-z]+$/.test(value);
      },
      message: '只能包含英文字符'
    },
    isMobile : {// 判断英文字符
      validator: function (value) {
        return length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value);
      },
      message: '请填写正确的手机号码'
    },
    isPhone : {// 电话号码验证
      validator: function (value) {
        var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
        return tel.test(value);
      },
      message: '请填写正确的电话号码'
    },
    isPhoneArea : {
      validator: function (value) {
        var tel = /^[08]\d{2,3}$/g;
        return tel.test(value);
      },
      message: '请填写正确的区号'
    },
    isPhoneNumber : {
      validator: function (value) {
        var tel = /^\d{7,9}$/g;
        return tel.test(value);
      },
      message: '请填写正确的电话号码'
    },
    isTel : {// 联系电话(手机/电话皆可)验证
      validator: function (value) {
        var length = value.length;
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
        return tel.test(value) || (length==11 && mobile.test(value));
      },
      message: '请填写正确的联系方式'
    },
    isQq : {//匹配qq
      validator: function (value) {
        return /^[1-9]\d{4,12}$/.test(value);
      },
      message: '请填写正确的QQ号码'
    },
    isZipCode : {//邮政编码验证
      validator: function (value) {
        var zip = /^[0-9]{6}$/;
        return zip.test(value);
      },
      message: '请填写正确的邮政编码'
    },
    isPwd : {//匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线
      validator: function (value) {
        return /^[a-zA-Z]\\w{6,12}$/.test(value);
      },
      message: '以字母开头，长度在6-12之间，只能包含字符、数字和下划线'
    },
    isIdCardNo : {//身份证号码验证
      validator: function (value) {
        return isIdCardNo(value,opt);
      },
      message: '请填写正确的身份证号码'
    },
    stringCheck : {//字符验证，只能包含中文、英文、数字、下划线等字符。
      validator: function (value) {
        return /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/.test(value);
      },
      message: '只能包含中文、英文、数字、下划线等字符'
    },
    isContainsSpecialChar : {//判断是否包含中英文特殊字符，除英文"-_"字符外
      validator: function (value) {
        var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);
        return reg.test(value);
      },
      message: '含有中英文特殊字符'
    },
      engNum: {
          validator: function (value) {
              return /^[0-9a-zA-Z]*$/.test(value);
          },
          message: '请输入英文字母或数字'
      },
      //  只允许汉字、英文字母或数字
      chsEngNum: {
          validator: function (value, param) {
              return /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$/.test(value);
          },
          message: '只允许汉字、英文字母或数字。'
      },
      //  只允许汉字、英文字母、数字及下划线
      code: {
          validator: function (value, param) {
              return /^[\u0391-\uFFE5\w]+$/.test(value);
          },
          message: '只允许汉字、英文字母、数字及下划线.'
      },
      //  输入的字符必须是指定的内容相同
      equals: {
          validator: function (value, param) {
            console.log(param);
              return value == $(param[0]).val();
          },
          message: "输入的内容不匹配."
      }
    });

})(jQuery);


function getLength(value, element) {
  switch( element.nodeName.toLowerCase() ) {
  case 'select':
    return $("option:selected", element).length;
  case 'input':
    if( this.checkable( element) )
      return this.findByName(element.name).filter(':checked').length;
  }
  return value.length;
};


//身份证号码的验证规则
function isIdCardNo(code,opt){
    var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
    var tip = "";
    var pass= true;

    // if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
      // if (!code || !/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i.test(code)) {
      if (!code || !/^[1-9]\d{5}((1[89]|20)\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dx]$/i.test(code)) {
        tip = "身份证号格式错误";
        pass = false;
    }

    else if(!city[code.substr(0,2)]){
        tip = "地址编码错误";
        pass = false;
    }
    else{
        //18位身份证需要验证最后一位校验位
        if(code.length == 18){
            codeArr = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
            //校验位
            var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++)
            {
                ai = codeArr[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if(parity[sum % 11] != codeArr[17].toUpperCase()){
                tip = "校验位错误";
                pass =false;
            }
        }
    }
    window.console && console.log(pass,tip);
    // if(!pass) alert(tip);
    if (opt) {
        var optArr = opt.split(',');
        var $bir = $('#'+optArr[0]);
        var $sex = $('#'+optArr[1]);
        var $age = $('#'+optArr[2]);
        if (pass) {
        $bir.val(GetBirthday(code,$age));
        $sex.val(Getsex(code));
    }else{
        $bir.val('');
        $sex.val('');
        $age.val('');
    };
    };
    return pass;
}

function GetBirthday(psidno,$age){
    var birthdayno,birthdaytemp;
    if(psidno.length==18){
        birthdayno=psidno.substring(6,14)
    }else if(psidno.length==15){
        birthdaytemp=psidno.substring(6,12)
        birthdayno="19"+birthdaytemp
    }else{
        alert("错误的身份证号码，请核对！")
        return false
    }
    var birY = birthdayno.substring(0,4);
    var birM = birthdayno.substring(4,6);
    var birD = birthdayno.substring(6,8);
    var birthday=birY+"-"+birM+"-"+birD;

    var now = new Date();
    now =  $.getFullDate(now);
    window.console && console.log(now);
    now = now.split(' ')[0].split('-');
    var age = (now[0]-birY)*100+(now[1]-birM)/12*10*10+(now[2]-birD)/30*10;
    $age.val(Math.floor(age/100));
    return birthday;
}

function Getsex(psidno){
    var sexno,sex;
    if(psidno.length==18){
        sexno=psidno.substring(16,17)
    }else if(psidno.length==15){
        sexno=psidno.substring(14,15)
    }else{
        alert("错误的身份证号码，请核对！")
        return false
    }
    var tempid=sexno%2;
    sex = (tempid==0)?'2':'1';
    return sex;
}

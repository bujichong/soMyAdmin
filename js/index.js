$.fn.hoverClass=function(b){var a=this;a.each(function(c){a.eq(c).mouseenter(function(){$(this).addClass(b)});a.eq(c).mouseleave(function(){$(this).removeClass(b)})});return a};

var eyeIndex = {
      init : function () {
        var me = this;
        window.console && console.log('index js init');
        $('.li-mainnav').hoverClass('li-mainnav-over');
        // me.exScreen();//全屏
        me.setIframeH();//设置iframeH
        me.mainnavClick();
        me.sideNavE('.s-subnav','s-subnav-now');//侧边导航点击链接事件
        me.sideNavE('.s-hnav','s-hnav-now');//侧边导航点击链接事件
        me.repairPass();//修改密码
        me.noInWindow();//不包含在iframe中
        me.loginOut();//退出登录
        me.switchCompany();//切换公司医院
        me.tabCloseEven();
        me.menuClick();
        me.rightmenu();
        me.searchKey();
		me.mainResize();
        // me.addTab('门诊挂号','booking.html',true);
        // me.addTab('挂号清单','bookingList.html',true);
        // $('#tabs').tabs('select','功能导航');
      },
      onlyOpenTitle: "功能导航",//不允许关闭的标签的标题
      exScreen : function () {
        $('.s-exScreen').click(function () {
          if ($(this).hasClass('s-inScreen')) {
            $.fullscreen(false);
            $(this).removeClass('s-inScreen');
          }else {
            $.fullscreen(true);
            $(this).addClass('s-inScreen');
          }
        });
      },
    noInWindow : function () {
      if(window.top !== window.self){window.top.location = window.location;}
    },
	mainResize : function(){
		$('.s-winResize').click(function () {
			var _self = $(this);
			if (_self.hasClass('inWinsize')) {
				_self.removeClass('inWinsize');
				$('.mainCont').animate({top:'46px'},function () {
					$('.mainCont').css({zIndex:0});
				});
			}else {
				_self.addClass('inWinsize');
				$('.mainCont').css({zIndex:8}).animate({top:0});
			}
		});
	},
      switchCompany : function () {
        var $comList = $('.ul-companyList');
        if ($comList.length) {
          $(document).on('click', function (e) {
              var $t = $(e.target);
              if ($t.hasClass('nowCompany')) {
                  $comList.show();
                  $t.addClass('nowCompany-over');
              } else {
                  $comList.hide();
                  $('.nowCompany').removeClass('nowCompany-over');
              };
          });
          $('.ul-companyList .s-c').click(function() {
            var rel = $(this).attr('rel');
            var url = $comList.attr('rel');
            $.post('index.html',{id:rel}).done(function () {
              window.location.reload();
            });
          });

          $('.allCompanyNav').mouseleave(function () {
              $('.nowCompany').removeClass('nowCompany-over');
              $comList.hide();
          });

          var $nav = $('.allCompanyNav');
          setTimeout(function () {$nav.addClass('allCompanyNav-over');}, 300);
          setTimeout(function () {$nav.removeClass('allCompanyNav-over');}, 600);
          setTimeout(function () {$nav.addClass('allCompanyNav-over');}, 900);
          setTimeout(function () {$nav.removeClass('allCompanyNav-over');}, 1200);
          setTimeout(function () {$nav.addClass('allCompanyNav-over');}, 1500);
          setTimeout(function () {$nav.removeClass('allCompanyNav-over');}, 1800);

        };
      },
      repairPass : function () {
        var layerPass = null;
        window.$pop = {};
        $('.s-updataPass').click(function () {
          var url = $(this).attr('rel');
          layerPass = layer.open({
            type:2,
            content : url,
            title : '修改密码',
            area : ['400px','280px']
          });
          if (url.indexOf("/") != 0) {
              url = location.pathname.replace(/\/[^/]*$/, "/") + url;
          }
          window.console && console.log(url);
          $pop[url] = layerPass;
        });
      },
      loginOut : function () {
		 $('.a-loginOut').click(function () {
	          var href = $(this).attr("href");
	          layer.confirm('你确定退出系统吗？', {
	              icon: 0, title:false,btnAlign: 'c'
	              }, function(){
	                window.location.href=href;
	          });
	          return false;
	      });
      },
      searchKey : function () {
        var me = this;
        var nowI = -1;
        var $ul = $('.ul-searchList');
        var $li = $('.li-searchlist');

        $(document).on('click','.li-searchlist',function () {//点击列表处理
            $('.txt-search').val($(this).text());
            me.addTab($(this).text(),'summary.html');
            $ul.hide();
            nowI = -1;
            return false;
        });

        $(document).on('click',function(e){
            var $target = $(e.target);
            // window.console && console.log($target);
            if (!($target.hasClass('li-searchlist')||$target.hasClass('s-searchkey'))) {
                $ul.hide();
            };
          });

        $('.txt-search').keyup(function (e) {
          var _self = $(this);
          var val = $.trim(_self.val());
          var keycode = e.keyCode;
          // window.console && console.log(keycode);
          if (val!=='') {
            $ul.show();
            var  lock = (keycode>36&&keycode<41||keycode==13)?true:false;//是否在操作光标键
            if (lock) {
                var keyLen = $li.length;
                if (keycode==38) {//键盘上键事件
                  nowI = (nowI>0)?(nowI-1):0;
                  liEvent(_self);
                }
                if (keycode==40) {//键盘下键事件
                  nowI = (nowI<(keyLen-1))?(nowI+1):(keyLen-1);
                  liEvent(_self);
                }
                if (keycode==13) {//键盘回车键事件
                  if (nowI!=-1) {
                    var v = $li.eq(nowI).text();
                    // window.console && console.log(nowI);
                    _self.val(v);
                    me.addTab(v,'booking.html');
                    $ul.hide();
                    nowI = -1;
                  }
                }
            };

          };
        });

      function liEvent(_self) {//键盘上下处理
        $li.removeClass('li-searchlist-now');
        var nowLi = $li.eq(nowI);
        _self.val(nowLi.text());
        nowLi.addClass('li-searchlist-now');
      }



      },
      mainnavClick : function () {
        var me = this;
        $('.s-mainnav').click(function() {
            if (!$(this).hasClass('s-mainnav-now')) {
              var rel = $(this).attr('rel');
              $('.s-mainnav-now').removeClass('s-mainnav-now');
              $(this).addClass('s-mainnav-now');
              // if (rel=='#subnav-my') {
              //     $('.subnav').show();
              //   }else{
                  $('#submain-my,.ul-submainnav').hide();
                  $('.subnav').hide();
                  $(rel).show();
                // };
            };
        });

        $('.s-submainnav').click(function() {
          if (!$(this).hasClass('s-submainnav-now')) {
            var rel = $(this).attr('rel');
            window.console && console.log(rel);
            if (rel) {
              $('.s-submainnav-now').removeClass('s-submainnav-now');
              $(this).addClass('s-submainnav-now');
              $('.subnav').hide();
              $(rel).show();
            };
          };
        });

        $('.em-favor').click(function () {
          layer.msg('添加到我的桌面成功 ^_^~',{icon:1,time:800});
        });

      },

    menuTarget : null,
      rightmenu : function () {
        var me = this;
        $(".s-hnav").bind('contextmenu',function(e){
          $('#mm2').menu('show', {
            left: e.pageX,
            top: e.pageY
          });
          me.menuTarget = $(this).parent('li');
          // window.console && console.log(me.menuTarget);
          e.preventDefault();
          // window.console && console.log(this);
          return false;
        });
      },
      menuClick : function () {
        var me = this;
          $('#mm2').menu({
              onClick: function (item) {
                var $li = me.menuTarget;
                // window.console && console.log(me.menuTarget);
                // window.console && console.log(item.id);
                switch (item.id) {
                  case  'up':
                    var $prev = $li.prev('li');
                    window.console && console.log($prev);
                    if ($prev) {
                      $li.after($prev);
                    };
                    break;
                  case  'down':
                    var $next = $li.next('li');
                    window.console && console.log($next);
                    if ($next) {
                      $li.before($next);
                    };
                    break;
                  case  'first':
                    var $ul = $li.parent();
                    $ul.prepend($li);
                    break;
                  case  'last':
                    var $ul = $li.parent();
                    $ul.append($li);
                    break;
                  case  'del':
                    $li.remove();
                    break;

                }
              }
          });
      },
      _setIframeH : function () {
          var iframeH = $('.mainCont').height()-40;
          $('#mainIframe').height(iframeH);
      },
      setIframeH : function () {
        var me = this;
        me._setIframeH();
        $(window).resize(function() {
          me._setIframeH();
        });
      },
      sideNavE : function ($t,nowCls) {
        var me = this;
        $($t).click(function() {
          var _self = $(this);
          var url = _self.attr('rel');
          if (url) {
            $('.'+nowCls).removeClass(nowCls);
            _self.addClass(nowCls);

            var tabTitle = _self.attr('title');
            var tabTitle = tabTitle||_self.find('.em-nav').text()||_self.text();
            me.addTab(tabTitle,url);
            // $('#mainIframe').attr('src',url);
          };
        });
      },
      addTab : function(tabTitle,url,unselected){
        var me = this;
        var $t = $('#tabs').tabs('tabs');
        if(!$('#tabs').tabs('exists',tabTitle)){
          $('#tabs').tabs('add',{
            title:tabTitle,
            content:me._createFrame(url),
            selected : !unselected,
            closable:true
          });
        }else{
          $('#tabs').tabs('select',tabTitle);
          $('#refresh').click();
        }
        me.tabClose();
      },
      tabClose : function(){
        /*双击关闭TAB选项卡*/
        $(".tabs-inner").dblclick(function(){
          var subtitle = $(this).children(".tabs-closable").text();
          $('#tabs').tabs('close',subtitle);
        })
        /*为选项卡绑定右键*/
        $(".tabs-inner").bind('contextmenu',function(e){
          $('#mm').menu('show', {
            left: e.pageX,
            top: e.pageY
          });

          var subtitle =$(this).children(".tabs-closable").text();

          $('#mm').data("currtab",subtitle);
          $('#tabs').tabs('select',subtitle);
          return false;
        });
      },
      tabCloseEven : function() {//绑定右键菜单事件
        var me = this;
        $('#mm').menu({
          onClick: function (item) {
            me._closeTab(item.id);
          }
        });
        return false;
      },
      _createFrame : function(url){
        var iframe = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';
        return iframe;
      },
      _closeTab : function(action){
        var me = this;
        var alltabs = $('#tabs').tabs('tabs');
        var currentTab =$('#tabs').tabs('getSelected');
        var allTabtitle = [];
        $.each(alltabs,function(i,n){
          allTabtitle.push($(n).panel('options').title);
        })

        switch (action) {
          case "refresh":
            var iframe = $(currentTab.panel('options').content);
            var src = iframe.attr('src');
            $('#tabs').tabs('update', {
              tab: currentTab,
              options: {
                content: me._createFrame(src)
              }
            })
            break;
          case "close":
            var currtab_title = currentTab.panel('options').title;
              if (currtab_title != me.onlyOpenTitle){
                  $('#tabs').tabs('close', currtab_title);
              }
            break;
          case "closeall":
            $.each(allTabtitle, function (i, n) {
              if (n != me.onlyOpenTitle){
                $('#tabs').tabs('close', n);
              }
            });
            break;
          case "closeother":
            var currtab_title = currentTab.panel('options').title;
            $.each(allTabtitle, function (i, n) {
              if (n != currtab_title && n != me.onlyOpenTitle){
                $('#tabs').tabs('close', n);
              }
            });
            break;
          case "closeright":
            var tabIndex = $('#tabs').tabs('getTabIndex', currentTab);

            if (tabIndex == alltabs.length - 1){
              alert('亲，后边没有啦 ^@^!!');
              return false;
            }
            $.each(allTabtitle, function (i, n) {
              if (i > tabIndex) {
                if (n != me.onlyOpenTitle){
                  $('#tabs').tabs('close', n);
                }
              }
            });

            break;
          case "closeleft":
            var tabIndex = $('#tabs').tabs('getTabIndex', currentTab);
            if (tabIndex == 1) {
              alert('亲，前边那个上头有人，咱惹不起哦。 ^@^!!');
              return false;
            }
            $.each(allTabtitle, function (i, n) {
              if (i < tabIndex) {
                if (n != me.onlyOpenTitle){
                  $('#tabs').tabs('close', n);
                }
              }
            });

            break;
          case "exit":
            $('#closeMenu').menu('hide');
            break;
        }
      }
};

$(function () {
  eyeIndex.init();
});
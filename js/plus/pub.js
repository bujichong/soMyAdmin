var $util = {
    down: function (url, param, method) {//下载方法
        var inputs = [];
        if (!method) {
            method = !param ? "get" : "post";
        }
        if (param) {
            $.each(param, function (k, v) {
                inputs.put($T.format("<input type='hidden' name='#{name}' value='#{value}'>", {name: k, value: v}));
            });
        }
        if (!$('_exprotBox').length) {
            $('<div id="_exportBox" class="hide"></div>').append("<iframe id='export_frame' name='export_frame'></iframe>")
                .append('<form action="' + url + '" method="' + (method || 'post') + '" target="export_frame">' + inputs.join('') + '</form>')
                .appendTo('body');
        } else {
            $("#_exportBox form").html(inputs.join(''));
        }
        $("#_exportBox form").submit();
    },
    excel: function (url, titles, fields, param) {//导出excel，需要后台对应配置
        param = param || {};
        $.applyIf(param, {
            _start: 0,
            _pagin: 1,
            _limit: 6000,
            _export_titles: titles.join(","),
            _export_fields: fields.join(",")
        });
        var frame = $("#export_frame");
        if (frame.length == 0) {
            frame = $("<iframe id='export_frame' class='hide' name='export_frame' style='display:none'></iframe>");
            $('body').append(frame);
        }
        // if (Ext.isIE) frame.src = Ext.SSL_SECURE_URL;
        var form = $("#export_form");
        if (form.length == 0) {
            form = $("<form method='post' id='export_form' target='export_frame' class='hide'></form>");
            $('body').append(form);
            if ($.browser.msie)
                document.frames["export_frame"].name = "export_frame";
        }
        form.attr("action", url);
        $.each(param, function (k, v) {
            form.append($T.format(
                "<input type='hidden' name='#{name}' value='#{value}'>", {
                    name: k,
                    value: v
                }));
        });
        form.submit().html("");
    },
    tabs: function (tab, events, cfg) {
        events = events || [];
        $(tab).tabs({
            onSelect: function (t, ix) {
                console.log("init tab" + ix);
                $('.tabs', this).attr('class', 'tabs tab-state-' + ix);
                var init = $(this).attr("data-init" + ix);
                if (!init) {
                    var fn = events[ix];
                    if (fn && $.isFunction(fn))fn();
                    $(this).attr("data-init" + ix, true);
                }
            }
        });
    },
/*
合并列方法
grid,
data:数据,
aStr:值相同的字段,
bStr:需要合并的字段(不设置，则使用aStr)
 */
    gridMergeCols : function (grid,data,aStr,bStr) {
        if (data&&data.rows.length) {
        var bStr = bStr?bStr:aStr;
        var merges =[{index:0}];
        var ix = 0;
        var span = 0;
          var nowStr = data.rows[0][aStr];
          $.each(data.rows,function (i,v) {
            if (v[aStr]!= nowStr) {
                ix++;
                merges[ix] = {index:i};
                merges[ix-1].rowspan = span;
                span = 1;
                nowStr = v[aStr];
            }else{
              span++;
            };
          });
          merges[ix].rowspan = span;
          window.console && console.log('merges 数组：',merges);

          for(var i=0; i<merges.length; i++){
                if(merges[i].rowspan>1){
                  if (bStr instanceof Array) {//如果有多个字段，为数组
                      $.each(bStr,function(j,v){
                        $(grid).datagrid('mergeCells',{
                          index: merges[i].index,
                          field: v,
                          rowspan: merges[i].rowspan
                        });
                      });
                  }else{//单个字段，字符串
                    $(grid).datagrid('mergeCells',{
                      index: merges[i].index,
                      field: bStr,
                      rowspan: merges[i].rowspan
                    });
                  };
                }
            }
        };
    }
};

var $pop = {
  alert : function (msg,yes,opt) {//icon: {0:'叹号',1:'对勾',2:'叉叉',3:'问号'}
      var opt = $.extend({icon: 0, title:false,btnAlign: 'c'},opt||{});
      return layer.alert(msg,opt,function (index) {
          if (yes) {
              if (yes(index)) {
                  layer.close(index);
              };
          }else{
              layer.close(index);
          };
      });
  },
  confirm : function (msg,yes,cancel,opt) {//icon: {0:'叹号',1:'对勾',2:'叉叉',3:'问号'}
      var msg = msg || '你确定此操作吗？';
      var opt = $.extend({icon: 0, title:false,btnAlign: 'c'},opt||{});
      return layer.confirm(msg , opt , function(index){
          if (yes) {
              if (yes(index)) {
                  layer.close(index);
              };
          }else{
              layer.close(index);
          };
      },function (index) {
          if (cancel) {
              if (cancel(index)) {
                  layer.close(index);
              };
          }else{
              layer.close(index);
          };
      });
  },
  msg : function (msg,end,opt) {//icon: {0:'叹号',1:'对勾',2:'叉叉',3:'问号'}
      var opt = $.extend({icon: 0, time:2000},opt||{});
      return layer.msg(msg , opt , function(){
        end&&end();
      })
  },
  newTabWindow : function (tabTitle,url,unselected) {
    window.top.eyeIndex&&window.top.eyeIndex.addTab(tabTitle,url,unselected);
  },
  iframePop : function (opt,grid) {//pop的方式打开iframePop
      window._refreshParent = false;
      if (typeof(opt)=='string') {
          opt = {content:opt};
      };
      var layerOpt = $.extend({//layer
        type: 2,
        title :'提示',
        // content:url,
        area :['100%', '100%']
      },opt||{});
      if (grid) {
        layerOpt.end = function (){
            opt.end&&opt.end();
            if (window._refreshParent){
                if(grid instanceof Array){
                    $.each(grid,function (i,v) {
                        $grid.reload(v);
                    })
                }else{
                    $grid.reload(grid);
                }
            }
        }
      }
      var popIndex = layer.open(layerOpt);
  },
  closePop : function (opt) {//统一的关闭pop方法
      var opt = $.extend({
          popIndex : null,
          callback : function () {},
          refreshGrid : false
      },opt||{});

      if (opt.popIndex) {//如果关闭当前window下的pop
          opt.callback();
          layer.close(opt.popIndex);
          return;
      }else{//关闭父级pop
          var p = parent.window;

          if (opt.refreshGrid) {
              p._refreshParent = true;
          };

          try {//试运行callback
              opt.callback(p);
          } catch (e) {
              window.console && console.log(e);
          }

          try {//试关闭open
            var index = parent.layer.getFrameIndex(window.name);
            p.layer.close(index);
          } catch (e) {
              window.console && console.log(e);
          }
      };
  },
  popForm : function (opt) {//pop form, opt是所有参数
      var opt =$.extend({
          target : null,//需要弹出的对象class或者id
          refreshGrid : true,//是否刷新grid
          gridId : 'gridBox',//需要刷新grid的id
          width : 400,height:300,//pop宽高
          beforePop : function ($formBox) {},//弹窗之前的事情
          afterSubmit : function (rst,$formBox) {}//提交之后的事件
      },opt||{});
      var temPop;
      var $formBox = $(opt.target);
      $formBox.find('.form-validate').attr("data-opt","{'callback':'submitPopForm'}");
      window.submitPopForm = function (rst) {
          if (rst.state) {
              layer.close(temPop);
              if (opt.refreshGrid) {$grid.reload(opt.grid);};
              opt.afterSubmit(rst,$formBox);
          };
      }
      opt.beforePop($formBox);
      temPop = layer.open({
          type:1,
          title : opt.title,
          area:[opt.width+'px',opt.height+'px'],
          content : $formBox,
          end: function () {
              $formBox.clear();
          }
      });
      $formBox.find('.btn-closePop').click(function () {
          layer.close(temPop);
      });
      return temPop;//返回layer的序列
  },
  popGrid: function (opt,target) {//弹窗grid
      opt = opt || {};
      if (!opt.url && !opt.code) {
          layer.alert("请配置表格数据源参数url或者code");
          return;
      }
      if (!opt.code && !opt.gridId) {
          layer.alert("请配置表格数据参数gridId");
          return;
      }
      var data = opt || {};
      data.gridCfg = data.gridCfg ||{};
      var gridId = data.gridId || 'grid_' + data.code.replace(/[\^@]/g, '')
          , url = data.url || "/sys/widget/grid.htm?_code=" + encodeURIComponent(data.code)
          , init = $('#' + gridId).length > 0;
          data.gridCfg.singleSelect = data.gridCfg.singleSelect  || !data.muti;
      var muti = !data.gridCfg.singleSelect;
          window.console && console.log(muti);
      if (init && $('#pop_' + gridId).length == 0) layer.alert("请另外指定gridId," + gridId + "已存在!");
      if (!init) {
          var searchName = data.searchName || 'searchValue';
          var searchLabel = data.searchLabel || '';
          var boxTpl = "<div id='pop_{gridId}' style='display:none'>"+
          "<form class='form-inline popGridHead pad10'>"+
          "<div class='form-group'><input type='text' class='form-control' name='"+searchName+"' placeholder='"+searchLabel+"'><button type='button' class='btn btn-small btn-primary fnSearch'>查 询</button> </div>"+
          "<button type='button' class='btn btn-warning fnSure"+(muti?'':' none')+"'>确 定</button>"+
              // "<span><input type='button' class='btn btn-submit fnSearch' value='查 询' /></span>"+
              // "<input type='button' class='btn btn-submit fnSure' value='确 定' />"+
          "</form>"+
          "<div class='pad-l10 pad-r10 pad-b5'><div id='{gridId}'></div></div></div>";
          $('body').append($T.format(boxTpl, {gridId: gridId}));
      }

      var boxOpt = {
          type :1,
          title: muti?'选择后点击确定按钮':'请双击选择行',
    area : ['500px','494px'],
          content: $('#pop_' + gridId)
      };
      $.extend(true, boxOpt, data.boxOpt || {});
      if (data.boxOpt.width) {boxOpt.area[0] = data.boxOpt.width+'px'};
      if (data.boxOpt.height) {boxOpt.area[1] = data.boxOpt.height+'px'};
      //清除验证的tooltip
      // var $form = $(target).parents('.form-validate');
      // if ($form) {
      //     $form.find(".form-validate .txta,:input").tooltip("destroy");
      // };
      $pop[gridId] = layer.open(boxOpt);
      if (!init) {
          var valueId = data.valueId, textId = data.textId
          ,valueVal = data.valueVal||'id', textVal = data.textVal||'text'
              , gridCfg = {height: (boxOpt.height - 85), width: '100%'};
          $.extend(true, gridCfg, data.gridCfg || {});
          gridCfg.columns = gridCfg.columns || data.cols;
          if (!gridCfg.columns && data.code) {
              var cType = data.code.replace(/[\^@]/g, '');
              if (!$cols[cType]) {
                  layer.alert('请在param.js里面定义' + cType + '表格列信息!');
                  return;
              }
              gridCfg.columns = $cols[cType];
          }
          if (!gridCfg.columns) {
              layer.alert("请配置表格列信息!");
              return;
          }
          gridCfg.fitColumns = (opt.fitCol?opt.fitCol:true);
          gridCfg.onDblClickRow = function (index, row) {
              window.console && console.log(textId,valueId,row);
              if (valueId)$('#' + valueId).val(row[valueVal]);
              if (textId)$('#' + textId).val(row[textVal]);
              if (boxOpt.onOk)boxOpt.onOk([row]);
              layer.close($pop[gridId]);
              if(data.values){
                  $.each(data.values,function (key,val) {
                      $('#'+key).val(row[val]);
                  });
              }
              // $pop[gridId].removePop();
          }
          $grid.newGrid('#' + gridId, gridCfg);
          $('.fnSearch', '#pop_' + gridId).click(function () {
              var ps = $('#pop_' + gridId).find('.popGridHead').sovals();
              $grid.load('#' + gridId, ps);
          });
          if (muti) {
              $('.fnSure', '#pop_' + gridId).show().click(function () {
                  console.log("点击确定按钮!");
                  var rows = muti ? ($('#' + gridId).datagrid("getChecked") || []) : [$('#' + gridId).datagrid("getSelected")];
                  var id = [], text = [];
                  for (var i = 0; i < rows.length; i++) {
                      var row = rows[i];
                      id.push(row[valueVal]);
                      text.push(row[textVal]);
                  }
                  if (valueId)$('#' + valueId).val(id.join(','));
                  if (textId)$('#' + textId).val(text.join(','));
                  if (boxOpt.onOk)boxOpt.onOk(rows);
                  layer.close($pop[gridId]);
              });
          };

      }
      var params = data.gridParams || data.params || {};
      if (typeof(params) == "function") {
          params = params();
      }
      var urlParams = data.urlParams || '';
      if (typeof(urlParams) == "function") {
          urlParams = urlParams();
      }
      // urlParams = $T.parseParam(urlParams);
      params.$url = url;
      if (urlParams) {params.$url = params.$url+urlParams};
      $grid.load('#' + gridId, params);
  }
};

var $grid = {
    getRows: function (grid) {//获取rows
        return $(grid).datagrid("getData").rows;
    },
    load: function (grid, param) {//grid 更新参数后load，返回第一页
        param = param || {};
        var ui = $(grid).attr("data-ui");
        if (ui == 'treegrid') {
            if (param.$url)$(grid).treegrid("options").url = param.$url;
            $(grid).treegrid("load", param);
        } else {
            if (param.$url) $(grid).datagrid("options").url = param.$url;
            $(grid).datagrid("load", param);
        }
    },
    reload: function (grid, param) {//grid 更新参数后reload，保留在刷新前的页码
        var ui = $(grid).attr("data-ui");
        if (ui == 'treegrid') {
            $(grid).treegrid("reload", param);
        } else {
            $(grid).datagrid("reload", param);
        }
    },
    clear: function (grid) {//grid 清空数据
        $(grid).datagrid("loadData", []);
    },
    deleteSelected: function (grid) {//grid 删除选择行
        //指定idField
        var rows = $(grid).datagrid("getSelections");
        for (var i = 0; i < rows.length; i++) {
            var inx = $(grid).datagrid("getRowIndex", rows[i]);
            $(grid).datagrid("deleteRow", inx);
        }
        $(grid).datagrid("clearSelections");
    },
    newGrid: function (grid, cfg) {//二次封装的grid方法，cfg参数相当于easyui的参数对象，具体方法请参考api手册
        if (!$(grid).length) {
            layer.alert("页面不存在" + grid);
            return;
        }
        var top = $(grid).position().top || 36;
        var gridCfg = {
            fitColumns: true,
            singleSelect: true,
            pagination: true,
            pageSize: 10,
            pageList: [10, 20, 50, 100, 200, 500],
            autoRowHeight: true,
            striped: true,
            rownumbers: true,
            width: '100%',
            height: $(window).height()-top
        };
        $.extend(true, gridCfg, cfg);
        var titles = [], fields = [];
        if (gridCfg.offset) gridCfg.height += gridCfg.offset;
        gridCfg.height = gridCfg.height -10;
        for (var i = 0; i < gridCfg.columns.length; i++) {
            var cols = gridCfg.columns[i];
            $.each(cols, function (inx, col) {
                if (col.checkbox)return;
                $.applyIf(col, {align: 'center'});
                if (col.format) {
                    col.formatter = function (v, r, inx) {
                        return v ? $.fmtDate(col.format, v) : '';
                    }
                }
                if (!col.width)col.width = 60;
                if (col.title && col.field) {
                    titles.push(col.title);
                    fields.push(col.field);
                }
                if (col.editor) {
                    col.styler = function (v, r, inx) {
                        return {'class': 'x-editor'};
                    }
                }
                if(col.titletip){
                    col.formatter=function(r){
                       return '<span title="'+r+'">'+r+'</span>';
                     }
                }
            });
        }
        console.log("初始化" + grid, gridCfg);
        if (gridCfg.toolbar)gridCfg.toolbar = $grid.initToolBar(grid, gridCfg.toolbar);
        if (gridCfg.tools){
            var toolsId = $grid.initTools(grid, gridCfg.tools);
            gridCfg.toolbar = '#'+toolsId;
        };
        if (gridCfg.treeField) {
            gridCfg.pagination = false;
            gridCfg.animate = false;
            $(grid).treegrid(gridCfg);
            $(grid).attr("data-ui", "treegrid");
        } else {
            $(grid).datagrid(gridCfg);
            $(grid).attr("data-ui", "datagrid");
        }

        var pager = $(grid).datagrid('getPager'), btns = [];
        if (cfg.excel) {
            btns.push({
                iconCls: 'icon-excel',
                handler: function () {
                    var ps = $(grid).datagrid("options").queryParams;
                    $util.excel(cfg.excel, titles, fields, ps);
                }
            });
        }

        if (cfg.auto) {
            var btnAutoId = $(grid).attr("id") + "_auto", auto = cfg.auto;
            auto = (auto === true) ? 60 * 1000 : auto * 1000;
            btns.push({
                id: btnAutoId,
                handler: function () {
                    var btn = $(this);
                    var taskId = btn.attr("data-task");
                    if (!taskId) {
                        taskId = setInterval(function () {
                            $grid.reload(grid);
                        }, auto);
                        btn.attr("data-task", taskId);
                        btn.addClass("icon-autofreshing");
                    } else {
                        clearInterval(taskId);
                        btn.removeAttr("data-task");
                        btn.removeClass("icon-autofreshing");
                    }
                }
            });
            $('#' + btnAutoId).addClass("icon-autofresh icon-autofreshing");
            $('#' + btnAutoId).click();
        }

        if (btns.length > 0) {
            pager.pagination({buttons: btns});
        }
    },
    renderTools : function (grid,btnArr,$par,singerMode) {
      var $gridO = $(grid);
       $.each(btnArr, function (i, opt) {
          //iconCls:'icon-add',text:'新增',url:'form.html',noMax: true,popHeight:350,title:'用户信息-新增'
          var o= $.extend({
              iconCls :'plus',//默认按钮图标
              btnCls : 'default',//默认按钮类型
              text : '新增',//按钮文本
              url : null,//请求地址
              popMax : false,//是否最大化
              popWidth : 560,//弹窗宽度
              popHeight : 300,//弹窗高度
              ajaxMsg : '你确定提交此操作吗？',
              title : '信息窗口',//默认弹窗标题
              check:false,//是否返回是check的值，即勾选行，默认返回select的值，即选择行
              notNull : false,//不能不选择行
              onlyOne : false,//只能选择一行
              newWin : false,//在新窗口打开
              ajax : false,//ajax事件
              post : false,//ajax改为 post参数方式
              endBack : function () {},
              ajaxBack : function (data) {},
              click : function () {}
          },opt||{});
          // var $btn = $('<span class="btn s-tool'+(singerMode?" s-tool-singer":"")+' btn-default"><b class="icon icon-'+o.iconCls+'"></b> '+o.text+'</span>');
          var $btn = $('<span class="s-tool'+(singerMode?" s-tool-singer":"")+'"><b class="icon icon-'+o.iconCls+'"></b> '+o.text+'</span>');
          $btn.click(function () {
              var _self = $(this);
              var rows = $gridO.datagrid(o.check?"getChecked":"getSelections");
              if (o.notNull && rows.length == 0) {
                  if (o.notNull === true) o.notNull = "请选择记录!";
                  layer.msg(o.notNull,{icon:0});
                  // $.sobox.warning(o.notNull);
                   _self.blur();
                  return;
              }
              if (o.onlyOne && rows.length != 1) {
                  if (o.onlyOne === true)o.onlyOne = "请选择需要操作的一条记录!";
                  layer.msg(o.onlyOne,{icon:0});
                  // $.sobox.warning(o.onlyOne);
                   _self.blur();
                  return;
              }
              var url = o.url;
              if (url) {
                  if (typeof url == 'function') {
                      url = url();
                  };
                  if (o.post) {
                      if (o.post.constructor !== String) {o.post = 'id=id'};//默认取id
                      var map= [];
                      if (rows.length>0) {
                          var ps = [],keyArr = [];
                          ps = o.post.split('&');
                          for (var c = 0; c < ps.length; c++) {
                              keyArr.push(ps[c].split('='));
                              // map[keyArr[c][0]]=[];
                          }
                          for (var i = 0; i < rows.length; i++) {
                              var tt = rows[i];
                              for (var j = 0; j < ps.length; j++) {
                                  map.push(keyArr[j][0]+'='+tt[keyArr[j][1]]);
                              }
                          }
                          map = map.join('&');

                      };
                  }else{
                      var ps = [], re = /\{(\w+)\}/g, c, map = {};
                      while (c = re.exec(url)) {
                          ps.push(c[1]);
                          map[c[1]] = [];
                      }
                      if (ps.length > 0 && rows.length > 0) {
                          for (var i = 0; i < rows.length; i++) {
                              var tt = rows[i];
                              for (var j = 0; j < ps.length; j++) {
                                  map[ps[j]].push(tt[ps[j]]);
                              }
                          }
                          for (var k in map) {
                              map[k] = map[k].join(",");
                          }
                          url = $T.format(url, map);
                      }
                  };
                  // window.console && console.log(url);
                  // window.console && console.log(map);
                  if(o.newWin){
                      window.open(url);
                      _self.blur();
                      return;
                  }
                  if (o.ajax) {
                      var ajaxData = o.post?map:{};
                      $ajax.post(url, ajaxData, o.ajaxMsg).done(function (rst) {
                          o.ajaxBack(rst);
                          if (rst.state) {
                              $grid.reload(grid);
                          }
                      });
                      _self.blur();
                  } else {
                      window._refreshParent = false;
                      var areaVal = o.popMax?['100%', '100%']:[(o.popWidth+'px') || '560px',(o.popHeight+'px') || '300px'];
                      layer.open({//layer
                        type: 2,
                        title : o.title,
                        content:url,
                        area :areaVal,
                        end : function () {
                            if (window._refreshParent){
                              $grid.reload(grid);
                              o.endBack();
                            }
                        }
                      });
                      _self.blur();
                  }
              }else{
                  if (o.onlyOne) {rows = rows[0]};
                  if (o.click) {
                      o.click($gridO,rows);
                      _self.blur();
                      return;
                  };
              }
          });
          $par.append($btn);
       });
      // return $par;
    },
    initTools : function (grid,cfg) {//newGrid的分支方法，初始化工具栏
      var me = this;
      var randomId = 'tool-'+Math.ceil(Math.random()*100000000);
      var $wrap = $('<div id="'+randomId+'" class="baseToobar"></div>');
      var $gridO = $(grid);
      // window.console && console.log(cfg);
      if (cfg[0] instanceof Array) {
          $.each(cfg,function (h,btnArr) {
              var $btnGroup = $('<div class="item-group toolGroup"></div>');
              me.renderTools(grid,btnArr,$btnGroup);
              $wrap.append($btnGroup);
          });
      }else{
          me.renderTools(grid,cfg,$wrap,true);
      };
      var $none = $('<div class="none"></div>');
      $none.append($wrap);
      $('body').append($none);
      return randomId;
    },
    initToolBar: function (grid, cfg) {//newGrid的分支方法，初始化工具栏方式2
      $.each(cfg, function (i, opt) {
          if (opt == '-')return;
          if (!opt.handler) {
              opt.handler = function () {
                  var _self = $(this);
                  var rows = $(grid).datagrid(opt.check?"getChecked":"getSelections");
                  if (opt.notNull && rows.length == 0) {
                      if (opt.notNull === true) opt.notNull = "请选择记录!";
                      layer.msg(opt.notNull,{icon:0});
                      // $.sobox.warning(opt.notNull);
                      _self.blur();
                      return;
                  }
                  if (opt.onlyOne && rows.length != 1) {
                      if (opt.onlyOne === true)opt.onlyOne = "请选择需要操作的一条记录!";
                      layer.msg(opt.onlyOne,{icon:0});
                      _self.blur();
                      // $.sobox.warning(opt.onlyOne);
                      return;
                  }
                  var url = opt.url;
                  if (url) {
                      var ps = [], re = /\{(\w+)\}/g, c, map = {};
                      while (c = re.exec(url)) {
                          ps.push(c[1]);
                          map[c[1]] = [];
                      }
                      if (ps.length > 0 && rows.length > 0) {
                          for (var i = 0; i < rows.length; i++) {
                              var tt = rows[i];
                              for (var j = 0; j < ps.length; j++) {
                                  map[ps[j]].push(tt[ps[j]]);
                              }
                          }
                          for (var k in map) {
                              map[k] = map[k].join(",");
                          }
                          url = $T.format(url, map);
                      }
                      if(opt.newWin){
                          window.open(url);
                          _self.blur();
                          return;
                      }
                      if (opt.ajax) {
                          $ajax.post(url, {}, true).done(function (rst) {
                              if (rst.state) {
                                  $grid.reload(grid);
                              }
                          });
                          _self.blur();
                      } else {
                          window._refreshParent = false;
                          opt.popWidth = opt.popWidth || 560;
                          opt.popHeight = opt.popHeight || 300;
                          var areaVal = opt.popMax?['100%', '100%']:[(opt.popWidth+'px'),(opt.popHeight+'px')];
                          layer.open({//layer
                            type: 2,
                            title : opt.title,
                            content:url,
                            area :areaVal,
                            end : function () {
                                if (window._refreshParent)$grid.reload(grid);
                            }
                          });
                          _self.blur();
                      }
                  } else {
                      if (opt.onlyOne) {rows = rows[0]};
                      if (opt.click){
                          opt.click($(grid), rows);
                          _self.blur();
                      };
                  }
              }
          }
      });
      return cfg;
    }
};


var $ff = {
    /**
     * 页面表格查询功能绑定，主要用在列表的搜索栏
     */
    search: function (btnCls) {
        var cls = btnCls || '.so-search';
        if ($(cls).length) {
            $(cls).each(function () {
                var data = $T.data(this);
                var scope = data.scope;
                if (scope != null ){
                    $(scope).submit(function () {
                        var formId = data.form;
                        if (formId != null && !$(formId).valid()) {
                            return;
                        }
                        var scope = data.scope, param = $(scope).sovals(), gridId = data.grid;
                        if (data.tab) {
                            var sli = $('li.tabs-selected', data.tab), inx = $('.tabs li', data.tab).index(sli);
                            gridId += (inx + 1);
                        }
                        $grid.load(gridId, param);
                        return false;
                    });
                }
            });
            $(cls).click(function () {
                var data = $T.data(this);
                var scope = data.scope;
                $(scope).submit();
                return false;
            });
        }
    },
    formAEnterFun : function(callback,formCls){//表单输入框回车事件支持
      setTimeout(function () {
          var $form = $(formCls?formCls:'.form-enter');
          var $input = $form.find(':input').filter(':visible');
          // window.console && console.log($input);
          $input.keydown(function(e) {
              if (e.keyCode == 13) {
                  if ($(this).hasClass('btn')) {return;};
                  var ix = $input.index(this);
                  // window.console && console.log(ix);
                  $input.eq(ix+1).focus();
                  return false;
              };
          });
          $input&&$input.eq(0).focus();
          callback&&callback();
      },400);
    },
    formAEnterFunB : function (callback,formCls) {//表单输入框回车事件支持，部分特殊输入框的处理

      setTimeout(function () {//重置输入框回车事件

          var $form = $(formCls?formCls:'.form-enter');

          $form.find('.textbox-text').each(function (){
            var _self = $(this);
            var $sourInput = _self.parents('.combo').prev('.required');
            if ($sourInput.length) {_self.addClass('required')};
          });

          var $input = $form.find(':input.required,.btn-easyFormSubmit').filter(':visible');
          //$("input:disabled")
          // window.console && console.log($input);
          $input.keydown(function(e) {//required输入框进入获取下一焦点
              if (e.keyCode == 13) {
                  if ($(this).hasClass('btn')) {return;};
                  var ix = $input.index(this);
                  // window.console && console.log(ix);
                  $input.eq(ix+1).focus();
                  return false;
              };
          });

          $form.find('.textbox-text').focus(function () {//获取焦点时自动下拉
            var $prev = $(this).parents('.combo').prev();
            if ($prev.hasClass('easyui-combogrid')||$prev.hasClass('easyui-combobox')||$prev.hasClass('easyui-combotree')) {
              $prev.combo('showPanel');
            }
          });
          $input&&$input.eq(0).focus();
          // window.console && console.log($input.eq(0));
          callback&&callback();
      },500);
    },
    /**
     * 页面控件初始化集合
     */
    someMix: function () {
        var me = this;

        $T.placeHolder.init();//对低版本浏览器placeholder属性的兼容

        if ($('.so-time').length) {//时间控件初始化
            // $('.so-time').addClass('Wdate').each(function () {
            //     var _self = $(this);
            //     if (_self.hasClass('inline')) {_self.css('width', 150)};
            //     _self.click(function () {
            //         var data = $T.data(this) || {};
            //         $.applyIf(data, {dateFmt: 'yyyy-MM-dd HH:mm', readOnly: true});
            //         WdatePicker(data);
            //     });
            // });

            $('.so-time').each(function () {
              var _self  = $(this);
              var data = $T.data(this) || {};
              _self.css('width', _self.hasClass('inline')?'160px':'100%');
              _self.datetimebox(data);
            });

        }

        if ($('.so-date').length) {//日期控件初始化
            $('.so-date').each(function () {
              var _self  = $(this);
              var data = $T.data(this) || {};
              _self.css('width', _self.hasClass('inline')?'100px':'100%');
              _self.datebox(data);
            });
        }
        // if ($(".so-form .btn-cancel").length) {
        //     $(".so-form .btn-cancel").click(function () {
        //         $pop.closePop();
        //     });
        // }
        if ($(".form-validate .btn-cancel").length) {//表单里的关闭按钮，关闭事件
            $(".form-validate .btn-cancel").click(function () {
                $pop.closePop();
            });
        }
        if ($(".form-validate .btn-closePop").length) {//表单里的关闭按钮，关闭事件
            $(".form-validate .btn-closePop").click(function () {
                $pop.closePop();
            });
        }
        if ($('.form-enter').length) {//回车替代tab事件
          me.formAEnterFun();
          me.formAEnterFunB();
        };

        if ($('.drop').length) {//drop通过rel来初始化选择值
            $('.drop').each(function () {
                var v = $(this).attr('rel');
                if (v) {$(this).val(v);};
            })
        };

        if ($(':input[noNull],.required').length) {//时间和选择控件对应的必填输入框添加必填小三角样式
            $(':input[noNull],.required').each(function () {
              var _self = $(this);
              // if (_self.hasClass('so-time') || _self.hasClass('so-date')) {
              //     _self.addClass('txt-requireDate');
              // }
              if (_self.hasClass('so-choice') || _self.hasClass('so-pop')) {
                  _self.addClass('so-requirePop');
              }
            });
        }

        if ($('.so-drop').length) {//简单的easyui下拉控件初始化
            $('.so-drop').each(function () {
                var _self = $(this);
                var url = _self.attr('url');
                var required = _self.hasClass('required');
                _self.css({width:'100%'}).combobox({
                    url:url,
                    valueField:'value',
                    textField:'text',
                    onBeforeLoad : function (d) {
                        if (required) {
                            var $newTxt = _self.next('.combo').find('.textbox-text');
                            // _self.next('.combo').addClass('required');
                            //window.console && console.log($newTxt);
                            $newTxt.attr('placeholder','请选择...').addClass('required {required:true,messages:{required:"此项为必选"}}');
                            // .rules("add",{required:true});
                        };
                    }
                });
            });
        };

        if ($('.so-pop').length) {//sopop控件初始化，慢慢被easyui的comb控件替换，保留是为了兼容一些旧的事件
            $('.so-pop').each(function () {
                var _self = $(this);
                var rdm = Math.floor(Math.random()*1000000);
                var myOpt = $T.data(_self);

                if (myOpt.type=='tree') {
                    var pData = $.extend({
                        // type: null,//'tree'
                        url : null,//json url
                        valueId : null,
                        valuePid : null,
                         selectedId : null,
                        width:'400px',height:'300px',
                        title : '请双击选择',
                        value:'text',
                        justLeaf: false,
                        data : null,
                        flatData : true,
                        onDblClick : function (node) {}
                    },myOpt||{});

                $('body').append('<div id="popTreeP-'+rdm+'" class="pad15 none"><ul id="ul-Tree-'+rdm+'"></ul></div>');
                var alreadyRenderTree = false,treePop= null;
                  _self.click(function() {
                    treePop = layer.open({
                        type: 1,
                        content: $('#popTreeP-'+rdm),
                        area : [pData.width,pData.height],
                        title :pData.title,
                        btn:null
                      });

                        var treeOpt = {
                            animate : true,
                            lines : true,
                            url : pData.url,
                            data : pData.data,
                            flatData: pData.flatData,
                            onDblClick : function (node) {
                                window.console && console.log(node);
                                if (pData.justLeaf&&node.children!=null) {return false;};
                                  _self.val(node[pData.value]);
                                   pData.selectedId = node.id;
                                  if (pData.valueId) {$('#'+pData.valueId).val(node.id)};
                                  if (pData.valuePid&&node.pid) {$('#'+pData.valuePid).val(node.pid)};
                                  layer.close(treePop);
                                  pData.onDblClick(node);
                            },
                            onLoadSuccess : function (node,data) {
                                pData.data = data;
                            }
                      }

                        if (!alreadyRenderTree) {
                            $('#ul-Tree-'+rdm).tree(treeOpt);
                            alreadyRenderTree = true;
                        }

                  });

                };

            if (myOpt.type =='grid') {//初始化popGrid
                 _self.click(function() {
                    myOpt.textId = myOpt.textId || this.name;
                    $pop.popGrid(myOpt,this);
                });
            };

          });
      };
      // 下拉框初始化
      if ($(".so-select").length) {//初始化soSelect
        $(".so-select").soSelect();
      }
    },
    /**
     * 统一的表单验证
     */
     validate : function () {
       var me = this;
       $('.btn-easyFormSubmit').bind('click',function() {
           var $btn = $(this);
           var $form = $btn.parents('.form-validate');
           var validate = $form.form("validate");
           var back = false;
           window.console&&console.log(validate);
           if(validate){
             var formData = $T.data($form);//form个性化附加数据
             var loadingIndex = null;//loading容器
             var msg = $btn.attr("msg") || "您确定要提交吗?";//确认框提示信息
             var action = $btn.attr("action") || $form.action;//表单请求地址
             var noconfirm = $btn.attr("noconfirm");//获取不弹窗提示确认，只能为true才不提示
             var formSubmitEvent = me.formSubmitEvent(action,formData,loadingIndex);

             if( noconfirm==='true'){//如果不弹窗提示确认
               $form.form('submit',formSubmitEvent);
             }else{//不弹窗提示确认
               layer.confirm(msg, {
                 icon: 0, title:false,btnAlign: 'c',success: function ($layer) {
                     $layer.find('.layui-layer-btn0').focus();//提交按钮获取焦点
                 }
               }, function(index){
                   layer.close(index);
                   $form.form('submit',formSubmitEvent);
               });
             }

           }
       });

     },
     formSubmitEvent : function (action,formData,loadingIndex) {
       return {
           url: action,
           // iframe: false,
           // ajax : true,
           onSubmit: function(param){
             var callSumbit = true;
             if (formData.beforeCallback){//提交之前事件函数名，多个可用 || 隔开
                 var callName = formData.beforeCallback.split('||');
                 $.each(callName,function (i,v) {
                     callSumbit = window[v]&&window[v](formData);
                     return callSumbit;//为false提前跳出循环
                 });
             }
             // if (formData.beforeCallback) {
             //     callSumbit = window[formData.beforeCallback](formData);
             // };
             loadingIndex = layer.load(0, {shade: false});
             var dataPlus = formData.params ||{};//附加提交表单值
             param = $.extend(param,dataPlus);
             console.log(param);
             if(!callSumbit){layer.close(loadingIndex);};
             return callSumbit;
           },
           success:function(rst){
             if(rst){
               layer.close(loadingIndex);
               try{
                 var rst = eval('(' + rst + ')');
                 parent.window._refreshParent = true;
                 //window.console && console.log(data.callback);
                 if (formData.callback){//提交之后事件函数名，多个可用 || 隔开
                     var callName = formData.callback.split('||');
                     $.each(callName,function (i,v) {
                         window[v]&&window[v](rst,formData);
                     });
                 }
                 if (formData.submitClear)$(formData.submitClear).val("");
                 var msg = (rst.tip == 1 ? rst.msg : (rst.state?"信息提交成功":"信息提交失败"));
                 if (rst.state) {
                   layer.msg(msg,{icon:1});
                   setTimeout(function(){
                     $pop.closePop();
                   },400);
                 }else{
                   layer.alert('<p class="red">对不起，提交数据失败！</p>' + msg,{icon: 2, title:false,btnAlign: 'c'});
                 };
               }catch(e){
                 window.console&&console.log(e);
                 layer.alert('<p class="red">对不起，提交数据失败！</p>请检查网络或联系管理员',{icon: 2, title:false,btnAlign: 'c'});
               }
             }
           }
       };
     },
    wdDate: function (cls) {//日期范围选择组件
        cls = cls || '.wd_date';
        if (!$(cls).length) {
        } else {
            var start = $(cls).find("#" + $(cls).attr("data-start"));
            var end = $(cls).find("#" + $(cls).attr("data-end"));
            var target = $($(cls).attr("data-bind"));//关联按钮会触发
            if (end.length == 0)end = start;
            $(".first", cls).click(function () {
                var startDate = new Date(start.val().replace(/-/g, '/'));
                startDate.setDate(1);
                start.val($.fmtDate('yyyy-MM-dd', startDate));
                if (target.length)target.click();
            });
            $(".prev", cls).click(function () {
                var startDate = new Date(start.val().replace(/-/g, '/'));
                startDate.setDate(startDate.getDate() - 1);
                start.val($.fmtDate('yyyy-MM-dd', startDate));
                if (target.length)target.click();
            });
            $(".next", cls).click(function () {
                var endDate = new Date(end.val().replace(/-/g, '/'));
                endDate.setDate(endDate.getDate() + 1);
                end.val($.fmtDate('yyyy-MM-dd', endDate));
                if (target.length)target.click();
            });
            $(".last", cls).click(function () {
                var endDate = new Date(end.val().replace(/-/g, '/'));
                endDate.setMonth(endDate.getMonth() + 1);
                endDate.setDate(0);
                end.val($.fmtDate('yyyy-MM-dd', endDate));
                if (target.length)target.click();
            });
        }
    }
};

$(function () {
    $ff.someMix();//存放比较零碎的
    $ff.validate();
    $ff.search();
    // $ff.wdDate();
});

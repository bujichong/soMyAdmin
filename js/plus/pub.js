var $util = {
    down: function (url, param, method) {
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
    excel: function (url, titles, fields, param) {
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
    iframePop : function (opt,grid) {
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
        // window.console && console.log(popIndex);
        var str = layerOpt.content;
        if (str.indexOf("/") != 0) {
            str = location.pathname.replace(/\/[^/]*$/, "/") + layerOpt.content;
        }
        window.console && console.log(str);
        $pop[str] = popIndex;
    },
    closePop : function (opt) {
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
                var tt = location.pathname + (location.search || '');
                window.console && console.log(tt);
                window.console && console.log(p.$pop[tt]);
                // if (p.$pop[tt])p.$pop[tt].removePop();
                if (p.$pop[tt])p.layer.close(p.$pop[tt]);

            } catch (e) {
                window.console && console.log(e);
            }
        };
    },
    gridMergeCols : function (grid,data,aStr,bStr) {//grid,数据,值相同的字段,需要合并的字段(不设置，则使用aStr)
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
    },
    id: function (prefix, n) {
        if (n < 1)n = 3;
        var rnd = "";
        for (var i = 0; i < n; i++) {
            rnd += Math.floor(Math.random() * 10);
        }
        return prefix + rnd;
    }
};

var $ajax = {
    post: function (url, data, tip) {
        var ajaxLoading = null, maskOpt = null, dtd = null;
        if (tip) {//提示
          var msg = (tip === true ? $p.submitTip : tip);
          dtd = $.Deferred();
          var event = function (dtd) {
            var loadingIndex = null;
            layer.confirm(msg, {icon: 0, title:false,btnAlign: 'c'}, function(){
                $.ajax({
                  url: url, type: 'post', data: data, dataType: 'json',
                  beforeSend: function (jqXHR, settings) {
                      loadingIndex = layer.load(0, {shade: false});
                  },
                  complete: function (jqXHR, textStatus) {
                      //根据textStatus修改提示
                      //2秒后去掉提示
                  },
                  success: function (rst) {
                    layer.close(loadingIndex);
                    if (rst) {
                      var msg = (rst.tip == 1 ? rst.msg : (rst.state?"信息提交成功":"信息提交失败"));
                      if (rst.state) {
                        layer.msg(msg,{icon:1});
                      } else {
                        layer.alert('<p class="red">对不起，提交数据失败！</p>' + msg,{icon: 2, title:false,btnAlign: 'c'});
                      }
                    }
                    dtd.resolve(rst);
                  },
                  error: function (XMLHttpRequest, textStatus, errorThrown) {
                    layer.close(loadingIndex);
                    layer.alert('<p class="red">对不起，提交数据失败！</p>请检查网络或联系管理员...',{icon: 2, title:false,btnAlign: 'c'});
                    dtd.reject();
                  }
              });
            });
            return dtd.promise();
          }
          return $.when(event(dtd));
        } else {
            var loadingIndex = null;
            dtd = $.ajax({
              url: url, type: 'post', data: data, dataType: 'json',
              beforeSend: function (jqXHR, settings) {
                maskOpt = $.extend({shade: false}, maskOpt || {});
                loadingIndex = layer.load(0, maskOpt);
              },
              complete: function (jqXHR, textStatus) {
                  //根据textStatus修改提示
                  //2秒后去掉提示
              },
              success: function (rst) {
                layer.close(loadingIndex);
              },
              error: function (XMLHttpRequest, textStatus, errorThrown) {
                layer.close(loadingIndex);
                layer.alert('<p class="p-popError">对不起，提交数据失败！</p>请检查网络或联系管理员...');
              }
            });
        }
        return dtd;
    }
};

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

var $fmt = {
    toHour: function (v) {
        v = v * 1 || 0;
        return Math.ceil((v * 100) / (1000 * 60 * 60)) / 100;
    },
    toDay: function (v) {
        v = v * 1 || 0;
        return Math.ceil((v * 100) / (1000 * 60 * 60 * 24)) / 100;
    }
}

var $grid = {
    getRows: function (grid) {
        return $(grid).datagrid("getData").rows;
    },
    load: function (grid, param) {
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
    reload: function (grid, param) {
        var ui = $(grid).attr("data-ui");
        if (ui == 'treegrid') {
            $(grid).treegrid("reload", param);
        } else {
            $(grid).datagrid("reload", param);
        }
    },
    clear: function (grid) {
        $(grid).datagrid("loadData", []);
    },
    deleteSelected: function (grid) {
        //指定idField
        var rows = $(grid).datagrid("getSelections");
        for (var i = 0; i < rows.length; i++) {
            var inx = $(grid).datagrid("getRowIndex", rows[i]);
            $(grid).datagrid("deleteRow", inx);
        }
        $(grid).datagrid("clearSelections");
    },
    newGrid: function (grid, cfg) {
        if (!$(grid).length) {
            alert("页面不存在" + grid);
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
            var $btn = $('<span class="btn btn-small s-tool'+(singerMode?" s-tool-singer":"")+' btn-default"><b class="icon icon-'+o.iconCls+'"></b> '+o.text+'</span>');
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
                        var popIndex = layer.open({//layer
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
                        // window.console && console.log(popIndex);
                        var str = url;
                        if (str.indexOf("/") != 0) {
                            str = location.pathname.replace(/\/[^/]*$/, "/") + url;
                            window.console && console.log(str);
                        }
                        $pop[str] = popIndex;
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
    initTools : function (grid,cfg) {
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
    initToolBar: function (grid, cfg) {
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
                            var popIndex = layer.open({//layer
                              type: 2,
                              title : opt.title,
                              content:url,
                              area :areaVal,
                              end : function () {
                                  if (window._refreshParent)$grid.reload(grid);
                              }
                            });
                            // window.console && console.log(popIndex);
                            var str = url;
                            if (str.indexOf("/") != 0) {
                                str = location.pathname.replace(/\/[^/]*$/, "/") + url;
                                window.console && console.log(str);
                            }
                            $pop[str] = popIndex;
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
    },
    clickFn: function (box, fields, url) {
        return function (grid, rows) {
            var row = rows[0];
            var title = $(box).attr("data-title") || '提示';
            $.sobox.pop({
                title: title,
                type: 'target',
                target: box,
                btn: [{
                    text: '确定', callback: function () {
                        var ps = $(box).serializeObject();
                        for (var i = 0; i < fields.length; i++) {
                            ps[fields[i]] = row[fields[i]];
                        }
                        $ajax.post(url, ps, function (rst) {
                            if (rst.state)$grid.load(grid)
                        }, true);
                    }
                }]
            });
        }
    }
};

var $pop = {
    popGrid: function (opt,target) {
        opt = opt || {};
        if (!opt.url && !opt.code) {
            alert("请配置表格数据源参数url或者code");
            return;
        }
        if (!opt.code && !opt.gridId) {
            alert("请配置表格数据参数gridId");
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
        if (init && $('#pop_' + gridId).length == 0) alert("请另外指定gridId," + gridId + "已存在!");
        if (!init) {
            var searchName = data.searchName || 'searchValue';
            var searchLabel = data.searchLabel || '';
            var boxTpl = "<div id='pop_{gridId}' style='display:none'>"+
            "<form class='form-inline popGridHead pad10'>"+
            "<div class='form-group'><input type='text' class='form-control' name='"+searchName+"' placeholder='"+searchLabel+"'> </div>"+
            " <button type='button' class='btn btn-info fnSearch'>查 询</button>"+
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
                    alert('请在param.js里面定义' + cType + '表格列信息!');
                    return;
                }
                gridCfg.columns = $cols[cType];
            }
            if (!gridCfg.columns) {
                alert("请配置表格列信息!");
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
                var ps = $('#pop_' + gridId).find('.popGridHead').serializeObject();
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
    },
    popTree: function (opt) {
        if (opt == null || (!opt.treeId && !opt.code)) alert("请配置treeId或者code");
        var data = opt || {}
            , treeId = (data.treeId || ('tree-' + data.code)).replace(/@|\^/, '')
            , valueId = data.valueId, textId = data.textId, init = $('#' + treeId).length > 0
            , muti = data.treeCfg && data.treeCfg.checkbox;
        if (!init) {
            $('body').append("<div id='" + treeId + "' style='display:none'></div>");
            var treeCfg = {checkbox: false, url: "/sys/widget/tree.htm?_code=" + encodeURIComponent(data.code)};
            $.extend(true, treeCfg, data.treeCfg);
            //单选双击默认
            if (!muti) {
                if (!treeCfg.onDblClick) {
                    treeCfg.onDblClick = function (node) {
                        if (valueId)$('#' + valueId).val(node.id);
                        if (textId) $('#' + textId).val(node.text);
                        $pop[treeId].removePop();
                    };
                } else {
                    var tmp = treeCfg.onDblClick;
                    treeCfg.onDblClick = function (node) {
                        var rst = tmp(node);
                        if (rst !== false) {
                            if (valueId)$('#' + valueId).val(node.id);
                            if (textId) $('#' + textId).val(node.text);
                            $pop[treeId].removePop();
                        }
                    }
                }
            }
            $('#' + treeId).tree(treeCfg);
            console.log("初始化树", treeCfg);
        }
        var boxOpt = {title: '请选择', type: 'target', target: '#' + treeId, width: 300/*,height:400*/};
        $.extend(true, boxOpt, data.boxOpt || {});
        if (muti) {
            boxOpt.btn = [{
                text: '确定', callback: function () {
                    var nodes = muti ? ($('#' + treeId).tree("getChecked") || []) : [$('#' + treeId).tree("getSelected")];
                    if (boxOpt.onOk) {
                        var rst = boxOpt.onOk(nodes);
                    } else {
                        var id = [], text = [];
                        for (var i = 0; i < nodes.length; i++) {
                            var node = nodes[i];
                            id.push(node.id);
                            text.push(node.text);
                        }
                        if (valueId)$('#' + valueId).val(id.join(','));
                        if (textId)$('#' + textId).val(text.join(','));
                    }
                }
            }];
        }
        $pop[treeId] = $.sobox.pop(boxOpt);
    },
    popForm : function (opt) {
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
    }
};

var $hook = {
    /**
     * 页面表格查询功能绑定
     */
    search: function (btnCls) {
        var cls = btnCls || '.hk_search';
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
                        var scope = data.scope, param = $(scope).serializeObject(), gridId = data.grid;
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
    /**
     * 页面控件初始化
     */
    widget: function () {
        if ($('.hk_time').length) {
            $('.hk_time').addClass('Wdate').each(function () {
                var _self = $(this);
                if (_self.hasClass('inline')) {_self.css('width', 150)};
                _self.click(function () {
                    var data = $T.data(this) || {};
                    $.applyIf(data, {dateFmt: 'yyyy-MM-dd HH:mm', readOnly: true});
                    WdatePicker(data);
                });
            });
        }

        // if ($(".hk_form .btn-cancel").length) {
        //     $(".hk_form .btn-cancel").click(function () {
        //         $util.closePop();
        //     });
        // }
        if ($(".form-validate .btn-cancel").length) {
            $(".form-validate .btn-cancel").click(function () {
                $util.closePop();
            });
        }
        if ($('.formA').length) {//回车替代tab事件
            setTimeout(function () {
                var $input = $('.formA').find(':input').filter(':visible');
                // window.console && console.log($input);
                $input.eq(0).focus();
                $input.keydown(function(e) {
                    if (e.keyCode == 13) {
                        if ($(this).hasClass('btn')) {return;};
                        var ix = $input.index(this);
                        // window.console && console.log(ix);
                        $input.eq(ix+1).focus();
                        return false;
                    };
                });
            },600);
        };
        if ($(".form-validate .btn-closePop").length) {
            $(".form-validate .btn-closePop").click(function () {
                $util.closePop();
            });

        }

        if ($('.hk_date').length) {
            $('.hk_date').addClass('Wdate').each(function () {
                var _self = $(this);
                if (_self.hasClass('inline')) {_self.css('width', 100)};
                _self.click(function () {
                    var data = $T.data(this) || {};
                    $.applyIf(data, {dateFmt: 'yyyy-MM-dd', readOnly: true});
                    WdatePicker(data);
                });
            });
        }

        if ($('.drop').length) {
            $('.drop').each(function () {
                var v = $(this).attr('rel');
                if (v) {$(this).val(v);};
            })
        };

        if ($('.required').length) {
            $('.required').each(function () {
                var _self = $(this);
                if (_self.hasClass('hk_time') || _self.hasClass('hk_date')) {
                    _self.addClass('txt_requireDate');
                }
                if (_self.hasClass('hk_choice') || _self.hasClass('hk_pop')) {
                    _self.addClass('hk_requirePop');
                }
            });
        }
        if ($('.hk_drop').length) {
            $('.hk_drop').each(function () {
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

        if ($('.hk_pop').length) {
            $('.hk_pop').each(function () {
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
                if (myOpt.type =='grid') {
                     _self.click(function() {
                        myOpt.textId = myOpt.textId || this.name;
                        $pop.popGrid(myOpt,this);
                    });
                };

            });
        };
        // 下拉框初始化
        if ($("select.hk_select").length) {
            var codes = [], params = {muti: true};
            var ss = $("select.hk_select");
            ss.each(function () {
                var data = $T.data(this) || {};
                if (data.textTo) {
                    $(this).change(
                        data.textTo,
                        function (e) {
                            $("#" + e.data + ",[name=" + e.data + "]").val(
                                $("option:checked", this).text());
                        });
                }
                if (data.params) {
                    $.extend(params, data.params);
                }
                if (data.head) {
                    if (typeof data.head == 'string') {
                        this.options[this.length] = new Option(data.head, "");
                    } else {
                        this.options[this.length] = new Option(data.head[1], data.head[0]);
                    }
                }
                codes.push(data.code);
            });
            params._code = codes.join(',');
            $ajax.post("/sys/widget/select.htm", params).done(function (rst) {
                if (rst.state) {
                    var data = rst.data;
                    ss.each(function () {
                        var mData = $T.data(this);
                        var list = data[mData.code];
                        if (!list) {
                            alert("未配置下拉框数据源" + mData.code);
                            return;
                        }
                        for (var i = 0; i < list.length; i++) {
                            var d = list[i];
                            var opt = new Option(d.text, d.id);
                            if ((d.id + '') === mData.initValue)
                                opt.selected = true;
                            $.each(d, function (k, v) {
                                $(opt).attr('data-' + k, v);
                            });
                            this.options[this.length] = opt;
                        }
                    });
                } else {
                    alert("未配置下拉框[" + _code + "]数据源!");
                }
            });
        }
    },
    /**
     * 页面表单验证
     */
     validate : function () {
       var me = this;
       $('.btn-easyFormSubmit').bind('click',function() {
           var $btn = $(this);
           var $form = $btn.parents('.form-validate');
           var validate = $form.form("validate");
           var back = false;
           if(validate){
             var formData = $T.data($form);//form个性化附加数据
             var loadingIndex = null;//loading容器
             var msg = $btn.attr("msg") || "您确定要提交吗?";//确认框提示信息
             var action = $btn.attr("action") || $form.action;//表单请求地址
             var formSubmitEvent = me.formSubmitEvent(action,formData,loadingIndex);

             layer.confirm(msg, {
               icon: 0, title:false,btnAlign: 'c'
             }, function(index){
                 layer.close(index);
                 $form.form('submit',formSubmitEvent);
             });
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
                     $util.closePop();
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
    validate2: function (formCls) {
        formCls = formCls || ".hk_form";
        if ($(formCls).length > 0) {
            var $form = $(formCls).validate({
                // focusInvalid: true,
                // debug : true,
                // onkeyup: true,
                // onfocusout: false,
                errorPlacement: function (lable, element) {
                    if (element.data('errpos')==1) {
                        lable.insertAfter(element);
                    }else{
                        $(element).tooltip({content: lable.html(), position: 'right', hideDelay: 0}).tooltip("show");
                    };
                    // window.console && console.log(lable,lable[0].innerHTML);
                },
                success: function (lable, element) {
                    $(element).tooltip("destroy");
                },
                submitHandler: function (vform) {
                    var msg = $(this.submitButton).attr("tip") || $p.submitTip;
                    var action = $(this.submitButton).attr("action") || vform.action;
                    $(".hk_form .txta,:input").tooltip("destroy");
                    var data = $T.data(vform), params;
                    window.console && console.log(data);
                    if (typeof (data.params) == 'function') {
                        params = data.params();
                    } else {
                        params = data.params || {};
                    }
                    var paramsHtml = '';
                    $.each(params,function (k,v) {
                        paramsHtml += '<input type="hidden" name="'+k+'" value="'+v+'">';
                    });
                    $(vform).append(paramsHtml);
                    if ($('.hk_editor_required').length) {//富编辑框必填验证
                        var state = true;
                      $('.hk_editor_required').each(function () {
                        var ueName = $(this).attr('class').match(/editorkey_.+/g)||['editorkey_eyeUe'];
                        ueName = ueName[0].split(/ |_/)[1];
                        // window.console && console.log(ueName,window[ueName].hasContents());
                        if (window[ueName].hasContents()) {
                            $('.editorkey_'+ueName).tooltip("destroy");
                        }else{
                            $('.editorkey_'+ueName).tooltip({content: '内容为必填！', position: 'right', hideDelay: 0});
                            state =false;
                        };
                      });
                      if (!state) { return false;};
                    };
                    var callSumbit = true;
                    if (data.beforeCallback) {//提交之前事件函数
                        callSumbit = window[data.beforeCallback](data);
                    };
                    //$.applyIf(params, $(vform).serializeObject(data.dataToString));
                    params = $(vform).serialize();
                    var fn = function (rst) {
                        parent.window._refreshParent = true;
                        //window.console && console.log(data.callback);
                        if (data.callback){
                            var callName = data.callback.split('||');
                            $.each(callName,function (i,v) {
                                window[v]&&window[v](rst,data);
                            });
                        }
                        if (rst.state) {$util.closePop();};

                        if (data.submitClear)$(data.submitClear).val("");
                    }
                    if (callSumbit) {
                    $ajax.post(action, params, msg).done(fn);
                    };
                    return false;
                }
            });
            return $form;
        }
    },
    easyValidate3: function (formCls) {
        formCls = formCls || ".easy-form";
        if ($(formCls).length) {
            $(formCls).form({
                onSubmit: function () {
                    var fm = $(this), url = fm.attr("action"), data = $T.data(this);
                    var rst = fm.form("validate");
                    if (rst) {
                        $ajax.post(url, $(this).vals(), true).done(function (rst) {
                            if (rst.state) {
                                if (data.callback) data.callback(rst);
                                $page.markRefreshParent();
                                if (data.submitClear) $(data.submitClear).val("");
                                if (fm.find(".chk_close").is(":checked")) {
                                    var pLayer = parent.layer, wName = window.name;
                                    setTimeout(function () {
                                        var index = pLayer.getFrameIndex(wName);
                                        pLayer.close(index);
                                    }, 1000);
                                }
                            }
                        });
                    }
                    return false;
                }
            });
        };
    },
    popGrid: function (cls) {
        cls = cls || '.hk_popGrid';
        if ($(cls).length) {
            $(cls).click(function () {
                var data = $T.data(this);
                data.textId = data.textId || this.name;
                $pop.popGrid(data,this);
            });
        }
    },
    popTree: function (cls) {
        cls = cls || '.hk_popTree';
        $(cls).click(function () {
            var data = $T.data(this);
            data.textId = data.textId || this.name;
            $pop.popTree(data);
        });
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


var JPlaceHolder = {
    init : function(){//初始化
        if(!this._check()){
            this.fix();
        }
    },
    _check : function(){//检测
        return 'placeholder' in document.createElement('input');
    },
    fix : function(){//修复
        $(':input[placeholder]').each(function(index, element) {
            var self = $(this), txt = self.attr('placeholder');
            self.wrap($('<span></span>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none'}));
            var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
            var holder = $('<span class="s-placeholder"></span>').text(txt).css({position:'absolute', left:(pos.left+8), top:(pos.top+1), height:h, lineHeight:h+'px', paddingLeft:paddingleft, color:'#aaa'}).appendTo(self.parent());
            if (self.val()) {holder.hide();};
            self.focusin(function(e) {
                holder.hide();
            }).focusout(function(e) {
                if(!self.val()){
                    holder.show();
                }
            });
            holder.click(function(e) {
                holder.hide();
                self.focus();
            });
        });
    }
};

$(function () {
    $hook.widget();//存放比较零碎的
    $hook.validate();
    $hook.search();
    $hook.popGrid();
    $hook.popTree();
    $hook.wdDate();
    JPlaceHolder.init();
});

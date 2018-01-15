define(['pub'],function(){
  var edit = {
    eIndex : undefined,//当前编辑指针
    endEditing : function(grid){//结束编辑
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      if (me.eIndex == undefined){return true}
      if ($(grid).datagrid('validateRow', me.eIndex)){
        $(grid).datagrid('endEdit', me.eIndex);
        me.eIndex = undefined;
        return true;
      } else {
        return false;
      }
    },
    ifEndEdit : function (fn,grid) {//判断是否处在编辑状态，编辑状态退出执行事件
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      if (me.endEditing(grid)){
        fn&&fn();
      }else{
        layer.msg('请完成编辑！',{icon:0});
        // $pop.msg('请完成编辑！');
      }
    },
    getGridData : function (grid) {//获取grid当前行数据
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      var rows = null;
      me.ifEndEdit(function () {
        rows = $(grid).datagrid('getRows');
      },grid);
      return rows;
    },
    getChanges : function(grid){//获取grid edit的变化
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      var rows = null;
      me.ifEndEdit(function () {
        rows = $(grid).datagrid('getChanges');
      },grid);
      return rows;
    },
    rejectChanges : function(grid){//放弃编辑
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      $(grid).datagrid('rejectChanges');
    },
    delRows : function(grid,checked){//删除row，checked : true|false => getChecked|getSelections
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      // if (me.endEditing(grid)){
        var rows = $(grid).datagrid(checked?"getSelections":"getChecked");
        //window.console&&console.log(rows);
        $.each(rows,function(){
          var ix = $(grid).datagrid('getRowIndex',this)
          $(grid).datagrid('deleteRow',ix);
        })
      // }
    },
    addNewRow : function(focusField,grid,initData){//增加新的行，foucusField:默认focus的字段; grid: 对应的grid，默认为#gridBox ; initData:新增行初始化默认数据
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      var initData = initData || {};
      if (me.endEditing(grid)){
        $(grid).datagrid('appendRow',initData);
        var ix = $(grid).datagrid('getRows').length-1;
        me.editRow(ix,focusField,grid);
      }
    },
    editRow : function(index,focusField,grid,initData,wrap){//编辑行，index:行index; foucusField:默认focus的字段; grid: 对应的grid，默认为#gridBox ; initData:新增行初始化默认数据
      var me = this;
      // window.console&&console.log(me.eIndex,index);
      var grid = grid || '#gridBox';//默认值 #gridBox
      if (me.eIndex != index){

          var $gridWrap = wrap?$(wrap).find('.datagrid-wrap'):$('.datagrid-wrap');
          var $row = $gridWrap.find('.datagrid-row[datagrid-row-index="'+index+'"]');
          var canedit = $row.data('canedit');//获取是否被合并不能编辑
          if (canedit==='merge') {//合并后的行不允许编辑，会造成列错乱
            layer.msg('合并后的行不能编辑！',{offset:'t'});
            return false;
          };

          if (me.endEditing(grid)){//如果通过验证可以结束上一次编辑
            var rowLen = $(grid).datagrid('getRows').length;
            // window.console&&console.log('index:'+index+',rowLen:'+rowLen);
            if(index>=rowLen){//如果行号大于现在所有行，此行不存在
              var initData = initData || {};
              me.addNewRow(focusField,grid,initData);
            }else{//此行存在
              $(grid).datagrid('selectRow', index).datagrid('beginEdit', index);//开启选中行编辑
              me.eIndex = index;
              // window.console && console.log(me.eIndex);
              var ed = $(grid).datagrid('getEditor', {index:me.eIndex,field:focusField});
              // window.console && console.log(ed);
              var $t = $(ed.target);
              if ($t.hasClass('combo-f')) {
                $t = $t.parents('.x-editor').find('.textbox-text');
              };
              $t.focus();//选中行第一个字段focus

              // var $txt = $("input.datagrid-editable-input");
              var $txt = $(".datagrid-row-editing input:visible").filter(function () {
                if ($(this).hasClass('txt-editable-readonly')) {return false;};
                return true;
              });
              // var $txt = $(".datagrid-row-editing .datagrid-editable-input,.datagrid-row-editing .textbox-text")

              // window.console && console.log($txt);
              $txt.each(function(i,v){
                $(this).keyup(function(e){//绑定输入框keyup
                  if(e.keyCode==13){//回车到下一个输入框事件
                    var $next = $txt.eq(i+1);
                    if($next&&$next.length){//不是最后一个输入框
                      if($next.hasClass('combobox-f')){$next = $txt.eq(i+2)};//跳过下拉控件的隐藏输入框
                      $next.focus();
                    }else{//最后一个输入框，跳到下一行
                        var ix = me.eIndex+1;
                        // window.console&&console.log('最后输入框事件...',ix);
                        me.editRow(ix,focusField,grid);
                    }
                  }
                });
              });
              return me.eIndex;
            }
          } else {
            $(grid).datagrid('selectRow', me.eIndex);
            $('.validatebox-invalid,.textbox-invalid .textbox-text').each(function(i,v){//所有没有通过验证的输入框
              if(i===0){$(this).focus()}//第一个被focus
            });
          }

        };
    },
    _sortRow : function (index, type, grid) {//排序
      if ("up" == type) {
        if (index != 0) {
            var toup = $(grid).datagrid('getData').rows[index];
            var todown = $(grid).datagrid('getData').rows[index - 1];
            $(grid).datagrid('getData').rows[index] = todown;
            $(grid).datagrid('getData').rows[index - 1] = toup;
            $(grid).datagrid('refreshRow', index);
            $(grid).datagrid('refreshRow', index - 1);
            $(grid).datagrid('selectRow', index - 1);
        }
      } else if ("down" == type) {
          var rows = $(grid).datagrid('getRows').length;
          if (index != rows - 1) {
              var todown = $(grid).datagrid('getData').rows[index];
              var toup = $(grid).datagrid('getData').rows[index + 1];
              $(grid).datagrid('getData').rows[index + 1] = todown;
              $(grid).datagrid('getData').rows[index] = toup;
              $(grid).datagrid('refreshRow', index);
              $(grid).datagrid('refreshRow', index + 1);
              $(grid).datagrid('selectRow', index + 1);
          }
      }
    },
    moveRowUp : function (grid) {//往上
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      me.ifEndEdit(function () {
        var row = $(grid).datagrid('getSelected');
        var index = $(grid).datagrid('getRowIndex', row);
        me._sortRow(index, 'up', grid);
      },grid);
    },
    moveRowDown : function (grid) {//往下
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      me.ifEndEdit(function () {
        var row = $(grid).datagrid('getSelected');
        var index = $(grid).datagrid('getRowIndex', row);
        me._sortRow(index, 'down', grid);
      },grid);
    },
    mergeRowsCells : function (strArr,grid,wrap) {//合并行单元格 ,注：在页面有多个datagrid时需要配置datagrid的wrap对象，方便节点查找
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      var  $grid = $(grid);

      me.ifEndEdit(function () {
          var rows = $grid.datagrid("getChecked");
          if (rows&&rows.length) {
            var st = null;
            var ss = null;
            var rIndexArr = [];
            var canMerge = true;
            $.each(rows, function (i,v) {
              // window.console && console.log(st);
              var ri = $grid.datagrid("getRowIndex",v);
              rIndexArr.push(ri);
              if (i===0) {ss=ri;};
              if (st!==null) {
                if (ri==(st+1)) {
                  canMerge = true;
                  st = ri;
                }else{
                  canMerge = false;
                };
              }else{
                st = ri;
              };
            });

            if (canMerge) {
              // var len = rows.length;

              $grid.datagrid('clearChecked');
              var $gridWrap = wrap?$(wrap).find('.datagrid-wrap'):$('.datagrid-wrap');
              var rowLen = 0;
              $.each(rIndexArr,function (i,v) {
                var $row = $gridWrap.find('.datagrid-row[datagrid-row-index="'+v+'"]');
                $row.data('canedit','merge');
                var len = $row.data('rowspan');
                if (len) {//如果已经合并有rowspan值
                  len = len *1;
                  $row.removeData('rowspan');//清除row上的rowspan属性
                }else{
                  len = 1;
                };
                rowLen = rowLen+len;
                if(i>0){//隐藏checkbox
                  $row.find(':checkbox').hide();
                }
              });
              $gridWrap.find('.datagrid-row[datagrid-row-index="'+rIndexArr[0]+'"]').data('rowspan',rowLen);//给第一行赋值rowspan 为合并行数

              $.each(strArr,function(j,v){
                $grid.datagrid('mergeCells',{
                  index: ss,
                  field: v,
                  rowspan: rowLen
                });
              });
            }else{
              layer.msg('只能合并相邻行！',{icon:0});
            };

          }else{
              layer.msg('请选择合并行！',{icon:0});
          };
      },grid);
    },
    splitRowsCells : function (grid,wrap) {//拆分已合并的单元格 ,注：在页面有多个datagrid时需要配置datagrid的wrap对象，方便节点查找
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      var  $grid = $(grid);

      var rows = $grid.datagrid("getChecked");
      // window.console && console.log(rows);
      var $gridWrap = wrap?$(wrap).find('.datagrid-wrap'):$('.datagrid-wrap');
      if (rows&&rows.length) {
          $.each(rows, function (i,v) {
              var ni = $grid.datagrid("getRowIndex",v);
             // $grid.datagrid("refreshRow",ni);
              var $tr = $gridWrap.find('.datagrid-row[datagrid-row-index="'+ni+'"]');
              var rs = $tr.data('rowspan');//获取合并了多少行
              if (rs) {
                $tr.removeData('rowspan');//清除合并行数属性
                rs = rs*1;
                for (var i = 0; i < rs; i++) {//根据当前行往下找行并刷新
                  // window.console && console.log(ni);
                  var $row = $gridWrap.find('.datagrid-row[datagrid-row-index="'+ni+'"]');
                  $row.data('canedit','true');
                  $grid.datagrid("refreshRow" , ni );
                  ni++;
                };
              };
          });
          $grid.datagrid('clearChecked');
      }else{
          layer.msg('请选择拆分行！',{icon:0});
      };
    }
  }
  return edit;
});

define(['pub'],function(){
  var edit = {
    eIndex : undefined,
    endEditing : function(grid){//结束编辑
      var me = this;
      if (me.eIndex == undefined){return true}
      if ($(grid).datagrid('validateRow', me.eIndex)){
        $(grid).datagrid('endEdit', me.eIndex);
        me.eIndex = undefined;
        return true;
      } else {
        return false;
      }
    },
    getChanges : function(grid){//获取grid edit的变化
      var me = this;
      var grid = grid || '#gridBox';//默认值 #gridBox
      if (me.endEditing(grid)){
        return $(grid).datagrid('getChanges');
      }
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
    editRow : function(index,focusField,grid,initData){//编辑行，index:行index; foucusField:默认focus的字段; grid: 对应的grid，默认为#gridBox ; initData:新增行初始化默认数据
      var me = this;
      // window.console&&console.log(me.eIndex,index);
      var grid = grid || '#gridBox';//默认值 #gridBox
      if (me.eIndex != index){
        if (me.endEditing(grid)){//如果通过验证可以结束上一次编辑
          var rowLen = $(grid).datagrid('getRows').length;
          // window.console&&console.log('index:'+index+',rowLen:'+rowLen);
          if(index>=rowLen){//如果行号大于现在所有行，此行不存在
            var initData = initData || {};
            me.addNewRow(focusField,grid,initData);
          }else{//此行存在
            $(grid).datagrid('selectRow', index).datagrid('beginEdit', index);//开启选中行编辑
            me.eIndex = index;
            var ed = $(grid).datagrid('getEditor', {index:me.eIndex,field:focusField});
            $(ed.target).focus();//选中行第一个字段focus

            // var $txt = $("input.datagrid-editable-input");
            var $txt = $(".datagrid-row-editing input:visible");
            // window.console&&console.log($txt);
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
          }
        } else {
          $(grid).datagrid('selectRow', me.eIndex);
          $('.validatebox-invalid,.textbox-invalid .textbox-text').each(function(i,v){//所有没有通过验证的输入框
            if(i===0){$(this).focus()}//第一个被focus
          });
        }
      }
    }
  }
  return edit;
});

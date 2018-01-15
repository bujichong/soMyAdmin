define(['easygridEdit'],function ($e) {
    var back  ={
    init : function () {
      var editIndex = null;
      $grid.newGrid("#gridBox",{
        tools:[
        [
          {iconCls:'plus_sign',text:'新增',title:'新增',click:function(){
            $e.addNewRow('drugName','#gridBox',{state:1});
            editIndex = $('#gridBox').datagrid('getRows').length-1;
          }}
          ,{iconCls:'trash',btnCls:'danger',text:'删除',click:function (){
            $e.delRows('#gridBox');
          }}
        ],
        [{iconCls:'shrink2',text:'同组',click:function() {
          $e.mergeRowsCells(['drugName','type','rule'],'#gridBox','.gridWrap');
          }
        },{iconCls:'enlarge2',text:'拆分', click : function() {
          $e.splitRowsCells('#gridBox','.gridWrap');
          }
        }],
        [
          {iconCls:'refresh',btnCls:'warning',text:'获取数据',click:function (){
            var data = $e.getGridData();
            window.console&&console.log(data);
          }}
          ,{iconCls:'refresh',btnCls:'warning',text:'获取变化',click:function (){
            var rows = $e.getChanges('#gridBox',true);
            window.console&&console.log(rows);
          }}
          ,{iconCls:'repeat',btnCls:'warning',text:'重置变化',click:function(){
            $e.rejectChanges();
          }}
        ], [
          {iconCls:'arrow-up',btnCls:'warning',text:'向上',onlyOne:true,notNull:'请选择你要移动的记录！',click:function(){
            $e.moveRowUp();
          }}
          ,{iconCls:'arrow-down',btnCls:'warning',text:'向下',onlyOne:true,notNull:'请选择你要移动的记录！',click:function(){
            $e.moveRowDown();
          }}
        ]
        ],
         method:'get',
        rownumbers : true,
        fitColumns : false,
        // singleSelect : false,
        checkOnSelect : false,
        selectOnCheck : false,
        columns:[[
           {title:'id',field:'id',checkbox:true}
          ,{title:'操作',field:'op',width:70,formatter: function (v,row,index) {
            return '<span class="s-op s-op-del icon-del" rel="'+index+'" title="删除"></span>'
            //'<span class="s-op s-op-up icon-arrow-up" title="向上"></span> <span class="s-op s-op-down icon-arrow-down" title="向下"></span>'
          }}
          ,{title:'药品名称',field:'drugName',sortable:true,width:200,editor:{
                type:'combogrid',
                options:{
                  panelWidth:960,
                  striped:true,
                  method:'get',
                  idField:'drugName',
                  textField:'drugName',
                  url:'json/datatable.js',
                  columns:[[
                      {title:'药品名称',field:'drugName',width:180},
                      {title:'规格',field:'type',width:80},
                      {title:'单位',field:'rule',width:40},
                      {title:'用量',field:'use',width:80},
                      {title:'使用方法',field:'usetype',width:120},
                      // {title:'数量',field:'num',width:40},
                      {title:'进价',field:'inprice',width:40},
                      {title:'售价',field:'outprice',width:40},
                      {title:'产地',field:'from',width:120},
                      {title:'库存',field:'innum',width:80},
                      {title:'供应商',field:'saler',width:170}
                  ]],
                  onSelect : function (val,record){
                      // console.log(editIndex,val,record,$(this));
                      var gridData = $('#gridBox').datagrid('getData');
                      // window.console && console.log(gridData);
                      var newData = {
                        type : record.type,
                        rule : record.rule,
                        use : record.use,
                        usetype : record.usetype,
                        num : '',
                        inprice : record.inprice,
                        outprice : record.outprice,
                        from : record.from,
                        innum : record.innum,
                        saler : record.saler
                      };
                      $.each(newData,function (k,v) {
                        var $td = $('.datagrid-view2 .datagrid-body').find('tr').eq(editIndex).find('td[field="'+k+'"]');
                        if ($td.hasClass('x-editor')) {
                          $td.find('input').val(v);
                        }else{
                          $td.find('div').text(v);
                        };
                      });

                  },
                  onChange : function () {
                    editIndex = $(this).parents('tr.datagrid-row').attr('datagrid-row-index');
                  },
                  required:true
                }
              }
            }
          ,{title:'规格',field:'type',sortable:true,width:100,editor:{type:'readonly'}}
          ,{title:'单位',field:'rule',sortable:true,width:100,editor:{type:'readonly'}}
          ,{title:'用量',field:'use',sortable:true,width:100,editor:{type:'readonly'}}
          ,{title:'使用方法',field:'usetype',sortable:true,width:160,editor:{type:'readonly'}}
          ,{title:'数量',field:'num',sortable:true,width:100,editor:{type:'keyup',options:{validType:'pInt["数量必须为正整数"]',required:true,missingMessage:'请填写数量',keyup:{less:'innum',msg:'数量必须小于库存'}}}}
          // ,{title:'数量',field:'num',sortable:true,width:100,editor:{type:'numberbox',options:{validType:'pInt["数量必须为正整数"]',required:true,missingMessage:'请填写数量'}}}
          ,{title:'进价',field:'inprice',sortable:true,width:100,editor:{type:'numberbox',options:{validType:'pNumber["进价必须为正数"]'}}}
          ,{title:'售价',field:'outprice',sortable:true,width:100,editor:{type:'text'}}
          ,{title:'库存',field:'innum',sortable:true,width:100,editor:{type:'readonly'}}
          ,{title:'产地',field:'from',sortable:true,width:170,editor:{type:'readonly'}}
          ,{title:'供应商',field:'saler',sortable:true,width:190,editor:{type:'readonly'}}
        ]],
        onClickRow : function (index){
          editIndex = $e.editRow(index,'drugName','#gridBox');
    		},
        // onDblClickRow: function (index, row) {
        //     $('#gridBox').datagrid("beginEdit", index);
        // },
        onLoadSuccess : function () {
          $('.datagrid-btable').on('click','.s-op-del',function() {//删除单条
            var  $tr = $(this).parents('.datagrid-btable').find('tr.datagrid-row');
            var $thisTr = $(this).parents('tr.datagrid-row');
            var ix = $tr.index($thisTr);
            $pop.confirm('你确定删除此条记录吗？',function () {
              $('#gridBox').datagrid('deleteRow',ix);
              return true;
            });
            return false;
          });
        }
        ,url:'json/datatable.js'
        // ,offset : -50
      });

      // $('#gridBox').datagrid("columnMoving");
    }
  }

  return back;
});

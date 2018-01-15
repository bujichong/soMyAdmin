define(['easygridEdit'],function ($e) {

    var back  ={
    init : function () {

      $grid.newGrid("#gridBox",{
        tools:[
        [
          {iconCls:'plus_sign',text:'新增',title:'用户信息-新增',click:function(){
            $e.addNewRow('userName','#gridBox',{state:1});
          }}
          ,{iconCls:'pencil',btnCls:'warning',text:'修改',onlyOne:true,popHeight:400,popWidth:560,popMax:true,url:'userForm.html?id={id}',title:'用户信息-修改',notNull:'请选择你要修改的记录!'}
          ,{iconCls:'trash',btnCls:'danger',text:'删除',click:function (){
            $e.delRows('#gridBox');
          }}
          ,{iconCls:'refresh',btnCls:'warning',text:'获取变化',click:function (){
            var rows = $e.getChanges('#gridBox',true);
            window.console&&console.log(rows);
          }}
          ,{iconCls:'repeat',btnCls:'warning',text:'重置变化',click:function(){
            $e.rejectChanges();
          }}
          // ,[{iconCls:'user_md',text:'分配角色',url:'userRole.html?id={id}',onlyOne:true,popHeight:440,popWidth:560,title:'用户信息-分配角色',notNull:'请选择你要分配角色的用户！'}
        ]],
        rownumbers : false,
        fitColumns : false,
        // singleSelect : false,
        checkOnSelect : false,
        selectOnCheck : false,
        columns:[[
           {title:'id',field:'id',checkbox:true}
          ,{title:'用户名',field:'userName',sortable:true,width:100,editor:{type:'validatebox',options:{required:true,missingMessage:'请填写用户名'}}}
          ,{title:'姓名',field:'realName',sortable:true,width:100,editor:{type:'text'}}
          ,{title:'性别',field:'sex',sortable:true,width:100,formatter:function(r){
                return ['','男','女'][r];
              },editor:{
                type:'combobox',
                options:{
                  textField: 'text',
                  valueField: 'value',
                  data: [{text: '男',value: '1'},{text: '女',value: '2'}],
                  required:true
                }
              }
            }
            ,{title:'状态',field:'state',width:100,formatter:function(r){
              var stateHtml = ['','<span class="green">正常</span>','<span class="orange">停用</span>'];
                  // window.console && console.log(r);
                  return stateHtml[r];
                }
                // ,editor:{type:'checkbox',options:{on:'1',off:'2'}}
              }
          ,{title:'部门',field:'orgName',sortable:true,width:120
          // ,editor:{type:'text'}
        }
          ,{title:'手机号',field:'mobile',width:120,editor:{type:'text'}}
          ,{title:'Email',field:'email',width:120,editor:{type:'validatebox',options:{validType:'many["email","maxlength[30,\'email超长\']"]'}}}
          // ,{title:'微信号',field:'weChat',width:140}
          ,{title:'最后登录时间',field:'lastLoginTime',width:150,editor:{type:'datetimebox'}}
          // ,{title:'最后登录IP',field:'lastLoginIp',width:130}
            ,{title:'QQ',field:'QQ',width:140,editor:{type:'text'}}
          // ,{title:'创建日期',field:'createTime',width:150,format:'yyyy-MM-dd hh:mm:ss'}
          // ,{title:'最后修改时间',field:'lastModifyTime',width:150}
        ]],
        onClickRow : function (index){
          $e.editRow(index,'userName','#gridBox');
    		},
        // onDblClickRow: function (index, row) {
        //     $('#gridBox').datagrid("beginEdit", index);
        // },
        url:'json/users.js'
        // ,offset : -50
      });
    }
  }

  return back;
});

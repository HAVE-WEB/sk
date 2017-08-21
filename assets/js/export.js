$("#strongBig").mvalidate({
    type:1,
    onKeyup:true,
    validateInSubmit:true,
    sendForm:true,
    firstInvalidFocus:false,
    valid:function(event,options){
        //点击提交按钮时,表单通过验证触发函数
        //alert("验证通过！接下来可以做你想做的事情啦！");

//                var rem = new Rem();
//                rem.setBottonNavIndexBySubmit(0);
        sessionStorage.setItem('bottomNavIndex',0);
        $("#my-confirm").modal({
            onConfirm: function () {

                alert("aaa");
                location.href='strong-big-readList.html';

            },
            onCancel: function () {
                return false;
            }
        });
        alert("bbb");
        event.preventDefault();
    },
    invalid:function(event, status, options){
        //点击提交按钮时,表单未通过验证触发函数
    },
    eachField:function(event,status,options){
        //点击提交按钮时,表单每个输入域触发这个函数 this 执向当前表单输入域，是jquery对象
    },
    eachValidField:function(val){},
    eachInvalidField:function(event, status, options){},
    conditional:{
        confirmpwd:function(){
            return $("#pwd").val()==$("#confirmpwd").val();
        }
    },
    descriptions:{
        registerName:{
            required : '请输入登记事宜名称'
        },
        meetingType:{
            required : '请选择会议类型'
        },
        isCenterAudit : {
            required : '请选择是否中心审核',
        },
        putOnRecord:{
            required : '请输入备案'
        },
        conclusion:{
            required : '请输入结论',
        },
        informObject:{
            required : '请选择通知对象',
        },
        meetingRecord:{
            required : '请选择会议记录',
        },
        relatedAccessory:{
            required : '请上传附件',
        },

    }
});
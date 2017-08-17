;(function (window, document) {

})(window,document);
(function (window, document) {

})(window,document);

!function (widow, document) {
    
}(window, document);




(function (window,$) {
    function Rem() {
        //定义属性
        this.innerWidth = 0;//屏幕宽度
        this.innerHeight = 0;//屏幕高度

        //为属性赋值
        this.innerWidth = window.screen.width;
        this.innerHeight = window.screen.height;

        //模块对象
        var moduleName = sessionStorage.getItem('moduleName');
        var moduleEng = sessionStorage.getItem('moduleEng');
        var moduleId = sessionStorage.getItem('moduleId');
        // var flag = sessionStorage.getItem('flag');
        this.moduleName = moduleName;
        this.moduleEng = moduleEng;
        this.moduleId = moduleId;
        // this.flag = flag;
        //菜单对象
        var menuEng = sessionStorage.getItem('menuEng');
        var menuName = sessionStorage.getItem('menuName');
        this.menuEng = menuEng;
        this.menuName = menuName;

        //字段对象
        var inputType=['text','password','radio','checkbox','file'];
        this.inputType = inputType;
        var fieldName = sessionStorage.getItem('fieldName');
        var fieldEng = sessionStorage.getItem('fieldEng');
        var fieldType = sessionStorage.getItem('fieldType');
        var readOnly = sessionStorage.getItem('readOnly');
        var oneOrMany = sessionStorage.getItem('oneOrMany');

        this.fieldName = fieldName;
        this.fieldEng = fieldEng;
        this.fieldType = fieldType;
        this.readOnly = readOnly;
        this.oneOrMany = oneOrMany;

        //获取底部导航栏点击的索引
        var bottomNavIndex = sessionStorage.getItem('bottomNavIndex');

        this.bottomNavIndex= bottomNavIndex;




        this.adapterWidth_object = function () {//对象方法
            var self = this;
            var num = self.innerWidth;
            if(num <= 375){//iphone6的宽度一下 字体大小为14px
                $("html").css("font-size","14px");//百分比对象的字体大小为14px，0.875em
            }else if(num <= 414){//宽度在iphone6-iphone6s之间
                $("html").css("font-size","16px");//16px
            }else if(num <= 768){
                $("html").css("font-size","24px");
            } else {
                $("html").css("font-size","30px");
            }
            $("body").css("font-size","1rem");
            $("input").css("font-size","1rem");
            $("input:checkbox").parent().each(function () {
                $(this).css("font-size","1rem")
            });
            $("input:checkbox").each(function () {
                $(this).css({
                    width: "1rem",
                    height: "1rem",

                }).css("margin-right","6px");
            });
            $("input:radio").each(function () {
                $(this).css({
                    width: "1rem",
                    height: "1.5rem",
                });
            });
            $(":submit").css("font-size","1rem");
            $(":button").css("font-size","1rem");
        };
        Rem.adapterWidth_class = function () {//类方法
            var num =window.innerWidth;
            if(num <= 375){//iphone6的宽度一下 字体大小为14px
                $("html").css("font-size","14px");//百分比对象的字体大小为14px，0.875em
                $("body").css("font-size","1rem");
                $("input").css("font-size","1rem")
                $(":submit").css("font-size","1rem");
                $(":button").css("font-size","1rem");
            }else if(num <= 414){//宽度在iphone6-iphone6s之间
                $("html").css("font-size","16px");//16px
                $("body").css("font-size","1rem");
                $("input").css("font-size","1rem")
                $(":submit").css("font-size","1rem");
                $(":button").css("font-size","1rem");
            }else if(num <= 768){
                $("html").css("font-size","20px");
                $("body").css("font-size","1rem");
                $("input").css("font-size","1rem")
                $(":submit").css("font-size","1rem");
                $(":button").css("font-size","1rem");
            } else {
                $("html").css("font-size","30px")
                $("body").css("font-size","1rem");
                $("input").css("font-size","1rem")
                $(":submit").css("font-size","1rem");
                $(":button").css("font-size","1rem");
            }
        };
        Rem.insertSearch = function () {
           var state =$('.search-div').css('display');
           if(state === 'none'){
               $('.search-div').css('display','block');
           }else{
               $('.search-div').css('display','none');
           }
        };
        Rem.setBottonNavIndex=function (i) {
            sessionStorage.setItem('bottomNavIndex',i);
            if($(this).html() === '发布' || $(this).html() === '存为草稿'){
                var result = this.getConfirmResult();
                alert('result'+result);
                if(result === 0){
                    return true;
                }else {
                    return false;
                }
            }
        };
        Rem.init= function () {
            var bottomNavIndex = this.bottomNavIndex;
            if(parseInt(bottomNavIndex) === 0){
                this.topNav();
                this.contentListRead();
                this.bottomNav();
                this.adapterWidth_object();
            } else if(parseInt(bottomNavIndex) === 1){
                this.topNavInput();
                this.bottomNav();
                this.adapterWidth_object();
                this.titleCenter();
            } else if( parseInt(bottomNavIndex) === 2){
                this.topNav();
                this.contentListCheck();
                this.bottomNav();
                this.adapterWidth_object();
            }
        }
    }
    Rem.prototype = {
            init:function () {
                this.initPage();
                var bottomNavIndex = this.bottomNavIndex;
                var moduleId = this.moduleId;
                var flag = sessionStorage.getItem('flag');//true:表示在首页，false：在各个模块中的菜单
                console.log("flag:"+flag+",in:"+parseInt(bottomNavIndex));
                if(flag === 'true'){
                    this.adapterWidth_object();
                    this.weiXinBrowers();
                }else{
                    if(parseInt(bottomNavIndex) === 0){
                        this.topNav();
                        this.contentListRead();
                    } else if(parseInt(bottomNavIndex) === 1){
                        this.topNavInput();
                        this.titleCenter();
                        // this.dataRowInput();
                        this.getDictData();
                        this.setSearchDict();
                        // this. my_modal();
                        this.my_confirm();
                    } else if( parseInt(bottomNavIndex) === 2){
                        this.topNav();
                        this.contentListCheck();
                    }
                    this.bottomNav();
                    this.adapterWidth_object();
                }
            },
            initPage: function () {//根据不同页面，来设置flag的值
                var pathname = location.pathname;
                var pathArr = pathname.split('/');
                var lastStr = pathArr[pathArr.length-1];
                var tempArr = lastStr.split('.');
                if(tempArr.length !== 2){
                    alert('命名不规范');
                    return;
                }
                if(tempArr[1] !== 'html'){
                    alert('页面不是html文件');
                    return;
                }
                var pageName = tempArr[0];
                var pageNameArr = pageName.split('-');
                var t =pageNameArr[pageNameArr.length-1];
                if(t === 'check' || t === 'input' || t === 'read'){
                    sessionStorage.setItem('flag','false')
                }else{
                    sessionStorage.setItem('flag','true')
                }
            },
            getPageName: function () {//根据不同页面，来设置flag的值
            var pathname = location.pathname;
            var pathArr = pathname.split('/');
            var lastStr = pathArr[pathArr.length-1];
            var tempArr = lastStr.split('.');
            if(tempArr.length !== 2){
                alert('命名不规范');
                return;
            }
            if(tempArr[1] !== 'html'){
                alert('页面不是html文件');
                return;
            }
            var pageName = tempArr[0];
            var pageNameArr = pageName.split('-');
            var t =pageNameArr[pageNameArr.length-1];
            return t;
        },
            getPageNameCallback: function (callback_fun) {//根据不同页面，来设置flag的值
            var pathname = location.pathname;
            var pathArr = pathname.split('/');
            var lastStr = pathArr[pathArr.length-1];
            var tempArr = lastStr.split('.');
            if(tempArr.length !== 2){
                alert('命名不规范');
                return;
            }
            if(tempArr[1] !== 'html'){
                alert('页面不是html文件');
                return;
            }
            var pageName = tempArr[0];
            var pageNameArr = pageName.split('-');
            var t =pageNameArr[pageNameArr.length-1];
            if(typeof callback_fun == 'function'){
                callback_fun(t);
            }
            return t;
        },
            getDictData: function () {
                $(document).ready(function () {
                    var result = sessionStorage.getItem('result');
                    var code =sessionStorage.getItem('dictCode');
                    if(code !== null && result !== null){
                        var len = code.length;
                        var lastNum = code.charAt(len-1);
                    }

                    if(code !== null && result !== null){
                        $('.dict-data').each(function (i) {
                            if(parseInt(lastNum) === i){
                                if($(this)[0].nodeName ===  'DIV'){
                                    $(this).html(result);
                                }else{
                                    $(this).val(result)
                                }
                            }
                        });
        //                 if(code === '11'+$('input:read-only').length){
        // //                 var str1='<div name="meetingDiv"><a  key="btn-choose-meetingName" onclick="meetingDetail(\''+$.trim(meetingUseIdArr[i])+'\')">'+s+',';
        // //                 var str2 ='</a><input type="hidden" id="meetingId" name="meetingId" value="'+$.trim(meetingUseIdArr[i])+'"/></div>' ;
        //                     $("div.meeting-record").html(result);
        //                     sessionStorage.removeItem('result');
        //                     sessionStorage.removeItem('val');
        //                     sessionStorage.removeItem('type')
        //                 }else{
        //                     var l = code.length;
        //                     var lastNum = code.charAt(l-1);
        //                     $('input:read-only').eq(lastNum).val(result);
        //                     sessionStorage.removeItem('result');
        //                     sessionStorage.removeItem('val');
        //                     sessionStorage.removeItem('type')
        //                 }

                    }
                    sessionStorage.removeItem('result');
                    sessionStorage.removeItem('val');
                    sessionStorage.removeItem('type')

                });
            },
            setSearchDict: function () {
                var om = this.oneOrMany;
                console.log('om:'+om);
                var oneOrMany =om.split(',');
                if(oneOrMany.length === $("div.am-g").length){
                    alert('数组长度不匹配');
                    return;
                }
                $("div.am-g").click(function () {
                    var eleInput = $(this).find('.dict-data')[0];
                    $('.dict-data').each(function (i,v) {
                        if(eleInput == v){
                            sessionStorage.setItem('dictCode','11'+i);//第一个1代表是党政模块的，第二个1代表的是三重一大，第三个1代表的是需要查询的第一个词典
                            if($(this)[0].nodeName === 'DIV'){
                                sessionStorage.setItem('val',$(this).html())
                            }else{
                                sessionStorage.setItem('val',$(this).val());
                            }
                            if(parseInt(oneOrMany[i]) === 0){
                                sessionStorage.setItem('type','radio');
                            }else{
                                sessionStorage.setItem('type','checkbox');
                            }
                            location.href='../dict-search.html'
                        }
                    });
                })
            },
            dataRowInput: function () {
                var top1 = '<div style="margin-top: 3rem;">\n'+
                    '<form id="strongBig" class="smart-form" novalidate="novalidate" action="" method="post">\n' +
                    '<fieldset>\n';
                var bot1 ='</fieldset>\n' +
                    '</form>\n' +
                    '</div>\n';
                //通用部分
                var common0 = '<div class="am-g sl-border-bottom-1px-solid-E6E6E6 sl-padding-08rem-0rem">\n' +
                    '                <div class="am-u-sm-4 am-u-md-4 am-u-lg-4 sl-flex-row-center-flex-start sl-padding-0rem-05rem">\n' +
                    '                    ';

                //文本类型
                var text0 = '\n' +
                    '                </div>\n' +
                    '                <div class="am-u-sm-8 am-u-md-8 am-u-lg-8 sl-flex-row-center-flex-start sl-padding-0rem-05rem">\n' +
                    '                    <input type="text" name="';
                var text0_ro = '\n' +
                    '                </div>\n' +
                    '                <div class="am-u-sm-8 am-u-md-8 am-u-lg-8 sl-flex-row-center-space-between sl-padding-0rem-05rem">\n' +
                    '                    <input type="text" name="';
                var text1 = '"  placeholder="请输入';
                var text1_ro = '"  placeholder="请选择';
                var text2 = '" value="" >\n' +
                    '                </div>\n' +
                    '            </div>';
                var text2_ro = '" value="" readonly>\n' +
                    '           <i class="fa fa-angle-right sl-icon-color-CACACA"></i>\n' +
                    '                </div>\n' +
                    '            </div>';

                //div类型
                var div0 = '\n' +
                    '                </div>\n' +
                    '                <div class="am-u-sm-8 am-u-md-8 am-u-lg-8 sl-flex-row-center-space-between sl-padding-0rem-05rem">\n' +
                    '                    <div class="meeting-record">请选择';
                var div1 = '</div>\n' +
                    '                    <i class="fa fa-angle-right sl-icon-color-CACACA"></i>\n' +
                    '                </div>\n' +
                    '            </div>';

                //file类型
                var file0 = '<div class="am-g sl-margin-top-10px sl-flex-row-center-center">\n' +
                    '                <div class="am-u-sm-6 am-u-md-6 am-u-lg-6">\n' +
                    '                    <div class=" am-form-file">\n' +
                    '                        <button type="button" class="am-btn am-btn-danger am-btn-sm">\n' +
                    '                            <i class="am-icon-cloud-upload"></i> 上传附件</button>\n' +
                    '                        <input id="doc-form-file" type="file" multiple onchange="html5Upload()">\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '                <div class="am-u-sm-6 am-u-md-6 am-u-lg-6 sl-flex-row-center-center sl-padding-0px">\n' +
                    '                    <span class="" id="hintImage" style="display: none">点击文件删除文件、<br/>最多上传3个文件</span>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '            <ul class="am-avg-sm-4 am-avg-md-4 am-avg-lg-4" id="result">\n' +
                    '            </ul>';


                var fieldName = this.fieldName.split(',');
                var fieldEng = this.fieldEng.split(',');
                var fieldType = this.fieldType.split(',');
                var readOnly = this.readOnly.split(',');
                var inputType = this.inputType;

                //alert("n:"+typeof fieldName+",e:"+ typeof fieldEng+",t:"+ typeof fieldType)
                //alert("n:"+fieldName+",e:"+ fieldEng+",t:"+ fieldType)
                //alert("n:"+fieldName.length+",e:"+fieldEng.length+",t:"+fieldType.length)
                if(fieldName.length !== fieldEng.length || fieldName.length !== fieldType.length){
                    alert('定义的数组的长度不相等');
                    return;
                }
                var len = fieldName.length;
                var data = '';
                for(var i=0; i < len; i++){
                    if(parseInt(fieldType[i]) >= 0){
                        if(inputType[parseInt(fieldType[i])] === 'text'){
                            if(parseInt(readOnly[i]) === 1){//只读字段
                                data += common0 + fieldName[i] + text0_ro + fieldEng[i] + text1_ro + fieldName[i] + text2_ro;
                            }else{
                                data += common0 + fieldName[i] + text0+fieldEng[i] + text1 + fieldName[i] + text2;
                            }
                        }else if(inputType[fieldType[i]] === 'file'){
                                data += file0;
                        }
                    }else{
                        data += common0 + fieldName[i] + div0 + fieldName[i] + div1;
                    }
                }
                var d = top1 + data + bot1;
                $('body').append(d);

                // this.searchDict();


            },
            searchDict: function () {
                //点击div,跳转页面
                $("div.am-g").click(function () {
                    var eleInput = $(this).find('input:read-only')[0];
                    $('input:read-only').each(function (i,v) {
                        if(eleInput == v){
                            sessionStorage.setItem('dictCode','11'+i);//第一个1代表是党政模块的，第二个1代表的是三重一大，第三个1代表的是需要查询的第一个词典
                            sessionStorage.setItem('val',$(this).val());
                            if(i === 0){
                                sessionStorage.setItem('type','radio');
                            }else{
                                sessionStorage.setItem('type','checkbox');
                            }
                            location.href='../dict-search.html'
                        }
                    });
                    if( $(this).find('div').hasClass('meeting-record')){
                        sessionStorage.setItem('dictCode','112');
                        sessionStorage.setItem('val',$(this).find('div.meeting-record').html());
                        sessionStorage.setItem('type','checkbox');
                        location.href='../dict-search.html'
                    }
                })
            },
            adapterWidth_prototype: function () {
                var self = this;
                var num = self.innerWidth;
                if(num <= 375){//iphone6的宽度一下 字体大小为14px
                    $("html").css("font-size","14px");//百分比对象的字体大小为14px，0.875em
                    $("body").css("font-size","1rem");
                    $("input").css("font-size","1rem")
                    $(":submit").css("font-size","1rem");
                    $(":button").css("font-size","1rem");
                }else if(num <= 414){//宽度在iphone6-iphone6s之间
                    $("html").css("font-size","16px");//16px
                    $("body").css("font-size","1rem");
                    $("input").css("font-size","1rem")
                    $(":submit").css("font-size","1rem");
                    $(":button").css("font-size","1rem");
                }else if(num <= 768){
                    $("html").css("font-size","20px");
                    $("body").css("font-size","1rem");
                    $("input").css("font-size","1rem")
                    $(":submit").css("font-size","1rem");
                    $(":button").css("font-size","1rem");
                } else {
                    $("html").css("font-size","30px")
                    $("body").css("font-size","1rem");
                    $("input").css("font-size","1rem")
                    $(":submit").css("font-size","1rem");
                    $(":button").css("font-size","1rem");
                }
            },
            my_confirm: function () {
                var confirm = '<div class="am-modal am-modal-confirm" tabindex="-1" id="my-confirm">\n' +
                    '  <div class="am-modal-dialog">\n' +
                    '    <div class="am-modal-hd">提示信息</div>\n' +
                    '    <div class="am-modal-bd">\n' +
                    '     确认提交么？\n' +
                    '    </div>\n' +
                    '    <div class="am-modal-footer">\n' +
                    '      <span class="am-modal-btn" data-am-modal-cancel>取消</span>\n' +
                    '      <span class="am-modal-btn" data-am-modal-confirm>确定</span>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>';
                $("body").append(confirm);
            },
            my_modal: function () {
                var m = '<div class="am-modal am-modal-no-btn" tabindex="-1" id="your-modal">\n' +
                    '  <div class="am-modal-dialog">\n' +
                    '    <div class="am-modal-hd">Modal 标题\n' +
                    '      <a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>\n' +
                    '    </div>\n' +
                    '    <div class="am-modal-bd">\n' +
                    '      Modal 内容。\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>';
                $('body').append(m);
            },
            alert_modal: function (message) {
                var m ='<div class="am-modal am-modal-alert" tabindex="-1" style="border-radius: 1000px" id="my-alert">\n' +
                    '  <div class="am-modal-dialog">\n' +
                    '    <div class="am-modal-hd">温馨提示</div>\n' +
                    '    <div class="am-modal-bd">\n' +
                    '      '+message+'\n' +
                    '    </div>\n' +
                    '    <div class="am-modal-footer">\n' +
                    '      <span class="am-modal-btn">ok</span>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>';
                $(".am-modal").remove();
                $(m).appendTo("body");
            },
            titleCenter: function () {
                var self = this;
                var wWindow = self.innerWidth;//屏幕宽度
                var $i = $(".top-div").find('i');//i图标对象
                var $div = $('.top-div .title');//标题对象
                var leftI = $i.offset().left;
                var wI = $i.outerWidth();
                var wDiv = $div.outerWidth();
                var marginLeft = wWindow/2-leftI-wI-wDiv/2;
                $div.css('margin-left',marginLeft);
            },
            setBottonNavIndexBySubmit: function (i) {
                sessionStorage.setItem('bottomNavIndex',i);
                $("#my-confirm").modal({
                    onConfirm: function () {
                         alert("aaa");
                        location.href='strong-big-read.html';
                    },
                    onCancel: function () {
                        return false;
                    }
                });
            },
            setBottonNavIndex: function (i,self) {
                var name = $(self).html();
                console.log('I:'+i);
                sessionStorage.setItem('bottomNavIndex',i);
                console.log("html:"+name);
                if(name === '发布' || name === '存为草稿'){
                    // alert("发布")
                    // var result = this.getConfirmResult();
                    $("#my-confirm").modal({
                        onConfirm: function () {
                            // alert();
                            location.href='strong-big-read.html';
                        },
                        onCancel: function () {
                            return false;
                        }
                    });
                    // console.log('result:'+result);
                    // if(result === 0){
                    //
                    //     return true;
                    // }else {
                    //     console.log("false");
                    //     return false;
                    // }
                }
            },
            // getConfirmResult: function () {
            //     $("#my-confirm").modal({
            //         onConfirm: function () {
            //             return 0;
            //         },
            //         onCancel: function () {
            //             return 1;
            //         }
            //     });
            // },
            topNavInput:function () {//input页面顶部导航栏
            // var top1 ='<div class="top-div">\n' +
            //     '    <div class="sl-flex-row-center-space-between sl-background-color-red top-info sl-font-color-white" >\n' +
            //     '        <a href="';
            // var top2 = '.html" ><i class="am-icon-angle-left am-icon-sm" style="margin-left: 0.5rem;color: white;"></i></a>\n' +
            //     '        <div class="sl-flex-row-center-flex-end">\n' +
            //     '            <a href="';
            // var top3 = '-read.html" onclick="getIndex(0)"  class="sl-margin-right-1rem" style="color:white">发布</a>\n' +
            //     '            <a href="';
            // var top4 = '-read.html" onclick="getIndex(0)"  class="sl-margin-right-1rem" style="color:white">存为草稿</a>\n' +
            //     '        </div>\n' +
            //     '    </div>\n' +
            //     '</div>';
                var top1 ='<div class="top-div">\n' +
                    '    <div class="sl-flex-row-center-space-between sl-background-color-red top-info sl-font-color-white" >\n' +
                    '        <a href="';
                var top2 = '.html" ><i class="am-icon-angle-left am-icon-sm" style="margin-left: 0.5rem;color: white;"></i></a>\n' +
                    // '        <div class="sl-flex-row-center-flex-end">\n' +
                    // '            <button type="submit" onclick="getIndex(0,this)" class="sl-margin-right-1rem" style="color:white;background-color: #F14551;">发布</button>\n' +
                    // '            <button  type="submit" onclick="getIndex(0,this)"  class="sl-margin-right-1rem" style="color:white;background-color: #F14551;">存为草稿</button>\n' +
                    // '        </div>\n' +
                    '    </div>\n' +
                    '</div>';
            var top = top1+this.moduleEng+top2
            $('body').prepend(top);
        },
            topNav:function () {//read页面和check页面顶部导航栏
                var top1 = '<div class="top-div">\n' +
                    '    <div class="sl-flex-row-center-space-between sl-background-color-red top-info sl-font-color-white" >\n' +
                    '        <a href="';
                var module ='.html"><i class="am-icon-angle-left am-icon-sm" style="margin-left: 0.5rem;color: white;"></i></a>\n' +
                    '        <div class="sl-flex-row-center-flex-end"><i class="am-icon-search" style="margin-right: 0.8rem;" onclick="insertSearch()"></i>\n' +
                    '            <a href="';
                var top2 = '-input.html" onclick="getIndex(1,this)" class="sl-margin-right-1rem sl-font-color-white"><i class="am-icon-plus"></i></a>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '</div>'
                var top = top1+this.moduleEng+module +this.menuEng + top2;
                $('body').prepend(top);


                //插入脚本





            },
            bottomNav: function () {//底部导航栏
                var menuEng = this.menuEng;
                var menuName = this.menuName;
                var bottomNavIndex = this.bottomNavIndex;
                var tempArr = [];

                tempArr[0] = '<div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default">\n' +
                    '    <ul class="am-navbar-nav am-cf am-avg-sm-3">\n' +
                    '        <li>\n' +
                    '            <a href="';
                tempArr[1] = '-read.html" style="';
                tempArr[2] = '" onclick="getIndex(0,this)">\n' +
                    '                <i class="am-icon-eye "></i>\n' +
                    '                <span class="am-navbar-label">查看';
                tempArr[3] = '</span>\n' +
                    '            </a>\n' +
                    '        </li>\n' +
                    '        <li >\n' +
                    '            <a href="';
                tempArr[4] = '-input.html" style="';
                tempArr[5] = '" onclick="getIndex(1,this)">\n' +
                    '                <span class="am-icon-plus"></span>\n' +
                    '                <span class="am-navbar-label">新建';
                tempArr[6] = '</span>\n' +
                    '            </a>\n' +
                    '        </li>\n' +
                    '        <li >\n' +
                    '            <a href="';
                tempArr[7] = '-check.html" style="';
                tempArr[8] = '" onclick="getIndex(2,this)">\n' +
                    '                <span class="am-icon-check"></span>\n' +
                    '                <span class="am-navbar-label">审批';
                tempArr[9] = '</span>\n' +
                    '            </a>\n' +
                    '        </li>\n' +
                    '    </ul>\n' +
                    '</div>\n';

                var bot = '';
                for(var i=0;i<tempArr.length;i++){
                    if(i % 3 == 0){
                        if(i !== 9){
                            bot += tempArr[i]+menuEng;
                        }
                    }else if(i % 3 == 1){
                        if(parseInt(bottomNavIndex) === 0 && i == 1){
                            bot += tempArr[i]+'color:red';
                        }else if(parseInt(bottomNavIndex) === 1 && i == 4){
                            bot += tempArr[i]+'color:red';
                        }else if(parseInt(bottomNavIndex) === 2 && i == 7){
                            bot += tempArr[i]+'color:red';
                        }else {
                            bot += tempArr[i];
                        }
                    }else if(i % 3 == 2){
                        bot += tempArr[i]+menuName;
                    }

                }
                $('body').append(bot);
                //设置title
                var s = '';
                if(parseInt(bottomNavIndex) === 0){
                    s = '查看';
                } else if(parseInt(bottomNavIndex) === 1){
                    s = '新建';
                } else if(parseInt(bottomNavIndex) === 2){
                    s = '审批';
                }
                var title = s + menuName;
                $('title').html(title);
                this.weiXinBrowers();
            },
           setHref: function () {
               $('ul.am-navbar-nav li').each(function (i,v) {
                   var botIndex = sessionStorage.getItem('bottomNavIndex');
                   if(parseInt(botIndex) === i){
                       $(this).find('a').attr('href','#');
                   }
               })
           },
            weiXinBrowers: function () {//对于微信内置浏览器，得剪掉上面导航栏的高度
                var h = screen.height;
                var e= $('div.am-navbar').outerHeight();
                var num = 0;
                var pf = navigator.platform;
                if((pf === 'Win32') == false){
                    num=42;
                }
                console.log("h:"+h+",e:"+e+",n:"+num);
                $("div.am-navbar").css({
                    top: (h-e-num)+"px",
                })
            },
            contentListCheck: function () {//审批页面主体内容列表
                var listCheck = '<div style="margin-top: 3rem;">\n' +
                    '    <div data-am-widget="tabs" class="am-tabs am-tabs-default">\n' +
                    '\n' +
                    '        <ul class="am-tabs-nav am-cf">\n' +
                    '            <li class="am-active"><a href="[data-tab-panel-0]">待审批</a></li>\n' +
                    '            <li class=""><a href="[data-tab-panel-1]">审核中</a></li>\n' +
                    '            <li>\n' +
                    '                <div class="am-dropdown" data-am-dropdown>\n' +
                    '                    <button class="am-btn am-btn-primary am-dropdown-toggle" data-am-dropdown-toggle>排序<span class="am-icon-caret-down"></span></button>\n' +
                    '                    <ul class="am-dropdown-content" style="min-width: 5rem;">\n' +
                    '                        <li><a href="#" style="line-height: 1rem;">标题</a></li>\n' +
                    '                        <li class="am-active" ><a href="#" style="line-height: 1rem;">时间</a></li>\n' +
                    '                    </ul>\n' +
                    '                </div>\n' +
                    '            </li>\n' +
                    '        </ul>\n' +
                    '        <div class="am-tabs-bd">\n' +
                    '            <div data-tab-panel-0 class="am-tab-panel am-active">\n' +
                    '                <div data-am-widget="list_news" class="am-list-news am-list-news-default" >\n' +
                    '                    <div class="am-list-news-bd">\n' +
                    '                        <ul class="am-list">\n' +
                    '                            <li class="am-g am-list-item-dated">\n' +
                    '                                <a href="#" class="am-list-item-hd ">待审批内容 1 </a>\n' +
                    '                                <span class="am-list-date">2013-09-18</span>\n' +
                    '                            </li>\n' +
                    '                            <li class="am-g am-list-item-dated">\n' +
                    '                                <a href="##" class="am-list-item-hd ">待审批内容 2</a>\n' +
                    '                                <span class="am-list-date">2013-10-14</span>\n' +
                    '                            </li>\n' +
                    '                            <li class="am-g am-list-item-dated">\n' +
                    '                                <a href="##" class="am-list-item-hd ">待审批内容 3</a>\n' +
                    '                                <span class="am-list-date">2013-11-18</span>\n' +
                    '                            </li>\n' +
                    '                        </ul>\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '            <div data-tab-panel-1 class="am-tab-panel">\n' +
                    '                <div data-am-widget="list_news" class="am-list-news am-list-news-default" >\n' +
                    '                    <div class="am-list-news-bd">\n' +
                    '                        <ul class="am-list">\n' +
                    '                            <li class="am-g am-list-item-dated">\n' +
                    '                                <a href="##" class="am-list-item-hd ">审核中内容 1 </a>\n' +
                    '                                <span class="am-list-date">2013-09-18</span>\n' +
                    '                            </li>\n' +
                    '                            <li class="am-g am-list-item-dated">\n' +
                    '                                <a href="##" class="am-list-item-hd ">审核中内容 2</a>\n' +
                    '                                <span class="am-list-date">2013-10-14</span>\n' +
                    '                            </li>\n' +
                    '                            <li class="am-g am-list-item-dated">\n' +
                    '                                <a href="##" class="am-list-item-hd ">审核中内容 3</a>\n' +
                    '                                <span class="am-list-date">2013-11-18</span>\n' +
                    '                            </li>\n' +
                    '                        </ul>\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '</div>';
                // $('body').find('div.top-div').after(listCheck);//listCheck的类型是String类型
                // $(listCheck).insertAfter($('div.top-div'))
                $('body').append(listCheck);
                //搜索栏
                var search = '<div class="sl-border-bottom-1px-solid-E6E6E6 search-div" style="background-color: #E3E3E3;display:none;padding: .5rem 1rem">\n' +
                    '        <div class="sl-background-color-white  sl-flex-row-center-center sl-padding-2px-10px" style="border-radius: 3rem;">\n' +
                    '            <input type="text" placeholder="请输入关键字" id="search" oninput="inputVal()" style="width: 90%;">\n' +
                    '        </div>\n' +
                    '    </div>';
                $('div.am-tabs').prepend(search);
                var script = '<script>\n' +
                    '    $(\'ul.am-dropdown-content li\').click(function () {\n' +
                    '        $(this).addClass(\'am-active\').siblings(\'li\').removeClass(\'am-active\')\n' +
                    '    })\n' +
                    '</script>';
                $('body').append(script);
            },
            contentListRead: function () {//审批页面主体内容列表
            var listCheck = '<div style="margin-top: 3rem;">\n' +
                '    <div data-am-widget="tabs" class="am-tabs am-tabs-default">\n' +
                '\n' +
                '        <ul class="am-tabs-nav am-cf">\n' +
                '            <li class="am-active"><a href="[data-tab-panel-0]">流转中</a></li>\n' +
                '            <li class=""><a href="[data-tab-panel-1]">已归档</a></li>\n' +
                '            <li>\n' +
                '                <div class="am-dropdown" data-am-dropdown>\n' +
                '                    <button class="am-btn am-btn-primary am-dropdown-toggle" data-am-dropdown-toggle>排序<span class="am-icon-caret-down"></span></button>\n' +
                '                    <ul class="am-dropdown-content" style="min-width: 5rem;">\n' +
                '                        <li><a href="#" style="line-height: 1rem;">标题</a></li>\n' +
                '                        <li class="am-active" ><a href="#" style="line-height: 1rem;">时间</a></li>\n' +
                '                    </ul>\n' +
                '                </div>\n' +
                '            </li>\n' +
                '        </ul>\n' +
                '        <div class="am-tabs-bd">\n' +
                '            <div data-tab-panel-0 class="am-tab-panel am-active">\n' +
                '                <div data-am-widget="list_news" class="am-list-news am-list-news-default" >\n' +
                '                    <div class="am-list-news-bd">\n' +
                '                        <ul class="am-list">\n' +
                '                            <li class="am-g am-list-item-dated">\n' +
                '                                <a href="#" class="am-list-item-hd ">待审批内容 1 </a>\n' +
                '                                <span class="am-list-date">2013-09-18</span>\n' +
                '                            </li>\n' +
                '                            <li class="am-g am-list-item-dated">\n' +
                '                                <a href="##" class="am-list-item-hd ">待审批内容 2</a>\n' +
                '                                <span class="am-list-date">2013-10-14</span>\n' +
                '                            </li>\n' +
                '                            <li class="am-g am-list-item-dated">\n' +
                '                                <a href="##" class="am-list-item-hd ">待审批内容 3</a>\n' +
                '                                <span class="am-list-date">2013-11-18</span>\n' +
                '                            </li>\n' +
                '                        </ul>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div data-tab-panel-1 class="am-tab-panel">\n' +
                '                <div data-am-widget="list_news" class="am-list-news am-list-news-default" >\n' +
                '                    <div class="am-list-news-bd">\n' +
                '                        <ul class="am-list">\n' +
                '                            <li class="am-g am-list-item-dated">\n' +
                '                                <a href="##" class="am-list-item-hd ">审核中内容 1 </a>\n' +
                '                                <span class="am-list-date">2013-09-18</span>\n' +
                '                            </li>\n' +
                '                            <li class="am-g am-list-item-dated">\n' +
                '                                <a href="##" class="am-list-item-hd ">审核中内容 2</a>\n' +
                '                                <span class="am-list-date">2013-10-14</span>\n' +
                '                            </li>\n' +
                '                            <li class="am-g am-list-item-dated">\n' +
                '                                <a href="##" class="am-list-item-hd ">审核中内容 3</a>\n' +
                '                                <span class="am-list-date">2013-11-18</span>\n' +
                '                            </li>\n' +
                '                        </ul>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>';
            // $('body').find('div.top-div').after(listCheck);//listCheck的类型是String类型
            // $(listCheck).insertAfter($('div.top-div'))
            $('body').append(listCheck);
            //搜索栏
            var search = '<div class="sl-border-bottom-1px-solid-E6E6E6 search-div" style="background-color: #E3E3E3;display:none;padding: .5rem 1rem">\n' +
                '        <div class="sl-background-color-white  sl-flex-row-center-center sl-padding-2px-10px" style="border-radius: 3rem;">\n' +
                '            <input type="text" placeholder="请输入关键字" id="search" oninput="inputVal()" style="width: 90%;">\n' +
                '        </div>\n' +
                '    </div>';
            $('div.am-tabs').prepend(search);
            var script = '<script>\n' +
                '    $(\'ul.am-dropdown-content li\').click(function () {\n' +
                '        $(this).addClass(\'am-active\').siblings(\'li\').removeClass(\'am-active\')\n' +
                '    })\n' +
                '</script>';
            $('body').append(script);
            },
            moduleSelect: function (moduleId,mMame) {//模块的选择
                var moduleName = ['党政','财政','人事','行政','主页'];
                var moduleCode = [];
                moduleCode = this.codeFor(moduleCode,moduleName.length);
                var moduleEng = ['party','finance','','',''];

                var menuName = [];
                var menuEng = [];
                if(parseInt(moduleId) === 0){//党政模块
                    menuName = ['三重一大','公告','报名','竞聘演讲','结果公示','聘书发放','活动管理','党费缴纳','党费分摊','年度预算申请','退管会活动','信访登记'];
                    menuEng = ['strong-big','selection-notice','selection-apply','selection-speech','selection-publicity','selection-issued','activity-manager','money-manager','money-avg','annual-budget','rebate-activity','letter-register'];
                }else if(parseInt(moduleId) === 1){//财政模块
                    menuName = ['月度快报','财务快报','财务年报','财务分析报表','全年预决算报表','财务年终工作总结及计划','财务支出','财务审计'];
                    menuEng = ['news-month','finance','finance-year','finance-analysis','calculation-year','work-plan','expend','audit-notice'];
                }else if(parseInt(moduleId) === 2){//人事模块

                }else if(parseInt(moduleId) === 3){//行政模块

                }else if(parseInt(moduleId) === 4){//主页模块

                }
                //readOnly: 0:可以编辑。1：只能选择值
                //oneOrMany:0:表示单选，1：表示多选
                var field ={
                    'strong-big':{
                        name: '登记名称,会议类型,是否中心审核,备案,结论,通知对象,相应会议记录,相关附件',
                        eng: 'registerName,meetingType,isCenterAudit,putOnRecord,conclusion,informObject,meetingRecord,relatedAccessory',
                        type: '0,0,0,0,0,0,-1,4',
                        readOnly: '0,1,1,0,0,1,1,0',
                        oneOrMany:'0,0,1,1',
                    },
                    'activity-manager':{
                        name: '登记名称,会议类型,是否中心审核,备案,结论,通知对象,相应会议记录,相关附件',
                        eng: 'registerName,meetingType,isCenterAudit,putOnRecord,conclusion,informObject,meetingRecord,relatedAccessory',
                        type: '0,0,0,0,0,0,-1,4',
                        readOnly: '0,1,1,0,0,1,1,0',
                        oneOrMany:'1,0,1',
                    },
                    'letter-register':{
                        name: '登记名称,会议类型,是否中心审核,备案,结论,通知对象,相应会议记录,相关附件',
                        eng: 'registerName,meetingType,isCenterAudit,putOnRecord,conclusion,informObject,meetingRecord,relatedAccessory',
                        type: '0,0,0,0,0,0,-1,4',
                        readOnly: '0,1,1,0,0,1,1,0',
                        oneOrMany:'0,0',
                    },
                };
                //通过菜单名称得到菜单对应的英文
                var index;
                if(parseInt(moduleId) == 0){
                    if(menuName === '干部选拔'){
                        index=this.getIndexByName(menuName,'公告')
                    }else if(menuName === '党费管理'){

                    }else{
                        index=this.getIndexByName(menuName,mMame) ;
                    }
                }
                // console.log("i:"+index)





                //
                var menuCode=[];
                menuCode=this.codeFor(menuCode,menuName.length);

                var tempModuleName = moduleName[parseInt(moduleId)];
                var tempModuleCode = moduleCode[parseInt(moduleId)];
                var tempModuleEng = moduleEng[parseInt(moduleId)];

                var tempMenuName = menuName[index];
                var tempMenuCode = menuCode[index];
                var tempMenuEng = menuEng[index];

                sessionStorage.setItem('moduleName',tempModuleName);
                sessionStorage.setItem('moduleCode',tempModuleCode);
                sessionStorage.setItem('moduleEng',tempModuleEng);

                sessionStorage.setItem('menuName',menuName[index]);
                // sessionStorage.setItem('menuCode',tempMenuCode);
                sessionStorage.setItem('menuEng',menuEng[index]);

                console.log("eng:"+tempMenuEng);
                // sessionStorage.setItem('fieldName',field[tempMenuEng].name);
                // sessionStorage.setItem('fieldEng',field[tempMenuEng].eng);
                // sessionStorage.setItem('fieldType',field[tempMenuEng].type);
                // sessionStorage.setItem('readOnly',field[tempMenuEng].readOnly);
                sessionStorage.setItem('oneOrMany',field[tempMenuEng].oneOrMany);

                sessionStorage.setItem('bottomNavIndex',1);




                location.href=menuEng[index]+'-input.html';


            },
            getIndexByName: function (arrName,name) {
                for(var i =0;i < arrName.length; i++){
                    if(arrName[i] === name){
                        return i;
                    }
                }
            },
            codeFor: function (arrName,len) {//
                for(var i =0;i< len; i++){
                    if(i < 10){
                        arrName[i]='0'+i;
                    }else{
                        arrName[i]=i+'';
                    }
                }
                return arrName;
            }

    };
    if(typeof module !="undefined" && module.exports){
        module.exports = Rem;
    }else {
        window.Rem = Rem;
    }
}(window, jQuery));

(function (window, document,$) {
    var rem =  new Rem();
    $(document).ready(function () {
        rem.init();
        // var pageName = rem.getPageName();
        rem.getPageNameCallback(function (page) {
            if(page === 'input'){
                var s = '<script>\n' +
                    '    function getIndex(i,self) {\n' +
                    '        var rem = new Rem();\n' +
                    '        rem.setBottonNavIndex(i,self);\n' +
                    '    }\n' +
                    '</script>';
                $('body').append(s);
            }else if(page == 'check' || page === 'read'){
                var script = '<script>\n' +
                    '    function insertSearch() {\n' +
                    '        Rem.insertSearch();\n' +
                    '    };\n' +
                    '    function getIndex(i,self) {\n' +
                    '        var rem = new Rem();\n' +
                    '        rem.setBottonNavIndex(i,self);\n' +
                    '    }\n' +
                    '</script>';
                // $('body').append(s);
                $('body').append(script);
            }
        });
    });



}(window, document,jQuery))
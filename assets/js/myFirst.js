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


        var moduleName = sessionStorage.getItem('moduleName');
        var moduleEng = sessionStorage.getItem('moduleEng');
        var moduleId = sessionStorage.getItem('moduleId');
        // var flag = sessionStorage.getItem('flag');
        this.moduleName = moduleName;
        this.moduleEng = moduleEng;
        this.moduleId = moduleId;
        // this.flag = flag;

        var menuEng = sessionStorage.getItem('menuEng');
        var menuName = sessionStorage.getItem('menuName');
        this.menuEng = menuEng;
        this.menuName = menuName;

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
                if(flag === 'true'){
                    this.adapterWidth_object();
                    this.weiXinBrowers();
                }else{
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
            },
            initPage: function () {
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
            topNavInput:function () {//input页面顶部导航栏
                var top1 ='<div class="top-div">\n' +
                    '    <div class="sl-flex-row-center-space-between sl-background-color-red top-info sl-font-color-white" >\n' +
                    '        <a href="';
                var top2 = '.html"><i class="am-icon-angle-left am-icon-sm" style="margin-left: 0.5rem;color: white;"></i></a>\n' +
                    '        <div class="sl-flex-row-center-flex-end">\n' +
                    '            <a href="';
                var top3 = '-read.html" class="sl-margin-right-1rem" style="color:white">发布</a>\n' +
                    '            <a href="';
                var top4 = '-read.html" class="sl-margin-right-1rem" style="color:white">存为草稿</a>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '</div>';
               var top = top1+this.moduleEng+top2+this.menuEng+top3+this.menuEng+top4;
                $('body').prepend(top);

                // var script = '<script>\n' +
                //     '    function setFlag() {\n' +
                //     '        sessionStorage.setItem(\'flag\',\'true\')\n' +
                //     '    }\n' +
                //     '</script>';
                // $('body').append(script);
            },
            topNav:function () {//read页面和check页面顶部导航栏
                var top1 = '<div class="top-div">\n' +
                    '    <div class="sl-flex-row-center-space-between sl-background-color-red top-info sl-font-color-white" >\n' +
                    '        <a href="';
                var module ='.html"><i class="am-icon-angle-left am-icon-sm" style="margin-left: 0.5rem;color: white;"></i></a>\n' +
                    '        <div class="sl-flex-row-center-flex-end"><i class="am-icon-search" style="margin-right: 0.8rem;" onclick="insertSearch()"></i>\n' +
                    '            <a href="';
                var top2 = '-input.html" onclick="getIndex(1)" class="sl-margin-right-1rem sl-font-color-white"><i class="am-icon-plus"></i></a>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '</div>'
                var top = top1+this.moduleEng+module +this.menuEng + top2;
                $('body').prepend(top);


                //插入脚本
                var script = '<script>\n' +
                    '    function getIndex(i) {\n' +
                    '        sessionStorage.setItem(\'bottomNavIndex\',i);\n' +
                    '    };\n' +
                    '    function insertSearch() {\n' +
                    '        Rem.insertSearch();\n' +
                    '    };\n' +
                    '</script>';
                $('body').append(script);



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
                tempArr[2] = '" onclick="getIndex(0)">\n' +
                    '                <i class="am-icon-eye "></i>\n' +
                    '                <span class="am-navbar-label">查看';
                tempArr[3] = '</span>\n' +
                    '            </a>\n' +
                    '        </li>\n' +
                    '        <li >\n' +
                    '            <a href="';
                tempArr[4] = '-input.html" style="';
                tempArr[5] = '" onclick="getIndex(1)">\n' +
                    '                <span class="am-icon-plus"></span>\n' +
                    '                <span class="am-navbar-label">新建';
                tempArr[6] = '</span>\n' +
                    '            </a>\n' +
                    '        </li>\n' +
                    '        <li >\n' +
                    '            <a href="';
                tempArr[7] = '-check.html" style="';
                tempArr[8] = '" onclick="getIndex(2)">\n' +
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
                var script='<script>\n' +
                    '    function getIndex(i) {\n' +
                    '        sessionStorage.setItem(\'bottomNavIndex\',i);\n' +
                    '    };\n' +
                    '    $(\'ul.am-navbar-nav li\').each(function (i,v) {\n' +
                    '        var botIndex = sessionStorage.getItem(\'bottomNavIndex\');\n' +
                    '        if(parseInt(botIndex) === i){\n' +
                    '            $(this).find(\'a\').attr(\'href\',\'#\');\n' +
                    '        }\n' +
                    '    })\n' +
                    '</script>';
                $('body').append(script);

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
            weiXinBrowers: function () {//对于微信内置浏览器，得剪掉上面导航栏的高度
                var h = screen.height;
                var e= $('div.am-navbar').outerHeight();
                var top = $("div.am-navbar").offset().top;
                var num = 0;
                var pf = navigator.platform;
                if((pf === 'Win32') == false){
                    num=42;
                }
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
            moduleSelect: function (moduleId,menuId,mMame) {//模块的选择
                var moduleName = ['党政','财政','人事','行政','主页'];
                var moduleCode = [];
                moduleCode = this.codeFor(moduleCode,moduleName.length);
                var moduleEng = ['party','finance','','',''];

                var menuName = [];
                var menuEng = [];
                if(parseInt(moduleId) === 0){//党政模块
                    menuName = ['三重一大','公告','报名','竞聘演讲','结果公示','聘书发放','活动管理','党费缴纳','党费分摊','年度预算申请','退管会活动','信访登记'];
                    menuEng = ['strong-big','selection-notice','selection-apply','selection-speech','selection-publicity','selection-issued','activity-manager','money-manager','money-avg','annual-budget','rebate-activity','letter-register'];
                }else if(parseInt(moduleId) === '1'){//财政模块
                    menuName = ['月度快报','财务快报','财务年报','财务分析报表','全年预决算报表','财务年终工作总结及计划','财务支出','财务审计'];
                    menuEng = ['news-month','finance','finance-year','finance-analysis','calculation-year','work-plan','expend','audit-notice'];
                }else if(parseInt(moduleId) === '2'){//人事模块

                }else if(parseInt(moduleId) === '3'){//行政模块

                }else if(parseInt(moduleId) === '4'){//主页模块

                }
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



                //
                var menuCode=[];
                menuCode=this.codeFor(menuCode,menuName.length);

                var tempModuleName = moduleName[parseInt(moduleId)];
                var tempModuleCode = moduleCode[parseInt(moduleId)];
                var tempModuleEng = moduleEng[parseInt(moduleId)];

                // var tempMenuName = menuName[menuId];
                // var tempMenuCode = menuCode[menuId];
                // var tempMenuEng = menuEng[menuId];

                sessionStorage.setItem('moduleName',tempModuleName);
                sessionStorage.setItem('moduleCode',tempModuleCode);
                sessionStorage.setItem('moduleEng',tempModuleEng);

                sessionStorage.setItem('menuName',menuName[index]);
                // sessionStorage.setItem('menuCode',tempMenuCode);
                sessionStorage.setItem('menuEng',menuEng[index]);

                sessionStorage.setItem('bottomNavIndex',1);
                // sessionStorage.setItem('moduleId',moduleId);
                // sessionStorage.setItem('flag','false');




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

(function (window, document) {
    $(document).ready(function () {
        var rem =  new Rem();
        rem.init();
    })

}(window, document))
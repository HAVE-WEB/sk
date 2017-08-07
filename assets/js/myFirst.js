;(function (window, document) {

})(window,document);
(function (window, document) {

})(window,document);

!function (widow, document) {
    
}(window, document);

(function (window, document) {

}(window, document))

var Out =(function (window, document,$) {
    return function () {
        // this.back = function () {
        //     var num = window.innerWidth;
        //     if(num <= 375){//iphone6的宽度一下 字体大小为14px
        //         $("html").css("font-size","14px");//百分比对象的字体大小为14px，0.875em
        //         $("body").css("font-size","1rem");
        //         $("input").css("font-size","1rem")
        //         $(":submit").css("font-size","1rem");
        //         $(":button").css("font-size","1rem");
        //     }else if(num <= 414){//宽度在iphone6-iphone6s之间
        //         $("html").css("font-size","16px");//16px
        //         $("body").css("font-size","1rem");
        //         $("input").css("font-size","1rem")
        //         $(":submit").css("font-size","1rem");
        //         $(":button").css("font-size","1rem");
        //     }else if(num <= 768){
        //         $("html").css("font-size","20px");
        //         $("body").css("font-size","1rem");
        //         $("input").css("font-size","1rem")
        //         $(":submit").css("font-size","1rem");
        //         $(":button").css("font-size","1rem");
        //     } else {
        //         $("html").css("font-size","30px")
        //         $("body").css("font-size","1rem");
        //         $("input").css("font-size","1rem")
        //         $(":submit").css("font-size","1rem");
        //         $(":button").css("font-size","1rem");
        //     }
        //
        // }
        this.back =function () {//定义了对象方法，只能这个类的对象才能调用
            var num = window.innerWidth;
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

        }
    }
})(window,document,jQuery);
//
(function (window,$) {
    function Rem() {
        //定义属性
        this.innerWidth = 0;//屏幕宽度
        this.innerHeight = 0;//屏幕高度

        //为属性赋值
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
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
        }
    }
    Rem.prototype = {
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

    };
    if(typeof module !="undefined" && module.exports){
        module.exports = Rem;
    }else {
        window.Rem = Rem;
    }
}(window, jQuery));


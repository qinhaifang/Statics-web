/**
 * Created by haifang.qin on 2019/07/03.
 */
$(function () {
    $(".text").animate({'margin-top':'0px','opacity':1},600);
    animateTop($('.br2'),{'top':'253px','opacity':1},800);
    setTimeout(function(){
        animateTop($('.br3'),{'top':'127px','opacity':1},500);
    },100)
    setTimeout(function(){
        animateTop($('.br1'),{'top':'248px','opacity':1},600);
    },200)
    function animateTop($ele,$st,$time){
        $($ele).animate($st,$time)
    }
    $(".navbar .nav nav .login").hover(function () {
        $(this).css({"color":"white","border":"1px solid #67d3fc","background":"#67d3fc"})
    }).mouseout(function () {
        $(".navbar .nav nav .login").css({"color":"white","border":"1px solid white","background":"transparent"});
    })
    $(window).scroll(function () {
        if($(document).scrollTop()>0){
            $(".navbar").css({"background":"white","border-bottom":"1px solid #ebebeb"});
            $('.logo_name').css('color','#67d3fc');
            $(".navbar .nav nav li a").css("color","black");
            $(".navbar .nav nav li .active").css("color","#67d3fc");
            $(".navbar .nav nav .login").css({"color":"#67d3fc","border":"1px solid #67d3fc"});

            $(".navbar .nav nav .login").hover(function () {
                $(this).css({"color":"","border":"1px solid #67d3fc","background":"#67d3fc"})
            }).mouseout(function () {
                $(".navbar .nav nav .login").css({"color":"#67d3fc","border":"1px solid #67d3fc","background":"transparent"});
            })
        }else{
            $(".navbar").css({"background-color":"rgba(0,0,0,.4)","border-bottom":"none"})
            $(".navbar .nav nav li").eq(0).find("a").addClass("active").parent().siblings().find("a").removeClass("active")
            $('.logo_name').css('color','#fff');
            $(".navbar .nav nav li a").css("color","#fff");
            $(".navbar .nav nav li .active").css("color","#67d3fc");
            $(".navbar .nav nav .login").css({"color":"","border":"1px solid white"});
            $(".navbar .nav nav .login").hover(function () {
                $(this).css({"color":"","border":"1px solid #67d3fc","background":"#67d3fc"})
            }).mouseout(function () {
                $(".navbar .nav nav .login").css({"color":"","border":"1px solid white","background":"transparent"});
            })
        }

    })
    if($(document).scrollTop()>($("#location").offset().top)-100){
        $(".navbar .nav nav li").eq(1).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
        $(".navbar").css({"background":"","border-bottom":""});

        $("#logo").attr("src","images/qljh/logo-blue.png");
        $(".navbar .nav nav li a").css("color","black");
        $(".navbar .nav nav li .active").css("color","#67d3fc");
        $(".navbar .nav nav .login").css({"color":"#67d3fc","border":"1px solid #67d3fc"});

        $(".navbar .nav nav .login").hover(function () {
            $(this).css({"color":"white","border":"1px solid #67d3fc","background":"#67d3fc"})
        }).mouseout(function () {
            $(".navbar .nav nav .login").css({"color":"#67d3fc","border":"1px solid #67d3fc","background":"transparent"});
        })
    }
    if($(document).scrollTop()>($("#app-down").offset().top)-200){
        // alert(123)
        $(".navbar .nav nav li").eq(3).find("a").addClass("active").parent().siblings().find("a").removeClass("active")
    }
    $(".navbar .nav nav ul li .dh").click(function () {
        $(".navbar .nav nav ul li .dh").removeClass("active");
        $(this).addClass("active");
    });

    $(".location-content .icon .demo").each(function (a,b) {
        var ind=$(this).index();
        $(".location-content .show .computer img:gt(0)").css('left','678px')
        $(".location-content .show .iphone img:gt(2)").css('left','200px');
        $(this).click(function () {
            $(this).addClass('img1').siblings().removeClass("img1");
            $(".location-content .show .computer img").eq(ind).css('z-index','110').siblings().css('z-index','100');
            $(".location-content .show .computer img").eq(ind).animate({
                'left':39
            },600,function () {
                $(this).siblings().css('left','680px')
            })
            $(".location-content .show .iphone .img1").eq(ind).css('z-index','450').siblings().css('z-index','444');
            $(".location-content .show .iphone .img1").eq(ind).animate({
                'left':0
            },600,function () {
                $(this).siblings().css('left','200px')
            })

        })
        $(".location-content .icon .demo").eq(0).addClass('img1');
    })

//伙伴 效果
    $(".cooperation .hb").show();
    $(".cooperation .hb2").hide();
    $(".cooperation .hb3").hide();
    $(".cooperation .hb4").hide();
    $(".menu li").each(function (a,b) {
        $(this).click(function () {
            $(this).addClass("active").siblings().removeClass("active");

            $(".cooperation ul:gt(0)").eq(a).show().siblings().hide();
        })

    })

    $(".huoban li").each(function (a,b) {
        $(this).mouseenter(function () {
            for(var i=0;i<cooperation.length;i++){
                $(".huoban li img").eq(i).attr("src",cooperation[i])
            }
            $(this).find("img").attr("src",cooperationL[a])
        }).mouseout(function () {
            for(var i=0;i<cooperation.length;i++){
                $(".huoban li img").eq(i).attr("src",cooperation[i])
            }

        })

    })
    var Acust=[
        "images/wk-l.png","images/rsy-l.png","images/ly-l.png","images/gy-l.png","images/sy-l.png",
        "images/gzl-l.png","images/gl-l.png","images/fh-l.png","images/zr-l.png","images/fk-l.png",
        "images/hz-l.png","images/jk-l.png","images/zh-l.png","images/xfj-l.png","images/hzb-l.png"
    ];
    var Acustan=[
        "images/wk-an.png","images/rsy-an.png","images/ly-an.png","images/gy-an.png","images/sy-an.png",
        "images/gzl-an.png","images/gl-an.png","images/fh-an.png","images/zr-an.png","images/fk-an.png",
        "images/hz-an.png","images/jk-an.png","images/zh-an.png","images/xfj-an.png","images/hzb-an.png"
    ];
    $(".customer li img").each(function (a,b) {
        $(this).mouseenter(function () {
            for (var i = 0; i < Acust.length; i++) {
                $(".customer li img").eq(i).attr("src", Acustan[i])
            }
            $(this).attr("src", Acust[a])
        }).mouseout(function () {
            for (var i = 0; i < Acust.length; i++) {
                $(".customer li img").eq(i).attr("src", Acustan[i])
            }
        })
    })


})
//获取地址栏
function getQueryString(name, url) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    if (!url || url == "") {
        url = window.location.href;
    }
    url = url.substring(url.indexOf("?"));
    r = url.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return "";
}

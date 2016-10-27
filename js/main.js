/**
 * Created by yuanhuan on 2016/9/20.
 */
$(function(){

    $('#icon-resume').addClass('li-hover');
    $('#icon-resume div').addClass('div-hover');

    /*图标*/
    $('#icon-resume').click(function(){
        $("#content-resume").css({display:"block"});
        $("#content-works").css({display:"none"});
        $("#content-skill").css({display:"none"});
        $("#icon-works").removeClass("li-hover");
        $("#icon-skill").removeClass("li-hover");
        $("#icon-works div").removeClass("div-hover");
        $("#icon-skill div").removeClass("div-hover")
    });
    $('#icon-skill').click(function(){
        $("#content-skill").css({display:"block"});
        $("#content-works").css({display:"none"});
        $("#content-resume").css({display:"none"});
        $("#icon-works").removeClass("li-hover");
        $("#icon-resume").removeClass("li-hover");
        $("#icon-works div").removeClass("div-hover");
        $("#icon-resume div").removeClass("div-hover")
    });
    $('#icon-works').click(function(){
        $("#content-resume").css({display:"none"});
        $("#content-works").css({display:"block"});
        $("#content-skill").css({display:"none"});
        $("#icon-resume").removeClass("li-hover");
        $("#icon-skill").removeClass("li-hover");
        $("#icon-resume div").removeClass("div-hover");
        $("#icon-skill div").removeClass("div-hover")
    });

    $('#icon-resume').hover(function(){
        $(this).addClass('li-hover');
        $('#icon-resume div').addClass('div-hover');
    },function(){
        if($('#content-resume').css('display')=="none"){
            $(this).removeClass('li-hover');
            $('#icon-resume div').removeClass('div-hover');
        }
    });

    $('#icon-skill').hover(function(){
        $(this).addClass('li-hover');
        $('#icon-skill div').addClass('div-hover');
    },function(){
        if($('#content-skill').css('display')=="none"){
            $(this).removeClass('li-hover');
            $('#icon-skill div').removeClass('div-hover');
        }
    });

    $('#icon-works').hover(function(){
        $(this).addClass('li-hover');
        $('#icon-works div').addClass('div-hover');
    },function(){
        if($('#content-works').css('display')=="none"){
            $(this).removeClass('li-hover');
            $('#icon-works div').removeClass('div-hover');
        }
    });

    function c(){}
    function d(){}
    /*作品*/
    $("#starbucks").mouseenter(function(){
        $(".starbucks-mark").animate({top:13,height:500},300,function(){
            $(".starbucks-mark h4").html("仿星巴克");
            $(".starbucks-mark p").html("HTML5&CSS3--DIV+CSS布局")
        })
    });
    $("#starbucks").mouseleave(function(){
        $(".starbucks-mark").animate({top:513,height:0},300,function(){
            $(".starbucks-mark h4").html("");
            $(".starbucks-mark p").html("")
        })
    });
    $("#xiaomi").mouseenter(function(){
        $(".xiaomi-mark").animate({top:13,height:500},300,function(){
            $(".xiaomi-mark h4").html("仿小米双11官网");
            $(".xiaomi-mark p").html("jQuery")
        })
    });
    $("#xiaomi").mouseleave(function(){
        $(".xiaomi-mark").animate({top:513,height:0},300,function(){
            $(".xiaomi-mark h4").html("");
            $(".xiaomi-mark p").html("")
        })
    });
    $("#appleWatch").mouseenter(function(){
        $(".appleWatch-mark").animate({top:529,height:500},300,function(){
            $(".appleWatch-mark h4").html("全屏滚动");
            $(".appleWatch-mark p").html("fullpage插件")
        })
    });
    $("#appleWatch").mouseleave(function(){
        $(".appleWatch-mark").animate({top:1029,height:0},300,function(){
            $(".appleWatch-mark h4").html("");
            $(".appleWatch-mark p").html("")})
    });
    $("#meishiwang").mouseenter(function(){
        $(".meishiwang-mark").animate({top:529,height:500},300,function(){
            $(".meishiwang-mark h4").html("仿美食网新年网页");
            $(".meishiwang-mark p").html("DIV+CSS布局")
        })
    });
    $("#meishiwang").mouseleave(function(){
        $(".meishiwang-mark").animate({top:1029,height:0},300,function(){
            $(".meishiwang-mark h4").html("");
            $(".meishiwang-mark p").html("")
        })
    })
    $("#countdown").mouseenter(function(){
        $(".countdown-mark").animate({top:1045,height:500},300,function(){
            $(".countdown-mark h4").html("倒计时");
            $(".countdown-mark p").html("原生JS,Canvas")
        })
    });
    $("#countdown").mouseleave(function(){
        $(".countdown-mark").animate({top:1545,height:0},300,function(){
            $(".countdown-mark h4").html("");
            $(".countdown-mark p").html("")})
    });
    $("#weibo").mouseenter(function(){
        $(".weibo-mark").animate({top:1045,height:500},300,function(){
            $(".weibo-mark h4").html("仿新浪微博");
            $(".weibo-mark p").html("原生JS，面向对象")
        })
    });
    $("#weibo").mouseleave(function(){
        $(".weibo-mark").animate({top:1545,height:0},300,function(){
            $(".weibo-mark h4").html("");
            $(".weibo-mark p").html("")
        })
    });
    $(".starbucks-mark").click(function(){
        window.open("https://wo123niu.github.io/starbucks/home.html")
    });
    $(".xiaomi-mark").click(function(){
        window.open("https://wo123niu.github.io/xiaomishop/index.html")
    });

    $(".appleWatch-mark").click(function(){
        window.open("https://wo123niu.github.io/appleWatch/AppleWatch.html")
    });

    $(".meishiwang-mark").click(function(){
        window.open("https://wo123niu.github.io/meishiwang/home.html")
    });
    $(".countdown-mark").click(function(){
        window.open("https://Wo123Niu.github.io/countdown/index.html")
    });

    $(".weibo-mark").click(function(){
        window.open("https://wo123niu.github.io/Weibo-qianudan/code/blog/index.html")
    })
});

$(function(){
    var d=document.querySelector("#bg-image");
    d.style.transition="transform 6s linear";
    d.style.transform="scale(1.2)rotate(3deg)";
    var c=[
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
        "images/6.jpg",
        "images/home-bg.jpg"
    ];
    var a=1;
    var e;
    function b(){
        var f=document.querySelector("#bg-image img");
        d.style.transform="scale(1)rotate(0deg)";
        d.style.transition="transform 5s linear";
        $(f).fadeOut(5000,function(){
            f.src=c[a];
            $(f).fadeIn(3000,function(){
                d.style.transition="transform 6s linear";
                d.style.transform="scale(1.2)rotate(3deg)"
            });
            d.style.transition="transform 5s linear";
            d.style.transform="scale(1)rotate(0deg)";
            if(a==c.length-1){a=0}
            else{a++}
        })
    }
    e=window.setInterval(b,15000)
});
 $(document).ready(function(){
     /* 点击侧边栏 */
    $(".nav li").click(function(){

        $(this).find("span").show();

        $(this).siblings().find("span").hide();

        $(this).css({
            "background":"#4f5f79"
             }).siblings().css({
            "background":"none"
         });
    });
    /* 样式 */
        $(".right-mainBody").children().eq(0).css({
            "margin-left":"34px"
        });
        $(".right-mainBody").children().eq(4).css({
            "margin-left":"34px"
        });

    /* 改变背景图 */
        $(".mainBody--block:even").css({

        "background":"url(./images/bg-1.png)"

        });
        /* 显示更多信息作者  */
        $(".user-info").mouseover(function(){

            $(this).children("#infomorename").show();

        })
        $(".user-info").mouseout(function(){

         $(this).children("#infomorename").hide();

            console.log("haha ");
    });
    /* 改变播放图标 */
       $(".play").mousedown(function(){

           var $src=$(this).attr("src");

           if($src==="./images/play-icon_01.png"){

            $(this).attr("src","./images/play-icon_02.png");

           }else{

            $(this).attr("src","./images/play-icon_01.png");
        }
    })
    /*  新建作品 */
        $("#creatProd").mousedown(function(){

            $(".prod-init").show();/* 显示窗口 */
        /*               $(".wrap").css({
             "background":"rgb(0,0,0,0.6)"
            }); */
        })
         $("#close").click(function(){

            $(".prod-init").hide();/* 关闭窗口 */

        })
    /* 添加班级成员 */
    $("#adduser").click(function(){
        $(".classStu").show();/* 打开班级成员窗口 */
        $(".classStu-name-left > li").remove();
        $(".classStu-name-left > li").addClass("disnone");
    });
    $("#closeStu").click(function(){
        $(".classStu").hide();/* 关闭班级成员窗口 */
    })
    $(".classStu-name-right > .name").mouseover(function(){
            $(this).css({
                "background":"#c3e5fa"
            }).siblings().css({
                "background":"white"
        });
    });
    /* 添加 */
    $(".classStu-name-right > .name").click(function(){
            var $name=$(this);
            $name.css({
                "background":"#f0f5f9"
            });
            $(".addBut").click(function(){       
                $name.css({
                    "background":"none"
                });
                $name.remove();
                $name.appendTo($(".classStu-name-left"));
         }); 
         /* 删除 */
         $(".deletBut").click(function(){
            $(".classStu-name-left > li").addClass("disnone");       
            $name.remove();
            $name.appendTo($(".classStu-name-right"));
        });
    })
    /* 拖拽 */
        var _move = false;
        var _x, _y;
        $(' .prod-init').mousedown(function(e) {
        _move = true;
        _x = e.pageX - parseInt($(".prod-init").css("left"));
        _y = e.pageY - parseInt($(".prod-init").css("top"));
    });
        $(document).mousemove(function(e) {
            if (_move) {
                var x = e.pageX - _x;
                var y = e.pageY - _y;
                if(x>1920) x=500;
                if(y>1080) y=500;
                $(".prod-init").css({
                top: y,
                left: x
            });
         }
     }).mouseup(function() {
                _move = false;
  });//移动

}); 
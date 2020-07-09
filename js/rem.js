/**
 * Created by Administrator on 2019/6/29.
 */

//rem公式
(function(win,doc){
    //浏览器缩放时
    win.onresize=function(){
        change();
    };
    change();
    function change(){

        //320  20px
        //414  20px
        var oFs=doc.documentElement.clientWidth/(1920/120);

        //设置根目录字体大小
        doc.documentElement.style.fontSize=oFs+'px';
    }
})(window,document);
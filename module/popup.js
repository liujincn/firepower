module.exports = function () {
    this.popup = function (ele){
        $(".mask").height($(document).height()).fadeTo(250, 0.7)
        $(ele).css("left", ($(window).width() - $(ele).width()) / 2)
        $(ele).css("top", ($(window).height() - $(ele).height()) / 2)
        $(ele).show()
        if(ele==='.prize'){
            $(".receive").hide()
        }
        $(".close").click(function(){
            $(".mask").add(ele).hide()
            $('.plate li').removeClass('hover')
            $('.inbox li').removeClass('random_current')
        })
    }
}

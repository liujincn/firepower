module.exports = function () {
    $('.plate li').click(function () {
        var i = Math.floor(Math.random() * 9 + 1)
        $(this).addClass('hover')
        $(this).children('.back').addClass('back' + i)
        var num = i-1
        var total = Number($('.number li:eq('+num+') p').text())
        $('.number li:eq('+num+') p').html(total+1)

        setTimeout(" this.popup('.prize')", 300 )

    })

    $(".li-right span").hover(function(){
        $(this).children('.tips').show()
    },function(){
        $(this).children('.tips').hide()
    });
}

module.exports = function () {
    $('.scroll li:eq(0)').click(function (){
        $('html,body').animate({ scrollTop: '0' }, 500)
    })
    $('.scroll li:eq(1)').click(function (){
        $('html,body').animate({ scrollTop: '800px' }, 500)
    })
    $('.scroll li:eq(2)').click(function (){
        $('html,body').animate({ scrollTop: '1970px' }, 500)
    })
    $('.scroll li:eq(3)').click(function (){
        $('html,body').animate({ scrollTop: '3300px' }, 500)
    })
}

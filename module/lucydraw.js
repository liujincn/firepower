module.exports = function () {
    var index = 1,           //当前亮区位置
        prevIndex = 6,          //前一位置
        speed = 200,           //初始速度
        Time,            //定义对象
        arr_length = 6, //GetSide(5,5),         //初始化数组
        endIndex = 1,           //决定在哪一格变慢
        cycle = 0,           //转动圈数
        endCycle = 3,           //计算圈数
        flag = false,           //结束转动标志
        random_num = 1,      //中奖数
        quick = 0;           //加速
    this.startGame = function () {
        $("#random_box li").removeClass("random_current"); //取消选中
        //random_num = parseInt($("#txtnum").val());//
        random_num = Math.floor(Math.random() * 6 + 1); //产出随机中奖数1--6之间
        index = 1; //再来一次,从1开始
        cycle = 0;
        flag = false;
        if (random_num > 3) {
            endIndex = random_num - 3; //开始变慢
        } else {
            endIndex = random_num + 6 - 3; //开始变慢
        }
        Time = setInterval(star, speed);

    }

    function star(num) {
        //跑马灯变速
        if (flag == false) {
            //走五格开始加速
            if (quick == 5) {
                clearInterval(Time);
                speed = 50;
                Time = setInterval(star, speed);
            }
            //跑N圈减速
            if (cycle == endCycle + 1 && index - 1 == endIndex) {
                clearInterval(Time);
                Speed = 200;
                flag = true;         //触发结束
                Time = setInterval(star, speed);
            }
        }

        if (index > arr_length) {
            index = 1;
            cycle++;
        }

        //结束转动并选中号码
        if (flag == true && index == parseInt(random_num)) {
            quick = 0;
            clearInterval(Time);
            this.popup('.prize')
        }

        $("#random_" + index).addClass('random_current'); //设置当前选中样式
        if (index > 1)
            prevIndex = index - 1;
        else {
            prevIndex = arr_length;
        }
        $("#random_" + prevIndex).removeClass('random_current'); //取消上次选择样式
        index++;
        quick++;

    }

};

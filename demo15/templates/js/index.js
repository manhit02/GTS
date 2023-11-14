var $one = document.querySelector.bind(document);
var $$all = document.querySelectorAll.bind(document);
// all: 
try {


    var countsownag = 0

    function startTimer(duration, display) {
        var timer = duration,
            minutes, seconds;
        var countdown = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;


            if (--timer < 0) {
                clearInterval(countdown);
                showindex14()

            }
        }, 1000);


    }

    function showindex14() {
        $one('.index14-js-1').style.display = "none"
        $one('.index14-js-2').style.display = "block"

    }


} catch (error) {

}
// header
try {
    $one(".header-top__menumb-overlay").onclick=()=>{
        console.log(1)
        $one(".js-menumb").classList.remove('active');
        $one(".js-showmenu").style.display = "none"
        $one(".js-showmenu").style.display = "block"

    }
    $one(".js-showmenu").onclick = () => {
        $one(".js-menumb").classList.add('active');
        $one(".js-showmenu").style.display = "none"
    };
    $one(".js-closemenu").onclick = () => {
        $one(".js-menumb").classList.remove('active');
        $one(".js-showmenu").style.display = "block"
    };


    var spf = 0

    $one(".js-showprofile").onclick = () => {
        if ($one(".js-showprofile").classList.contains('active')) {
            $one(".js-profile").classList.toggle('active')
        } else {
            window.location.href = "./dangnhap.html"
        }
    }

    $one(".js-logout").onclick = () => {
        $one(".js-login").classList.remove('active')

    }
    window.addEventListener('scroll', scroll1)

    function scroll1() {

        if (document.documentElement.scrollTop > 80) {
            $one('.js-nav').classList.add('active')

        } else $one('.js-nav').classList.remove('active')

    }
  
    $one(".js-thanhcong").onclick = () => {
        console.log(1)
        $one(".popup-thanhcong").style.display="none"

    }
   
    


} catch (e) {

}
// index

try {


} catch (e) {

}
// 
// index3
try {
    $one('.index3-js-menuat').onclick = () => {
        $one('.index3-js-menu').classList.toggle('active')
    }
    $$all('.index3-js-menu li').forEach((value, index, array) => {
        value.onclick = () => {
            value.classList.add('active')
            $$all('.index3-js-menu li').forEach((value, index, array) => {
                value.classList.remove('active')

            })
            value.classList.add('active')

            $one(".index3-js-menuat").innerHTML = `
            Ôn thi Giấy phép lái xe hạng <strong>${value.children[0].outerText}</strong>
            `
            $one('.index3-js-menu').classList.toggle('active')


        }
    })
} catch (e) {

}
// index4
try {

    $$all('.js-index4-send').forEach((value) => {
        value.onclick = () => {
            $one('.js-index4-popup').style.display = "flex"


        }

    })
    $$all('.js-index4-verify').forEach(value => {

        value.onclick = () => {
            $one('.js-index4-popup2').style.display = "flex"
            $$all('.js-index4-send').forEach((value) => {
                value.style.background = 'linear-gradient(248.39deg, #E7E7E7 27.09%, #AFAFAF 64.19%)';
                value.style.color = "#696969"
            })
        }

    })
    $one('.js-index4-closepopup').onclick = () => {
        $one('.js-index4-popup').style.display = "none"

    }
    $one('.js-index4-return').onclick = () => {
        $one('.js-index4-popup').style.display = "none"
        $one('.js-index4-popup2').style.display = "none"
        $$all('.js-send').forEach((value) => {

            value.style.background = 'linear-gradient(248.39deg, #E7E7E7 27.09%, #AFAFAF 64.19%)';


        })
        $one('.index-4-app-left__resulf').style.display = "block"

    }
    $one('.js-index4-closepopup2').onclick = () => {
        $one('.js-index4-popup2').style.display = "none"
        $one('.js-index4-popup').style.display = "none"

    }

    $$all('.js-index4-resulf li').forEach((value) => {
        value.onclick = () => {
            $$all('.js-index4-resulf li').forEach((value) => {
                value.classList.remove('active')
            })
            value.classList.add('active')



        }
    })

    $$all('.js-index4-question').forEach((value) => {
        value.onclick = () => {
            value.classList.toggle('active')
            $$all('.js-index4-resulf li').forEach((value) => {
                value.classList.remove('active')
            })

        }
    })
    $one('.js-index4-showquestion').onclick = () => {
        if ($one('.js-index4-overlay2').style.display === "flex") {
            $one('.js-index4-overlay2').style.display = "none"
        } else {

            $one('.js-index4-overlay2').style.display = "flex"
        }
        $one('.js-index4-showquestion').classList.toggle('active')


    }




    window.onload = function () {
        var fiveMinutes = 60 * 30,
            display = document.querySelector('.index4-js-countdown');
        startTimer(fiveMinutes, display);
    };

    document.addEventListener("DOMContentLoaded", () => {

        for (let index = 1; index <= 35; index++) {

            $$all(`.c${index}`).forEach((value, index, array) => {
                value.onclick = () => {

                    for (let index = 0; index < array.length; index++) {
                        array[index].checked = false

                    }
                    value.checked = true
                }
            })

        }
    });

} catch (e) {


}
// index5
try {
    $$all('.index5-js-bd li').forEach((value, index, array) => {
        value.onclick = () => {
            console.log(value)
            window.location.href = "./dethingaunhien.html"

        }
    })
} catch (error) {

}
// index6
try {
    $one('.index6-js-showmenu').onclick = () => {
        $one('.index6-js-menu').classList.toggle('active')
    }
} catch (e) {

}
// index8
try {
    $one('.index8-js-sw').onclick = () => {
        $one('.index8-js-menu1').classList.toggle('active')
    }
    $$all('.index8-js-menu1 li').forEach((value, index, array) => {
        value.onclick = () => {
            value.classList.add('active')
            $$all('.index8-js-menu1 li').forEach((value, index, array) => {
                value.classList.remove('active')

            })
            value.classList.add('active')

            $one(".index8-js-sw").innerHTML = `
            ${value.outerText}
            `
            $one('.index8-js-menu1').classList.remove('active')
        }
    })
    $$all('.index8-js-menu li').forEach((value, index, array) => {
        value.onclick = () => {
            $$all('.index8-js-menu li').forEach((value, index, array) => {
                value.classList.remove('active')

            })
            value.classList.add('active')

        }
    })



} catch (e) { }
// index9
try {

} catch (e) { }
// index10
try {
    $$all(".index10-js-control").forEach((value, index, array) => {
        value.onclick = () => {
            $$all(".index10-js-control").forEach((value, index, array) => {
                value.classList.remove("active")
            })
            value.classList.add("active")

            if (value.classList.contains("index10-js-control1")) {
                $one(".index10-js-slider").scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
                $one(".index10-js-slider2").scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })


            }
            if (value.classList.contains("index10-js-control2")) {
                $one(".index10-js-slider").scrollTo({
                    top: 0,
                    left: (($one('.index10-js-slider').scrollWidth - $one('.index10-js-slider').clientWidth) / 3) * 1,
                    behavior: "smooth"
                })
                $one(".index10-js-slider2").scrollTo({
                    top: 0,
                    left: (($one('.index10-js-slider2').scrollWidth - $one('.index10-js-slider2').clientWidth) / 3) * 1,
                    behavior: "smooth"
                })

            }
            if (value.classList.contains("index10-js-control3")) {

                $one(".index10-js-slider").scrollTo({
                    top: 0,
                    left: (($one('.index10-js-slider').scrollWidth - $one('.index10-js-slider').clientWidth) / 3) * 2 + 10,
                    behavior: "smooth"
                })

                $one(".index10-js-slider2").scrollTo({
                    top: 0,
                    left: (($one('.index10-js-slider2').scrollWidth - $one('.index10-js-slider2').clientWidth) / 3) * 2,
                    behavior: "smooth"
                })

            }
            if (value.classList.contains("index10-js-control4")) {
                $one(".index10-js-slider").scrollTo({
                    top: 0,
                    left: (($one('.index10-js-slider').scrollWidth - $one('.index10-js-slider').clientWidth) / 3) * 3,
                    behavior: "smooth"
                })
                $one(".index10-js-slider2").scrollTo({
                    top: 0,
                    left: (($one('.index10-js-slider2').scrollWidth - $one('.index10-js-slider2').clientWidth) / 3) * 3,
                    behavior: "smooth"
                })


            }

        }
    })
    $$all(".index10-js-control-2").forEach((value, index, array) => {
        value.onclick = () => {
            $$all(".index10-js-control-2").forEach((value, index, array) => {
                value.classList.remove("active")
            })
            value.classList.add("active")
        }
    })
    var a = 0;

    function index10jspev() {
        if (a > 0) {
            a = a - 1

            $one(".index10-js-slider").scrollTo({ top: 0, left: a * (($one('.index10-js-slider').scrollWidth - $one('.index10-js-slider').clientWidth) / 3 + 10), behavior: "smooth" })
            $one(".index10-js-slider2").scrollTo({ top: 0, left: a * (($one('.index10-js-slider2').scrollWidth - $one('.index10-js-slider2').clientWidth) / 3), behavior: "smooth" })
        }
    }

    function index10jsnext() {
        if (a < 3) {
            a = a + 1

            $one(".index10-js-slider").scrollTo({ top: 0, left: a * (($one('.index10-js-slider').scrollWidth - $one('.index10-js-slider').clientWidth) / 3 + 10), behavior: "smooth" })
            $one(".index10-js-slider2").scrollTo({ top: 0, left: a * (($one('.index10-js-slider2').scrollWidth - $one('.index10-js-slider2').clientWidth) / 3), behavior: "smooth" })
        }

    }
    $one(".index10-js-slider").addEventListener('scroll', () => {
        if ($one('.index10-js-slider').scrollLeft == 0) {
            $one('.index10-js-control1').classList.add('active')
            $one('.index10-js-control2').classList.remove('active')
            $one('.index10-js-control3').classList.remove('active')
            $one('.index10-js-control4').classList.remove('active')
        }
        if ($one('.index10-js-slider').scrollLeft >= (($one('.index10-js-slider').scrollWidth - $one('.index10-js-slider').clientWidth) / 3) && $one('.index10-js-slider').scrollLeft < (($one('.index10-js-slider').scrollWidth - $one('.index10-js-slider').clientWidth) / 3) * 2) {
            $one('.index10-js-control2').classList.add('active')
            $one('.index10-js-control1').classList.remove('active')
            $one('.index10-js-control3').classList.remove('active')
            $one('.index10-js-control4').classList.remove('active')
        }
        if ($one('.index10-js-slider').scrollLeft >= (($one('.index10-js-slider').scrollWidth - $one('.index10-js-slider').clientWidth) / 3) * 2 && $one('.index10-js-slider').scrollLeft < (($one('.index10-js-slider').scrollWidth - $one('.index10-js-slider').clientWidth) / 3) * 3) {
            $one('.index10-js-control3').classList.add('active')
            $one('.index10-js-control1').classList.remove('active')
            $one('.index10-js-control2').classList.remove('active')
            $one('.index10-js-control4').classList.remove('active')
        }
        if ($one('.index10-js-slider').scrollLeft >= (($one('.index10-js-slider').scrollWidth - $one('.index10-js-slider').clientWidth) / 3) * 3) {
            $one('.index10-js-control4').classList.add('active')
            $one('.index10-js-control1').classList.remove('active')
            $one('.index10-js-control3').classList.remove('active')
            $one('.index10-js-control2').classList.remove('active')
        }



    })
    $one(".index10-js-slider2").addEventListener('scroll', () => {

        if ($one('.index10-js-slider2').scrollLeft == 0) {

            $one('.index10-js-control1').classList.add('active')
            $one('.index10-js-control2').classList.remove('active')
            $one('.index10-js-control3').classList.remove('active')
            $one('.index10-js-control4').classList.remove('active')
        }
        if ($one('.index10-js-slider2').scrollLeft >= (($one('.index10-js-slider2').scrollWidth - $one('.index10-js-slider2').clientWidth) / 3)) {

            $one('.index10-js-control2').classList.add('active')
            $one('.index10-js-control1').classList.remove('active')
            $one('.index10-js-control3').classList.remove('active')
            $one('.index10-js-control4').classList.remove('active')
        }
        if ($one('.index10-js-slider2').scrollLeft >= (($one('.index10-js-slider2').scrollWidth - $one('.index10-js-slider2').clientWidth) / 3) * 2) {

            $one('.index10-js-control3').classList.add('active')
            $one('.index10-js-control1').classList.remove('active')
            $one('.index10-js-control2').classList.remove('active')
            $one('.index10-js-control4').classList.remove('active')
        }
        if ($one('.index10-js-slider2').scrollLeft >= (($one('.index10-js-slider2').scrollWidth - $one('.index10-js-slider2').clientWidth) / 3) * 3) {

            $one('.index10-js-control4').classList.add('active')
            $one('.index10-js-control1').classList.remove('active')
            $one('.index10-js-control3').classList.remove('active')
            $one('.index10-js-control2').classList.remove('active')

        }
    })
} catch (e) {

}
// index11
try {
    $$all(".index11-js-control").forEach((value, index, array) => {
        value.onclick = () => {
            $$all(".index11-js-control").forEach((value, index, array) => {
                value.classList.remove("active")
            })
            value.classList.add("active")
        }
    })
} catch (error) {

}
// index12
try {
    var checkpw = 1
    $one(".index12-js-switchpw").onclick = () => {
        if (checkpw == 1) {
            $one(".index12-js-pw input").type = "text"
            $one(".index12-js-switchpw").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpw = 2

        } else {
            $one(".index12-js-pw input").type = "password"
            $one(".index12-js-switchpw").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpw = 1
        }

    }
    $one(".index12-js-qmkBtn").onclick = () => {
        $one(".index12-js-login").style.display = 'none'
        $one(".index12-js-qmk ").style.display = 'block'

    }
    $one(".index12-js-tt").onclick = () => {
        $one(".index12-js-login").style.display = 'none'
        $one(".index12-js-qmk").style.display = 'none'
        $one(".index12-js-ttt").style.display = 'block'

    }
    var checkpww1=1
    var checkpww2=1
    $one(".index12-js-switchpw1").onclick = () => {
        if (checkpww1 == 1) {
            $one(".index12-js-pw1 input").type = "text"
            $one(".index12-js-switchpw1").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpww1 = 2

        } else {
            $one(".index12-js-pw1 input").type = "password"
            $one(".index12-js-switchpw1").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpww1 = 1
        }

    }
    $one(".index12-js-switchpw2").onclick = () => {
        if (checkpww2 == 1) {
            $one(".index12-js-pw2 input").type = "text"
            $one(".index12-js-switchpw2").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpww2 = 2

        } else {
            $one(".index12-js-pw2 input").type = "password"
            $one(".index12-js-switchpw2").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpww2 = 1
        }

    }
} catch (e) {

}
// index13
try {
    var checkpw1 = 1
    var checkpw2 = 1
    var checkpw6 = 1
    var checkpw7 = 1
    var checkpw8 = 1
 $one(".index13-js-kh").onclick = () => {

        $one(".index-13-app-item2").style.display = "none"
        $one(".index-13-app-item1").style.display = "flex"
        $one(".index13-js-home2-2").style.display="block"
        $one(".index13-js-home2-1").style.display="none"
    }
    $one(".index13-js-trove").onclick = () => {
        $one(".index-13-app-item2").style.display = "none"
        $one(".index-13-app-item1").style.display = "flex"

    }
    $one(".index13-js-tieptuc").onclick = () => {
        $one(".index-13-app-item1").style.display = "none"
        $one(".index-13-app-item2").style.display = "flex"
        var fiveMinutes = 60 * 5,
            display = document.querySelector('.index13-js-countdown');
        startTimer(fiveMinutes, display);
    }


    $one(".index13-js-switchpw1").onclick = () => {
        if (checkpw1 == 1) {
            $one(".index13-js-pw1 input").type = "text"
            $one(".index13-js-switchpw1").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpw1 = 2

        } else {
            $one(".index13-js-pw1 input").type = "password"
            $one(".index13-js-switchpw1").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpw1 = 1
        }

    }
    $one(".index13-js-switchpw2").onclick = () => {
        if (checkpw2 == 1) {
            $one(".index13-js-pw2 input").type = "text"
            $one(".index13-js-switchpw2").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpw2 = 2

        } else {
            $one(".index13-js-pw2 input").type = "password"
            $one(".index13-js-switchpw2").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpw2 = 1
        }

    }
    $one(".index13-js-switchpw3").onclick = () => {
        if (checkpw8 == 1) {
            $one(".index13-js-pw3 input").type = "text"
            $one(".index13-js-switchpw3").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpw8 = 2


        } else {
            $one(".index13-js-pw3 input").type = "password"
            $one(".index13-js-switchpw3").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpw8 = 1
        }

    }
    $one(".index13-js-switchpw4").onclick = () => {
        if (checkpw6 == 1) {
            $one(".index13-js-pw4 input").type = "text"
            $one(".index13-js-switchpw4").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpw6 = 2

        } else {
            $one(".index13-js-pw4 input").type = "password"
            $one(".index13-js-switchpw4").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpw6 = 1
        }

    }
    $one(".index13-js-switchpw5").onclick = () => {
        if (checkpw7 == 1) {
            $one(".index13-js-pw5 input").type = "text"
            $one(".index13-js-switchpw5").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpw7 = 2

        } else {
            $one(".index13-js-pw5 input").type = "password"
            $one(".index13-js-switchpw5").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpw7 = 1
        }
        
    }
   
} catch (e) {

}
// index14
try {
    var checkpw3 = 1
    var checkpw4 = 1
    var checkpw5 = 1

    $one(".index14-js-switchpw1").onclick = () => {
        if (checkpw3 == 1) {
            $one(".index14-js-pw1 input").type = "text"
            $one(".index14-js-switchpw1").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpw3 = 2

        } else {
            $one(".index14-js-pw1 input").type = "password"
            $one(".index14-js-switchpw1").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpw3 = 1
        }

    }
    $one(".index14-js-switchpw2").onclick = () => {
        if (checkpw4 == 1) {
            $one(".index14-js-pw2 input").type = "text"
            $one(".index14-js-switchpw2").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpw4 = 2

        } else {
            $one(".index14-js-pw2 input").type = "password"
            $one(".index14-js-switchpw2").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpw4 = 1
        }

    }
    $one(".index14-js-switchpw3").onclick = () => {
        if (checkpw5 == 1) {
            $one(".index14-js-pw3 input").type = "text"
            $one(".index14-js-switchpw3").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpw5 = 2

        } else {
            $one(".index14-js-pw3 input").type = "password"
            $one(".index14-js-switchpw3").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpw5 = 1
        }

    }

    $one('.index14-js-up').onclick = () => {
        $one('.popup-index14').style.display = 'flex'

        $one('.index14-js-5').style.display = "block"
        $one('.index14-js-4').style.display = "none"
        $one('.index14-js-1').style.display = "block"
        $one('.index14-js-2').style.display = "none"
        $one('.index14-js-6').style.marginBottom = "0"

        fiveMinutes = 60*5,
            display = document.querySelector('.index14-js-countdown');
        startTimer(fiveMinutes, display);


    }
    $one('.index14-js-closepopup').onclick = () => {
        $one('.popup-index14').style.display = 'none'
    }
    $one('.index14-js-closepopup2').onclick = () => {
        $one('.popup2-index14').style.display = 'none'
    }
    $one('.index14-js-xn').onclick = () => {
        $one('.popup-index14').style.display = 'none'
        $one('.index14-js-ac').style.display = 'flex'
        $one('.index14-js-choose').style.display = "none"
        $one('.index14-js-hide').style.display = "none"
        $one('.index14-js-info').style.marginTop = "32px"



    }
    $one('.index14-js-3').onclick = () => {
        countsownag++;
        $one('.index14-js-1').style.display = "block"
        $one('.index14-js-2').style.display = "none"
        if (countsownag < 3) {
            fiveMinutes = 1,
                display = document.querySelector('.index14-js-countdown');
            startTimer(fiveMinutes, display);

        }
        if (countsownag == 3) {
            $one('.index14-js-5').style.display = "none"
            $one('.index14-js-4').style.display = "block"
            $one('.index14-js-1').style.display = "none"
            $one('.index14-js-2').style.display = "none"
            $one('.index14-js-6').style.marginBottom = "73px"


        }
    }
   







} catch (e) {

}
try {


    var citis = document.getElementById("city");
    var districts = document.getElementById("district");
    var wards = document.getElementById("ward");
    var citis2 = document.getElementById("city2");
    var districts2 = document.getElementById("district2");
    var wards2 = document.getElementById("ward2");
    var Parameter = {
        url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
        method: "GET",
        responseType: "application/json",
    };
    var promise = axios(Parameter);
    promise.then(function (result) {
        renderCity(result.data);
    });

    function renderCity(data) {
        for (const x of data) {
            citis.options[citis.options.length] = new Option(x.Name, x.Id);
            citis2.options[citis2.options.length] = new Option(x.Name, x.Id);

        }
        citis.onchange = function () {
            district.length = 1;
            ward.length = 1;
            if (this.value != "") {
                const result = data.filter(n => n.Id === this.value);

                for (const k of result[0].Districts) {
                    district.options[district.options.length] = new Option(k.Name, k.Id);
                }
            }
        };
        citis2.onchange = function () {
            district.length = 1;
            ward.length = 1;
            if (this.value != "") {
                const result = data.filter(n => n.Id === this.value);

                for (const k of result[0].Districts2) {
                    district.options[district.options.length] = new Option(k.Name, k.Id);
                }
            }
        };
        district.onchange = function () {
            ward.length = 1;
            const dataCity = data.filter((n) => n.Id === citis.value);
            if (this.value != "") {
                const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;

                for (const w of dataWards) {
                    wards.options[wards.options.length] = new Option(w.Name, w.Id);
                }
            }
        };
        district2.onchange = function () {
            ward2.length = 1;
            const dataCity = data.filter((n) => n.Id === citis.value);
            if (this.value != "") {
                const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;

                for (const w of dataWards) {
                    wards2.options[wards2.options.length] = new Option(w.Name, w.Id);
                }
            }
        };
    }

} catch (e) {

}
// index22
try {
    var index22Number = 1;
    $one("..index-22-app-left-sl__btn-prev").onclick = () => {
        if (index22Number > 1) {
            index22Number--

        } else {
            index22Number = 12

        }
        $one('.index-22-js-number').innerText = `${index22Number}`;

    };
    $one(".index-22-app-left-sl__btn-next").onclick = () => {
        if (index22Number < 12) {
            index22Number++

        } else {
            index22Number = 1

        }

        $one('.index-22-js-number').innerText = `${index22Number}`;



    };
} catch (error) {

}
// index25
try {
    $one('.js-index25-showquestion').onclick = () => {
        if ($one('.js-index25-overlay2').style.display === "flex") {
            $one('.js-index25-overlay2').style.display = "none"
        } else {
            $one('.js-index25-overlay2').style.display = "flex"
        }
        $one('.js-index25-showquestion').classList.toggle('active')



    }
    $one('.index25-js-showpopup').onclick = () => {
        $one('.popup-index25').classList.add("active")

    }
    $one('.js-index25-return').onclick = () => {
        $one('.index25-js-resulf').style.display = 'block'
        $one('.js-index25-overlay2').style.display = "none"
        $one('.popup-index25').classList.remove("active")


    }
    $one('.js-index25-closepopup').onclick = () => {
        $one('.popup-index25').classList.remove("active")
        window.location.href = "./hoctap-ggpt1-ontap.html"


    }
    $$all(".index25-js-ch").forEach((value, index, array) => {
        value.onclick = () => {
            $$all(".index25-js-ch").forEach((value, index, array) => {
                value.classList.remove('active')
            })
            value.classList.add('active')
        }
    })

} catch (e) {

}
// index26
try {
    var checkpw10 = 1
    var checkpw11 = 1
    $one(".index26-js-switchpw1").onclick = () => {
        if (checkpw10 == 1) {
            $one(".index26-js-pw1 input").type = "text"
            $one(".index26-js-switchpw1").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpw10 = 2

        } else {
            $one(".index26-js-pw1 input").type = "password"
            $one(".index26-js-switchpw1").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpw10 = 1
        }

    }
    $one(".index26-js-switchpw2").onclick = () => {
        if (checkpw11 == 1) {
            $one(".index26-js-pw2 input").type = "text"
            $one(".index26-js-switchpw2").style.backgroundImage = "url('../assets/images/login-ear.png')"
            checkpw11 = 2

        } else {
            $one(".index26-js-pw2 input").type = "password"
            $one(".index26-js-switchpw2").style.backgroundImage = "url('../assets/images/login-eye-off.png')"
            checkpw11 = 1
        }

    }
} catch (error) {

}




// 4-7
try {
    var el = document.getElementById('graph'); // get canvas

    var options = {
        percent:  el.getAttribute('data-percent') || 25,
        size: el.getAttribute('data-size') || 220,
        lineWidth: el.getAttribute('data-line') || 5,
        rotate: el.getAttribute('data-rotate') || 0
    }
    
    var canvas = document.createElement('canvas');
    var span = document.createElement('span');
    span.textContent = options.percent + '%';
        
    if (typeof(G_vmlCanvasManager) !== 'undefined') {
        G_vmlCanvasManager.initElement(canvas);
    }
    
    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;
    
    el.appendChild(span);
    el.appendChild(canvas);
    
    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg
    
    //imd = ctx.getImageData(0, 0, 240, 240);
    var radius = (options.size - options.lineWidth) / 2;
    
    var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'round'; // butt, round or square
            ctx.lineWidth = lineWidth
            ctx.stroke();
    };
    
    drawCircle('#FFFFFF', options.lineWidth, 100 / 100);
    drawCircle('#3D8CD6', options.lineWidth, options.percent / 100);  

    var el2 = document.getElementById('graph2'); // get canvas

    var options2 = {
        percent:  el2.getAttribute('data-percent') || 25,
        size: el2.getAttribute('data-size') || 220,
        lineWidth: el2.getAttribute('data-line') || 5,
        rotate: el2.getAttribute('data-rotate') || 0
    }
    
    var canvas = document.createElement('canvas');
    var span = document.createElement('span');
    span.textContent = options2.percent + '%';
        
    if (typeof(G_vmlCanvasManager) !== 'undefined') {
        G_vmlCanvasManager.initElement(canvas);
    }
    
    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options2.size;
    
    el2.appendChild(span);
    el2.appendChild(canvas);
    
    ctx.translate(options2.size / 2, options2.size / 2); // change center
    ctx.rotate((-1 / 2 + options2.rotate / 180) * Math.PI); // rotate -90 deg
    
    //imd = ctx.getImageData(0, 0, 240, 240);
    var radius = (options2.size - options2.lineWidth) / 2;
    
    var drawCircle2 = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'round'; // butt, round or square
            ctx.lineWidth = lineWidth
            ctx.stroke();
    };
    
    drawCircle2('#FFFFFF', options2.lineWidth, 100 / 100);
    drawCircle2('#00983D', options2.lineWidth, options2.percent / 100);  
} catch (error) {
    
}


//    update 28/7/2023
  $$all(".js-selectn3 li a").forEach((value, index, array) => {
    value.onclick=()=>{
$one(".js-selectn2").innerText=value.textContent
       
    }
  });

// update 7/8/2023
  var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


// update 18/8/2023
try {
    $one('.app10-title__input1').onfocus=()=>{
        $one('.app10-title__input3').style.display='flex'
    
    }
    $one('.app10-title__input1').onblur=()=>{
    setTimeout(() => {
            $one('.app10-title__input3').style.display='none'
        
            
        }, 200);
    }
    $one('.app10-title__input3').onclick=()=>{
        $one('.app10-title__input1').value=''
    }
    
} catch (error) {
    
}

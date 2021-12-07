let a_parent = document.querySelectorAll(".a_parent");
let dd_menu_a = document.querySelectorAll(".dd_menu_a");


function parentClickEvent() {
    a_parent.forEach((aitem) => {
        aitem.addEventListener("click", () => {
            a_parent.forEach((aitem) => {
                aitem.classList.remove("active");
            })

            // 다음 부모 메뉴로 이동시 부모안에 서브안에 서브를 없애주는 역할
            dd_menu_a.forEach(function (dd_menu_item) {
                dd_menu_item.classList.remove("active");
            })

            aitem.classList.add("active");
        })

        if (aitem.className === 'a_parent active') {
            a_parent.forEach((aitem) => {
                aitem.classList.remove("active");
            })
        }

    })
}

function subClickEvent() {
    dd_menu_a.forEach(function (dd_menu_item) {

        dd_menu_item.addEventListener("click", function () {
            dd_menu_a.forEach(function (dd_menu_item) {
                dd_menu_item.classList.remove("active");
            })
            dd_menu_item.classList.add("active");
        })
    })
}

parentClickEvent()
subClickEvent()
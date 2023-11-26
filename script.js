let canvas = document.querySelector(".canvas")
let context = canvas.getContext("2d")
let span1 = document.querySelector(".span1")
let curentRoom = 2
let greenKey = false
let redKey = false
let image1 = new Image()
let image2 = new Image()
let image3 = new Image()
let image4 = new Image()
let image5 = new Image()
let image6 = new Image()
let typed1 = null
let isTyping = false


image1.src = "/image/room1.jpg"
image2.src = "/image/room2.jpg"
image3.src = "/image/room3.jpg"
image4.src = "/image/room4.jpg"
image5.src = "/image/room5.jpg"
image6.src = "/image/room6.jpg"

context.font = "20px Arial"

function room1() {
    context.clearRect(0, 0, 1000, 1000)
    context.drawImage(image1, 10, 10, 780, 400)

    isTyping = true

    let typed = new Typed('#typed', {
        stringsElement: '#typedStrings1',
        typeSpeed: 100,
        startDelay: 500,
        backSpeed: 50,
        loop: true,
        onComolete: function () {
            isTyping = false
        }
    })
}

function room2() {
    context.clearRect(0, 0, 1000, 1000)
    context.drawImage(image2, 10, 10, 780, 400)

    isTyping = true

    let typed = new Typed('#typed', {
        stringsElement: '#typedStrings2',
        typeSpeed: 100,
        startDelay: 500,
        backSpeed: 50,
        loop: true,
        onComolete: function () {
            isTyping = false
        }
    })
}


function room3() {
    context.clearRect(0, 0, 1000, 1000)
    context.drawImage(image3, 10, 10, 780, 400)

}

function room4() {
    context.clearRect(0, 0, 1000, 1000)
    context.drawImage(image4, 10, 10, 780, 400)

}

function room5() {
    context.clearRect(0, 0, 1000, 1000)
    context.drawImage(image5, 10, 10, 780, 400)


}

function room6() {
    context.clearRect(0, 0, 1000, 1000)
    context.drawImage(image6, 10, 10, 780, 400)


}

function switchRoom(event) {
    if (isTyping) {
        return
    }
    if (event.key == 1) {
        if (curentRoom == 1) {
            curentRoom = 2
            room2()

        } else if (curentRoom == 2) {
            curentRoom = 3
            room3()
        } else if (curentRoom == 3) {
            if (greenKey) {
                curentRoom = 6
                room6()
            } else {
                alert('Заперто на ключ, не пройти!')
            }
        } else if (curentRoom == 4) {
            curentRoom = 2
            room2()
        } else if (curentRoom == 5) {
            curentRoom = 2
            room2()
        } else {
            alert('Действие не найдено!')
        }

    } else if (event.key == 2) {
        if (curentRoom == 1) {
            alert("Ты оказался трусом!(")
        } else if (curentRoom == 2) {
            if (redKey) {
                curentRoom = 5
                room5()
            } else {
                alert('Заперто нету ключа!')
            }
        } else if (curentRoom == 3) {
            curentRoom = 4
            room4()
        } else if (curentRoom == 4) {
            alert('Тщательно осматривая камеру вы находите ключ от подсобки.')
            redKey = true
        } else if (curentRoom == 5) {
            alert('Перебирая различные шкафы с оборудуванием в конце концов вы находите необычный ключ')
            greenKey = true
        } else {
            alert('Действие не найдено!')
        }
    } else if (event.key == 3) {
        if (curentRoom == 1) {
            alert('Действие не найдено!')
        } else if (curentRoom == 2) {
            alert("Осматривая помещение вы ничего не нашли!")
        } else if (curentRoom == 3) {
            alert("Вокруг только пыль и ничего больше")
        } else {
            alert('Действие не найдено!')
        }
    } else if (event.key == 4) {
        if (curentRoom == 1) {
            alert('Действие не найдено!')
        } else if (curentRoom == 2) {
            alert("Возращаясь назад вы поняли что проход засыпало \nпридётся идти только вперёд.")
        } else if (curentRoom == 3) {
            curentRoom = 2
            room2()
        }
        else {
            alert('Действие не найдено!')
        }
    } else {
        alert('Действие не найдено!')
    }
}

window.addEventListener('load', room2)
document.addEventListener('keydown', switchRoom)

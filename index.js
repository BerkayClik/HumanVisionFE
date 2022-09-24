const params = new URLSearchParams(window.location.search)
const myName = document.getElementById("q1").name


const myNewPageNum = parseInt(myName.slice(1, 2)) + 1
const myOldPageNum = parseInt(myName.slice(1, 2)) - 1




document.getElementById("submit").addEventListener("click", asd);

document.getElementById("submit1").addEventListener("click", asd);

document.getElementById("goBack").addEventListener("click", function () {

    url = "/step-" + myOldPageNum + ".html?"
    window.location.href = url + params

})



function asd() {

    const myValue = document.getElementById("q1").value

    if (params.get(myName) != null) {
        if (myValue != '') {
            params.delete(myName)
        }

    }

    url = "/step-" + myNewPageNum + ".html?" + myName + "=" + myValue

    if (Array.from(params).length >= 1)
        window.location.href = url + "&" + params

    else
        window.location.href = url
}

const [login, senha] = document.querySelectorAll("input");

const btn = document.querySelector("button");

const imgBaron = document.querySelector(".baronRoubo")

const imgObejetivo = document.querySelector(".baronObejetivo")

function verify() {
    if ((login.value.length > 8 || login.value.length <= 12) && (senha.value.length >= 8)) {
        btn.removeAttribute("disabled")
        btn.classList.add("cor")
        imgBaron.classList.add("ativo")
        imgObejetivo.classList.add("desativo")
    } else {
        btn.setAttribute("disabled", "disabled")
        btn.classList.remove("cor")
        imgBaron.classList.remove("ativo")
        imgObejetivo.classList.remove("desativo")
    }
}


login.addEventListener("input", verify)
senha.addEventListener("input", verify)



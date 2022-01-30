let login = document.getElementById('login')
let el = document.documentElement
login.addEventListener('click' , () =>{
    if(el.requestFullscreen){
        el.requestFullscreen()
    }
})
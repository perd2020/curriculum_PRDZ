const $botonMenuAbrir =document.querySelector(".abrir");
const $botonMenuCerrar =document.querySelector(".cerrar");
const $panel=document.querySelector(".panel");
const $menu=document.querySelector(".menu");
const $menuLink =document.querySelectorAll("#nav a");

console.log($botonMenuAbrir);
// console.log($botonMenuCerrar);
// console.log($panel);
// console.log($menu);
// console.log($menuLink);

$botonMenuAbrir.addEventListener("click", (e)=>{
    
    function abrirMenu(e) {
        // alert("boton menu abrir")
        $botonMenuAbrir.classList.add("no_visible");
        $botonMenuCerrar.classList.remove("no_visible")
        $panel.classList.add("is-active");
        
    }
    
    abrirMenu();
})

$botonMenuCerrar.addEventListener("click", ()=>{
    function cerrarMenu() {
        // alert("boton menu cerrar")
        $botonMenuAbrir.classList.remove("no_visible");
        $botonMenuCerrar.classList.add("no_visible")
        $panel.classList.remove("is-active");
    }
    cerrarMenu();
    
})

$menuLink.forEach(element => {
    element.addEventListener("click",(element)=>{
        function cerrarMenu() {
            // alert("boton menu cerrar")
            $botonMenuAbrir.classList.remove("no_visible");
            $botonMenuCerrar.classList.add("no_visible")
            $panel.classList.remove("is-active");
        }
        cerrarMenu();
    })
});
import search from "./buscador.js";
import changeTab from "./cambiar_pestaña.js";
import Producto from "./productos.js";

const d = document,
productosAñadidos = [],
$productos = d.querySelector(".products")

function searchFilter(input, selector) {
  d.addEventListener("keyup", e => {
    if(e.target.matches(input)){
      if(e.key === "Escape") e.target.vale = "";
      
      d.querySelectorAll(selector).forEach((el, index) => {
        if (productosAñadidos[index].etiquetas.toLowerCase().includes(e.target.value)){
          el.classList.remove("none")
        }
        else{
          el.classList.add("none")
      }}
      )
    }
  });
}

function mostrarProductos(identificador) {

  const $productos = d.querySelectorAll(identificador),
  $imagenesProductos = d.querySelectorAll(`${identificador} img`),
  $showProduct = d.querySelector(".show-product"),
  $returnBtn = d.querySelector(".return"),
  $img = d.querySelector(".show-product-img"),
  $title = d.querySelector(".title"),
  $content = d.querySelector(".content"),
  $price = d.querySelector(".price");

  d.addEventListener("click", e => {
    $productos.forEach((el, index) => {
      if(e.target === el || e.target === $imagenesProductos[index]){
        let producto = productosAñadidos[index];
        $showProduct.classList.toggle("hidden")
        $img.setAttribute("src", producto.imagen)
        $title.textContent = producto.nombre
        $content.textContent = producto.contenido
        $price.textContent = producto.precio
        // $img.setAttribute("src", el.imagen)
      }
      if(e.target === $returnBtn){
        $showProduct.classList.add("hidden")
      }
    });
  })
}

const 
  $divJabones = d.getElementById("jabones"),
  $divCremas = d.getElementById("cremas-y-cuidado-personal"),
  $divSplashs = d.getElementById("splashs")

const añadirProducto = (producto) =>{
  productosAñadidos.push(producto)
  
  const $divProducto = d.createElement("div"),
  $imgProducto = d.createElement("img")
  
  $divProducto.classList.add("product")

  $imgProducto.setAttribute("src", producto.imagen)

  $divProducto.appendChild($imgProducto)


  if(producto.tipo === "cremas-y-cuidado-personal") $divCremas.appendChild($divProducto)
  else if(producto.tipo === "jabones") $divJabones.appendChild($divProducto)
  else if(producto.tipo === "splashs") $divSplashs.appendChild($divProducto)

}


const

CremaAfeitarLife = new Producto("Crema para después de afeitarse - Life -", "120gr", "$9000 v/unitario", "crema_despues_de_afeitar_life.png", "crema para despues de afeitar life", "cremas-y-cuidado-personal"),

CremaCorporalHombreLife = new Producto("Crema corporal para hombre  - life -", "260ml", "$7000 v/unitario", "crema_corporal_hombre.png", "crema corporal para hombre life","cremas-y-cuidado-personal"),

DesodoranteHombreLife = new Producto("Desodorante para hombre  - life -", "75ml", "$6000 v/unitario", "desodorante_hombre_life.png", "desodorante para hombre life","cremas-y-cuidado-personal"),

CremaCorporalSashFreaking= new Producto("Crema corporal con escarcha Sash Freaking' epic", "250g", "$7000 v/unitario", "crema_corporal_sash_freakin.png", "Crema corporal con escarcha Sash Freaking' epic","cremas-y-cuidado-personal"),

CremaCorporalSashFreakingDoble = new Producto("Crema corporal con escarcha Sash Freaking' epic", "430g", "$10.000 v/unitario", "crema_corporal_sash_freakin_doble.png", "Crema corporal con escarcha Sash Freaking' epic","cremas-y-cuidado-personal"),

MantequillaCorporalLife = new Producto("Mantequilla Corporal - life -", "En diferentes aromas: mango, sandia y chicle. 230gr", "$16.000 v/unitario", "mantequilla_corporal_life.png", "Mantequilla corporal life mango sandia chicle aromas crema","cremas-y-cuidado-personal"),

AcidoHialuronicoLife = new Producto("Ácido hialurónico - life -", "140gr", "$22.000 v/unitario", "acido_hialuronico_life.png", "acido hialuronico ácido hialurónico life","cremas-y-cuidado-personal"),

ToallasDesmaquilladoras = new Producto("Toallas desmaquilladoras - Soin Du Visage Byphasse", "40 unidades", "$8.000 v/unitario", "toallas_desmaquilladoras.png", "toallas desmaquilladoras Soin Du Visage Byphasse","cremas-y-cuidado-personal"),

CremaCorporalGranada = new Producto("Crema corporal de granada - life -", "230 gr", "$11.000 v/unitario", "crema_corporal_granada.png", "crema corporal de granada life","cremas-y-cuidado-personal"),

CremasDeBolsoLife = new Producto("Cremas de bolso - life -", "En diferentes aromas: mango y granada. Contenido: 60 gr", "$4.500 v/unitario", "cremas_de_bolso.png", "cremas de bolso life mango granada aromas","cremas-y-cuidado-personal"),

DesodoranteMujerLife = new Producto("Desodorante para mujer - life -", "75ml", "$6.000 v/unitario", "desodorante_mujer_life.png", "desodorante para mujer life","cremas-y-cuidado-personal"),

AceiteCorporal = new Producto("Aceite Corporal - life -", "En diferentes aromas: coco, almendra, naranja. Contenido: 270ml", "$15.000 v/unitario", "aceite_corporal_life.png", "aceite corporal life almendra naranja coco","cremas-y-cuidado-personal"),

Keratina = new Producto("Keratina termoprotectora liquida - Soin Du Visage Byphasse -", "250ml", "$9.000 v/unitario", "keratina.png", "keratina termoprotectora liquida Soin Du Visage Byphasse ","cremas-y-cuidado-personal"),

GelBaño = new Producto("Gel de baño de granada - life -", "750ml", "$13.000 v/unitario", "gel_baño.png", "gel de baño de granada life jabones","jabones"),

GelBañoEscarchado = new Producto("Gel de baño escarchado - Soin Du Visage Byphasse -", "500gr", "$10.000 v/unitario", "gel_baño_escarchado.png", "gel de baño de escarchado Soin Du Visage Byphasse jabones","jabones"),

GelBañoMiel = new Producto("Gel de baño de miel - life -", "500gr", "$10.000 v/unitario", "gel_baño_miel.png", "gel de baño de de miel life jabones","jabones"),

GelAntibacterial = new Producto("Gel antibacterial - life -", "450ml", "$8.500 v/unitario", "gel_antibacterial.png", "gel antibacterial life jabones","jabones"),

JabonIntimo = new Producto("Jabon íntimo - life -", "230gr", "$8.000 v/unitario", "jabon_intimo.png", "jabon intimo jabón íntimo jabones","jabones"),

ColoniaLavanda = new Producto("Colonia corporal lavanda - life -", "750ml", "$14.000 v/unitario", "colonia_lavanda.png", "colonia corporal lavanda life splashs","splashs"),

SplashMujerSefora = new Producto("Splash mujer - sefora -", "En diferentes aromas. Contenido 240ml", "$14.000 v/unitario", "splash_mujer.png", "splash mujer sefora aromas","splashs"),

SplashMujerLife = new Producto("Splash mujer - life -", "En diferentes aromas. Contenido 120ml", "$7.000 v/unitario", "splash_mujer_life.png", "splash mujer life aromas","splashs"),

SplashMujerLifeGrande = new Producto("Splash mujer grande - life -", "En diferentes aromas. Contenido 240ml", "$14.000 v/unitario", "splash_mujer_life.png", "splash mujer life grande aromas","splashs"),

SegundoSplashMujerLifeGrande = new Producto("Splash mujer grande - life -", "En diferentes aromas. Contenido 240ml", "$14.000 v/unitario", "splash_mujer_life.png", "splash mujer life grande aromas","splashs"),

SplashHombre= new Producto("Splash hombre grande - life -", "270ml", "$15.000 v/unitario", "splash_hombre.png", "splash hombre life grande aromas","splashs")



añadirProducto(CremaAfeitarLife)
añadirProducto(CremaCorporalHombreLife)
añadirProducto(DesodoranteHombreLife)
añadirProducto(DesodoranteMujerLife)
añadirProducto(CremaCorporalSashFreaking)
añadirProducto(CremaCorporalSashFreakingDoble)
añadirProducto(MantequillaCorporalLife)
añadirProducto(AcidoHialuronicoLife)
añadirProducto(ToallasDesmaquilladoras)
añadirProducto(CremaCorporalGranada)
añadirProducto(CremasDeBolsoLife)
añadirProducto(AceiteCorporal)
añadirProducto(Keratina)
añadirProducto(GelBaño)
añadirProducto(GelBañoEscarchado)
añadirProducto(GelBañoMiel)
añadirProducto(GelAntibacterial)
añadirProducto(JabonIntimo)
añadirProducto(ColoniaLavanda)
añadirProducto(SplashMujerSefora)
añadirProducto(SplashMujerLife)
añadirProducto(SplashMujerLifeGrande)
añadirProducto(SegundoSplashMujerLifeGrande)
añadirProducto(SplashHombre)

d.addEventListener("DOMContentLoaded", e => {
  search(".search-div", "input", "search-is-active", ".logo")
  changeTab()
  mostrarProductos(".product")
  searchFilter("input", ".product")
})
const d = document
export default function changeTab(){
  let isInHome = true
  const $home = d.querySelector("#home"),
  $info = d.querySelector("#info"),
  $homeBtn = d.querySelector(".home-btn"),
  $infoBtn = d.querySelector(".info-btn")

  $homeBtn.addEventListener("click", e => {
    if(!isInHome){
      $info.classList.add("none")
      $home.classList.remove("none")
      isInHome = true
      $homeBtn.classList.toggle("opacity-50")
      $infoBtn.classList.toggle("opacity-50")
    }
  })
  $infoBtn.addEventListener("click", e => {
    if(isInHome){
      $home.classList.add("none")
      $info.classList.remove("none")
      isInHome = false
      $homeBtn.classList.toggle("opacity-50")
      $infoBtn.classList.toggle("opacity-50")
    }
  })
}
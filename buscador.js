const d = document;

export default function search(btn, input, cssClass, logo) {
  d.addEventListener("click", e => {
    const $searchBtn = d.querySelector(btn),
    $searchBtnImage = d.querySelector(`${btn} img`),
    $logo = d.querySelector(logo),
    $input = d.querySelector(input)

    if (e.target === $searchBtn ||e.target === $searchBtnImage){
      $searchBtn.classList.toggle(cssClass)
      $logo.classList.toggle("hidden")
      $input.classList.toggle("none")
      $input.select()
    }
  })
}
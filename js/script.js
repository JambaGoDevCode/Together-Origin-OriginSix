/** Abrir e fechar o menu quando clicar  */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')



for(const element of toggle){
    element.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}

/** Quando clicar em um item do menu, esconder o menu  */

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', ()=>{
        nav.classList.remove('show')
    })
}

/** mudar o header da página quando der scroll **/



function changeHeaderWhenScroll(){
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}




/* Swiper Slider */

const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   pagination: {
    el: '.swiper-pagination'
   },
   mousewheel:true,
   keyboard: true
  });


  /** Scrollreveal - mostrar elementos ao scroll da pagina */

  const scrollReveal = ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:700,
    reset:true
  })

  scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .image,
    #services header, #services .card,
    #testemonials header, #testemonials .testemonial,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, 
  {interval: 100})


  /*** Button voltar ao topo */
function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top')
    if(window.scrollY >= 780){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}


  window.addEventListener('scroll', ()=>{
    changeHeaderWhenScroll()
    backToTop()
})
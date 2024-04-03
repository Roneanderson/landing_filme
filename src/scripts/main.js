document.addEventListener('DOMContentLoaded', function() {
    $(document).ready(function() {
        $('.carousel').slick({
            speed: 700,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        });
    })

    //seção do header
    const  heroButton = document.querySelector('button');
    const alturaHero = heroButton.clientHeight;


    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementoDoHEader()
        } else {
            exibeElementosDoHeader();
        }
    })

    function ocultaElementoDoHEader() {
        const header = document.querySelector ('header');
        header.classList.add('header--is-hidden');
    }

    function exibeElementosDoHeader() {
        const header = document.querySelector ('header');
        header.classList.remove('header--is-hidden');
    }
})

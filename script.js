

document.addEventListener('DOMContentLoaded', function() {
    
    const carrusel = {
        currentSlide: 0,
        slides: [
            {
                background: '/public/imagen_hero.png',
                title: 'Descubre la Autentica Comida Turca',
                subtitle: 'Sumérgete en la riqueza de la gastronomía turca,<br> donde cada bocado es una deleite de sabor y<br> tradición',
                image: '/public/imagen.png'
            },
            {
                background: '/public/imagen_hero.png', 
                title: 'Sabores de Turquía en Cada Bocado',
                subtitle: 'Nuestros chefs preparan cada kebab con<br> ingredientes frescos y técnicas tradicionales<br> de Turquía',
                image: '/public/borek.png' 
            },
        ],
        
        // Inicializa el carrusel
        init: function() {
            // Obtener elementos
            this.heroContainer = document.querySelector('.hero');
            this.heroFondo = document.querySelector('.hero__fondo');
            this.heroTitle = document.querySelector('.hero__h1');
            this.heroSubtitle = document.querySelector('.hero__h2');
            this.heroImage = document.querySelector('.hero__img');
            
            // Configurar contenedor para transiciones
            this.heroContainer.classList.add('hero-slide-container');
            
            // Configurar botones de navegación
            const leftArrow = document.querySelector('.hero__flechas i:first-child');
            const rightArrow = document.querySelector('.hero__flechas i:last-child');
            
            leftArrow.addEventListener('click', () => this.prevSlide());
            rightArrow.addEventListener('click', () => this.nextSlide());
            
            // Mostrar el primer slide
            this.showSlide(this.currentSlide);
            
            // Iniciar rotación automática (opcional)
            this.autoSlideInterval = setInterval(() => this.nextSlide(), 5000);
        },
        
        // Muestra un slide específico
        showSlide: function(index) {
            const slide = this.slides[index];
            
            // Añadir clases para animación
            this.heroFondo.classList.add('slide-out');
            
            setTimeout(() => {
                // Actualizar contenido
                this.heroFondo.style.backgroundImage = `url(${slide.background})`;
                this.heroTitle.innerHTML = slide.title;
                this.heroSubtitle.innerHTML = slide.subtitle;
                this.heroImage.src = slide.image;
                
                // Remover y añadir clases para nueva animación
                this.heroFondo.classList.remove('slide-out');
                this.heroFondo.classList.add('slide-in');
                
                // Quitar clase de entrada después de la animación
                setTimeout(() => {
                    this.heroFondo.classList.remove('slide-in');
                }, 500);
            }, 300);
        },
        
        // Navega al siguiente slide
        nextSlide: function() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.showSlide(this.currentSlide);
        },
        
        // Navega al slide anterior
        prevSlide: function() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.showSlide(this.currentSlide);
        }
    };
    
    // Iniciar el carrusel
    carrusel.init();
});

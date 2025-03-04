

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
                background: '/public/imagen_hero2.png', 
                title: 'Sabores Únicos en Cada Plato',
                subtitle: 'Nuestros chefs preparan cada kebab con<br> ingredientes frescos y técnicas tradicionales<br> de Turquía',
                image: '/public/imagen2.png' 
            },
            {
                background: '/public/imagen_hero3.png', 
                title: 'Ambiente Acogedor y Tradicional',
                subtitle: 'Disfruta de una experiencia culinaria única<br> en un espacio inspirado en la cultura turca',
                image: '/public/imagen3.png' 
            }
        ],
        
        // Inicializa el carrusel
        init: function() {
            // Obtener elementos
            this.heroFondo = document.querySelector('.hero__fondo');
            this.heroTitle = document.querySelector('.hero__h1');
            this.heroSubtitle = document.querySelector('.hero__h2');
            this.heroImage = document.querySelector('.hero__img');
            
            // Configurar botones de navegación
            const leftArrow = document.querySelector('.hero__flechas i:first-child');
            const rightArrow = document.querySelector('.hero__flechas i:last-child');
            
            leftArrow.addEventListener('click', () => this.prevSlide());
            rightArrow.addEventListener('click', () => this.nextSlide());
            
            // Mostrar el primer slide
            this.showSlide(this.currentSlide);
            
            // Iniciar rotación automática (opcional)
            setInterval(() => this.nextSlide(), 5000);
        },
        
        // Muestra un slide específico
        showSlide: function(index) {
            const slide = this.slides[index];
            
            // Aplicar transición suave
            this.heroFondo.style.opacity = '0';
            
            setTimeout(() => {
                // Actualizar contenido
                this.heroFondo.style.backgroundImage = `url(${slide.background})`;
                this.heroTitle.innerHTML = slide.title;
                this.heroSubtitle.innerHTML = slide.subtitle;
                this.heroImage.src = slide.image;
                
                // Mostrar con transición
                this.heroFondo.style.opacity = '1';
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

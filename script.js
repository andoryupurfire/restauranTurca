

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

    const menuInteractivo = {
        init: function() {
            // Obtener todos los elementos de menú
            this.menuItems = document.querySelectorAll('.menu__options > div');
            this.categories = document.querySelectorAll('.menu__category');
            
            // Mostrar la primera categoría por defecto
            if (this.categories.length > 0) {
                this.showCategory('mezeler-section');
                this.setActiveMenuItem(this.menuItems[0]);
            }
            
            // Agregar eventos de clic a cada ícono del menú
            this.menuItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    const categoryIds = ['mezeler-section', 'kebabs-section', 'tatillar-section', 'bebidas-section'];
                    if (categoryIds[index]) {
                        this.showCategory(categoryIds[index]);
                        this.setActiveMenuItem(item);
                    }
                });
                
                // Hacer que los iconos sean claramente clickeables
                item.style.cursor = 'pointer';
            });
        },
        
        // Mostrar la categoría seleccionada y ocultar las demás
        showCategory: function(categoryId) {
            this.categories.forEach(category => {
                if (category.id === categoryId) {
                    category.classList.add('active');
                    
                    // Desplazar la página hasta la categoría
                    setTimeout(() => {
                        category.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                } else {
                    category.classList.remove('active');
                }
            });
        },
        
        // Marcar el ícono activo
        setActiveMenuItem: function(activeItem) {
            this.menuItems.forEach(item => {
                if (item === activeItem) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    };
    

    menuInteractivo.init();

    const windowBackgroud = document.getElementById("window-backgroud"),
    windowContainer = document.getElementById("window-container"),
    closeButton = document.getElementById("close-button")




const modal = document.getElementById("window-backgroud");
const modalTitle = modal.querySelector(".modal-title");
const modalImage = modal.querySelector(".imagen-modal");
const modalDescription = modal.querySelector(".modal-description");


const productos = {
    "Baklava": {
        title: "Baklava",
        img: "public/imagenes_tarjetas/imagen_backla.png",
        description: "Baklava es un postre tradicional de la cocina del Medio Oriente, los Balcanes y el Mediterráneo, elaborado con capas finas de masa filo rellenas de frutos secos, como nueces, almendras o pistachos, y endulzado con almíbar o miel."
    },
    "Menemen": {
        title: "Menemen",
        img: "public/imagenes_tarjetas/modal_menemen.png",
        description: "El Menemen es un desayuno tradicional turco preparado con huevos revueltos, pimientos, tomates y especias. Se sirve caliente y se disfruta con pan fresco."
    },
    "Börek": {
        title: "Börek",
        img: "public/imagenes_tarjetas/borek_modal.png",
        description: "Börek es un pastel salado turco hecho con masa filo y relleno de queso, carne o verduras. Es un plato muy popular en la cocina turca y de los Balcanes."
    },
    "Dolma": {
        title: "Dolma",
        img: "public/imagenes_tarjetas/modal_dolma.png",
        description: "El Dolma es un plato relleno de arroz, carne y especias, envuelto en hojas de parra o verduras. Es muy popular en la gastronomía de Medio Oriente y el Mediterráneo."
    }
};


document.querySelectorAll(".btn_add").forEach(button => {
    button.addEventListener("click", function () {

        const card = this.closest(".tarjetas__container");
        const title = card.querySelector("h2").innerText;


        if (productos[title]) {
            modalTitle.innerText = productos[title].title;
            modalImage.src = productos[title].img;
            modalDescription.innerText = productos[title].description;
            modal.style.display = "flex";
        }
    });
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

});

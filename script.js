

document.addEventListener('DOMContentLoaded', function() {
    
    const carrusel = {
        currentSlide: 0,
        slides: [
            {
                title: 'Descubre la Autentica Comida Turca',
                subtitle: 'Sumérgete en la riqueza de la gastronomía turca,<br> donde cada bocado es una deleite de sabor y<br> tradición',
                image: '/public/imagen.png'
            },
            {
                title: 'Sabores de Turquía en Cada Bocado',
                subtitle: 'Nuestros chefs preparan cada kebab con<br> ingredientes frescos y técnicas tradicionales<br> de Turquía',
                image: '/public/borek.png' 
            },
        ],
        

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
            
            //Configurar indicadores
            this.indicators = document.querySelectorAll('.indicator');
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click',() => {
                    this.showSlide(index);
                    this.updateIndicators(index);
                })
            })


            // Mostrar el primer slide
            this.showSlide(this.currentSlide);
            
            // Iniciar rotación automática (opcional)
            this.autoSlideInterval = setInterval(() => this.nextSlide(), 5000);
   
        },
        
        // Muestra un slide específico
        showSlide: function(index) {
            const slide = this.slides[index];
            
            // Añadir clases para animación de salida
            this.heroTitle.classList.add('slide-out');
            this.heroSubtitle.classList.add('slide-out');
            this.heroImage.classList.add('slide-out');
            
            // Aumenta este tiempo para dar más tiempo a la animación de salida
            setTimeout(() => {
                // Actualizar contenido
                this.heroTitle.innerHTML = slide.title;
                this.heroSubtitle.innerHTML = slide.subtitle;
                this.heroImage.src = slide.image;
                
                // Remover clases de salida
                this.heroTitle.classList.remove('slide-out');
                this.heroSubtitle.classList.remove('slide-out');
                this.heroImage.classList.remove('slide-out');
        
                // Añadir clases para animación de entrada
                this.heroTitle.classList.add('slide-in');
                this.heroSubtitle.classList.add('slide-in');
                this.heroImage.classList.add('slide-in');
                
                // Quitar clase de entrada después de la animación
                // Aumenta este tiempo para que coincida con la duración más larga de las animaciones
                setTimeout(() => {
                    this.heroTitle.classList.remove('slide-in');
                    this.heroSubtitle.classList.remove('slide-in');
                    this.heroImage.classList.remove('slide-in');
                }, 1200); // Coincide con la duración más larga
            }, 800); // Coincide con la duración de la animación de salida
            
            // Actualizar los indicadores
            this.updateIndicators(index);
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
        },

        updateIndicators: function(index) {
            this.indicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

    };
    
    // Iniciar el carrusel
    carrusel.init();

    const menuInteractivo = {
        init: function() {
            // Obtener todos los elementos de menú
            this.menuItems = document.querySelectorAll('.menu__options > div');
            this.categories = document.querySelectorAll('.menu__category');
            
            // Mostrar la primera categoría por defecto sin desplazamiento
            if (this.categories.length > 0) {
                this.showCategoryWithoutScroll('mezeler-section');
                this.setActiveMenuItem(this.menuItems[0]);
            }
            
            // Agregar eventos de clic a cada ícono del menú
            this.menuItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    const categoryIds = ['mezeler-section', 'kebabs-section', 'tatillar-section', 'bebidas-section'];
                    if (categoryIds[index]) {
                        // Usar showCategory (con scroll) cuando se hace clic manualmente
                        this.showCategory(categoryIds[index]);
                        this.setActiveMenuItem(item);
                    }
                });
                
                // Hacer que los iconos sean claramente clickeables
                item.style.cursor = 'pointer';
            });
        },
        
        // Mostrar la categoría seleccionada SIN desplazamiento (para la carga inicial)
        showCategoryWithoutScroll: function(categoryId) {
            this.categories.forEach(category => {
                if (category.id === categoryId) {
                    category.classList.add('active');
                } else {
                    category.classList.remove('active');
                }
            });
        },
        
        // Mostrar la categoría seleccionada CON desplazamiento (para clics)
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
    
    // Iniciar el menú interactivo
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

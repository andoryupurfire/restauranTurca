const windowBackgroud = document.getElementById("window-backgroud"),
    windowContainer = document.getElementById("window-container"),
    openButton = document.getElementById("btn_abrir"),
    closeButton = document.getElementById("close-button")




const modal = document.getElementById("window-backgroud");
const modalTitle = modal.querySelector("h1");
const modalImage = modal.querySelector(".imagen-modal");
const modalDescription = modal.querySelector("p");


const productos = {
    "Baklava": {
        title: "Baklava",
        img: "imagen_backla.png",
        description: "Baklava es un postre tradicional de la cocina del Medio Oriente, los Balcanes y el Mediterráneo, elaborado con capas finas de masa filo rellenas de frutos secos, como nueces, almendras o pistachos, y endulzado con almíbar o miel."
    },
    "Menemen": {
        title: "Menemen",
        img: "modal_menemen.png",
        description: "El Menemen es un desayuno tradicional turco preparado con huevos revueltos, pimientos, tomates y especias. Se sirve caliente y se disfruta con pan fresco."
    },
    "Börek": {
        title: "Börek",
        img: "borek_modal.png",
        description: "Börek es un pastel salado turco hecho con masa filo y relleno de queso, carne o verduras. Es un plato muy popular en la cocina turca y de los Balcanes."
    },
    "Dolma": {
        title: "Dolma",
        img: "modal_dolma.png",
        description: "El Dolma es un plato relleno de arroz, carne y especias, envuelto en hojas de parra o verduras. Es muy popular en la gastronomía de Medio Oriente y el Mediterráneo."
    }
};


document.querySelectorAll(".btn_add").forEach(button => {
    button.addEventListener("click", function () {

        const card = this.closest(".card-container");
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

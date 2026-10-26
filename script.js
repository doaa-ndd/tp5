






document.querySelectorAll(".btn-filtre").forEach(function (btn) {
    btn.addEventListener("click", function () {
        const cat = btn.dataset.categorie;
        document.querySelectorAll("#liste li").forEach(function (li) {
            li.classList.toggle("cache-filtre", cat !== "tous" && li.dataset.categorie !== cat);
        });
    });
});
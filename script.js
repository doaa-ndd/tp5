document.getElementById("search").addEventListener("input", function () {
    const texte = this.value.toLowerCase();
    document.querySelectorAll("#liste li").forEach(function (li) {
        li.classList.toggle("cache-recherche", !li.textContent.toLowerCase().includes(texte));
    });
});
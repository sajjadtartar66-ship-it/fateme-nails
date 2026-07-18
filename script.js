// بزرگ کردن عکس‌ها هنگام کلیک

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.85)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";

        const photo = document.createElement("img");

        photo.src = img.src;
        photo.style.maxWidth = "90%";
        photo.style.maxHeight = "90%";
        photo.style.borderRadius = "20px";
        photo.style.boxShadow = "0 20px 40px rgba(0,0,0,.4)";

        overlay.appendChild(photo);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);

    });

});

function createEffect(symbol, containerId) {
    for (let i = 0; i < 1; i++) {
        const effect = document.createElement("span");
        effect.textContent = symbol;
        effect.classList.add(symbol === "❤️" ? "heart" : "flower");

        const randomX = Math.random();
        const randomSize = Math.random() * 10 + 15; // Tạo kích thước từ 15px đến 25px
        effect.style.left = `calc(100% * ${randomX})`;
        effect.style.fontSize = `${randomSize}px`;

        document.getElementById(containerId).appendChild(effect);

        setTimeout(() => {
            effect.remove();
        }, 3000);
    }
}

setInterval(() => createEffect("❤️", "effects"), 100); // Tạo nhiều trái tim hơn
setInterval(() => createEffect("🌹", "effects"), 200); // Tạo nhiều hoa hồng hơn

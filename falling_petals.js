class Petal {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = 0;
        this.speed = Math.random() * 3 + 1;
        this.size = Math.random() * 5 + 2;
        this.element = document.createElement('div');
        this.element.className = 'petal';
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.left = `${this.x}px`;
        document.body.appendChild(this.element);
    }

    fall() {
        this.y += this.speed;
        if (this.y > window.innerHeight) {
            this.y = 0;
            this.x = Math.random() * window.innerWidth;
        }
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

const petals = [];
for (let i = 0; i < 100; i++) {
    petals.push(new Petal());
}

function animate() {
    petals.forEach((petal) => petal.fall());
    requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", () => {
    animate();
});

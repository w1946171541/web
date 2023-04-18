class Star {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }

    update() {
        this.y += this.speed;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
}

class Meteor {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }

    update() {
        this.x -= this.speed * 2;
        this.y += this.speed;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
    }
}

const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const meteors = [];

function createStar() {
    const size = Math.random() * 2;
    const speed = Math.random() * 2;
    const x = Math.random() * canvas.width;
    const y = 0;

    stars.push(new Star(x, y, size, speed));
}

function createMeteor() {
    const size = Math.random() * 5;
    const speed = Math.random() * 3 + 2;
    const x = Math.random() * canvas.width;
    const y = 0;

    meteors.push(new Meteor(x, y, size, speed));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
        star.update();
        star.draw(ctx);
    }

    for (const meteor of meteors) {
        meteor.update();
        meteor.draw(ctx);
    }

    stars.forEach((star, index) => {
        if (star.y > canvas.height) {
            stars.splice(index, 1);
        }
    });

    meteors.forEach((meteor, index) => {
        if (meteor.y > canvas.height || meteor.x < 0) {
            meteors.splice(index, 1);
        }
    });

    if (stars.length < 200) {
        createStar();
    }

    if (meteors.length < 10) {
        createMeteor();
    }

    requestAnimationFrame(animate);
}

animate();

// Canvas setup
const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Game constants
const PADDLE_WIDTH = 15;
const PADDLE_HEIGHT = 100;
const BALL_SIZE = 8;
const PADDLE_SPEED = 6;
const BALL_SPEED = 5;
const COMPUTER_SPEED = 4.5;

// Game objects
const player = {
    x: 10,
    y: canvas.height / 2 - PADDLE_HEIGHT / 2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    dy: 0,
    score: 0
};

const computer = {
    x: canvas.width - 25,
    y: canvas.height / 2 - PADDLE_HEIGHT / 2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    dy: 0,
    score: 0
};

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: BALL_SIZE,
    dx: BALL_SPEED,
    dy: BALL_SPEED,
    speed: BALL_SPEED
};

// Game state
let gameRunning = true;
let keys = {};

// Event listeners
window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Mouse control
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    
    // Move player paddle to mouse position
    if (mouseY - PADDLE_HEIGHT / 2 > 0 && mouseY + PADDLE_HEIGHT / 2 < canvas.height) {
        player.y = mouseY - PADDLE_HEIGHT / 2;
    }
});

// Draw functions
function drawRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function drawCenterLine() {
    ctx.strokeStyle = '#00ff00';
    ctx.setLineDash([10, 10]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);
}

function drawGame() {
    // Clear canvas
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw center line
    drawCenterLine();

    // Draw paddles
    drawRectangle(player.x, player.y, player.width, player.height, '#00ff00');
    drawRectangle(computer.x, computer.y, computer.width, computer.height, '#ff0000');

    // Draw ball
    drawCircle(ball.x, ball.y, ball.size, '#00ffff');

    // Draw borders
    ctx.strokeStyle = '#00ff00';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

// Update functions
function updatePlayerPaddle() {
    // Arrow keys control
    if (keys['ArrowUp'] && player.y > 0) {
        player.y -= PADDLE_SPEED;
    }
    if (keys['ArrowDown'] && player.y < canvas.height - player.height) {
        player.y += PADDLE_SPEED;
    }

    // Keep paddle in bounds
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
}

function updateComputerPaddle() {
    // Simple AI - follow the ball
    const computerCenter = computer.y + computer.height / 2;
    
    if (computerCenter < ball.y - 35) {
        computer.y += COMPUTER_SPEED;
    } else if (computerCenter > ball.y + 35) {
        computer.y -= COMPUTER_SPEED;
    }

    // Keep computer paddle in bounds
    if (computer.y < 0) computer.y = 0;
    if (computer.y + computer.height > canvas.height) computer.y = canvas.height - computer.height;
}

function updateBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Wall collision (top and bottom)
    if (ball.y - ball.size < 0 || ball.y + ball.size > canvas.height) {
        ball.dy = -ball.dy;
        ball.y = Math.max(ball.size, Math.min(canvas.height - ball.size, ball.y));
    }

    // Paddle collision detection
    if (
        ball.x - ball.size < player.x + player.width &&
        ball.y > player.y &&
        ball.y < player.y + player.height
    ) {
        ball.dx = -ball.dx;
        ball.x = player.x + player.width + ball.size;
        
        // Add spin based on where ball hits paddle
        const hitPos = (ball.y - (player.y + player.height / 2)) / (player.height / 2);
        ball.dy = hitPos * BALL_SPEED;
    }

    if (
        ball.x + ball.size > computer.x &&
        ball.y > computer.y &&
        ball.y < computer.y + computer.height
    ) {
        ball.dx = -ball.dx;
        ball.x = computer.x - ball.size;
        
        // Add spin based on where ball hits paddle
        const hitPos = (ball.y - (computer.y + computer.height / 2)) / (computer.height / 2);
        ball.dy = hitPos * BALL_SPEED;
    }

    // Score points
    if (ball.x - ball.size < 0) {
        computer.score++;
        resetBall();
        updateScore();
    }

    if (ball.x + ball.size > canvas.width) {
        player.score++;
        resetBall();
        updateScore();
    }
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = (Math.random() > 0.5 ? 1 : -1) * BALL_SPEED;
    ball.dy = (Math.random() - 0.5) * BALL_SPEED * 2;
}

function updateScore() {
    document.getElementById('playerScore').textContent = player.score;
    document.getElementById('computerScore').textContent = computer.score;
}

// Game loop
function gameLoop() {
    if (gameRunning) {
        updatePlayerPaddle();
        updateComputerPaddle();
        updateBall();
    }

    drawGame();
    requestAnimationFrame(gameLoop);
}

// Control functions
function resetGame() {
    player.score = 0;
    computer.score = 0;
    player.y = canvas.height / 2 - PADDLE_HEIGHT / 2;
    computer.y = canvas.height / 2 - PADDLE_HEIGHT / 2;
    resetBall();
    gameRunning = true;
    updateScore();
}

function togglePause() {
    gameRunning = !gameRunning;
}

// Start the game
updateScore();
gameLoop();
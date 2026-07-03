# 🎮 Pong Game

A classic arcade-style Pong game built with HTML, CSS, and JavaScript. Play against an intelligent AI opponent in this nostalgic retro game with modern cyberpunk styling.

## 📋 Table of Contents

- [Features](#features)
- [How to Play](#how-to-play)
- [Controls](#controls)
- [Game Rules](#game-rules)
- [Installation](#installation)
- [Game Mechanics](#game-mechanics)
- [Customization](#customization)
- [Browser Compatibility](#browser-compatibility)

## ✨ Features

- 🖱️ **Dual Control Options** - Control paddles with mouse or keyboard
- 🤖 **Intelligent AI** - Computer opponent with adaptive difficulty
- ⚽ **Physics Engine** - Realistic ball movement with spin mechanics
- 💥 **Collision Detection** - Accurate paddle and wall collisions
- 📊 **Real-time Scoreboard** - Track both player and computer scores
- ⏸️ **Pause/Resume** - Pause the game at any time
- 🔄 **Reset Function** - Start a new game instantly
- 🎨 **Modern UI Design** - Cyberpunk theme with glowing neon effects
- 📱 **Responsive Design** - Works on desktop and mobile devices

## 🕹️ How to Play

### Objective
The goal of Pong is simple: use your paddle to hit the ball back and forth across the screen. Each time your opponent fails to return the ball, you score a point. First player to reach the highest score wins!

### Basic Gameplay
1. The ball starts in the center of the screen and moves toward your opponent
2. Use your paddle (left side, green) to hit the ball back
3. The AI opponent (right side, red) will try to return your shots
4. If the ball passes your paddle, the computer scores
5. If the ball passes the computer's paddle, you score
6. The game continues indefinitely - try to beat the computer's score!

### Winning Strategy
- **Positioning** - Anticipate where the ball will go and position your paddle accordingly
- **Angles** - Hit the ball at different heights on your paddle to change the trajectory
- **Speed** - The computer has predictable movement - use this to your advantage
- **Defense** - Focus on not missing rather than scoring quickly

## ⌨️ Controls

### Player Paddle (Left Side - Green)

**Mouse Control:**
- Move your mouse up and down above the game canvas
- Your paddle will follow your mouse position automatically
- Smooth and intuitive control

**Keyboard Control:**
- **↑ Arrow Key (Up)** - Move paddle up
- **↓ Arrow Key (Down)** - Move paddle down
- You can use keyboard even while using mouse

### Game Controls

**Reset Game Button**
- Clears both scores to 0-0
- Resets paddle positions to center
- Restarts the ball in the middle
- Useful for starting a fresh match

**Pause/Resume Button**
- Stops all game movement (ball and AI)
- Click again to resume playing
- Helpful for taking breaks during gameplay

## 📏 Game Rules

1. **Scoring** - You score 1 point when the ball passes the computer's paddle. Computer scores when the ball passes yours.

2. **Ball Bouncing** - The ball bounces off the top and bottom walls automatically.

3. **Paddle Boundaries** - Both paddles are confined to the playing area and cannot go off-screen.

4. **Ball Physics** - The ball's direction changes based on where it hits the paddle:
   - Hit near the top of your paddle → ball angles upward
   - Hit near the middle → ball goes straight
   - Hit near the bottom → ball angles downward

5. **Ball Speed** - The ball maintains consistent speed throughout the game.

6. **No Time Limit** - The game continues indefinitely until you decide to reset.

## 🚀 Installation

### Online (Easiest)
1. Visit the [Pong Game Repository](https://github.com/NaluyindaMoureen01/pong_game)
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the files
5. Open `index.html` in your web browser

### Using Git
```bash
git clone https://github.com/NaluyindaMoureen01/pong_game.git
cd pong_game
# Open index.html in your browser
```

### Local File
1. Create a folder on your computer called `pong-game`
2. Download or copy these three files into the folder:
   - `index.html`
   - `style.css`
   - `script.js`
3. Double-click `index.html` to open it in your default browser

## ⚙️ Game Mechanics

### Ball Movement
- The ball travels at a constant speed of 5 pixels per frame
- Ball starts at the center of the screen
- Random initial direction on each reset ensures variety
- Ball size is 8 pixels in diameter

### Paddle Specifications
- **Dimensions** - 15 pixels wide × 100 pixels tall
- **Player Speed** - 6 pixels per frame movement
- **Computer Speed** - 4.5 pixels per frame (slightly slower for balance)
- **Computer AI** - Tracks ball position with 35-pixel dead zone for more realistic play

### Collision Detection
- **Accurate AABB Collision** - Axis-aligned bounding box collision detection
- **Spin Mechanics** - Ball trajectory changes based on paddle hit location
- **Wall Bouncing** - Top and bottom walls reflect the ball automatically
- **Scoring Triggers** - Ball position beyond left/right boundaries triggers scoring

### Canvas
- **Dimensions** - 800 pixels wide × 400 pixels tall
- **Background** - Dark cyberpunk theme (#1a1a2e)
- **Border** - Glowing green neon border (#00ff00)
- **Center Line** - Dashed green line dividing the court

## 🎨 Customization

### Change Game Speed
Edit `script.js` and modify these constants:

```javascript
const BALL_SPEED = 5;           // Increase for faster ball
const PADDLE_SPEED = 6;         // Increase for faster player paddle
const COMPUTER_SPEED = 4.5;     // Increase for harder AI
```

### Change Colors
Edit `style.css` or modify the canvas drawing in `script.js`:

```javascript
// Change paddle colors
drawRectangle(player.x, player.y, player.width, player.height, '#00ff00');    // Player color
drawRectangle(computer.x, computer.y, computer.width, computer.height, '#ff0000'); // Computer color

// Change ball color
drawCircle(ball.x, ball.y, ball.size, '#00ffff');  // Ball color
```

### Change Canvas Size
Edit `index.html`:

```html
<canvas id="pongCanvas" width="800" height="400"></canvas>
<!-- Change width and height values -->
```

Note: Adjust `script.js` constants accordingly if you change canvas dimensions.

## 🌐 Browser Compatibility

This game works on all modern browsers that support:
- HTML5 Canvas
- JavaScript ES6
- CSS3 Gradients and Flexbox

**Tested Browsers:**
- ✅ Chrome (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Edge (v90+)
- ✅ Opera (v76+)

**Mobile Browsers:**
- ✅ Chrome Mobile
- ✅ Safari Mobile (iOS)
- ✅ Firefox Mobile

## 📁 File Structure

```
pong_game/
├── index.html      # Main HTML file with game canvas
├── style.css       # Styling and layout
├── script.js       # Game logic and mechanics
└── README.md       # This file
```

## 🎯 Tips for Better Gameplay

1. **Use Mouse for Precision** - The mouse control is more precise than keyboard
2. **Predict AI Movement** - The computer has limited reaction time, use this to your advantage
3. **Center Your Paddle** - Keep your paddle centered to be ready for any shot
4. **Watch the Ball** - Track ball velocity and adjust your position early
5. **Angle Your Shots** - Use paddle positioning to direct the ball strategically
6. **Stay Calm** - The game is endless, focus on consistency over speed

## 🐛 Known Issues

- None currently! The game runs smoothly.

## 📝 Future Enhancements

Possible features for future versions:
- Difficulty levels (easy, medium, hard)
- Two-player mode (both players use keyboard)
- Sound effects
- Visual effects (particle trails, screen shake)
- Score history/high scores
- Power-ups
- Different game modes

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Found a bug? Have an idea for improvement? Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 👨‍💻 Author

Created by [Naluyinda Moureen](https://github.com/NaluyindaMoureen01)

## 🎉 Enjoy the Game!

Have fun playing Pong! Challenge yourself to beat the computer's score and master the game mechanics.

For more information, visit the [GitHub Repository](https://github.com/NaluyindaMoureen01/pong_game)
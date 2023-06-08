Game Mechanics:

1. Display a basket (a simple rectangular element) at the bottom center of the game area.
2. Generate fruits (e.g., circles or images) at the top of the game area, which will fall downwards.
3. Move the basket horizontally using keyboard arrow keys (left and right) to catch the falling fruits.
4. When a fruit touches the basket, increment the score.
5. If a fruit reaches the bottom of the game area without being caught, decrement the score.
6. The game ends after a certain time limit or when the score reaches a specific target.

Implementation Steps:

1.Set up the HTML structure with a container element for the game area and the basket element.
2.Use CSS to style the game area, basket, and fruits.
3.Add event listeners to the document to detect keyboard arrow key presses.
4.Implement the logic to move the basket left or right based on the arrow key press events.
5.Generate fruits at regular intervals using JavaScript and make them fall down using CSS animation or JavaScript animation.
6.Detect collisions between the basket and fruits using their coordinates and update the score accordingly.
7.Set a time limit or score target to determine when the game should end.
8.Display the score and game-over message at the end of the game.
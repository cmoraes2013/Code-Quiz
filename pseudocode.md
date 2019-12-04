1. Start with a landing page
    * link to view highscore
    * timer
    * start button to start game
    * game description/rules
2. When user clicks Start button
    * description text and button to dissapear
    * questions to display
    * 4 choices/answer options
    * start time counter
3. When user selects choice/answer button
    * evaluate answer accuracy
        * if user gets questions right
            * increment the correct counter
        * if wrong
            * reduce time
4. The timer stops when all questions have been answered or the timer runs out
    * game is over
    * reveal final score & highscore
        * allow user to enter initials to be added to high score table
5. When use is looking at high score table
    * reroute back to the game

*** notes ***
1. Build an array with an objects holding questions,choices,answers 
2. Create a function called startQuiz() 
    * hide landing page page
    * reveal the question
    * set timer
    * run questionFunction
3. Timer function
4. Function called showQuestion
    * to show the questions and answers dynamically 
5. Function cycleFunction
    * cycle through question array (hide previous question and shows new questions)
    * validate right or wrong
        * if wrong
            * reduce time
            * goes to next question
            * play a wrong sound
        * else
            * plays right sound
            * goes to next question
            * modal to show if they got correct
    * if no more questions
        * hide questions
        * go to result screen
6. Function endQuiz
    * this will show the results/user final scrore
        * final score will be whatever the remaining time is 
7. Function to save the highscore
    * store to localstorage
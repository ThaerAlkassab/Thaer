#include <stdio.h>
#include <stdlib.h>
#include <time.h>

/**
 * ROCK = 1 
 * PAPER = 2
 * SCISSORS = 3
 */

// random move returns a random int from 1 - 3.
// I removed the local variable
int getRandomMove()
{
    return 1 + rand() %3;
}

// main logic of the game
int main()
{
    //Your enum with rock, paper, scissors defind as 1, 2, 3
    enum Move {ROCK = 1, PAPER = 2, SCISSORS = 3} userInput = 0;

    // sets a random seed for the rand()-function
    srand(time(NULL));

    // here you declared userInput another time
    // int userInput is not needed, you already got it up here 
    int computerInput = 0, computerPoint = 0, userPoint = 0;

    printf(" ###### Welcome to Rock-Paper-Scissors Game ###### \n");
    printf(" ### Rules: \n ### Press 1 for Rock \n ### Press 2 for Paper \n ### Press 3 for Scissors \n ### First one to reach 3 points will win. \n");

    // add big while loop to avoid multiple loops:
    // runs as long as no one reached the goal of 3 points
    while (computerPoint < 3 && userPoint < 3)
    {

        // Test for valid input
        // when user input is unvalid (not from 1 - 3), we ask to enter a number again
        while (userInput < 1 || userInput > 3)
        {
            printf("\n");
            printf("Your input must be 1, 2 or 3 \n");
            printf("Input your move : ");
            scanf("%d",&userInput);
            printf("\n");
        }
        
        // You missed this in your initial program:
        // The computer gets a random value (ROCK/PAPER/SCISSOR)
        computerInput = getRandomMove();

        // what if it's a draw...?
        if (userInput == computerInput)
        {
            printf("It's draw. \n");
            printf("You got %d point(s) and the computer has %d point(s)\n",userPoint, computerPoint);
            userInput = 0;
            computerInput = 0;
            continue;
        }
        
        // I changed little besides comparing the computer input with the the different "Move" types
        switch (userInput)
        {
            case ROCK:
                if(computerInput == PAPER)
                {
                printf("You picked Rock. Computer picked paper. Computer got 1 point(s). \n");
                computerPoint++;          
                }
                else if(computerInput == SCISSORS)
                {
                printf("You picked rock. Computer picked scissors. You got 1 point(s). \n");
                userPoint++;
                }
                break;
            case PAPER:
                if(computerInput == ROCK)
                {
                    printf("You picked paper. Computer picked Rock. You got 1 point(s). \n");
                    userPoint++;
                }
                else if(computerInput == SCISSORS)
                {
                    printf("You picked paper. Computer picked scissors. Computer got 1 point(s). \n");
                    computerPoint++;
                }    
                break;
            case SCISSORS:
                if(computerInput == ROCK)
                {
                    printf("You picked Scissors. Computer picked Rock. Computer got 1 point(s). \n");
                    computerPoint++;
                }else if(computerInput == PAPER)
                {
                    printf("You picked Scissors. Computer picked Paper. You got 1 point(s). \n");
                    userPoint++;                
                }
                break;
            default:
                break; 
        }

        // game ending condition (one player reached 3 points)
        if (computerPoint == 3 || userPoint == 3)
        {
            // print out each players points
            printf("You got %d points and the Computer got %d points\n", userPoint, computerPoint);
            
            // computer won
            if (computerPoint == 3)
            {
                printf("You lost :/\n");
            }
            // player won
            else 
            {
                printf("You WON!!!\n");
            }
            // if this is reached the next time we enter the loop while(computerPoint < 3 && userPoint < 3) 
            // isn't true anymore so we skip to the end of program (no break, continue whatever needed)
        }

        // set the values 0 for the next loop
        userInput = 0;
        computerInput = 0;

    }

    // waits for the user to enter "enter"
    // else the console would close before you see the result!
    system("pause");
}
#include<stdio.h>
#include<stdlib.h>
 
int main()
{
    int hnum, lnum, number, guess, nguesses=0;
    srand(time(0));
    printf("Choose the higher boundary\n");
    scanf("%d", &hnum);
    printf("Choose the lower boundary\n");
    scanf("%d", &lnum);
    guess = (hnum+lnum)/2;
    do
    {
        nguesses++;
		printf("I guess : %d\n", guess);
        printf("If I am right enter 10 \n if I am wrong enter 10< for if the number is smaller \nand <10 if the number is bigger\n");
        scanf("%d", &number);
        if(10>number)
        {
            printf("I guessed a high number\n I will try smaller one\n");
            hnum = guess;
            guess = (hnum+lnum)/2;
        }
        else if(10<number)
        {
            printf("I guessed a low number\n I will try bigger one\n");
            lnum = guess;
            guess = (hnum+lnum)/2;
        }
        else
        {
            printf("I guessed the correct number\n");
            printf("attempts : %d\n", nguesses);
        }
    } while(number!=10);
    return 0;
}

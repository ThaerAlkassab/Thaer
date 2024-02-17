#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <mpi.h>

int main(int argc, char ** argv)
{
    int rank;
    MPI_Init(&argc, &argv); // Initialize MPI
    MPI_Comm_rank(MPI_COMM_WORLD, &rank); // Get the rank of the current process

    if (rank == 0) // Process 0
    {
        srand(time(NULL)); // Seed the random number generator
        int gen = rand() % 100 + 1; // Generate a random number between 1 and 100
        int guess = -1; // Guess received from process 1
        int rep; // Response to guess
        int c = 0; // Counter for number of guesses

        printf("R0: I have thought of a number between 1 and 100.\n");
        while (guess != gen)
        {
            printf("R0: Give me your guess!\n");
            MPI_Sendrecv(&guess, 1, MPI_INT, 1, 0, // Send guess and receive response in one call
                         &rep, 1, MPI_INT, 1, 0,
                         MPI_COMM_WORLD, MPI_STATUS_IGNORE);
            c++; // Increment guess counter
            if (guess > gen)
            {
                printf("R0: Your guess is too big!\n");
            }
            else if (guess < gen)
            {
                printf("R0: Your guess is too small!\n");
            }
        }
        printf("R0: You guessed the number! You needed %d guesses.\n", c); // Print number of guesses
    }
    else if (rank == 1) // Process 1
    {
        int rep = 1; // Response from process 0
        int min = 1; // Minimum possible value for guess
        int max = 100; // Maximum possible value for guess
        while (rep != 0)
        {
            int guess = (min + max) / 2; // Calculate guess using binary search
            printf("R1: I am guessing %d.\n", guess);
            MPI_Sendrecv(&guess, 1, MPI_INT, 0, 0, // Send guess and receive response in one call
                         &rep, 1, MPI_INT, 0, 0,
                         MPI_COMM_WORLD, MPI_STATUS_IGNORE);
            if (rep > 0)
                max = guess - 1; // Adjust maximum range based on feedback
            else if (rep < 0)
                min = guess + 1; // Adjust minimum range based on feedback
        }
    }
    MPI_Finalize(); // Finalize MPI
    return 0; // Exit program
}

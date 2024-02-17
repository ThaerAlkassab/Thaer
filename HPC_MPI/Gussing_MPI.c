#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <mpi.h>

int main(int argc, char ** argv)
{
    int rank;
    MPI_Status Stat;
    MPI_Init( & argc, &argv ); // Initialize MPI
    MPI_Comm_rank( MPI_COMM_WORLD, &rank ); // Get the rank of the current process

    if(rank == 0) // Process 0
    {
        srand( time( NULL ) ); // Seed the random number generator
        int gen = rand() % 100 + 1; // Generate a random number between 1 and 100
        int inp = -1; // Input guess from process 1
        int rep; // Response to guess
        int c = 0; // Counter for number of guesses

        printf("R0: I have thought of a number between 1 and 100.\n");
        while( inp != gen )
        {
            printf("R0: Give me your guess!\n");
            MPI_Recv( &inp, 1, MPI_INT,
                      1, 0, MPI_COMM_WORLD, &Stat ); // Receive guess from process 1
            c++; // Increment guess counter
            if( inp > gen )
            {
                printf("R0: Your guess is too big!\n");
                rep = 1; // Signal to process 1 that guess is too big
            }
            else if( inp < gen )
            {
                printf("R0: Your guess is too small!\n");
                rep = -1; // Signal to process 1 that guess is too small
            }
            else
                rep = 0; // Signal to process 1 that guess is correct
            MPI_Send( &rep, 1, MPI_INT,
                1, 0, MPI_COMM_WORLD ); // Send response to process 1
        }
        printf("R0: You guessed the number! You needed %d guesses.\n", c); // Print number of guesses
    }
    else if(rank == 1) // Process 1
    {
        int rep = 1; // Response from process 0
        int min = 1; // Minimum possible value for guess
        int max = 100; // Maximum possible value for guess
        while( rep != 0 )
        {
            int guess = ( min + max ) / 2; // Calculate guess using binary search
            printf("R1: I am guessing %d.\n", guess);
            MPI_Send( &guess, 1, MPI_INT,
                      0, 0, MPI_COMM_WORLD ); // Send guess to process 0
            MPI_Recv( &rep, 1, MPI_INT,
                      0, 0, MPI_COMM_WORLD, &Stat ); // Receive response from process 0
            if( rep > 0 )
                max = guess - 1; // Adjust maximum range based on feedback
            else if ( rep < 0 )
                min = guess + 1; // Adjust minimum range based on feedback
        }
    }
    MPI_Finalize(); // Finalize MPI
    return 0; // Exit program
}

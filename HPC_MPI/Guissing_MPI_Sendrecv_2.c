#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <mpi.h>

int main(int argc, char ** argv)
{
    int rank;
    int h = 100;
    int l = 1;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);

    if (rank == 0)
    {
        srand(time(NULL));
        int gen = rand() % 100 + 1;
        int guess = -1;
        int rep;
        int c = 0;

        printf("R0: I have thought of a number between 1 and 100.\n");
        while (guess != gen)
        {
            MPI_Sendrecv(&guess, 1, MPI_INT, 1, 0,
                         &rep, 1, MPI_INT, 1, 0,
                         MPI_COMM_WORLD, MPI_STATUS_IGNORE);

            if (guess > gen)
            {
                printf("R0: Your guess is too big!\n");
                h = guess - 1; // Update upper bound of search range
            }
            else if (guess < gen && guess != -1)
            {
                printf("R0: Your guess is too small!\n");
                l = guess + 1; // Update lower bound of search range
            }

            c++;
        }
        printf("R0: You guessed the number! You needed %d guesses.\n", c);
    }
    else if (rank == 1)
    {
        srand(time(NULL) + rank); // Different seed for each process
        int gen = rand() % 100 + 1;
        int guess;
        int rep;

        while (1)
        {
            if (h >= l) {
                guess = (rand() % (h - l + 1)) + l; // Generate guess within the current range
            } else {
                printf("Error: Search range is invalid.\n");
                break; // Exit the loop to avoid further errors
            }

            MPI_Sendrecv(&guess, 1, MPI_INT, 0, 0,
                         &rep, 1, MPI_INT, 0, 0,
                         MPI_COMM_WORLD, MPI_STATUS_IGNORE);

            if (rep == 0)
                break;

            if (rep > 0)
            {
                printf("R1: My guess %d was too big!\n", guess);
                h = guess - 1; // Update upper bound of search range
            }
            else
            {
                printf("R1: My guess %d was too small!\n", guess);
                l = guess + 1; // Update lower bound of search range
            }

            // Send updated search range to process 0
            MPI_Send(&h, 1, MPI_INT, 0, 0, MPI_COMM_WORLD);
            MPI_Send(&l, 1, MPI_INT, 0, 0, MPI_COMM_WORLD);
        }
    }
    MPI_Finalize();
    return 0;
}

#include <stdio.h>
#include <stdlib.h>
#include <mpi.h>
#include <time.h>

#define ROCK 0
#define PAPER 1
#define SCISSORS 2

int main(int argc, char *argv[]) {
    int rank, size;
    int choice, opponent_choice;
    int score[2] = {0, 0}; // index 0 for player 1, index 1 for player 2
    char *choices[] = {"Rock", "Paper", "Scissors"};
    
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);
    
    if (size != 2) {
        printf("This program requires exactly 2 processors\n");
        MPI_Finalize();
        return 1;
    }
    
    srand(time(NULL) + rank); // seed RNG with rank-dependent seed
    
    for (int round = 0; round < 3; round++) {
        choice = rand() % 3; // Generate a random choice
        
        // Send choice to opponent and receive opponent's choice
        MPI_Sendrecv(&choice, 1, MPI_INT, (rank + 1) % 2, 0, &opponent_choice, 1, MPI_INT, (rank + 1) % 2, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        
        // Determine winner
        int result = (choice - opponent_choice + 3) % 3;
        if (result == 0) {
            printf("Round %d: Draw - Both chose %s\n", round + 1, choices[choice]);
        } else if (result == 1) {
            score[rank]++;
            printf("Round %d: Player %d wins - %s beats %s\n", round + 1, rank + 1, choices[opponent_choice], choices[choice]);
        } else {
            score[(rank + 1) % 2]++;
            printf("Round %d: Player %d wins - %s beats %s\n", round + 1, (rank + 1) % 2 + 1, choices[choice], choices[opponent_choice]);
        }
    }
    
    // Print final score
    MPI_Barrier(MPI_COMM_WORLD);
    if (rank == 0) {
        printf("\nFinal Score:\n");
        printf("Player 1: %d\n", score[0]);
        printf("Player 2: %d\n", score[1]);
    }
    
    MPI_Finalize();
    return 0;
}

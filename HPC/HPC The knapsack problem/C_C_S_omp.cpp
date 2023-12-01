#include <omp.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int max(int a, int b) { return (a > b)? a : b; }
// Returns the maximum value that can be put in a knapsack of capacity W
int knapsack(int W, int wt[], int val[], int n)
{
   int i, w;
   int K[n+1][W+1];

   // Build table K[][] in bottom up manner

   #pragma omp parallel for private(i)
   for (i = 0; i <= n; i++)
   {
       #pragma omp parallel for private(w)
       for (w = 0; w <= W; w++)
       {
//           printf("\n i %d: w %d", i, w);
           if (i==0 || w==0)
               K[i][w] = 0;
           else if (wt[i-1] <= w)
                 K[i][w] = max(val[i-1] + K[i-1][w-wt[i-1]],  K[i-1][w]);
           else
                 K[i][w] = K[i-1][w];
       }
   }

   return K[n][W];
}

int main()
{
    srand(1);
    int i, N=10000;
    int val[N], wt[N];

    #pragma omp parallel for private(i)
    for(i=0;i<N;i++)
    {
        val[i]=rand()%150+50;
        wt[i]=rand()%25+5;
    }

    int W = 75;
    int n = sizeof(val)/sizeof(val[0]);

    clock_t start_time = clock();

    #pragma omp parallel
    {
        #pragma omp single
        printf("\nValue = %d", knapsack(W, wt, val, n));
    }

    clock_t end_time = clock();
    double elapsed_time = ((double) (end_time - start_time)) / CLOCKS_PER_SEC;
    printf("Elapsed time: %f seconds\n", elapsed_time);

    return 0;
}

#include <stdio.h>
#include <stdlib.h>
#include <omp.h>

int w[10], p[10], v[10][10], n, i, j, cap, x[10] = {0};

int max(int i, int j) {
    return ((i > j) ? i : j);
}

int knap(int i, int j) {
    int value;
    if (v[i][j] < 0) {
        if (j < w[i])
            value = knap(i - 1, j);
        else
            value = max(knap(i - 1, j), p[i] + knap(i - 1, j - w[i]));
        v[i][j] = value;
    }
    return (v[i][j]);
}

int main() {
    int profit, count = 0;

    printf("\nEnter the number of elements\n");
    scanf("%d", &n);

    // Generate random profits and weights
#pragma omp parallel for
    for (i = 1; i <= n; i++) {
        p[i] = rand() % 100; // Adjust the range as needed
        w[i] = rand() % 50;  // Adjust the range as needed
    }

    printf("\nEnter the capacity \n");
    scanf("%d", &cap);

#pragma omp parallel for
    for (i = 0; i <= n; i++)
#pragma omp parallel for
        for (j = 0; j <= cap; j++)
            if ((i == 0) || (j == 0))
                v[i][j] = 0;
            else
                v[i][j] = -1;

    profit = knap(n, cap);
    i = n;
    j = cap;

    while (j != 0 && i != 0) {
        if (v[i][j] != v[i - 1][j]) {
            x[i] = 1;
            j = j - w[i];
            i--;
        } else
            i--;
    }

    printf("Items included are\n");
    printf("Sl.no\tweight\tprofit\n");
#pragma omp parallel for
    for (i = 1; i <= n; i++)
        if (x[i])
            printf("%d\t%d\t%d\n", ++count, w[i], p[i]);

    printf("Total profit = %d\n", profit);

    return 0;
}


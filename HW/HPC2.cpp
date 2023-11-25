#include <stdio.h>
#include <math.h>
#include <sys/time.h>

double gettime()
{
	struct timeval tv;
	gettimeofday(&tv, NULL); // both are outputarguments, we don't need time zone -> it is NULL
	return tv.tv_sec + 0.000001 * tv.tv_usec;
}

int main (int arge, char ** argv)
{
	typedef long double myf;
	#define mycos(x) cosl(x)
	// cosf (float), cos (double), cosl (long double)
	typedef int myi;
	myf a = 0;
	myf b = 1.570796326794896619231321691639751442L;
	myi N = (myi)atoll(argv[1]);
	myf res = 0;
	myf dx = (b-a)/N; 
	myf dxhalf = dx*0.5;
	myi i;
	// loop over subintervals
	double start = gettime();
	for (i=1; i<(N-1); i++)
	{
		res += 2 * mycos(i*dx + dxhalf);
	}
	res += (mycos(a) + mycos(b));
	res *= (dx*0.5);
	double end = gettime();
	// print results 
	printf ("Results: %18.16Lf\n", (long double)res);
	// compare with analytic result
	printf ("Error:  %18.16Lf\n", (long double)(res-1.0));
	printf ("Time: %8.6f\n", end - start);
	return 0;
}

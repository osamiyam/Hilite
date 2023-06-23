
#include <stdio.h>
#include <stdlib.h>

int fib(int n);

int main() {
    int i;
    const int n = 20;
    for (i = 0; i < n; i++) {
        printf("%d %d\n", i, i * i);
    }
    for (i = 0; i < n; i++) {
        printf("%02d %10d\n", i, fib(i));
    }
    
    return 0;
}

int fib(int n) {
    if (n <= 1) return 1;
    else return fib(n - 1) + fib(n - 2);
}

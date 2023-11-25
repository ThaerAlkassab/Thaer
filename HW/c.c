#include <stdio.h>
#include <windows.h>

void getCPUID(char* cpuid) {
    int cpuInfo[4] = { 0 };
    __cpuid(cpuInfo, 1);
    snprintf(cpuid, 13, "%08X", cpuInfo[3]);
}

void getHostname(char* hostname) {
    DWORD size = sizeof(hostname);
    GetComputerNameA(hostname, &size);
}

int main() {
    char cpuid[13];
    getCPUID(cpuid);

    char hostname[256];
    getHostname(hostname);

    printf("Hello World from %s CPU #%s\n", hostname, cpuid);

    return 0;
}

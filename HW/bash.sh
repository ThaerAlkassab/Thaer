#!/bin/bash

# Get the CPU ID
cpuid=$(lscpu | awk '/^Serial/ { print $NF }')

# Get the hostname
hostname=$(hostname)

# Print the message
echo "Hello World from $hostname CPU #$cpuid"
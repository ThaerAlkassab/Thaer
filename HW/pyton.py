import socket
import subprocess

def get_cpu_id():
    try:
        output = subprocess.check_output(['wmic', 'cpu', 'get', 'ProcessorId'], universal_newlines=True)
        cpu_id = output.strip().split('\n')[-1]
        return cpu_id
    except:
        return "Unknown"

def get_hostname():
    return socket.gethostname()

# Get the CPU ID
cpu_id = get_cpu_id()

# Get the hostname
hostname = get_hostname()

# Print the message
print(f"Hello World from {hostname} CPU #{cpu_id}")
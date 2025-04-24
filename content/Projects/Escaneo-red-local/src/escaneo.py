"""
Escáner de Red Local
Autoría: Trabajo académico sin atribución específica
Descripción: Escanea dispositivos activos en la red 192.168.1.0/24 usando sockets.
"""

import socket
import ipaddress
from concurrent.futures import ThreadPoolExecutor

# Define la red a escanear
RED_LOCAL = ipaddress.ip_network("192.168.1.0/24", strict=False)

def escanear_ip(ip):
    try:
        socket.setdefaulttimeout(0.5)
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        resultado = sock.connect_ex((str(ip), 80))
        if resultado == 0:
            print(f"[+] Dispositivo activo: {ip}")
        sock.close()
    except Exception:
        pass

def escanear_red():
    print("🔍 Iniciando escaneo de red local...")
    with ThreadPoolExecutor(max_workers=100) as executor:
        for ip in RED_LOCAL.hosts():
            executor.submit(escanear_ip, ip)

if __name__ == "__main__":
    escanear_red()


import pandas as pd

# Cargar datos simulados
df = pd.read_csv('../model/datos_simulados.csv')

# Palabras clave por categoría
palabras_positivas = ["encantó", "excelente", "increíble", "recomiendo", "excepcional", "expectativas", "trato"]
palabras_negativas = ["mal", "tarde", "no", "nunca", "malo", "horrible", "volvería"]

def clasificar(frase):
    frase = frase.lower()
    if any(palabra in frase for palabra in palabras_positivas):
        return "positivo"
    elif any(palabra in frase for palabra in palabras_negativas):
        return "negativo"
    else:
        return "neutral"

# Clasificación
resultados = []
conteo = {"positivo": 0, "negativo": 0, "neutral": 0}

for index, row in df.iterrows():
    clasificacion = clasificar(row['frase'])
    resultados.append(f'Frase: "{row["frase"]}"\nClasificación: {clasificacion.capitalize()}\n')
    conteo[clasificacion] += 1

# Guardar resultados
with open("../outputs/resultados.txt", "w", encoding="utf-8") as f:
    f.write("=" * 50 + "\n")
    f.write("CLASIFICADOR DE SENTIMIENTOS - RESULTADOS SIMULADOS\n")
    f.write("=" * 50 + "\n\n")
    for resultado in resultados:
        f.write(resultado + "\n")
    f.write("-" * 50 + "\n")
    f.write(f"Total de frases analizadas: {len(df)}\n")
    f.write(f"Positivas: {conteo['positivo']} | Negativas: {conteo['negativo']} | Neutrales: {conteo['neutral']}\n")

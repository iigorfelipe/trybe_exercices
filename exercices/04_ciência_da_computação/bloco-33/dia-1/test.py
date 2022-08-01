def analyze(text):
    count_words = len(text.split(" "))

    return f"Número de palavras = {count_words}"


text_to_analyze = "gomu gomu no... BAZOOKA!"

print(analyze(text_to_analyze))


lista_dois = ["dois", "two", "dos", "2"]

lista_dois.sort()

# testando um erro

for elemento in lista_dois:
    print(int(elemento))

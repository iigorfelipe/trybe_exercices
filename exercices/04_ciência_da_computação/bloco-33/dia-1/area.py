# Entre cada função temos um espaço de 2 linhas;
# As funções são declaradas com nomes em letras minúsculas;
# A constante PI é definida em letras maiúsculas.

PI = 3.14


def square(side):
    return side * side


def rectangle(length, width):
    return length * width


def circle(radius):
    return PI * radius * radius


print("Área do quadrado", (square(10)))
print("Área do retângulo", (rectangle(2, 2)))
print("Área do círculo", (circle(3)))

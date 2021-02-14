romanos = str(input('Digite um valor em numeros romanos: ')).strip().upper()
lista = list()
total = 0

for c in romanos:
    lista.append(c)

for p, c in enumerate(lista):
    if lista[p] == 'I':
        lista[p] = 1
    elif lista[p] == 'V':
        lista[p] = 5
    elif lista[p] == 'X':
        lista[p] = 10
    elif lista[p] == 'L':
        lista[p] = 50
    elif lista[p] == 'C':
        lista[p] = 100
    elif lista[p] == 'D':
        lista[p] = 500
    elif lista[p] == 'M':
        lista[p] = 1000

for p, c in enumerate(lista):
    if p > 0:
        if lista[p] > lista[p - 1]:
            lista[p - 1] = lista[p] - lista[p - 1]
            del lista[p]

total = sum(lista)
print(f'{romanos} em numeros decimais é igual a {total}.')
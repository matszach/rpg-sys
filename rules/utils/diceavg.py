from random import randint

DICE = [4, 6, 8, 10, 12, 20]

def get_avg(nof, die):
    return nof * (die + 1)/2


results = {}

for n in range(1, 21):
    for d in DICE: 
        v = get_avg(n, d)
        symbol = f'{n}d{d}'
        vkey = f'{v}'
        if vkey in results:
            results[vkey].append(symbol)
        else:
            results[vkey] = [symbol]

toPrint = []
for k in results.keys():
    toPrint.append((float(k), results[k]))

with open('utils\\diceavg.txt', 'w+') as out:
    for r in sorted(toPrint, key=lambda r: r[0]):
        out.write(f"{r[0]}: {', '.join(r[1])}\n")

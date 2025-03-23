n = int(input())
a = []

for _ in range(n):
    num = int(input())
    a.append(num)
for i in range(n):
    if i % 2 == 0:
        print(a[i], end = " ")
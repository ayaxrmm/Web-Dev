def power(a, n):
    result = 1
    while n > 0:
        result *= a
        n -= 1
    return result

a, n = map(float, input().split())
n = int(n)
print(power(a, n))

lst = []

n = int(input().strip())

for _ in range(n):
    command = input().split()  
    operation = command[0]  
    if operation == "insert":
        lst.insert(int(command[1]), int(command[2]))
    elif operation == "print":
        print(lst)
    elif operation == "remove":
        lst.remove(int(command[1]))
    elif operation == "append":
        lst.append(int(command[1]))
    elif operation == "sort":
        lst.sort()
    elif operation == "pop":
        lst.pop()
    elif operation == "reverse":
        lst.reverse()

MKAD_LENGTH = 109

v = int(input())  
t = int(input())  
position = (v * t) % MKAD_LENGTH

print(position)

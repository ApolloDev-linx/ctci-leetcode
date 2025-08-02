#1.1 is unique


# 1.2check perm
def perm(s1,s2):
    index1 = 0
    index2 = 0
    string1 = []
    string2 = []
    for c in s1:
        string1.append(c)
    for b in s2:
        string2.append(b)
        
    string1.sort()
    string2.sort()
    index1 = index1 + 1
    index2 = index2 + 1
    if string1[index1] != string2[index2]:
        print(f"{string1}, {string2}")
        return False
    else:
        print(f"{string1}, {string2}")
        return True

print(perm("hey", "yeh"))



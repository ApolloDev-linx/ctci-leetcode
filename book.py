# 1.1 is unique
def stringCOM(s1):
    if s1.len < 2 or s1 == "":
        return s1
    compress = ""
    i = 1
    count = 1
    while i < s1.len:
        i+= 1
        if s1[i] == s1[i - 1]:
            count+= 1
        else:
            compress+= s1[i - 1] + count
            count = 1
    compress+= s1[s1.len -1] + count
    return compress

print(stringCOM("aaaabbbbbddddlllll"))


   

file = open("abc.txt","w")
file.write("hello my name is anurag I am a web developerAAA" )
file = open("abc.txt", "r")
str = file.read()

vowels = 0
consonants = 0
uppercase = 0
lowercase = 0
for i in range(0, len(str)):


    
    if(str[i].isupper()):
        uppercase = uppercase + 1  #check character Uppercase
        



    elif((str[i].islower())):
        lowercase = lowercase + 1  #check character Lowercase
str = str.lower()
for i in range(0, len(str)):
    if(str[i] == 'a' or str[i] == 'e' or str[i] == 'i' or str[i] == 'o' or str[i] == 'u'):
        vowels = vowels + 1
    elif((str[i] >= 'a' and str[i] <= 'z')):
        consonants = consonants + 1

print("Vowels: ", vowels);
print("Consonants: ", consonants);
print("uppercase: ", uppercase);
print("lowercase: ", lowercase);
    

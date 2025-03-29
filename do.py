import os
i = 0
while True:
    i+=1
    print(f"#{i}")
    os.system("git pull --verbose")
    print()
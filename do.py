import os, multiprocessing
def download():
    i = 0
    succ = 0
    while True:
        i+=1
        print(f"Download #{i} ({succ*100/i:.0f}% success)")
        succ += os.system("git pull --verbose > NUL 2>&1")
def upload():
    i = 0
    succ = 0
    while True:
        i+=1
        print(f"Upload #{i} ({succ*100/i:.0f}% success)")
        succ += not os.system("git push --verbose > NUL 2>&1")
if __name__ == '__main__':
    multiprocessing.freeze_support()
    multiprocessing.Process(target=upload).start()
    multiprocessing.Process(target=download).start()
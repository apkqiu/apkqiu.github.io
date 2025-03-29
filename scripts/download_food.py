import bs4
import requests
import os
import PIL.Image, PIL.ImageTransform
os.system("rmdir /s /q public\\food_img")
os.system("mkdir public")
os.system("mkdir public\\food_img")
base = "http://sz1cz.gusuedu.cn/"
for i in range(1000):
    if i == 0:
        resp = requests.get(base+"xwzx/xwgk/mzcp.htm", verify=False)
    else:
        resp = requests.get(base+"xwzx/xwgk/mzcp/"+str(i)+".htm", verify=False)
    if (resp.status_code >= 400):
        break
    soup = bs4.BeautifulSoup(resp.content.decode('utf-8'), 'html.parser')
    for item in soup.select_one("body > div.nymain.px1400 > div.ny-right > div.text-list > ul").select("li"):
        print(item.select_one("a").attrs["href"])
        arurl = item.select_one("a").attrs["href"]

        mon, day = item.select_one("a > div.text-ldata > div > p").text.split("/")
        year = item.select_one("a > div.text-ldata > div > span").text
        title = item.select_one("a > div.text-linfo > h3").text
        description = item.select_one("a > div.text-linfo > p").text

        resp = requests.get(base+"/"+arurl.strip("/."), verify=False)
        arsoup = bs4.BeautifulSoup(resp.content.decode('utf-8'), 'html.parser')
        imgpath = arsoup.select_one(
            "#vsb_content > div > p:nth-child(1) > img").attrs["src"]
        print(imgpath)
        imgresp = requests.get(base+"/"+imgpath.strip("/."), verify=False)
        with open(f"public/food_img/{title}_{year}-{mon}-{day}.png", "wb") as f:
            f.write(imgresp.content)
        try:
            img = PIL.Image.open(f"public/food_img/{title}_{year}-{mon}-{day}.png")
            if img.width < img.height:
                img = img.transpose(PIL.Image.Transpose.ROTATE_90)
            img.save(f"public/food_img/{title}_{year}-{mon}-{day}.png")
        except:
            os.remove(f"public/food_img/{title}_{year}-{mon}-{day}.png")
import base64,os,re

regex = re.compile(r'!\[.*?\]\((.*?)\)')

def image_to_dataurl(image_path):
    with open(image_path, 'rb') as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
        return f'data:image/png;base64,{encoded_string}'


for dirpath, dirnames, filenames in os.walk("docs"):
    for filename in filenames:
        if filename.endswith(".md"):
            f = open(os.path.join(dirpath, filename), "r", encoding="utf-8")
            lines = f.read()
            f.close()
            os.makedirs("src/"+dirpath.removeprefix("docs/"),exist_ok=True)
            f = open(os.path.join("src/"+dirpath.removeprefix("docs/"),
                     filename), "w", encoding="utf-8")
            f.write(regex.sub(lambda match: f'![{match.group(0)}]({image_to_dataurl(match.group(1))})', lines))
            f.close()
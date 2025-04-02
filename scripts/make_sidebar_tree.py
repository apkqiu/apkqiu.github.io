import os
import yaml
import json

os.path.join = lambda x, y: x+"/"+y

def get_title(file):
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
        parts = content.split("---")
        print(file)
        title = None
        if len(parts) > 1 and parts[0] == "":  # 有frontmatter
            frontmatter = parts[1]
            if frontmatter.startswith("{"):
                title = json.loads(frontmatter).get("title")
            else:
                title = yaml.safe_load(frontmatter).get("title")
        if title is None:
            lines = parts[0].splitlines()

            if len(lines) == 0:
                title = file[file.rfind("/")+1:file.rfind(".")]
            else:
                # 找到第一个非空
                for line in lines:
                    if line.strip() != "":
                        title = line.strip("# ")
                        break
    return title

def make_tree(dir):
    print(dir)
    dir = dir.replace("\\", "/")
    # 查看markdown，查看frontmatter，查看title，没有就以第一行为准
    current_tree = []
    try:
        index_title = get_title(os.path.join(dir, "index.md"))
    except:
        
        index_title = "未命名节点"
    if index_title is "index":
        index_title = "未命名节点"
    for file in os.listdir(dir):
        if os.path.isdir(os.path.join(dir, file)):
            current_tree.append(make_tree(os.path.join(dir, file)))
        elif file.endswith(".md"):
            if file == "index.md":
                continue
            current_tree.append(
                {
                    "text": get_title(os.path.join(dir, file)),
                    "link": f"{dir.replace('docs/', '', 1)}/{file[:file.rfind(".")]}"
                }
            )
    if current_tree == []:

        return {
            "text": index_title,
            "link": f"{dir.replace('docs/', '', 1)}/index.md"
        }

    return {
        "text": index_title,
        "items": current_tree,
        "collapsed": True,
        "link": f"{dir.replace('docs/', '', 1)}/index.md"
    }


tree = make_tree("docs")["items"]
for key in range(len(tree)):
    if tree[key].get("collapsed"):
        tree[key]["collapsed"] = False
    
str = json.dumps(tree)
print(str)
with open(".vitepress/config.template.mjs", encoding="utf-8") as f:
    content = f.read()
    content = content.replace("[!!sidebar_tree]", str)
    with open(".vitepress/config.mjs", "w", encoding="utf-8") as f:
        f.write(content)
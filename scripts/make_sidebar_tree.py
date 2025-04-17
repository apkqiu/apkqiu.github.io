import os
import yaml
import json
import string
os.path.join = lambda x, y: x+"/"+y

def get_title(file):
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
        parts = content.split("---")
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

def has_content(file):
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
        parts = content.split("---")
        if parts[0].strip(string.whitespace)=="":
            con = "---".join(parts[2:])
        else:
            con = content
        return con.strip(string.whitespace)


def make_tree(dir):
    print(dir)
    dir = dir.replace("\\", "/")
    # 查看markdown，查看frontmatter，查看title，没有就以第一行为准
    current_tree = []
    try:
        index_title = get_title(os.path.join(dir, "index.md"))
    except:
        index_title = None
    if index_title is "index":
        index_title = None
    for file in os.listdir(dir):
        if file.startswith("_"):
            continue # hidden pages
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
    if index_title == "None":
        index_title = "未命名节点"
    if not has_content(os.path.join(dir, "index.md")):
        return {
            "text": index_title,
            "items": current_tree,
            "collapsed": True
        }
    if current_tree == []:

        return {
            "text": index_title,
            "link": f"{dir.replace('docs/', '', 1)}"
        }

    return {
        "text": index_title,
        "items": current_tree,
        "collapsed": True,
        "link": f"{dir.replace('docs/', '', 1)}"
    }


tree = make_tree("docs")["items"]
nav = []
for key in range(len(tree)):
    if tree[key].get("collapsed"):
        tree[key]["collapsed"] = False

for key in range(len(tree)):
    try:
        nav.append({
            "text": tree[key]["text"],
            "link": tree[key]["link"],
            "activeMatch": tree[key]["link"]
        })
    except:
        pass
str = json.dumps(tree)
navstr = json.dumps(nav)
print(str)
with open(".vitepress/config.template.mjs", encoding="utf-8") as f:
    content = f.read()
    content = content.replace("[!!sidebar_tree]", str)
    content = content.replace("[!!nav]", navstr)
    with open(".vitepress/config.mjs", "w", encoding="utf-8") as f:
        f.write(content)

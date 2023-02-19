# -*- coding:utf-8 -*-
import datetime
import json
import os

import requests
import re

from PIL import Image

time_str = datetime.datetime.now()
print("运行的时间：" + str(time_str))
headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
    'referer': 'https://www.pixiv.net/ranking.php?mode=daily_r18&content=manga',
    'cookie': 'first_visit_datetime_pc=2022-12-08+21%3A09%3A15; p_ab_id=9; p_ab_id_2=6; p_ab_d_id=661508789; yuid_b=OJFnVwc; _fbp=fb.1.1670501357542.1614410069; _gid=GA1.2.255579329.1670501362; device_token=250874b4bfef948b82258a6f562c51ac; c_type=25; privacy_policy_notification=0; a_type=0; b_type=0; QSI_S_ZN_5hF4My7Ad6VNNAi=v:0:0; login_ever=yes; _gcl_au=1.1.1002121055.1670501461; p_b_type=1; privacy_policy_agreement=5; adr_id=A1qvvwp4UXtcmiMiy6kDRmi92CayII68W2hvh4I5sEiX5vQv; __cf_bm=7dKU7mcJXV4zrl1MVq1nMLxEvnvkd7Pj5QTq95w0mvE-1670640376-0-Ad/Qxr4pV2jpGfqhlEqviN2VUMN3V7lrpReOzONQbCIxIHh6d5FtbTsvplDMVcyCn9/FS5+YViI1QO1RMIL5axzk8fcPMO9zhE1RqCQYDQOGGcJ4e4Gz+BvNlCL15I3Fxn95iNP+QUNXPVkk4bGknhIrI3f9+d1lRWT3g1S1z5zjz7R03gFNw1UJc+kNf9nECJ9qXqS0xzemNod3OMjzBrk=; _gat_UA-1830249-3=1; _gat_gtag_UA_76252338_1=1; PHPSESSID=41658296_2pvJ65yz8O1QB2LHi4dtIHnv5B3GMCew; _gat_UA-76252338-1=1; _ga_MZ1NL4PHH0=GS1.1.1670640377.4.1.1670640390.0.0.0; cto_bundle=NftArF9NT1BIaFolMkZnOWVpRHhlZUE2RU43eEdIems4SmlQN0ZEM2FLNDIzZ1BFSzE5bEdlN1pLZWM4d1dha0VRdUMwZUd0aGxiT2lyUWpCakdLajU3YVdiJTJCVmNGZGpBaUZ4Y1BJbG5SbWRRaTY1MGEzbnN3NVlJc0h2eVJVUE9tYXlwY1ptcHJQS2MwbWFvQlY5NEdTb21kN1l3JTNEJTNE; tag_view_ranking=0xsDLqCEW6~QYP1NVhSHo~q_J28dYJ9d~UBwhLy7Ngq~uC2yUZfXDc~MM6RXH_rlN~_3oeEue7S7~NdfHurJT-D~vdbd7LdFLQ~mFSBCiWDC6~CkDjyRo6Vc~B6j4W_zFZ3~KMpT0re7Sq~Wxk4MkYNNf~gCB7z_XWkp~_hSAdpN9rx~hbWCq8Ok4w~nP0KNyaoTX~8buMDtT-ku~4gzX-RNalt~GmCzj7c06U~1HSjrqSB3U~DTDROgLuzO~azESOjmQSV~By--nS9m_2~DXPphy6Z-6~jH0uD88V6F; _ga_75BBYNYN9J=GS1.1.1670640372.6.1.1670640424.0.0.0; _ga=GA1.1.920080660.1670501357',
}

path = './pixiv/pixiv_data/hentai_manga/'
repeat = 1
count = 1
all_url = []
for n in range(1, 2):
    url = 'https://www.pixiv.net/ranking.php?mode=daily_r18&content=manga&p=%d&format=json' % n
    response = requests.get(url, headers=headers)
    illust_id = re.findall('"illust_id":(\d+?),', response.text)
    title = response.json()["contents"][0]["title"]
    print(title)
    page_num = response.json()["contents"][0]["illust_page_count"]
    print("总共：", page_num)
    picUrl = ['https://www.pixiv.net/artworks/' + illust_id[0]]
    print(picUrl)
    for url in picUrl:
        response = requests.get(url, headers=headers)
        picture = re.search('"original":"(.+?)"},"tags"', response.text)
        for index in range(0, int(page_num)):
            image_url = picture.group(1).replace('p0', 'p'+str(index))
            pic = requests.get(image_url, headers=headers)
            file_path = path + str(index) + '.jpg'
            print(file_path)
            f = open(file_path, 'wb')
            f.write(pic.content)
            f.close()
            print('下载成功', end='\n')
            im = Image.open(file_path).convert("RGB")
            image_name = 'aibianse_com_' + str(index) + '.webp'
            new_image_name = os.path.join(path, image_name)
            im.save(new_image_name, "WEBP")
            all_url.append(f"https://aibianse.github.io/pixiv/pixiv_data/hentai_manga/{image_name}")
            print(file_path + '变更为：' + new_image_name)
            os.unlink(file_path)
            print(file_path + '已删除')
json_file_path = "./pixiv/pixiv_data/data_json.json"
with open(json_file_path, 'r') as f:
    data_json = json.load(f)
    print(data_json)
data_json["data"]["manga"]["name"] = title
data_json["data"]["manga"]["url"] = all_url
with open(json_file_path, 'w') as f:
    f.write(json.dumps(data_json, ensure_ascii=False))
    print('写入成功')

# -*- coding:utf-8 -*-
import json

import requests

# sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='gb18030')
from bs4 import BeautifulSoup

url = 'https://hentai.tv/'
response = requests.get(url=url)
content = ''
if response.status_code == 200:
    page_text = response.text.encode('utf-8')
    soup = BeautifulSoup(page_text, 'html.parser')
    post_title = soup.find('a', class_='after:absolute after:inset-0 after:z-10')
    post_url = post_title.get('href')
    print(post_url)
    video_url = 'https://r2.1hanime.com/' + str(post_url).split('/')[-2].replace('-episode', '') + '.mp4'
    print(video_url)
    headers = {"Range": "bytes=0-1"}
    response_code = requests.get(url=video_url, headers=headers).status_code
    print(response_code)
    if response_code == 206 or response_code == 200:
        data_json = {"video_url": url}
        file_path = './pixiv_images/data.json'
        with open(file_path, 'w') as f:
            json.dump(data_json, f)
            print('写入成功')



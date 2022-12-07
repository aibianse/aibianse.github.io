import requests

result = requests.get('https://source.unsplash.com/random')
print(result.content)
file_name = './pixiv_images/1.jpg'
with open(file_name, 'wb') as f:
    f.write(result.content)

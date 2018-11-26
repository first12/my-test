import urllib2
ua_headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36'}

def downDocument(url):
    print('downloading from url:',url)
    # 通过urllib2.Request()方法构造一个请求对象
    request = urllib2.Request(url,headers=ua_headers)
    try:
        html = urllib2.urlopen(url).read()
        #向指定的url地址发送请求，并返回服务器响应的类文件对象
response = urllib2.urlopen(request)
    except urllib2.URLError as e:
        print 'download error:', e.reason
        html = None
    return html

print(downDocument('https://shop.lenovo.com.cn'))
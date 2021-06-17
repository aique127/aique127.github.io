### 第一步
安装环境
```js
    yum -y install gcc-c++
```
### 第二步
解压
```js
    tar -zxvf nginx-1.16.0.tar.gz
```

### 第三步
配置
```js
    ./configure --prefix=/usr/local/nginx --with-http_ssl_module --with-http_stub_status_module
```
### 第四步
安装
```js
    make && make install
```
This is an instruction, my memo, how to run nightwatch tests on Linux.

I tested my codes on CentOS 7.2 with Vagrant.

### Install dependencies

```
$ vagrant up
$ vagrant ssh
$ sudo yum install git
$ curl -sL https://rpm.nodesource.com/setup_7.x | sudo -E bash -
$ sudo yum install -y nodejs
$ sudo yum install -y nodejs gcc-c++ make
$ sudo yum install java-1.8.0-openjdk
```

### Update npm and Node.js

```
$ sudo npm install -g npm@latest
$ npm -v
5.5.1
```

After I installed softwares above, I found that selenium-debug.log said libgconf-2.so.4 was missing.

```
nightwatchjs-e2e/node_modules/chromedriver/lib/chromedriver/chromedriver: error while loading shared libraries: libgconf-2.so.4: cannot open shared object file: No such file or directory
```

I installed GConf2. 

* Ref: [shared libraries libgconf-2.so.4 is missing](https://stackoverflow.com/questions/37624225/shared-libraries-libgconf-2-so-4-is-missing)

```
$ sudo yum install GConf2
```

Even after I installed GConf2, my tests couldn't be run.

I realised that I needed to install Google Chrome on Linux server as George mentioned on the following stackoverflow even though I install chromedriver by npm.

* [Selenium gives “unknown error: cannot find Chrome binary” when running chrome driver on Ubuntu](https://stackoverflow.com/questions/43287203/selenium-gives-unknown-error-cannot-find-chrome-binary-when-running-chrome-dr)

### Install Google Chrome

```
sudo vi /etc/yum.repos.d/google.chrome.repo
```

Write the following info in google.chrome.repo

```
[google-chrome]
name=google-chrome
baseurl=http://dl.google.com/linux/chrome/rpm/stable/$basearch
enabled=1
gpgcheck=1
gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
```

And then

```
$ sudo yum update
$ yum install google-chrome-stable
```

Now my tests should be run.

```
$ npm run test
```
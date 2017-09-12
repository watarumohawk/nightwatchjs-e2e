## Install npm modules

```
$ npm install
```

# Set up for Grunt

## Install grunt-cli

```
$ npm install -g grunt-cli
```

You may need to use sudo.


# Execute

```
$ grunt
```

## Debug and verbose

```
$ grunt --debug
```

```
$ grunt --verbose
```

## Testing by groups


```
$ grunt --group amazon
```

When you wanna skip some groups, use ```--skipgroup```

```
$ grunt --skipgroup github
```

Official documents: [Test Groups](http://nightwatchjs.org/guide#test-groups)


## Testing by tags

```
$ grunt --group github
```

When you execute the above command, all scrips in "github" directory will be executed. When you wanna test certain tests in the project, tags are useful.


- github-top.js

    ```
    module.exports = {
        "@tags": ["toppage"],
        // test code
    };
    ```

- github-mypage.js

    ```
    module.exports = {
        "@tags": ["mypage"],
        // test code
    };
    ```

```
$ grunt --group github --tag toppage
```

github-mypage.js is only executed in this case.


When you wanna skip some tests, use ```--skiptags```

```
$ grunt --group github --skiptags mypage
```

Official documents: [Test Tags](http://nightwatchjs.org/guide#test-tags)

## Parts you may change

## User agent

User agent is written in nightwatch.json.

```
"desiredCapabilities": {
    "browserName": "phantomjs",
    "javascriptEnabled": true,
    "acceptSslCerts": true,
    "phantomjs.page.settings.userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4"
}
```

## screen shot

- Take a screen shot when the test fails

    ```
    "screenshots" : {
        "enabled" : true,
        "path" : "tests/screenshots",
        "on_failure": true
    }
    ```

- Take a screen shot when command errors happen

    ```
    "screenshots" : {
        "enabled" : true,
        "path" : "tests/screenshots",
        "on_failure": true,
        "on_error": false
    }
    ```

Official documents: [Test setings](http://nightwatchjs.org/guide#test-settings)
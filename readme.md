# SSJS Chatbot AI
It's a sample to have a proper API handling. This is not going to be maintained that much, but if anyone want to work on it, welcome.

# To install
## Requirements
* MongoDB

## Install
This will use Express by default. Don't forget to configure your configuration in `./config/dev.env.js`. You can setup your MongoDB server URI.

```bash
npm install
npm run parse
npm run start
```

# To-do
* An API description (RAML, Swagger or alike)
* A better base
* Create a UI to edit the data with a fake u/p and maybe an OpenID account
* [Interesting to do] Connect with the BotBuilder from MS, so we can test with the BotFramework Emulator without having to build a UI.

# Missing things in SSJS
* Only supports English (We can use other language, but it won't work as expected)
* Can't work with asian language (Japanese, Chinese)
  * To extract japanese (and maybe chinese) you need to do something like https://www.ntt-review.jp/archive/ntttechnical.php?contents=ntr200809sf4.html
* We do have topics, but we cannot have a context sent within the request.
* User management is not detailed anywhere in the SSJS doc. (I would also use Redis instead for multi-instance server having keys like `/bot/{bot name}/user/{user id}/[session|keep]`)

# The good
* Can be multi-tenant (in this example we have only one bot)

# Interesting links
* https://github.com/superscriptjs/superscript/issues/121 : Script to clear the DB (maybe?)
// const router = require('express').Router()
import { Router } from 'express'
let router = Router()

var controller = (app) => {
    var bot = app.bot
  
    router.get('/', function (req, res) {
      // Details on features in tests: https://github.com/superscriptjs/superscript/tree/master/test/fixtures
      //
      // Query parameters:
      //  - q : question (User query input)
      //  - tz: timezone (Ex.: Asia/Tokyo [To be defined])
      //  - lang: language [Not supported in SSJS]
      //  - topic: The topic or area we want to go to [Does not work as expected]
      //      => Need to understand properly : https://github.com/superscriptjs/superscript/wiki/Topics
      //  - context: Define more than a topic what type of information we are seeking
      //  - user: ? (Encrypted userId?)
      if (req.query.q) {
        // Not described api
        // ---------------------------------------------------------------------------------
        // bot.getUsers(callback)
        // bot.getUser(userId, callback)
        // bot.findOrCreateUser(userId, callback)
        // bot.reply(userId, messageString, callback, extraScope) // ExtraScope ???
        // bot.directReply(userId, topicName, messageString, callback) // This is like doing a topicRedirect
        // bot.message(messageString, callBack)
        var userId = req.query['user.id'] ? req.query['user.id'] : req.query['conversation.id']
        bot.getUser(userId, (err, something) => { console.log(something) })
        if (req.query.topic) {
          return bot.directReply(userId, req.query.topic, req.query.q, (err, reply) => {
            res.json(getReply(reply, req.query.debug));
          });
        } else {
          return bot.reply(userId, req.query.q, (err, reply) => {
            res.json(getReply(reply, req.query.debug));
          });
        }
      }
  
      return res.json({ error: 'No message provided.' });
    })
  
    return router
  }
function getReply(reply, debug) {

  var response = {
    id: reply.id,
    reply: reply.string,
    metadata: addMetadata(reply),
  }

  if (debug) {
    response.debug = reply
  }

  return response
}

function addMetadata(reply) {
  var unwantedKeys = ['replyId', 'createdAt', 'string', 'debug']
  var keys = Object.keys(reply).filter(f=> unwantedKeys.indexOf(f) < 0)

  var metadata = {}

  keys.forEach(elt => {
    metadata[elt] = reply[elt]
  });

  return metadata
}

function threeTimeSameAnswer() {
  // We should be looking at the history
  // Do something cool
}

exports.controller = controller

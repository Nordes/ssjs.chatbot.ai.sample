// const router = require('express').Router()
import { Router } from 'express'
let router = Router()

exports.controller = function (app) {

  var bot = app.bot

  router.get('/', function (req, res) {
    if (req.query.q) {
      // Not described api
      // ---------------------------------------------------------------------------------
      // bot.getUsers(callback)
      // bot.getUser(userId, callback)
      // bot.findOrCreateUser(userId, callback)
      // bot.reply(userId, messageString, callback, extraScope) // ExtraScope ???
      // bot.directReply(userId, topicName, messageString, callback) // This is like doing a topicRedirect
      // bot.message(messageString, callBack)
      bot.getUser('user1', (err, something) => { console.log(something) })
      if (req.query.topic) {
        return bot.directReply('user1', req.query.topic, req.query.q, (err, reply) => {
          res.json({
            id: reply.id,
            reply: reply.string,
            subReplies: reply.subReplies,
            metadata: null,
            debugInfo: req.query.debug ? reply : null// Debug information
          });
        });
      } else {
        return bot.reply('user1', req.query.q, (err, reply) => {

          res.json({
            id: reply.id,
            reply: reply.string,
            subReplies: reply.subReplies,
            metadata: null,
            debugInfo: req.query.debug ? reply : null// Debug information
          });
        });
      }
    }

    return res.json({ error: 'No message provided.' });
  })

  return router
}

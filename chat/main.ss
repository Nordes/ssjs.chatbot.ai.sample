// Details for conversation https://github.com/superscriptjs/superscript/wiki/Conversations

+ {^hasTag('hello')} *~2
- Hi!
- Hi, how are you?
- How are you?
- Hello
- Howdy
- Ola

+ こんいちわ
- おげんきですか？

// Example of switching to a topic
+ show * car
- Here’s my car: ^addMessageProp("img","http://www.exoticspotter.com/images/19/18281.jpg")  {topic=suba}

> topic suba
+ the supermarket is colorful
- Hey there!\n
^ {delay=2} Nice to meet you.\n
^ {delay=3} Let me know if you need anything!

+ colorful
- {delay=1} Hey there!\n
^ {delay=2} Nice to meet you.\n
^ {delay=3} Let me know if you need anything!

< topic

+ * supermarket *
- Yay a supermarket

+ generate special metadata
- callSomeFunction to add some properties in the metadata

+ print my stuff
- Ok, check printer ${tag1}, it should be ready soon

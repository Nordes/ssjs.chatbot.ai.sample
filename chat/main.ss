+ {^hasTag('hello')} *~2
- Hi!
- Hi, how are you?
- How are you?
- Hello
- Howdy
- Ola

+ show * car
- Here’s my car: ^addMessageProp("img","http://www.exoticspotter.com/images/19/18281.jpg")

+ *
- Please ask something I can answer

> topic suba {system, nostay}
  + the supermarket is colorful
  - {delay=1} Hey there!\n
  ^ {delay=2} Nice to meet you.\n
  ^ {delay=3} Let me know if you need anything!
< topic


# printFormatted-js
 A package to print text with colour in the terminal output for node.js

Usage:
```
npm install printformatted-js
```
```
import { printFormatted } from 'printformatted-js'
var string1 = 'it'
var string2 = 'prints'
var stringEtc = 'colour'
printFormatted('green', string1, string2, stringEtc)
```
outputs all the text given in one of the 6 specified colours:
'green' | 'red' | 'yellow' | 'white' | 'black' | 'blue'


For version two:
```
import { printFormattedv2 } from 'printformatted-js'
const node = false //whether you are printing to node console or to regular browser console - the method has to go about it differently depedning no which one
const trace = false //whether to print out a stack trace
//the strings you want to print out
var string1 = 'it'
var string2 = 'prints'
var stringEtc = 'colour'
// the third argument is the colour you want it to be. It can be one of 6 - 'green' | 'red' | 'yellow' | 'white' | 'black' | 'blue'
printFormattedv2(node, trace, 'green', string1, string2, stringEtc)
```
# Note:
Grateful to colour console js for knowing what colour codes could be used for various colours see [link](https://gist.github.com/abritinthebay/d80eb99b2726c83feb0d97eab95206c4)

For version two:
```
import { printFormattedv2 } from 'printformatted-js'
const node = false //whether you are printing to node console or to regular browser console - the method has to go about it differently depedning no which one
const trace = false //whether to print out a stack trace
//the strings you want to print out
var string1 = 'it'
var string2 = 'prints'
var stringEtc = 'colour'
// the third argument is the colour you want it to be. It can be one of 6 - 'green' | 'red' | 'yellow' | 'white' | 'black' | 'blue'
printFormattedv2(node, trace, 'green', string1, string2, stringEtc)
```
# Note:
Grateful to colour console js for knowing what colour codes could be used for various colours see [link](https://gist.github.com/abritinthebay/d80eb99b2726c83feb0d97eab95206c4)
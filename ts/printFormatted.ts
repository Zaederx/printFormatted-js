//see [link](https://gist.github.com/abritinthebay/d80eb99b2726c83feb0d97eab95206c4)
export const terminalColourGreen = '\x1b[32m' //for important information
export const terminalColourRed = "\x1b[31m" // for errors
export const terminalColourYellow = '\x1b[33m' // yellow for warnings
export const terminalColourWhite = '\x1b[37m' // white for regular - just a regualr console log
export const terminalColourBlack = '\x1b[30m' // black for regular if using a light terminal
export const terminalColourBlue = '\x1b[34m' // blue for marking a function being called

//CSS COLOURS
export const hexColourGreen = '#019c00'
export const hexColourRed = '#e20000'
export const hexColourYellow = '#e2ad00'
export const hexColourWhite = '#ffffff'
export const hexColourBlack =  '#000000'
export const hexColourBlue = '#0000fc'

export type colour = 'green'|'red'|'yellow'|'white'|'black'|'blue'
// export const stringFormatting = terminalColourGreen+'%s%s\x1b[0m'


/**
 * @param colour the colour that you want the output to be
 * @param args the number of string arguments
 */
function jsConsoleFormatting(colour:colour, args:number):[string,string]
{
    var stringFormatting = '%c'
    var css = 'color:'
    switch (colour) {
        case 'green': css += hexColourGreen; break;
        case 'red' : css += hexColourRed; break;
        case 'yellow': css += hexColourYellow; break;
        case 'white': css += hexColourWhite; break;
        case 'black' : css += hexColourBlack; break;
        case 'blue' : css += hexColourBlue; break;
    }
    for(var i = 0; i < args; i++) {
        stringFormatting += '%s'//number of string arguments
    }
    return [stringFormatting, css];
}

/**
 * 
 * @param colour the colour that you want it to be
 * @param args the number of arguments that you have
 */
function nodeTerminalFormatting(colour:colour,args:number)
{
    var stringFormatting = ''
    switch (colour) {
        case 'green': stringFormatting = terminalColourGreen; break;
        case 'red' : stringFormatting = terminalColourRed; break;
        case 'yellow': stringFormatting = terminalColourYellow; break;
        case 'white': stringFormatting = terminalColourWhite; break;
        case 'black' : stringFormatting = terminalColourBlack; break;
        case 'blue' : stringFormatting = terminalColourBlue; break;
    }
    
    for(var i = 0; i < args; i++) {
        stringFormatting += '%s'//number of string arguments
        if (i == args - 1)
        {
            stringFormatting+='\x1b[0m'//change colour back to normal/default
        }
    }
    return stringFormatting
}
/**
 * A function for printing console output with colour in Node.js terminal
 * @param colour a colour to be used for the ouput (one of six to choose from)
 * - 'green' | 'red' | 'yellow' | 'white' | 'black' | 'blue'
 * @param args an indeterminate amount of string arguments
 */
export function printFormatted(colour:colour, ...args:any[]) {
    const formatting = nodeTerminalFormatting(colour, args.length)
    console.log(formatting,...args)
}
/**
 * Function for printing either to node console (using node string formatting) or regular browser console (using css)
 * @param node whether you are printing to node console (true) or not (browser console console - false)
 * @param trace  whether to print a stack trace of where the function was called from
 * @param colour 
 * @param args 
 */
export function printFormattedv2(node:boolean, trace:boolean, colour:colour, ...args:any[])
{
    trace ? console.trace() : null
    if (node) 
    {
        var formatting = nodeTerminalFormatting(colour, args.length)
        console.log(formatting,...args)
    }
    else
    {
        var [stringFormatting, css] = jsConsoleFormatting(colour, args.length)
        console.log(stringFormatting,css,...args)
    }
}
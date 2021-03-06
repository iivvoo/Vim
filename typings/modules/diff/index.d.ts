// Generated by typings
// Source: https://raw.githubusercontent.com/typed-typings/npm-diff/9b748f41b48c9ddcca5c2a135edd57df25d578cd/lib/index.d.ts
declare module '~diff/lib/index' {
// Type definitions for diff
// Project: https://github.com/kpdecker/jsdiff
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

module JsDiff {
  interface IDiffResult {
    value: string;
    added?: boolean;
    removed?: boolean;
  }

  interface IBestPath {
    newPos: number;
    componenets: IDiffResult[];
  }

  class Diff {
    ignoreWhitespace:boolean;

    constructor(ignoreWhitespace?:boolean);

    diff(oldString:string, newString:string):IDiffResult[];

    pushComponent(components:IDiffResult[], value:string, added:boolean, removed:boolean):void;

    extractCommon(basePath:IBestPath, newString:string, oldString:string, diagonalPath:number):number;

    equals(left:string, right:string):boolean;

    join(left:string, right:string):string;

    tokenize(value:string):any; // return types are string or string[]
  }

  function diffChars(oldStr:string, newStr:string):IDiffResult[];

  function diffWords(oldStr:string, newStr:string):IDiffResult[];

  function diffWordsWithSpace(oldStr:string, newStr:string):IDiffResult[];

  function diffJson(oldObj: Object, newObj: Object): IDiffResult[];

  function diffLines(oldStr:string, newStr:string):IDiffResult[];

  function diffCss(oldStr:string, newStr:string):IDiffResult[];

  function createPatch(fileName:string, oldStr:string, newStr:string, oldHeader:string, newHeader:string):string;

  function applyPatch(oldStr:string, uniDiff:string):string;

  function convertChangesToXML(changes:IDiffResult[]):string;

  function convertChangesToDMP(changes:IDiffResult[]):{0: number; 1:string;}[];
}

export = JsDiff;
}
declare module 'diff/lib/index' {
import main = require('~diff/lib/index');
export = main;
}
declare module 'diff' {
import main = require('~diff/lib/index');
export = main;
}

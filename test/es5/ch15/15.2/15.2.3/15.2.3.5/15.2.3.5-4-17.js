/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-17.js
 * @description Object.create - own data property in 'Properties' which is not enumerable is not defined in 'obj' (15.2.3.7 step 3)
 */


function testcase() {

        var props = {};
        Object.defineProperty(props, "prop", {
            value: {},
            enumerable: false
        });
        var newObj = Object.create({}, props);

        return !newObj.hasOwnProperty("prop");
    }
runTestCase(testcase);

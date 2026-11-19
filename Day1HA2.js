/*Assignment Requirements:
1. Declare a const name as browserVersion (global)
2. Assign value as Chrome
3. Create a function by name getBrowserVersion
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
6. Call that function from the javascript*/

const browserVersion = "Chrome";

function getBrowserVersion() 
{
    if (browserVersion==="Chrome")
    {
        var  browserVersion = "Chrome 100.0.4896.127";
    }

    console.log("Browser version outside if block: " + browserVersion);
}
getBrowserVersion() 
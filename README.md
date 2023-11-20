# XML Extract



## Usage
### Parameters
* -f File-Path
* -p XML Path

```Bash
npm install
node xml-extract.js -f=file.xml -p=Custom.Element.Value.
```
file.xml content:
```XML
<?xml version="1.0" encoding="UTF-8"?>
<Custom>
    <SomeElement />
    <Element>
        <Value>Value 1</Value>
        <Other>OtherValue</Other>
    </Element>
    <Element>
        <Value>Value 2</Value>
        <Value>Value 3</Value>
    </Element>
</Custom>
```
Output:
```Text
Value 1
Value 2
Value 3
```
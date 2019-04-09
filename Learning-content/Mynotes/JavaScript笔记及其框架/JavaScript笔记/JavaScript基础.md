# 一. JavaScript简介
>1. JavaScript是一种网页编程技术，经常用于创建动态交互网页
>1. JavaScript是一种基于对象和事件驱动的解释性脚本语言，类似C语言和Java的语法。
>1. 事先不编译；逐行执行；无需进行严格的变量声明；内置大量现成对象，编写少量程序可以完成目标。
>1. 不同的浏览器甚至同一浏览器的不同版本对JavaScript的支持程度都不一样。
# 二. JS的基本语法
1. 有两种JavaScript写法：
1. 直接在 html 中嵌入，程序写法:
```html
<script type="text/javascript" language="JavaScript" charset="UTF-8">
<!--
...javaScript程序...
// -->
</script>
```
3. 调用独立JavaScript文件：
```html
<script type="text/javascript" src="test1.js"> </script>
<script> 不能用空标志。 JS脚本文件中不需要脚本开始和结束声明，直接写 function
```
1. 在HTML中大小写是不敏感的，但标准的JavaScript是区分大小写的

2. 分号表示语句结束。有换行，分号允许不加(建议加上，以免错误和歧义)
程序忽略缩进：提倡加上空格或TAB增强程序可读性

3. 标识符：成份是 不以数字开头的字母、数字 和下划线(_)、美元符($)
ECMA v3标准保留的JavaScript的关键字：
`break case catch continue default delete do else false finally
for function if in instanceof new null return switch this
throw true try typeof var void while with`

4. 变量的声明： `var x,y;` (变量没类型；未声明的变量也可以用，且是全局的；函数体内声明的变量则是局部的)
`x=1; y="hello world!";` (变量的类型由所赋的值决定)

5. 函数： `function 函数名 (参数){ 函数体; return 返回值;}`
参数没类型或顺序，且可变长；可以使用变量、常量或表达式作为函数调用的参数
声明函数时，参数可不明写，调用时用 `arguments[number]` 接收。参数是值传递的。
函数由关键字 `function` 定义； 函数名的定义规则与标识符一致，大小写是敏感的
返回任意类型(不需写返回类型)； 返回值必须使用`return`
//参数数量是可变的,若要限定参数数量,如下做法: (指定参数数量为0)
`if ( arguments.length !== 0 ) throw Error.parameterCount();`
`caller: `调用此函数的函数。没有被调用则此变量为 `null`
`arguments: `此函数的参数列表。
`arguments.caller: `调用此函数的参数列表,没有被调用则为 `undefined`
`arguments.callee: `此函数本身的一个引用。在匿名函数里会需要用到。


6. 数据类型：
基本类型: `Number：`数字、 `String：`字符串、 `Boolean：`布尔
特殊类型: `Null：`空、 `Undefined：`未定义
组合类型: `Array：`数组、 `Object：`对象

7. `Number` 数值类型：所有数字都采用64位浮点格式存储，相当于Java和C语言中的double格式
能表示的最大值是 `±1.7976931348623157 x 10^308；`能表示的最小值是 `±5 x 10^ -324
10`进制的整数的精确表达的范围是 `-9007199254740992 (-2^53)` 到 `9007199254740992 (2^53)`
16进制数据前面加上0x，八进制前面加0
保留多少位小数： `var a = 111.115555; var b = a.toFixed(2); alert(b + ' : ' + typeof b); // 111.12 : string`

8. `String` 类型：字符串常量首尾由单引号或双引号括起
没有字符，只有字符串(所有字符都按字符串处理)
常用转义符： \n换行 \'单引号 \"双引号 \\右斜杆 (字符串中部分特殊字符必须加上右划线\)
汉字常使用特殊字符写，如： \u4f60 -->"你" \u597d -->"好" (可避免乱码)

9. `Boolean` 类型：仅有两个值：`true`和`false`，实际运算中`true=1,false=0`
也可以看作`on/off、yes/no、1/0`对应`true/false；`主要用于JavaScript的控制语句

10. `null`, `undefine` 类型：
`null` 在程序中代表变量没有值；或者不是一个对象
`undefined` 代表变量的值尚未指定；或者对象属性根本不存在
有趣的比较：
`null` 与空字符串: 不相等, `null` 代表什么也没有，空字符串则代表一个为空的字符串
`null` 与 `false` : 不相等, 但是 `!null` 等于 `true`
`null` 与 0 : 不相等，(但是在C++等其它语言中是相等的)
`null` 与 `undefined` : 相等，但是 `null` 与 `undefined` 并不相同

11. 数据类型转换：JavaScript属于松散类型的程序语言
变量在声明的时候并不需要指定数据类型；变量只有在赋值的时候才会确定数据类型
表达式中包含不同类型数据则在计算过程中会强制进行类别转换(优先级：布尔-->数字-->字符)
数字 + 字符串：数字转换为字符串
数字 + 布尔值：`true`转换为1，`false`转换为0
字符串 + 布尔值：布尔值转换为字符串`true`或`false`
函数 `parseInt:` 强制转换成整数(如果包含字符串，则转换到字符串为止，后面不再理) //如 `parseInt("13a2")=13`
函数 `parseFloat:` 强制转换成浮点数
函数 `eval:` 将字符串强制转换为表达式并返回结果，亦可将字节或变量转成数值。
函数 `typeof:` 查询数据当前类型`(string / number / boolean / object )` ，未定义则返回“`undefined`”

12. 运算符：(同java)
算术运算符: 加/字符连接(+)、 减/负号(-)、 乘(*) 、除(/)、 余数(% )； 递增(++)、 递减(--)
逻辑运算符: 等于( == )、 不等于( != ) 、 大于( > ) 、 小于( < ) ； 大于等于(>=) 、小于等于(<=)
与(&&) 、或(||) 、非(!) ； 恒等(===)、不恒等(!==)
位运算符: 左移(<<) 、有符号右移(>>)；无符号右移(>>>)
位与(&) 、位或(|)、异或(^) 、NOT (~)
赋值运算符: 赋值(=) 、复合赋值(+= -= *= /= %= &= )
(先运行完右边的，再跟左边的进行赋值运算；如 var i=10;i-=5-3;结果8)

13. 选择控制语句(同java)
`if(...){...} else{...} if `语句允许不使用`else`子句；允许进行嵌套
`switch(表达式){case 值1:语句1;`break; ``case `值2:语句2;`break;` `default`:语句3;}

14. 循环控制语句(类似java)
`for (初始化;条件;增量){ 语句1; ... }`
`for-each遍历: for(var key in objs){var element=objs[key];...}` // 注意: in 前面的是 key,而不是下标或者集合里面的元素,获取集合里的元素要使用 集合[key]
`while (条件){ 语句1; ... }`
`do{语句1; ...}while(条件);`
`break, continue` 跳出循环；还可配合标签使用

15. 对象：JavaScript是一种基于对象语言，对象是JavaScript中最重要的元素
对象由属性和方法封装而成
javaScript包含四种对象:
内置对象 `Date`
自定义对象 `Cart`
浏览器对象 `window`
`ActiveX`对象 `ActionXObject`

16. 异常处理：
```javascript
try{ ... } catch( e ) { ... } finally { ... }
try{ throw new Error("Err0"); } catch( e ) { alert(e.description); } finally { ... }
try{ throw "Err1"; } catch( e ) { if(e == "Err1") alert("错误！"); }
try{ ... } catch( e ) { alert(e.message || e.description); } // 查看出错提示
```
17. 选取页面的对象:
```javascript
var obj = document.forms["FormName"].elements["elementName"];
var obj = document.forms[x].elements[y]; //x和y 是int类型，表示第几个表单，第几个元素
var obj = document.FormName.elementName;
var obj = document.all["elementName"];
var obj = document.all["elementID"];
var obj = document.getElementById("elementID");
var obj = document.getElementsByName("elementName"); //返回数组
var obj = document.getElementsByTagName("TagName"); //返回数组
```
18. typeof 查看类型:
`undefined`, `null`, `boolean`, `number`, `string`, `object`, `function`
也就是 `typeof` 返回的值只能是上面的其中一个(字符串类型)。
注意:以上单词都是小写，不要与内置对象 `Number`, `String`, `Object`, `Function` 等混淆。
`null`: `typeof`(null) 返回 "object", 但`null`并非`object`, 具有 `null` 值的变量也并非`object`。未定义的返回"`undefined`"
`number`: `typeof`(NaN) 和 `typeof`(`Infinity`) 都返回 `number`; NaN参与任何数值的计算结果都是NaN,且 `NaN != NaN, Infinity / Infinity = NaN`

19. instanceof 判断类型:
`instanceof` 返回一个 `boolean` 值, 指出对象是否是特定类的一个实例, 实际上就是检测实例是否有继承某类的原型链。
对于 `Array`, `null` 等特殊对象 `typeof` 一律返回 `object`，这正是 `typeof` 的局限性。
`instanceof` 用于判断一个变量是否某个对象的实例,或者子类,如: `var a=new Array();``alert(a instanceof Array);`会返回 `true`, 而 `alert(a instanceof Object)`也会返回 `true`
再如: `function test(){};var a=new test();alert(a instanceof test)`返回 `true, alert(test instanceof Function)`返回 `true`, 但 `alert(a instanceof Function)`返回 `false`(不明白什么原因)
注意: `function` 的 `arguments`, 使用`(arguments instanceof Array)`返回 `false`,尽管看起来很像。
另外: `(window instanceof Object)`返回 `false`, 这里的 `instanceof` 测试的 `Object` 是指js中的对象,不是dom模型对象。而 `typeof(window)` 会得 "object"

20. in 用法:
通常使用在 for 循环中,作 `foreach` 用,像 `for(var i in obj)...`
也可以用在类中,判断类里面是否有此 key。但注意不能有效用在数组中。
如: `var ar = {a:false, b:2}; alert('a' in ar)`返回 `true`;因为 `ar['a']` 存在。
在数组中使用时,如: `var arr=[4,5,6]; alert(2 in arr)`会返回 `true`,因为 `arr[2] `存在。而 `alert(5 in arr)`会返回 `false`,`arr[5]` 不存在。
`if (key in obj) `相当于 `if(!!obj[key])。`
数组中也可以使用 `for in`,如: `var array = ['a', 'b', 'c', 'd'];for(var item in array){alert(array[item]);}`
值得注意的是,如果对类进行 .`prototype`.函数 来扩展, `for in` 时会受到影响,把扩展的内容也循环出来。
所以不赞成对 `Object` 类进行扩展,也不赞成数组使用 `for in`(因为数组有可能被扩展了)

21. 闭包(closure)
是一个拥有许多变量和绑定了这些变量的环境的表达式(通常是一个函数)，因而这些变量也是该表达式的一部分。
1) 变量的作用域
函数内部可以直接读取全局变量。(函数内部声明变量的时候，一定要使用var命令。如果不用的话，你实际上声明了一个全局变量！)
在函数外部无法读取函数内的局部变量。
链式作用域`(chain scope)`:子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。
2) 闭包就是能够读取其他函数内部变量的函数。
由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。
所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
3) 闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是避免外部修改这些变量的值。
4) 注意:
闭包使得函数中的变量都被保存在内存中，内存消耗很大，不能滥用，否则影响性能，可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象(object)使用，把闭包当作它的公用方法(Public Method)，把内部变量当作它的私有属性(private value)，这时一定要小心，不要随便改变父函数内部变量的值。

22. 比较运算
1)“==” 与 “===” 的区别
“==” 双等号, 用于比较时会忽略类型, 字符串可以与数字相等, null 与 undefined 相等
“===” 三等号, 用于比较时严格区分类型,类型不相同的不会认为相等
同理还有不等于( “!=” 与 “!==” ),比较规则与上面的一样

示例:
```javascript
alert( '22' == 22 ); // true
alert( '22' === 22 ); // false
alert( null == undefined ); // true
alert( null === undefined ); // false
alert( 0 == null ); // false, 注: null, undefined 这两者与其它的比较都为false
alert( 1 == true ); // true
alert( 1 === true ); // false
alert( 0 == '' ); // true
alert( 0 === '' ); // false
alert( ' \t\r\n ' == 0 ); // true, 注: 空格、跳格、换行, 都会转成 0 来处理
alert( [10] == 10 ); // true,注: 对象与基本类型比较时，会先把对象转成基本类型。
alert( [10] == '10' ); // true
alert( /\d/ > 0 || /\d/ <= 0 ); // false, 无法转换正则为数字
alert( {} > 0 || {} <= 0 ); // false, 无法转换Object为数字
alert( NaN == NaN ); // false, NaN 与所有值都不相等，包括它自己。
alert( NaN > 0 || NaN <= 0 ); // false, NaN的比较都为false
alert( NaN > NaN || NaN <= NaN ); // false
```
2) 比较法则(仅忽略类型的比较,不是严格比较,比较运算符有: >, >=, <, <=, ==, !=):
对于基本类型 `Boolean, Number, String` 三者之间做比较时，总是向 `Number`进行类型转换，然后再比较(`String` 类型的如果没法转成数字,则转成 NaN)；
如果有`Object`，那么将`Object`转化成这三者，再进行比较(可以转成数字的，优先转成数字,像`Date`就转成数字)；
对于 `null` 和 `undefined`, 只有两个都是它们时才相同，其他都为`false`。
比较对象、数组和函数时，进行引用比较，只有引用的是相同地址才认为相同，否则即使拥有相同的属性和函数都认为不相同。
如果不能转成数值，或者是NaN，则比较结果为`false`


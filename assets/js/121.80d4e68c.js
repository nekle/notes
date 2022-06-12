(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{618:function(s,t,a){"use strict";a.r(t);var n=a(33),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第四章-函数实现模块化设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第四章-函数实现模块化设计"}},[s._v("#")]),s._v(" 第四章 函数实现模块化设计")]),s._v(" "),a("h2",{attrs:{id:"_1-定义函数的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义函数的方法"}},[s._v("#")]),s._v(" 1. 定义函数的方法")]),s._v(" "),a("p",[s._v("函数体包括"),a("strong",[s._v("声明部分")]),s._v("和"),a("strong",[s._v("语句部分")])]),s._v(" "),a("ul",[a("li",[s._v("定义无参函数")])]),s._v(" "),a("p",[s._v("一般形式为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("类型名 函数名(){\n\t函数体\n}\n或\n类型名 函数名(void){\n\t函数体\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("定义有参函数")])]),s._v(" "),a("p",[s._v("一般形式为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("类型名 函数名(形式参数列表){\n\t函数体\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("定义空参函数\n"),a("ul",[a("li",[s._v("函数体是空的。调用此函数时，什么工作也不做，没有任何实际作用。")])])])]),s._v(" "),a("p",[s._v("一般形式为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("类型名 函数名()\n{}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-调用函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-调用函数"}},[s._v("#")]),s._v(" 2. 调用函数")]),s._v(" "),a("p",[a("strong",[s._v("调用函数的形式")])]),s._v(" "),a("p",[s._v("一般的调用形式为：")]),s._v(" "),a("div",{staticClass:"language-C line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("函数名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("实参表列"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("函数调用语句：把函数调用单独作为一个语句。")]),s._v(" "),a("p",[s._v("函数表达式：函数出现在另一个表达式中。")]),s._v(" "),a("p",[s._v("函数参数：函数调用作为另外一个函数调用时的参数。")]),s._v(" "),a("p",[a("strong",[s._v("函数作为参数时的数据传递")]),s._v(" "),a("em",[s._v("【函数形式参数和实际参数】")])]),s._v(" "),a("p",[s._v("函数的参数分为两种，分别是形式参数与实际参数。")]),s._v(" "),a("p",[s._v("①形式参数：")]),s._v(" "),a("p",[s._v("在定义函数时函数名后面括号中的变量名称称为形式参数（简称形参），即形参出现在函数定义中。形参变量只有在被调用时才会为其分配内训单元，在调用结束时，即刻释放所分配的内存单元。因此，形参只在函数内部有效，只有当函数被调用时，系统才为形参分配存储单元，并完成实参与形参的数据传递。在函数未被调用时，函数的形参并不占用实际的存储单元，也没有实际值。")]),s._v(" "),a("p",[s._v("②实际参数：")]),s._v(" "),a("p",[s._v("主调函数中调用一个函数时，函数名后面括号中的参数称为实际参数（简称实参），即实参出现在主调函数中。")]),s._v(" "),a("p",[s._v("实参可以是常量，变量，表达式，函数等，无论实参是何种类型的量，在进行函数调用时，它们都必须具有确定的值，以便把这些值传递给形参。因此应预先用赋值，输入等办法使实参获得确定值。")]),s._v(" "),a("p",[s._v("说明：在被定义的函数中，必须指定形参的类型。实参与形参的类型应相同或赋值兼容。实参和形参在数量上，类型上，顺序上应该严格一致，否则会发生类型不匹配的错误。")]),s._v(" "),a("h2",{attrs:{id:"_3-函数的返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-函数的返回值"}},[s._v("#")]),s._v(" 3. 函数的返回值")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("函数的返回值是通过函数中的return语句获得的。")]),s._v(" "),a("p",[s._v("【return语句将被调用函数中的一个确定值带回到主函数中去。】")])]),s._v(" "),a("li",[a("p",[s._v("函数值的类型。既然函数有返回值，这个值当然应属于某一个确定的类型，应当在定义函数时指定函数值的类型。")]),s._v(" "),a("p",[s._v("【注意：在定义函数时要指定函数的类型。】")])]),s._v(" "),a("li",[a("p",[s._v("在定义函数时指定的函数类型一般应该和return语句中的表达式类型一致。")]),s._v(" "),a("p",[s._v("【如果函数的类型和return语句中表达式的值不一致，则以函数类型为准。对数值型数据，可以自动进行类型转换。即"),a("strong",[s._v("函数类型决定返回值的类型。")]),s._v("】")])]),s._v(" "),a("li",[a("p",[s._v("对于不带回值的函数，应当用定义函数为"),a("strong",[s._v("void类型（或称“空类型”）")])])])]),s._v(" "),a("h2",{attrs:{id:"_4-对被调用函数的声明和函数原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-对被调用函数的声明和函数原型"}},[s._v("#")]),s._v(" 4. 对被调用函数的声明和函数原型")]),s._v(" "),a("p",[s._v("在一个函数中调用另一个函数（即被调用函数）需要具备如下条件：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("首先被调用的函数必须是已经定义的函数（函数库或用户自定义的函数）。")])]),s._v(" "),a("li",[a("p",[s._v("如果使用函数，应该在本文件头用"),a("code",[s._v("#include")]),s._v("指令将调用有关库函数时所需用的到的信息“包含”到文件中来。")])]),s._v(" "),a("li",[a("p",[s._v("如果使用用户自定义的函数，而该函数的位置在调用它的函数（即主函数）的后面（在同一个文件中），应该在主函数中对被调用的函数作"),a("strong",[s._v("声明（delcaration）")]),s._v("。声明的作用是把函数名、函数参数的个数和参数类型等信息通知编译系统，以便在遇到函数调用时，编译系统能正确识别到函数并检查调用是否合法。")])])]),s._v(" "),a("p",[s._v("函数声明的一般形式有两种：")]),s._v(" "),a("p",[s._v("方式一：")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("函数类型 函数名(参数类型1 参数名1,参数类型2 参数名2,…,参数类型n 参数名n);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("方式二：")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("函数类型 函数名(参数类型1,参数类型2,…,参数类型n);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("注意：")])]),s._v(" "),a("p",[s._v("函数的 “定义“ 和 ”声明“ 不是同一回事。")]),s._v(" "),a("ul",[a("li",[s._v("函数的定义是指对函数功能的确立，包括指定函数名、函数值类型、形参及其类型以及函数体等，它是一个完整的、独立的函数单位。")]),s._v(" "),a("li",[s._v("函数声明的作用则是把函数的名字、函数类型以及形参的类型、个数和顺序通知编译系统，以便在调用该函数时系统按此进行对照检查，它不包含函数体。")])]),s._v(" "),a("h2",{attrs:{id:"_5-数组作为函数参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-数组作为函数参数"}},[s._v("#")]),s._v(" 5. 数组作为函数参数")]),s._v(" "),a("p",[a("strong",[s._v("数组元素作函数实参")])]),s._v(" "),a("p",[s._v("数组元素可以用作函数实参，但是不能用作形参。因为形参是在函数被调用时临时分配的存储单元，不可能为一个数组元素单独分配存储单元（数组是一个整体，在内存中占连续的一段存储单元）。在用数组元素作函数参数实参时，把实参的值传给形参，是 ”值传递“ 方式。数据传递方向是从实参传到形参，单向传递。")]),s._v(" "),a("p",[a("strong",[s._v("一维数组名作函数参数")])]),s._v(" "),a("p",[s._v("除了可以用数组元素作为函数参数外，还可以用数组名作函数参数（包括实参和形参）。")]),s._v(" "),a("p",[s._v("注意：用数组元素作实参时，向形参变量传递的是数组元素的值，而用数组名作函数函数参数时，向形参（数组名或指针变量）传递的是地址值。")]),s._v(" "),a("p",[a("strong",[s._v("多维数组名作函数参数")])]),s._v(" "),a("p",[s._v("由于用法基本一致，其余不做详细介绍。")]),s._v(" "),a("p",[s._v("请参考：《C语言程序设计（第五版）》——谭浩强 【第七章- 用函数实现模块化程序设计 -167页】")]),s._v(" "),a("h2",{attrs:{id:"_6-局部变量和全局变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-局部变量和全局变量"}},[s._v("#")]),s._v(" 6. 局部变量和全局变量")]),s._v(" "),a("p",[s._v("变量按存储区域分：全局变量、静态全局变量和静态局部变量都存放在内存的静态存储区域，局部变量存放在内存的栈区。")]),s._v(" "),a("p",[s._v("变量按作用域分：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("全局变量：在整个工程文件内都有效；“在函数外定义的变量”，即从定义变量的位置到本源文件结束都有效。由于同一文件中的所有函数都能引用全局变量的值，因此如果在一个函数中改变了全局变量的值， 就能影响到其他函数中全局变量的值。")])]),s._v(" "),a("li",[a("p",[s._v("静态全局变量：只在定义它的文件内有效，效果和全局变量一样，不过就在本文件内部；")])]),s._v(" "),a("li",[a("p",[s._v("静态局部变量：只在定义它的函数内有效，只是程序仅分配一次内存，函数返回后，该变量不会消失；静态局部变量的生存期虽然为整个工程，但是其作用仍与局部变量相同，即只能在定义该变量的函数内使用该变量。退出该函数后， 尽管该变量还继续存在，但不能使用它。")])]),s._v(" "),a("li",[a("p",[s._v("局部变量：在定义它的函数内有效，但是函数返回后失效。“在函数内定义的变量”，即在一个函数内部定义的变量，只在本函数范围内有效。")])])]),s._v(" "),a("p",[s._v("注意：全局变量和静态变量如果没有手工初始化，则由编译器初始化为0。局部变量的值不可知")]),s._v(" "),a("p",[s._v("静态局部变量与全局变量最明显的区别就在于：全局变量在其定义后所有函数都能用，但是静态局部变量只能在一个函数里面用。")]),s._v(" "),a("p",[s._v("形参变量 :  只在被调用期间才分配内存单元，调用结束立即释放。")]),s._v(" "),a("h2",{attrs:{id:"_7-变量的存储方式和生存期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-变量的存储方式和生存期"}},[s._v("#")]),s._v(" 7.变量的存储方式和生存期")]),s._v(" "),a("p",[a("strong",[s._v("变量的存储方式有两种：")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("静态存储方式：是指程序在运行期间由系统分配固定的存储空间的方式。")])]),s._v(" "),a("li",[a("p",[s._v("动态存储方式：是指在程序运行期间根据需要进行动态的分配存储空间的方式。")])])]),s._v(" "),a("p",[s._v("供用户使用的存储空间可分为3个部分：程序区，静态存储区，动态存储区。")]),s._v(" "),a("p",[s._v("全局变量全部存放在静态存储区中，在程序开始执行时给全局变量分配存储区，程序执行完毕就释放。")]),s._v(" "),a("p",[a("strong",[s._v("动态存储区中存放以下数据：")])]),s._v(" "),a("ol",[a("li",[s._v("函数形式参数。在调用函数时给形参分配存储空间。")]),s._v(" "),a("li",[s._v("函数中定义的没有用static关键字声明的变量，即自动变量。")]),s._v(" "),a("li",[s._v("函数调用时的现场保护和返回地址等。")])]),s._v(" "),a("p",[s._v("每一个变量和函数都有两个属性：数据类型和数据的存储类别。【存储类别指的是数据在内存中存储的方式：静态存储和动态存储】")]),s._v(" "),a("p",[s._v("在定义和声明变量和函数时，一般应该同时指定其数据类型和存储类别，也可以采用默认方式指定（即如果用户不指定，系统会隐含地指定为某一种存储类别）。")]),s._v(" "),a("p",[s._v("**存储类别包括4种：**自动的（auto）、静态的（static）、寄存器的（register）、外部的（extern）。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("自动变量（auto变量）")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("函数中的局部变量，如果不专门声明为static（静态）存储类别，都是动态地分配存储空间的，数据存储在动态存储区中。函数的形参和在函数定义的局部变量（包括在复合语句中定义的局部变量），都属于此类。在调用该函数时，系统会给这些变量分配存储空间，在函数调用调用结束时就自动释放这些存储空间。因此这类局部变量称为自动变量。")])]),s._v(" "),a("li",[a("p",[s._v("关键字auto可以省略不写，不写auto则隐含的指定为 “自动存储类别” ，它属于动态存储的方式。程序中大多数变量都属于自动变量。")])])])]),s._v(" "),a("li",[a("p",[s._v("静态局部变量（static局部变量）")]),s._v(" "),a("ul",[a("li",[s._v("静态局部变量属于静态存储类别，在静态存储区域内分配存储单元。在整个程序运行期间都不释放。而自动变量（即动态局部变量）属于动态存储类别，分配在动态存储区空间而不再静态存储区空间，函数调用结束后即释放。")]),s._v(" "),a("li",[s._v("对静态局部变量是在编译时赋初值的，即只赋一次初值，在程序运行时它已有初值。以后每次调用函数函数时不再重新赋初值而只是保留上次函数调用结束时的值。而对自动变量赋初值，不是在编译时进行的，而是在函数调用时进行的，每调用一次函数重新给一次初值，相当于执行一次赋值语句。")]),s._v(" "),a("li",[s._v("如果在定义局部变量时不赋值的话，则对静态局部变量来说，编译时自动赋初值0（对数值变量）或空字符"),a("code",[s._v("'\\0'")]),s._v("（对字符变量）。而对自动变量来说，它的值是一个不确定的值。这是由于每次函数调用结束后存储单元已释放，下次调用时又重新另分配存储单元，而所分配的单元中的内容是不可加的。")]),s._v(" "),a("li",[s._v("虽然静态局部变量在函数调用结束后仍然存在，但其他函数是不能引用他的。因为它是局部变量，只能被本函数引用，而不能被其他函数引用。")])])]),s._v(" "),a("li",[a("p",[s._v("寄存器变量（register变量）")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("寄存器变量的定义形式是：")]),s._v(" "),a("p",[a("code",[s._v("register 类型标识符 变量名")])])]),s._v(" "),a("li",[a("p",[s._v("寄存器是与机器硬件密切相关的，不同类型的计算机，寄存器的数目是不一样的，通常为2到3个，对于在一个函数中说明的多于2到3个的寄存器变量，C编译程序会自动地将寄存器变量变为自动变量。")])]),s._v(" "),a("li",[a("p",[s._v('由于受硬件寄存器长度的限制，所以寄存器变量只能是char、int或指针型。寄存器说明符只能用于说明函数中的变量和函数中的形参，因此不允许将外部变量或静态变量说明为"register"。')])]),s._v(" "),a("li",[a("p",[s._v("register型变量常用于作为循环控制变量，这是使用它的高速特点的最佳场合。比较下面两个程序的运算速度。")])])])]),s._v(" "),a("li",[a("p",[s._v("注意三种局部变量的存储位置是不同的")]),s._v(" "),a("ul",[a("li",[s._v("自动变量存储在动态存储区")]),s._v(" "),a("li",[s._v("静态局部变量存储在静态存储区")]),s._v(" "),a("li",[s._v("寄存器存储在CPU中的寄存器中")])])])]),s._v(" "),a("p",[a("strong",[s._v("全局变量的存储类别")])]),s._v(" "),a("ul",[a("li",[s._v("在一个文件内扩展外部变量的作用域\n"),a("ul",[a("li",[s._v("如果外部变量不在文件的开头定义,其有效的作用范围只限于定义处到文件结束。在定义点之前的函数不能引用该外部变量。如果由于某种考虑，在定义点之前的函数需要引用该外部变量,则应该在引用之前用关键字"),a("code",[s._v("extern")]),s._v("对该变量作**“外部变量声明”**，表示把该外部变量的作用域扩展到此位置。有了此声明，就可以从 “声明” 处起,合法地使用该外部变量。")]),s._v(" "),a("li",[s._v("注意：提倡将外部变量的定义放在引用它的所有函数之前，这样可以避免在函数中多加一个"),a("code",[s._v("extern")]),s._v("声明。")]),s._v(" "),a("li",[s._v("用"),a("code",[s._v("extern")]),s._v("声明外部变量时，类型名也可以省写。例如："),a("code",[s._v("extern int A,B,C;")]),s._v("——>"),a("code",[s._v("extern A,B,C")]),s._v(" 。")])])]),s._v(" "),a("li",[s._v("将外部变量的作用域扩展到其他文件\n"),a("ul",[a("li",[a("p",[s._v("第一种情况是在同一个源文件中使用外部变量的方法，如果有多个源文件，想在A文件中引用B文件中的已定义外部变量，该如何做？")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("假设一个程序包含两个文件，两个文件都需要用到同一个外部变量Num,若在两个文件中各自定义一个外部变量Num，将会在进行程序的连接时出现“重复定义”的错误。")])]),s._v(" "),a("li",[a("p",[s._v("因此，正确的做法是：在任一个文件中定义外部变量Num，然后在另一个文件中用关键字extern进行“外部变量声明”，即“extern Num”。")])]),s._v(" "),a("li",[a("p",[s._v("在编译和链接时，系统就会知道Num有外部链接，可以从别处找到已定义的外部变量Num，并将另一个文件中定义的外部变量Num的作用域扩展到本文件，那么就可以在本文件中合法的使用变量Num了。")])]),s._v(" "),a("li",[a("p",[s._v("例子：分别编写两个源文件文件file1和file2,在file1中定义外部变量A,在file2中用extern来声明外部变量，把A的作用域扩展到file2中")])])])])])])]),s._v(" "),a("p",[s._v("file1:")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//file1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//给定b的值，输入a和m，求a*b和a**m(a的m次方)的值")]),s._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//定义外部变量")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("power")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"input a and its power m:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scanf_s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d %d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \tc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" A "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d*%d=%d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \td "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("power")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d ** %d=%d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pause"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("file2:")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//file2")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extern")]),s._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("             \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//把在file1文件中已定义的外部变量的作用域扩展到本文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("power")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \t\ty "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*=")]),s._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n    \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("运行结果：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wfmiss/pictures/C_language/20210510175612.png",alt:""}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("解析：")]),s._v(" "),a("ul",[a("li",[s._v("假设某一程序有5个源文件，那么只需要在其中一个源文件中定义外部变量A,然后在其余四个文件中使用关键字extern声明外部变量即可。各文件经过编译后会连接成一个可执行的目标文件。")]),s._v(" "),a("li",[s._v("用这种方法扩展全局变量的作用域应十分慎重，因为在执行一个文件中的操作时可能会改变该全局变量的值，这样就会影响到另一个文件中全局变量的值，从而影响该文件中函数的执行结果。")])])]),s._v(" "),a("li",[a("p",[s._v("将外部变量的作用域限制在本文件中")]),s._v(" "),a("ul",[a("li",[s._v("若希望外部变量仅限于被本文件使用，而不被其它文件使用，那么可以在定义外部变量时加上一个static，例如：")])])])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这样在其它文件中就算使用“extern A”，也不能使用本文件的外部变量A。\n这种加上static声明，只能用于本文件的外部变量成为“静态外部变量”。\n用static声明一个变量的作用：")]),s._v(" "),a("p",[s._v("（1）对局部变量用static声明，把它分配在静态存储区，该变量在整个程序执行期间所在的存储单元都不会释放。")]),s._v(" "),a("p",[s._v("（2）对全局变量用static声明，则该变量的作用域只限于本文件模块（即被声明的文件中）")]),s._v(" "),a("h2",{attrs:{id:"_8-存储类别小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-存储类别小结"}},[s._v("#")]),s._v(" 8. 存储类别小结")]),s._v(" "),a("p",[s._v("对数据的定义，需要指定两种属性："),a("strong",[s._v("数据类型")]),s._v("和"),a("strong",[s._v("存储类别")]),s._v("，分别使用两个关键字。")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-C line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//静态局部整型变量或静态外部整型变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//自动变量，在函数内定义使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("register")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//寄存器变量，在函数内定义")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("此外，可以用"),a("code",[s._v("extern")]),s._v("声明已定义的外部变量，例如：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extern")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//将已定义的外部变量b的作用域扩展至此")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("下面从不同角度做些归纳")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("从作用域角度分，有局部变量和全局变量。它们采用的存储类型如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wfmiss/pictures/C_language/20210510211854.png",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("从变量存在的时间（生存期）来区分，有动态存储和静态存储两种类型。静态存储类型是整个程序运行时间都存在，而动态存储原则是在调用函数时临时分配分配单元。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wfmiss/pictures/C_language/20210510222624.png",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("从变量值存放的位置来区分，可分为：")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wfmiss/pictures/C_language/20210510233802.png",alt:""}})]),s._v(" "),a("hr"),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("关9.作用域和生存期的概念。")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("如果一个变量在某个文件或函数范围内是有效的，就称为该范围为该变量的"),a("strong",[s._v("作用域")]),s._v("。在此作用域内可以引用该变量，在专业书中称变量在此作用域内 “可见” ，这种性质称为变量的可见性。")])]),s._v(" "),a("li",[a("p",[s._v("如果一个变量值在某一时刻是存在的，则认为这一时刻属于该变量的生存期，或称该变量在此时刻 “存在” 。")])])]),s._v(" "),a("p",[a("strong",[s._v("各种类型变量的作用域和存在性情况")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wfmiss/pictures/C_language/20210511000340.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("code",[s._v("static")]),s._v("对局部变量和全局变量的作用域不同。对于局部变量来说它使变量的由动态存储方式改变为静态存储方式。而对于全局变量来说，它使变量局部化（局部于本文件）,但静态存储方式。从作用域角度看，但凡有"),a("code",[s._v("static")]),s._v("声明的，其作用域都是局限的或者局限于本函数内（静态局部变量），或者局限于本文件内（静态外部变量）。")])]),s._v(" "),a("h2",{attrs:{id:"_9-内部函数和外部函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-内部函数和外部函数"}},[s._v("#")]),s._v(" 9. 内部函数和外部函数")]),s._v(" "),a("p",[s._v("根据函数能否被其他源文件调用，将函数区分为"),a("strong",[s._v("内部函数")]),s._v("和"),a("strong",[s._v("外部函数")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("内部函数")])]),s._v(" "),a("p",[s._v("如果一个函数只能被本文件中其他函数所调用，它将称为"),a("strong",[s._v("内部函数")]),s._v("。")]),s._v(" "),a("p",[s._v("在定义内部函数时，在函数名和函数类型前面加"),a("code",[s._v("static")]),s._v(",即：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" 类型名 函数名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("形参表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("内部函数又称"),a("strong",[s._v("静态函数")]),s._v("，因为它是"),a("code",[s._v("static")]),s._v("声明的。")]),s._v(" "),a("p",[a("strong",[s._v("外部函数")])]),s._v(" "),a("p",[s._v("如果在定义函数时，在函数首部的最左端加关键字"),a("code",[s._v("extern")]),s._v("，则此函数是外部函数，可供其他文件调用。")]),s._v(" "),a("p",[s._v("一般形式为：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extern")]),s._v(" 类型名 函数名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("形参表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("C语言规定，如果在定义函数时省略"),a("code",[s._v("extern")]),s._v("，则默认为外部函数。")]),s._v(" "),a("p",[s._v("在需要调用此函数的其他文件中，需要对此函数作声明（不要忘记，即使在本文件中调用一个函数，也需要用函数原型进行声明）。在对此函数作声明时，要加关键字"),a("code",[s._v("extern")]),s._v("，表示该函数 “是在其他文件中定义的外部函数” 。")])])}),[],!1,null,null,null);t.default=e.exports}}]);
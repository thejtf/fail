

整理学习 Swift 时的一些知识点

<!--more-->

## 命令

命令采用驼峰式大小写，总以括号结尾。

```Swift
// 收集宝石
collectGem()

// 前进一步
moveForward()

// 向左转
turnLeft()

// 向右转
turnRight()

// 切换开关
toggleSwitch()
```


## 函数

在编程中，*函数*可让你命名一组命令，之后你可以随时运行这组命令。
若要定义函数，请使用 *func* 并选取一个名称，请始终在函数名称后面加上()。
命名采用驼峰式大小写，尽量按照函数的功能去命名，做好函数含义的注释。

```Swift
func tieMyShoe() {
loop()
swoop()
pull()
}
```

大括号内为函数的命令，这样定义函数的行为。定义函数命令后，调用它的名字来运行它的命令。


## For 循环

若要编写*for 循环*，使用*for*并指定循环将运行的次数。

```Swift
for eachSeed in 1...3 {
makeHole()
placeSeed()
moveFiveInchesForward()
}
```


## 条件代码

若要编写*if 语句*，使用*if*并添加你的*条件*，它非真即假。
然后添加*if 块*，命令在条件为*真*时运行。
如果条件为*假*，可以使用 else 来指定其他代码运行。

```Swift
// 条件为真时
if LightIsGreen {
   moveForward()
}

// 条件为假时
if LightIsGreen {
   moveForward()
} else {
   wait()
}

```


## 逻辑运算符

在代码中，*运算符*是表示操作的逻辑符号。
逻辑运算符是一种让条件代码更具体的运算符。

### 逻辑“与” (&&) 运算符

此代码仅在所有条件均为真时运行。

```Swift
if isBlocked && isOnGem {
   collectGem()
   turnAround()
}
```

### 逻辑“或” (||) 运算符

如果至少一个条件为真，此代码就会运行。

```Swift
if isOnGem || isOnSwitch {
   dance()
}
```

### 逻辑“非” (!) 运算符

这个运算符将条件更改为其相反情况。

```Swift
if !isBlocked {
    flyAway()
}
```


## While 循环

在条件为真时重复一个命令或者一组命令。

```Swift
while nailIsStickingOut{
    hammerNail()
}
```


## 变量

待更新...



# vscode debug typescript

* install typescript dependence  
    >```bash  
    >cnpm install typescript --save-dev
    >```
  
* add tsconfig.json  
    >```java
    >{
    >   "compilerOptions": {
    >       "module": "commonjs",
    >       "target": "es5",
    >       "noImplicitAny": true,
    >       "outDir": "./dist",
    >       "sourceMap": true
    >   },
    >   "include": [
    >        "src/**/*"
    >   ]
    >}
    >```

* add /.vscode/tasks.json
    >```java  
    >{
    >   // See https://go.microsoft.com/  fwlink/?LinkId=733558
    >   // for thedocumentation about the tasks.json format
    >   "version": "0.1.0",
    >   "command": "tsc",
    >   "isShellCommand": true,
    >   //-p 指定目录；-w watch,检测文件改变自动编译
    >   "args": ["-p", ".","-w"],
    >   "showOutput": "always",
    >   "problemMatcher": "$tsc"
    >}
    >```
    >excute "Ctrl + shift + b"

* add /.vscode/launch.json
    >```java
    >{
    >   "version": "0.2.0",
    >   "configurations": [
    >       {
    >        "name": "launch",
    >        "type": "node",
    >        "request": "launch",
    >        "program": "${workspaceRoot}/dist/main.js",
    >        "args": [],
    >        "cwd": "${workspaceRoot}",
    >        "protocol": "inspector"
    >        }
    >   ]
    >}
    >```

* excute run without debug check the result
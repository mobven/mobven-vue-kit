<p align="center">
<h1>Mobven VUE KIT</h1>
</p>
| Build | Statements | Branches | Functions | Lines | Built By | We Love |

| ------ | ------ | ------- | ------- | ------ | -------| ------- |

| [![Build Status](https://travis-ci.org/{ORG-or-USERNAME}/{REPO-NAME}.png?branch=master)](https://travis-ci.org/{ORG-or-USERNAME}/{REPO-NAME}) | ![Statements](https://img.shields.io/badge/Coverage-50%25-red.svg  "Make me better!") | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg  "Make me better!") | ![Functions](https://img.shields.io/badge/Coverage-50%25-red.svg  "Make me better!") | ![Lines](https://img.shields.io/badge/Coverage-50%25-red.svg  "Make me better!") | ![BuiltBy](https://img.shields.io/badge/TypeScript-Lovers-black.svg  "img.shields.io") | ![ForTheBadge](https://img.shields.io/badge/Using-Badges-red.svg  "ForTheBadge")

# ⏩ Quick Start
### 1. Install:
```bash
npm install or npm i
```
### 2. Run for install lerna project dependencies:
```bash
lerna bootstrap
```
### 3. You can use common components from the main(@macfit-vue/base) project as follows.
```bash
<template>
 <div class="hello">
  <h1>{{ msg }}</h1>
   <MyButton>Button From Base Library</MyButton>
  </div>
 </template>
<script>
import { MyButton } from '@macfit-vue/base';
  export default {
  name: 'HelloWorld',
  components: {
  MyButton,
 },
 data() {
  return {
   msg: 'Welcome to Macfit Project Template',
  };
 },
};
</script>
```

### 4.  If you add or change a dependency(base or cms project), you must still run the following command:
```bash
lerna bootstrap
```

### 4.  Start Dev Server:
```bash
npm start
```

### 5.  Unit Test and Coverage Report (Must be greater than 40 percent)
```bash
npm run unit
```
```bash
 PASS  test/unit/specs/sample.test.js
  HelloWorld
    ✓ is a object (2 ms)
    ✓ renders the correct markup (7 ms)

----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |      50 |      100 |      50 |      50 |                   
 HelloWorld.vue |     100 |      100 |     100 |     100 |                   
 Test.vue       |       0 |      100 |       0 |       0 | 9-16              
----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.737 s
```
### 6.  Check lint score (must always be less than 10):
```bash
npm run lint
```
```
/Users/mobven/dev/ui/scripts/components/Header.js
  24:2  error  Unnecessary semicolon  no-extra-semi
✖ 2 problems (2 errors, 0 warnings)
```

### 7.  Run Production Mode:
```bash
npm run build
```

# ▶️ Detail

## 📦  Requirements

- [Vue.js](https://vuejs.org) (v2.0.0+)
- [Vuex](http://vuex.vuejs.org), optionally (v2.0.0+)
- [Node](https://nodejs.org/en/), optionally (v12.0.0+)
- [Lerna](https://github.com/lerna/lerna), optionally (v3.0.0+)

## 🎯 Contributors

 - Mobven Technology, (creator)

## 🔑 License

MIT © [Mobven](https://mobven.com)

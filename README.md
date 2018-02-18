<h1 align="center">Type-on Effect Component</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/ng-typing">
    <img src="https://img.shields.io/npm/dm/ng-typing.svg?style=flat" alt="downloads">
  </a>
  <a href="https://badge.fury.io/js/simple-pdf-viewer">
    <img src="https://badge.fury.io/js/ng-typing.svg" alt="npm version">
  </a>
  <a href="https://david-dm.org/viktorhajer/ng-typing" title="dependencies status">
    <img src="https://david-dm.org/viktorhajer/ng-typing/status.svg"/>
  </a>
  <a href="https://www.paypal.me/viktorhajer" title="Donate to this project using Paypal">
    <img src="https://img.shields.io/badge/paypal-donate-green.svg" alt="PayPal donate button" />
  </a>
</p>

This is a simple type-on effect component for angular/ionic websites. 

### Demo page
[https://viktorhajer.github.io/ng-typing/](https://viktorhajer.github.io/ng-typing/)

### Features

* Easy to use
* Reference animation speed can be defined
* With the ```Deviation``` parameter the speed can be randomized 
* Typo can be turn on/off and in case of ```type``` the probability also can be changed (in percent) 

### Installation Instructions and Usage

```
npm install ng-typing --save
```

Add ```TypingModule``` to your module's ```imports```

### In component HTML

```html
    <typing [message]="'Hello World!'" [referenceSpeed]="30" [typo]="false"></typing>
```

### Contribute
[See CONTRIBUTING.md](CONTRIBUTING.md)

### License
[MIT](https://tldrlegal.com/license/mit-license) © [Viktor Hajer](https://github.com/viktorhajer)

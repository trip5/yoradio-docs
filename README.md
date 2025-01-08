## Trip5's Notes:

Current version online [here](https://trip5.github.io/yoradio-docs/docs/myoptions-generator.html).

Mostly complete I think but dynamic HTML with Javascript can be pretty tricky.

Tentatively named version 0.90 but... we'll see.

As of now, I think I've got the dynamic part handled.  It seems to load board profiles from URL as well.

Exporting should mostly work but there may be some issues with some of ESP32-S3s "hidden pins," like the GPIOs that control onboard LEDs or RGBs and do not have exposed pins.

### The to-do list:

* Add some more ESP32 and ESP32-S3 and ESP32-C3 boards (especially the modules)
_If you have a request for a particular board, leave a comment in issues here, not on `e2002`'s repo... preferably with images!_

* Make a template folder for more boards so users can make their own

* Probably more bugs to squash as I discover them

---
### Original Readme below:
---

### Some tools to help you set up and flash the [ёRadio](https://github.com/e2002/yoradio) esp32 web-radio project
---
#### 1. ёRadio - [simple myoptions.h generator](https://e2002.github.io/docs/myoptions-generator.html)
<img src="images/myoptions-generator.jpg" width="830" height="auto">


**myoptions.h** file generator for the [ёRadio](https://github.com/e2002/yoradio) project.
It is a single html file that runs in a browser (chrome, firefox, opera) or online.
After some actions with which, using the mouse and keyboard, the output is the configuration file **myoptions.h**, completely ready for use in the project.

https://e2002.github.io/docs/myoptions-generator.html

---
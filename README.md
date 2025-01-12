## Trip5's Notes:

Current version online [here](https://trip5.github.io/yoradio-docs/docs/myoptions-generator.html).

Mostly complete I think but dynamic HTML with Javascript can be pretty tricky.

Tentatively named version 0.90 but... we'll see.

As of now, I think I've got the dynamic part handled.  It seems to load board profiles from URL as well.

Exporting should mostly work but there may be some issues with some of ESP32-S3s "hidden pins," like the GPIOs that control onboard LEDs or RGBs and do not have exposed pins.

### Features Added:

* Dropdown selector to change boards (includes ESP32, ESP32-S3, ESP32-C3 boards including modules in case no board is appropriate)

* Adds correct MCU type to options export

* Previews of all boards available in selector

* A board pinout now included so you can see which pins are available (click to zoom)

* Dynamic Javascript / HTML so that certain text is shown / hidden according to board or MCU type

* Handles HSPI which is default of ESP32-S3 and ESP32-C3 boards correctly (both for selecting and exporting)

* Adds Neopixel pin and option under LED to use a neopixel - also exports correctly

* 100% compatible (probably) with current options

### The to-do list:

* Add some more ESP32 and ESP32-S3 and ESP32-C3 boards (especially the modules)
_If you have a request for a particular board, leave a comment in issues here, not on `e2002`'s repo... preferably with images!_

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
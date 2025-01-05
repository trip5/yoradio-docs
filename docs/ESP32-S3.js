// This file handles which pins need to be banned from use for certain board types
var BanPinsInfo = "Auxiliary section that allows you to prohibit the appointment of GPIOs 35-37 when choosing an ESP32-S3 module with 8MB or more of PSRAM.";
var noBanPinsLabel = "PSRAM less than 8MB";
var BanPinsLabel = "PSRAM 8MB or more";
var BanPins = [35, 36, 37];

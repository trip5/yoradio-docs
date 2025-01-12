// MOSI, MISO, SCK mandatory, SDA & SCL from board profile, LED if exists, recommended pins for some, all others 255
var defaultValues = {
  "TFT_DC":      255, "TFT_CS":     255, "TFT_RST":      -1, "BRIGHTNESS_PIN": 255,
  "I2C_SDA":      42, "I2C_SCL":     41,
  "I2S_DOUT":    255, "I2S_BCLK":   255, "I2S_LRC":     255,
  "VS1053_CS":   255, "VS1053_DCS": 255, "VS1053_DREQ": 255, "VS1053_RST":    -1,
  "TS_CS":       255, "TS_SDA":     255, "TS_SCL":      255, "TS_INT":       255, "TS_RST":    255,
  "LED_BUILTIN":  48, "MUTE_PIN":   255, "WAKE_PIN":    255, "LIGHT_SENSOR": 255, "IR_PIN":    255,
  "ENC_BTNR":    255, "ENC_BTNL":   255, "ENC_BTNB":    255, "ENC2_BTNR":    255, "ENC2_BTNL": 255, "ENC2_BTNB": 255,
  "BTN_LEFT":    255, "BTN_CENTER": 255, "BTN_RIGHT":   255, "BTN_UP":       255, "BTN_DOWN":  255, "BTN_MODE":  255,
};
var validGPIOs = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 35, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 48, 255];
var vspiGPIOs = [-1, -1, -1]; // SCK, MISO, MOSI Not available
var hspiGPIOs = [255, 255, 255]; // SCK, MISO, MOSI
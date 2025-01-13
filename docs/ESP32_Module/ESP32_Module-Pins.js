var defaultValues = {
  "TFT_DC":        4, "TFT_CS":       5, "TFT_RST":      -1, "BRIGHTNESS_PIN": 255,
  "I2C_SDA":      21, "I2C_SCL":     22, 
  "I2S_DOUT":     27, "I2S_BCLK":    26, "I2S_LRC":      25,
  "VS1053_CS":   255, "VS1053_DCS":  25, "VS1053_DREQ":  26, "VS1053_RST":    -1,
  "TS_CS":        13, "TS_SDA":      33, "TS_SCL":       32, "TS_INT":        21, "TS_RST":     25,
  "LED_BUILTIN":   2, "MUTE_PIN":   255, "WAKE_PIN":    255, "LIGHT_SENSOR": 255, "IR_PIN":    255,
  "ENC_BTNR":    255, "ENC_BTNL":   255, "ENC_BTNB":    255, "ENC2_BTNR":    255, "ENC2_BTNL": 255, "ENC2_BTNB": 255,
  "BTN_LEFT":    255, "BTN_CENTER": 255, "BTN_RIGHT":   255, "BTN_UP":       255, "BTN_DOWN":  255, "BTN_MODE":  255
};
var validGPIOs = [-1, 0, 2, 4, 5, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25, 26, 27, 32, 33, 34, 35, 36, 39, 255];
var vspiGPIOs  = [ 18, 19, 23 ]; // SCK, MISO, MOSI
var hspiGPIOs  = [ 14, 12, 13 ]; // SCK, MISO, MOSI

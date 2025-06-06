class Wifi {
  ssid
  password
  power_save_mode
  type
  constructor(ssid, password, power_save_mode) {
    this.ssid = ssid
    this.password = password
    this.power_save_mode = power_save_mode
    this.type = "wifi"
  }

  attach(pin, deviceComponents) {
    const componentObjects = [
      {
        name: this.type,
        config: {
          ssid: this.ssid,
          password: this.password,
          power_save_mode: this.power_save_mode,
        },
      },
      {
        name: "improv_serial", 
        config : {}
      }
    ]
    componentObjects.forEach((element, j) => {
        if (!deviceComponents[element.name]) {
            deviceComponents[element.name] = element.config
        } else {
            if (!Array.isArray(deviceComponents[element.name])) {
                deviceComponents[element.name] = [deviceComponents[element.name]]
            }
            deviceComponents[element.name] = [...deviceComponents[element.name], element.config]
        }
    })
    return deviceComponents
  }
}

export function wifi(ssid, password, power_save_mode) {
  return new Wifi(ssid, password, power_save_mode)
}

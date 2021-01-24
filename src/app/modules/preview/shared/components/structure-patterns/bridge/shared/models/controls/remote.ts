import {IDevice} from "../../interfaces/device.interface";

export class Remote {

  protected device: IDevice;

  constructor(device: IDevice) {
    this.device = device;
  }

  public test(): void{
    console.log('123123')
  }

  public setVolume(number): void {
    this.device.setVolume(number);
  }

  public volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  public volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  public channelUp(): void {
    this.device.setChannel(+this.device.getChannel() + 1);
  }

  public channelDown(): void {
    this.device.setChannel(+this.device.getChannel() - 1);
  }

  public togglePower(): void {
    console.log(this.device.isEnabled())
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }
}

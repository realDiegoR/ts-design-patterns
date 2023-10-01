import { Cpu } from "./interface";

export class PhoneCpu implements Cpu {
	public setSeries(serie: string) {
		console.log(`[PHONE] Set serie ${serie} successfully.`);
	}
}

export class TabletCpu implements Cpu {
	public setSeries(serie: string) {
		console.log(`[TABLET] Set serie ${serie} successfully.`);
	}
}
export class LaptopCpu implements Cpu {
	public setSeries(serie: string) {
		console.log(`[LAPTOP] Set serie ${serie} successfully.`);
	}
}

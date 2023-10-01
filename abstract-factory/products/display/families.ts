import { Display } from "./interface";

export class PhoneDisplay implements Display {
	setResolution(): void {
		console.log(`[PHONE] Resolution set successfully.`);
	}
}

export class TabletDisplay implements Display {
	setResolution(): void {
		console.log(`[TABLET] Resolution set successfully.`);
	}
}

export class LaptopDisplay implements Display {
	setResolution(): void {
		console.log(`[LAPTOP] Resolution set successfully.`);
	}
}

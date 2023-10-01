import { Memory } from "./interfaces";

export class PhoneMemory implements Memory {
	setCapacityInGB(number: number): void {
		console.log(`[PHONE] Capacity of ${number}GB set successfully.`);
	}
}

export class TabletMemory implements Memory {
	setCapacityInGB(number: number): void {
		console.log(`[TABLET] Capacity of ${number}GB set successfully.`);
	}
}

export class LaptopMemory implements Memory {
	setCapacityInGB(number: number): void {
		console.log(`[LAPTOP] Capacity of ${number}GB set successfully.`);
	}
}

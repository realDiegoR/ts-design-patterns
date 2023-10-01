import {
	Display,
	Memory,
	PhoneCpu,
	PhoneDisplay,
	PhoneMemory,
} from "../../products";
import { AbstractFactory } from "../abstract-factory";

export class PhoneFactory implements AbstractFactory {
	makeCpu() {
		return new PhoneCpu();
	}

	makeMemory(): Memory {
		return new PhoneMemory();
	}

	makeDisplay(): Display {
		return new PhoneDisplay();
	}
}

import {
	Cpu,
	Display,
	LaptopCpu,
	LaptopDisplay,
	LaptopMemory,
	Memory,
} from "../../products";
import { AbstractFactory } from "../abstract-factory";

export class LaptopFactory implements AbstractFactory {
	makeCpu(): Cpu {
		return new LaptopCpu();
	}

	makeMemory(): Memory {
		return new LaptopMemory();
	}

	makeDisplay(): Display {
		return new LaptopDisplay();
	}
}

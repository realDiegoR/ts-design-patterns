import {
	Cpu,
	Display,
	Memory,
	TabletCpu,
	TabletDisplay,
	TabletMemory,
} from "../../products";
import { AbstractFactory } from "../abstract-factory";

export class TabletFactory implements AbstractFactory {
	makeCpu(): Cpu {
		return new TabletCpu();
	}

	makeMemory(): Memory {
		return new TabletMemory();
	}

	makeDisplay(): Display {
		return new TabletDisplay();
	}
}

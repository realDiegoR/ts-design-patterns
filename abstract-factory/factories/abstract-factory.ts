import { Cpu, Display, Memory } from "../products";

export interface AbstractFactory {
	makeCpu(): Cpu;
	makeMemory(): Memory;
	makeDisplay(): Display;
}

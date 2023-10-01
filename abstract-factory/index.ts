import * as factories from "./factories";
import { AbstractFactory } from "./factories";

type Factoryname = keyof typeof factories;

const createFactory = (newFactory: Factoryname) => {
	const Factory = new factories[newFactory]();
	return Factory;
};

const appAbstractFactory = (factory: AbstractFactory) => {
	const cpu = factory.makeCpu();
	const memory = factory.makeMemory();
	const display = factory.makeDisplay();

	cpu.setSeries("AX1");
	memory.setCapacityInGB(100);
	display.setResolution();
};

appAbstractFactory(createFactory("LaptopFactory"));
appAbstractFactory(createFactory("PhoneFactory"));

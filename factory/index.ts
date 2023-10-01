import { ExpressFactory } from "./express";
import { FastifyFactory } from "./fastify";
import { HttpAdapterFactory } from "./interfaces";

function appFactory(factory: HttpAdapterFactory): void {
	const adapter = factory.makeAdapter();
	adapter.get();
	adapter.post();
	adapter.put();
	adapter.delete();
}

function createFactory(type: "express" | "fastify"): HttpAdapterFactory {
	const factories = {
		express: ExpressFactory,
		fastify: FastifyFactory,
	};

	const Factory = new factories[type]();
	return Factory;
}

appFactory(createFactory("express"));
appFactory(createFactory("fastify"));

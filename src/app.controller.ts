import { Controller, Get, Inject, Post } from "@nestjs/common";
import type { AppService } from "./app.service";

@Controller("/producers")
export class AppController {

	constructor(private readonly appService: AppService) { }

	@Get()
	async getProducers() {
		return this.appService.getProducers();
	}

	@Post()
	async createProducer() {
		return this.appService.createProducer();
	}
}
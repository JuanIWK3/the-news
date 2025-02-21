"use server";

import { db } from "@/lib/database/db";

export async function getLeituras() {
	try {
		const leituras = await db.selectFrom("leituras").selectAll().execute();
		console.log(leituras);

		return leituras;
	} catch (error) {
		return `Error: ${error}`;
	}
}

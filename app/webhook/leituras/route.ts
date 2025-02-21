import { db } from "@/lib/database/db";

export async function POST(request: Request) {
	const res = await request.json();

	try {
		const result = await db
			.insertInto("leituras")
			.values(res)
			.returningAll()
			.executeTakeFirst();

		console.log(result);

		return Response.json({ result });
	} catch (error) {
		return Response.json({ error });
	}
}

export async function GET(request: Request) {
	try {
		const leituras = await db.selectFrom("leituras").selectAll().execute();

		return Response.json({ leituras });
	} catch (error) {
		return Response.json({ error });
	}
}

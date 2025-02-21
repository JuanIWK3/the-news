import { db } from "@/lib/database/db";

export async function POST(request: Request) {
	const res = await request.json();

	console.log(res);

	try {
		const result = await db
			.insertInto("leituras")
			.values({
				email: res.email,
				status: res.status,
			})
			.executeTakeFirst();

		console.log(result.insertId);

		return Response.json({ leitura: result });
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

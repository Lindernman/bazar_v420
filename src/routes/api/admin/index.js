import db from '$lib/db';

export async function get() {
	let { rows } = await db.query(`
    SELECT  *
    FROM    shift
    WHERE   is_active
    `);

	return {
		body: {
			shift: rows
		}
	};
}

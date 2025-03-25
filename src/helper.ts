export const safeCall = async (paramType: string | null, fn: (...args: any[]) => Promise<any>, ...args: any[]) => {
	try {
		if (args.includes(undefined) || args.includes(null)) throw new Error('Invalid parameter detected');
		if (paramType !== null) {
			for (let arg of args) {
				arg = paramType === 'number' && !Number.isNaN(Number(arg))
				  ? Number(arg)
					: arg;
				if (typeof arg !== paramType) throw new Error(`Parameter '${arg}' must be a '${paramType}'!`);
			}
		}

		return await fn(...args);
	} catch (err) {
		const isError = (error: unknown): error is Error => error instanceof Error;
		const message = isError(err) ? err.message : 'Unknown error';
		const stack = isError(err) ? err.stack : 'No stack trace available';

		console.error('Error:', message);
		console.error('Stack Trace:', stack);

		return {
			error: message,
			code: (err as any).status ?? 500,
		};
	}
};

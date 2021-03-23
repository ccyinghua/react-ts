declare namespace Api {
	export interface CommonResponse<T> {
		status: boolean;
		info: string;
		msg: string;
		result: T;
	}

	export interface CommonRecordsResult<T> {
		pages?: string;
		size?: string;
		total: string;
		records: T[];
	}
}

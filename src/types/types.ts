export interface IUser {
	id: number
	email: string
	token: string
}


export interface IRating {
	'id': number,
	'value': number,
	'createdAt': string,
	'updatedAt': string
}

export interface IProfile {
	id: number
	name: string
	surname: string
	city: string
	station: string
	phone: string
	email: string
	ratings: IRating[]
	createdAt: string
	updatedAt: string
}

export interface IResponseProfile {
	profile?: IProfile
	error?: boolean
	message?: string
}

export interface IUserData {
	email: string
	password: string
}

export interface IResponseUser {
	createdAt: string
	email: string
	id: number
	password?: string
	updatedAt: string
}

export interface IResponseUserData {
	token: string
	user: IResponseUser
}

export interface IQuestion {
	id: number;
	question: string;
	variant: string;
	variant_1: string;
	variant_2: string;
	variant_3: string;
	variant_4: string;
	variant_5: string;
	complexity: string;
	link: string;
	updatedAt: Date;
	createAt: Date;
}

export interface IResponseQuestions {
	questions: {
		easy: IQuestion[];
		normal: IQuestion[];
		hard: IQuestion[];
		superGame: IQuestion[];
	}

}
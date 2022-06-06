export type User = {
	id: string
	name: string
	email: string
	createdAt: string
}

export type getUsersResponse = {
	totalCount: number
	users: User[]
}

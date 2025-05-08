export interface TokenResponse {
	access_token: string;
	token_type: string;
	id_token: string;
}

export interface TokenPayload {
	rt_hash: string;
	nonce?: string;
	iat: number;
	iss: string;
	at_hash: string;
	// sub contains user's NRIC and UUID: s=S1234567A,u=f19fdf4c-f57b-40b5-a8e0-6fb6eef640e3
	sub: string;
	exp: number;
	aud: string;
	amr: string[];
}

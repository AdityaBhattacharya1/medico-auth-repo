import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
	expoPublicAPIUrl: string
	expoPublicAPIKey: string
	heartBeatAPIUrl: string
	tokenAPIUrl: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	res.status(200).json({
		expoPublicAPIUrl: 'https://cuddly-paws-share.loca.lt',
		expoPublicAPIKey:
			'be8bbff65a7683861ff224ee878da27371184b01c56575a6dfc926387c7050e2edab4399397a056b37d29681c53267f13c8b8787aa9a59c8fbd81734ddc29f4c1d228ffd996121a54abf6b47d859dcaef7aea38daf239c7b98d815c70ad86823db429ed9743d10aa64920ce2e530cf45504288cb0ff5f6a1eb1504e171708cc9',
		heartBeatAPIUrl: 'https://tough-cloths-deny.loca.lt',
		tokenAPIUrl: 'https://5830-42-108-75-20.ngrok-free.app',
	})
}

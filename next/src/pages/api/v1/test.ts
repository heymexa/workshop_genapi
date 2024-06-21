// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { TestApiGet, TestApiCreate} from '@project/api'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<TestApiGet | TestApiCreate>,
) {
    if (req.method === "POST") {
        return res.status(201).json({ status: "201", "result": req.body.param});
    }
    res.status(200).json({ status: "200", isOk: true });
}

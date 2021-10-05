/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// req: NextApiRequest

export default async (req, res) => {

  try {
    const url = decodeURIComponent(req.query.url);
    const result = await fetch(url);
    const body: any = await result.body;
    body.pipe(res);

  } catch (error) {
    throw new Error('not an image')
  }
};

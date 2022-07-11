import { NextApiRequest, NextApiResponse } from 'next';
import { format } from 'date-fns';
import md5 from 'md5';
import { encode } from 'js-base64';
import request from '@/service/fetch';

export default async function sendVerifyCode(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { to = '', templateId = 1 } = req.body;
  const AppId = '8aaf070881ad8ad40181eb6243c90b0b';
  const AccountId = '8aaf070881ad8ad40181eb6242e40b04';
  const Authtoken = '7578975a5c524106a7c26ee1146d75ed';
  const NowDate = format(new Date(), 'yyyyMMddHHmmss');
  const SigParameter = md5(`${AccountId}${Authtoken}${NowDate}`);
  const Authorization = encode(`${AccountId}:${NowDate}`);
  const VerifyCode = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  const ExpireMinute = '5';
  const url = `https://app.cloopen.com:8883/2013-12-26/Accounts/${AccountId}/SMS/TemplateSMS?sig=${SigParameter}`;

  console.log(to);
  console.log(templateId);
  console.log(SigParameter);
  console.log(Authorization);

  const response = await request.post(
    url,
    {
      to,
      templateId,
      appId: AppId,
      datas: [VerifyCode, ExpireMinute],
    },
    {
      headers: {
        Authorization,
      },
    }
  );

  console.log(response);

  res.status(200).json({
    code: 1,
    data: 300,
  });
}

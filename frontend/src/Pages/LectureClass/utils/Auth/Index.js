import { KJUR } from 'jsrsasign';

export function generateVideoToken(sdkKey, sdkSecret, topic, password = '') {
  let signature = '';
  const iat = Math.round(new Date().getTime() / 1000);
  const exp = iat + 60 * 60 * 2;
  const oHeader = { alg: 'HS256', typ: 'JWT' };
  const oPayload = {
    app_key: sdkKey,
    iat,
    exp,
    tpc: topic,
    pwd: password,
  };
  const sHeader = JSON.stringify(oHeader);
  const sPayload = JSON.stringify(oPayload);
  signature = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, sdkSecret);
  return signature;
}

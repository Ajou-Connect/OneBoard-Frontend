// import { KJUR } from 'jsrsasign';

// export function generateInstantToken(sdkKey, sdkSecret, topic, password = '') {
//   let signature = '';
//   const iat = Math.round(new Date().getTime() / 1000);
//   const exp = iat + 60 * 60 * 2;
//   const oHeader = { alg: 'HS256', typ: 'JWT' };
//   const oPayload = {
//     app_key: sdkKey,
//     iat,
//     exp,
//     tpc: topic,
//     pwd: password,
//   };
//   const sHeader = JSON.stringify(oHeader);
//   const sPayload = JSON.stringify(oPayload);
//   signature = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, sdkSecret);
//   return signature;
// }
import { KJUR } from 'jsrsasign';

export function generateVideoToken(
  sdkKey: string,
  sdkSecret: string,
  topic: string,
  passWord = '',
  userIdentity = '',
  sessionKey = '',
) {
  let signature = '';
  try {
    const iat = Math.round(new Date().getTime() / 1000);
    const exp = iat + 60 * 60 * 2;

    // Header
    const oHeader = { alg: 'HS256', typ: 'JWT' };
    // Payload
    const oPayload = {
      app_key: sdkKey,
      iat,
      exp,
      tpc: topic,
      pwd: passWord,
      user_identity: userIdentity,
      session_key: sessionKey,
      // topic
    };
    // Sign JWT, password=616161
    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    signature = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, sdkSecret);
  } catch (e) {
    console.error(e);
  }
  return signature;
}

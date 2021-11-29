import { getExploreName } from './platform';

export const devConfig = {
  sdkKey: 'MoRylmD2jBq9NfbZXbSVmvZcGYOFkDCeJc3e',
  sdkSecret: 'NewabYwGXIFrOlPRf4dZBKeqFECESIkdlLrq',
  topic: 'qwr', //sessionName
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '',
  signature: '',
};

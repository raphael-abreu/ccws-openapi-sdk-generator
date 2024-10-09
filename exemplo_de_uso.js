import fetch from 'node-fetch'
globalThis.fetch = fetch

import API from './sdk.js';
//API.host = '<ip>:<porta>'; // opcional.

await API.dtvAuthorizeGet({clientid:'jorge',displayName:'jorge',pm:'qrcode'}).then((value) => {
  console.log("dtvAuthorizeGet",value);
}).catch(error => {
  console.error("dtvAuthorizeGet",error);
});


await API.dtvServicelistGet().then(value => {
  console.log("dtvServicelistGet",value);
}).catch(error => {
  console.error("dtvServicelistGet",error);
});


API.dtvAuthorizeGet()



await API.dtvServiceContextIdInfoNitGet({serviceContextId:'string'},'4uth0r1z3d',{'bind-token':'teste'}).then(value => {
  console.log("dtvServiceContextIdInfoNitGet",value);
 }).catch(error => {
  console.error("dtvServiceContextIdInfoNitGet",error);
 });


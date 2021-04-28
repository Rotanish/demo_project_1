// const preurl = 'http://localhost:5000';
const preurl = '';
// const mode = 'cors';
const mode = 'same-origin';

export default async function (method, url, params){
  let res
  if (params == undefined) {
    res = await fetch(preurl + url, {
      method: method.toUpperCase(),
      credentials: 'include',
      mode: mode,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  else{
    res = await fetch(preurl + url, {
      method: method.toUpperCase(),
      credentials: 'include',
      mode: mode,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });
  }
  return res
};

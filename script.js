// XMLHttpRequest

const url = 'https://jsonplaceholder.typicode.com/users';

function ajax(url, config) {
      
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(config.type, url);
        xhr.setRequestHeader('header',config.headers);
        xhr.responseType = 'json'

        xhr.onload = () => {
            if(xhr.status >= 400){
                reject(xhr.response)
            }else {
                resolve(xhr.response)
            }
        }
        xhr.send()
    })

  }


  const p1 = ajax(url, {
    type: 'GET', // by default,
    headers: {}, // by default,
    data: {},
  }).then((data) => data)

  const p2 = ajax(url, {
    type: 'GET', // by default,
    headers: {}, // by default,
    data: {}
  }).then((data) => data)


  Promise.all(p1, p2).catch((err) => console.error(err)).then((data) => console.log(data))
  Promise.all([p1, p2]).catch((err) => console.error(err)).then((data) => console.log(data))


// fetch

async function ajax2(url, config){
    const data = await fetch(url, {
        method: config.type,
        headers: config.headers
    })

    return data;
}




const p3 = ajax(url, {
    type: 'GET', // by default,
    headers: {}, // by default,
    data: {},
  }).then((data) => data)

  const p4 = ajax(url, {
    type: 'GET', // by default,
    headers: {}, // by default,
    data: {}
  }).then((data) => data)

  Promise.all(p3, p4).catch((err) => console.error(err)).then((data) => console.log(data))
  Promise.all([p3, p4]).catch((err) => console.error(err)).then((data) => console.log(data))
  



  
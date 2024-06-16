function getPromise(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay)
  });
}


function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let responses = []
    promises.forEach(promise => {
      promise.then(res => {
        responses.push(res);

        if(responses.length === promises.length) {
          resolve(responses);
        }

      }).catch(err => {
        reject(err)
      })
    })
  })
}

// test
PromiseAll([getPromise('promise1', 1000), getPromise('promise2', 100)]).then(results => {
  console.log('RESULTS__', results)
});

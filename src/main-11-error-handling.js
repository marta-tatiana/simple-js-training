
//1) then and catch convert errors to rejections.

function asynchronousFunctionThrowinError() {
    throw new Error('');
    return Promise.resolve(true);
}

function asynchronousFunctionRejected() {
    return Promise.resolve().then(() => {
        throw new Error('');
    })
}

function returnsPromise() {
    return Promise.resolve(true);
}

// 2) UnhandledPromiseRejectionWarning
//asynchronousFunctionRejected().then(() => console.log('function rejected'));

// 3) Promise rejection caught
//asynchronousFunctionRejected().then(() => console.log('function rejected'));//.catch(err => console.log('rejection caught'));

// 4) Error not caught
// asynchronousFunctionThrowinError().then(() => console.log('function executed')).catch(err => console.log('error caught'));

// 5) Two ways of error handling
//asynchronousFunctionRejected().then(() => console.log('success!'), err => console.log('rejection detected'));
//asynchronousFunctionRejected().then(() => console.log('success!'), err => console.log('rejection detected')).then(() => console.log('another success!'));
//asynchronousFunctionRejected().then(returnsPromise).then(() => console.log('success!'), err => console.log('not quite'));

// 6) Promises 'swallowing' errors
//returnsPromise().then(() => {
//    throw new Error('Something is very wrong');
//});
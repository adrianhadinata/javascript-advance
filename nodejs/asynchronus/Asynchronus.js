// gaya Asynchronus
// ciri khasnya selain parameter, function juga memiliki call back function
// callback function adalah fungsi yang dijalankan apabila fungsi utama selesai

const getUserAsync = (id, callback) => {
    const time = id === 1 ? 2000 : 3000;
    setTimeout(() => {
        const nama = id === 1 ? 'Adrian' : 'Hadinata';
        callback({id,nama});
    }, time)
}

const userSatu = getUserAsync(1, (callback) => {
    console.log(callback);
});

const userDua = getUserAsync(2, (callback) => {
    console.log(callback);
})
const Halo = 'Halo'
console.log(Halo);
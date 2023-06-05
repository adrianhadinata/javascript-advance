// Contoh fungsi Syncrhonus

const getUserSync = (id) => {
    //tenary operaotr (if else dalam 1 baris)
    const nama = id === 1 ? 'Adrian' : 'Hadinata';
    return {id, nama};
}
const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'halo'
console.log(halo);


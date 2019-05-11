function ubahJSON(value){
	return JSON.stringify(value)
};

let name = 'Roni Ardiyanto';
let address = 'Desa Sumber Harum, Tungkal Jaya, Musi Banyuasin';
let hobbies = ['Berenang', 'Membaca'];
let is_married = false;

let school = {
	highSchool: 'SMK Negeri 8 Semarang',
  	university: 'Universitas Diponegoro'
};

let skills = [
  {name: 'Koding', score: 7},
  {name: 'Menulis', score: 8}
]

console.log(ubahJSON(name));
console.log(ubahJSON(address));
console.log(ubahJSON(hobbies));
console.log(ubahJSON(is_married));
console.log(ubahJSON(school));
console.log(ubahJSON(skills));
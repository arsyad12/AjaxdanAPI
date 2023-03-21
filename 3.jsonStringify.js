// json stringify berguna untuk merubah object javascript menjadi data json

const person = {
    "Name" : "Roy",
    "gender" : 'Man'
}

console.log(person)


// mirip seperti json parse, sama sama harus dimasukin kedalam variabel baru dulu

const jsonPerson = JSON.stringify(person);

console.log (jsonPerson)
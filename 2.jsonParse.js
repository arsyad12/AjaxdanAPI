//JSON parse berguna untuk merubah data json, menjadi data object javascript

const data = `{

    "ticker" : {

    "base" : "btc",
    "target" : "IDR",
    "price" : "3430000000.00000",
    "volume" : "28.245458.55",
    "change" : "-4355.2154545"

    },

    "timeStamp" : "btc",
    "succes" : "IDR",
    "error" : ""
}`;


//masukin dulu data kedalam varibel jangan lupa pake json.parse 

const changeData = JSON.parse(data);

console.log(changeData)
const SeleksiNilai = (nilaiAwal,nilaiAkhir,dataArray) => {
    if(nilaiAkhir < nilaiAwal){
        return console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
    if(dataArray.length < 5){
        return console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    }
    let output = []
    dataArray.forEach(item => {
        if(nilaiAwal < item && item < nilaiAkhir){
            output = [...output,item]
        }
    });
    
    if(output.length > 0){
        console.log(output.sort(function(a,b){return a-b}))
    } else {
        console.log("Nilai tidak ditemukan")
    }
}

SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
SeleksiNilai(5, 17 , [2, 25, 4])
SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
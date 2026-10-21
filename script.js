function hitungTotalBelanja(items) {
 let total = 0;

 for (const item of items) {
    total += item.harga *item.jumlah
 }
   

    console.log(total)
} 
 
hitungTotalBelanja([
  { nama: "Buku", harga: 50000, jumlah: 2 },
  { nama: "Pulpen", harga: 15000, jumlah: 3 }
])





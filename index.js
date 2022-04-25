class Cart {
  constructor() {
    this.carts = [];
  }
  tambahProduk(kodeProduk, kuantitas = 1) {
    const tambahItem = { kodeProduk, kuantitas };
    const sudahAda = this.cekProduk(kodeProduk);
    if (sudahAda === -1) {
      this.carts.push(tambahItem);
    } else {
      this.carts.splice(sudahAda, 1, { ...tambahItem, kuantitas: kuantitas + this.carts[sudahAda].kuantitas })
    }
  }
  tampilkanCart() {
    this.carts.forEach(item => console.log(item.kodeProduk + ' (' + item.kuantitas + ')'));
  }
  hapusProduk(kodeProduk) {
    this.carts = this.carts.filter(item => item.kodeProduk !== kodeProduk);
  }
  cekProduk(kodeProduk){
     return this.carts.findIndex(item => item.kodeProduk === kodeProduk)
  }
};

const keranjang = new Cart();

keranjang.tambahProduk("Pisang Hijau", 2);

keranjang.tambahProduk("Semangka Kuning", 3);

keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);

keranjang.hapusProduk("Semangka Kuning");

keranjang.hapusProduk("Semangka Merah");

keranjang.tampilkanCart();
function YasHesapla(dogumYili) {
  let simdi = new Date().getFullYear();
  return simdi - dogumYili;
}

function EmeklilikKaçYilKaldi(dogumYili, isim) {
  let yas = YasHesapla(dogumYili);
  let kalanSene = 65 - yas;
  if (kalanSene > 0) {
    console.log(isim + " emekli olmanıza " + kalanSene + " Yıl Kaldı");
  } else {
    console.log("zaten emeklisiniz");
  }
}
EmeklilikKaçYilKaldi(1994, "MEHMET");

function Tekrar(kelime, tekrar) {
  for (var i = 0; i < kelime.length; i++) {
    console.log(kelime);
  }
}

Tekrar("tekrar", 4);

function alan(kısa, uzun) {
  return kısa * uzun;
}
var alan1 = alan(4, 5);
console.log(alan1);

function TamBölen(sayi) {
  for (var i = 2; i <= sayi; i++) {
    if (sayi % i == 0) {
      console.log(i);
    }
  }
}
TamBölen(50);

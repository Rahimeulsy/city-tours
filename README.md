React Course - City Tours Project
Tour bileşeni ve tourData (tur verisi) da ilgili dosyalardan içe aktarıldı.
removeTour adında bir fonksiyon tanımlandı. Bu fonksiyon, verilen id değerine göre bir turu listeden çıkarmak için kullanıldı.
tours değişkeni state'den alınarak, mevcut turlar dizisi kopyalandı.
filter metodu ile id'si verilen tur, turlar dizisinden çıkarıldı (tour.id !== id ifadesiyle).
map fonksiyonu ile tours dizisi üzerinden dönülerek, her bir tur için bir Tour bileşeni render edildi.
showInfo: false, ile bu, turun ek bilgileri (info) gösterilip gösterilmeyeceğini kontrol edildi.
andleInfo adında bir fonksiyon tanımlandı. Bu fonksiyon, showInfo durumunu tersine çevirir (true ise false, false ise true yapar).
removeTour, yine dışarıdan (üst bileşenden) gelen bir fonksiyondur. Bu fonksiyon bir turu listeden silmek için kullanılacak.
--> https://city-tours-gamma.vercel.app/

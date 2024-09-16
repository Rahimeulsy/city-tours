import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData"; //Tour bileşeni ve tourData (tur verisi) da ilgili dosyalardan içe aktarılıyor.

export default class TourList extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => { //removeTour adında bir fonksiyon tanımlanmış. Bu fonksiyon, verilen id değerine göre bir turu listeden çıkarmak için kullanılıyor.
    const { tours } = this.state; //tours değişkeni state'den alınarak, mevcut turlar dizisi kopyalanıyor.
    const sortedTours = tours.filter((tour) => tour.id !== id);//filter metodu ile id'si verilen tur, turlar dizisinden çıkarılıyor (tour.id !== id ifadesiyle).
    this.setState({
        tours: sortedTours,
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map((tour) => { //map fonksiyonu ile tours dizisi üzerinden dönülerek, her bir tur için bir Tour bileşeni render ediliyor.
          return <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />;//key={tour.id}: React'e her bir öğenin benzersiz olduğunu söylemek için kullanılıyor, React'in bu öğeleri takip edebilmesi için id benzersiz olmalıdır.
        })}
      </section>//tour={tour}: Her Tour bileşenine ilgili turun tüm bilgilerini (img, name, info vb.) props olarak geçiriyor.
    );//removeTour={this.removeTour}: Her Tour bileşenine removeTour fonksiyonunu props olarak geçiyor. Bu sayede, her bir turu silmek için removeTour fonksiyonu kullanılabilir.
  }
}

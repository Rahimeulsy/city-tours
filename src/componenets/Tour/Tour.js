import React, { Component } from "react";
import "./Tour.scss";
export default class Tour extends Component {
  state = {
    showInfo: false, //Bu, turun ek bilgileri (info) gösterilip gösterilmeyeceğini kontrol eder.
  };
  handleInfo=()=>{ //handleInfo adında bir fonksiyon tanımlanmış. Bu fonksiyon, showInfo durumunu tersine çevirir (true ise false, false ise true yapar).
    this.setState({
        showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const {removeTour}=this.props; //removeTour, yine dışarıdan (üst bileşenden) gelen bir fonksiyondur. Bu fonksiyon bir turu listeden silmek için kullanılacak.
    return ( //article etiketi, her bir turu temsil eden kapsayıcı elementtir.
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <span className="close-btn" onClick={()=>{removeTour(id)}}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{""}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" /> 
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article> //fas fa-window-close yazı tipi bir simge üzerine alınır.
      //aşağı bakan bir ok simgesi olan kare şeklini ifade eder.
    );
  }
}

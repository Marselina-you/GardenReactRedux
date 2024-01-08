import React from 'react';
import slide from "../../images/slide-3.jpg";
import BtnView from '../btnView/BtnView';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <section className={s.contacts}>
        <div className={s.container}>
          <div className={s.inner}>
            <div className={s.img}>
            <img src={slide} alt="img" />
            </div>
           
            <div className={s.block}>
              <div className={s.content}>
                <h2 className={s.title}>Наш адрес</h2>
                <address className={s.address}>г. Серпухов
                  <span>ул. Карла Маркса 53</span>
                </address>
                <div className={s.btn}>
                  <BtnView value="показать на карте"/>
                </div>
                <div className={s.list}>
                  <li>тел. +7(423)678-90-89</li>
                  <li>+7(423)678-90-89</li>
                  <li>email: sadzvetov@list.ru</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
};



export default Contacts;
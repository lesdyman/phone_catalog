import React from 'react';
import './Contacts.scss';

export const Contacts: React.FC = () => (
  <div className="contacts-container">
    <div className="contacts__person person">
      <div className="person__photo  person__photo--1" />
      <div className="person__info">
        <div className="person__name">Oleksandr Dyman</div>
        <a href="https://github.com/lesdyman">Github</a>
      </div>
    </div>
    <div className="contacts__person person">
      <div className="person__photo person__photo--2" />
      <div className="person__info">
        <div className="person__name">Veronika Demko</div>
        <a href="https://github.com/demkoveronika">Github</a>
      </div>
    </div>
    <div className="contacts__person person">
      <div className="person__photo person__photo--3" />
      <div className="person__info">
        <div className="person__name">Vitalii Shut</div>
        <a href="https://github.com/V-Shut">Github</a>
      </div>
    </div>
    <div className="contacts__person person">
      <div className="person__photo person__photo--4" />
      <div className="person__info">
        <div className="person__name">Nazarii Siryi</div>
        <a href="https://github.com/akryto">Github</a>
      </div>
    </div>
    <div className="contacts__person person">
      <div className="person__photo person__photo--5" />
      <div className="person__info">
        <div className="person__name">Stas Andrushchak</div>
        <a href="https://github.com/Stasandrushchak">Github</a>
      </div>
    </div>
  </div>
);

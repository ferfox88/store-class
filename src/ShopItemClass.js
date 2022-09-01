import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class ShopItemClass extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div class="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div class="description">
          {item.descriptionFull}
        </div>
        <div class="highlight-window mobile">
          <div class="highlight-overlay"></div>
        </div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">{`${item.currency}${(item.price).toFixed(2)}`}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
};

ShopItemClass.protoType = {
  item: PropTypes.instanceOf(Item).isRequired
}

export default ShopItemClass;
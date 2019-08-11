const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];
  
  const renderGoodsItem = (title, price) => {
    return `<div class="product-item"><h3>${title}</h3><p>${price}</p></div>`;
  };
  
  const renderGoodsList = (list) => {
    // Задание 3
    // Запятая выводится, т.к. нет join("")
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join("");
    document.querySelector('.products').innerHTML = goodsList;
  }
  
  renderGoodsList(goods);
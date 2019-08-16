const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

/**
 * makeGetRequest через Promise
 */
let makeGetRequest = (url, method = "GET") => {
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return new Promise((res, rej) => {
    xhr.open(method, url);
    xhr.onload = () => xhr.status === 200 ? res(xhr.response) : rej("Проблемы при выполнении запроса");
    xhr.send();
  });
}

class GoodsList {
  /**
   * Получение списка товаров через Promise
   */
  fetchGoods() {
    return new Promise((response, reject) => {
      makeGetRequest(`${API_URL}/catalogData.json`)
        .then(res => {
          res ? response(JSON.parse(res)) : reject("Данные не найдены")
        })
        .catch(err => console.log(err));
    })
  }

  /**
   * Добавление товара
   */
  addGood(){
    makeGetRequest(`${API_URL}/addToBasket.json`, "POST")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  /**
   * Удаление товара
   */
  delGood(){
    makeGetRequest(`${API_URL}/deleteFromBasket.json`, "DELETE")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  /**
   * Отрисовка товаров
   */
  render(data) {
    let listHtml = '';
    data.forEach(e => {
      const goodItem = new GoodsItem(e.product_name, e.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}

class GoodsItem {
  constructor(name, price) {
    this.product_name = name;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
  }
}

const list = new GoodsList();
list.fetchGoods()
  .then(res => list.render(res))
  .catch(err => console.log(err));
import declension from './declension'

export default class Panels {
  constructor(data){
    this.element = Panels.createElement()
    this.fields = {
      review: ['отзыв', 'отзыва', 'отзывов'],
      reply: ['неотвеченный', 'неотвеченных', 'неотвеченных'],
      update: ['обновление', 'обновления', 'обновлений'],
      title: false,
      rating: false
    }

    this.setData(data)
  }

  setData(data){
    for (let field of Object.keys(this.fields)){
      this.element.querySelector(`.js-panel-${field}`).innerHTML = data[field] + ' ' + declension(data[field], this.fields[field]);
      this.element.id = 'panel-' + data.id;
      this.element.classList.remove('panel_status_purple', 'panel_status_orange', 'panel_status_gray')
      this.element.classList.add('panel_status_' + data.state)
    }
  }

  static createElement(){
    let base = document.getElementById('panel-element').cloneNode(true);
    base.classList.remove('hidden')
    return base;
  }
}
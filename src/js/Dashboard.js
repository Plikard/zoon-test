import declension from './declension'

export default class Dashboard {
  constructor(data) {
    this.widgets = {
      review: ['отзыв', 'отзыва', 'отзывов'],
      reply: ['неотвеченный отзыв', 'неотвеченных отзыва', 'неотвеченных отзывов'],
      update: ['обновление', 'обновления', 'обновлений'],
      rating: false
    }

    this.initWidgets()
    this.updateWidgets(data)
  }

  initWidgets() {
    for (let widget of Object.keys(this.widgets)) {
      this[widget] = {
        total: document.querySelector(`.js-total-${widget}`),
        title: document.querySelector(`.js-title-${widget}`)
      }
    }
  }

  updateWidgets(data) {
    for (let widget of Object.keys(this.widgets)) {
      let sum = data.reduce((sum, item) => sum + item[widget], 0)
      this[widget].total.innerText = (widget === 'rating' ? (sum / data.length).toFixed(1) : sum)
      if (this.widgets[widget]) this[widget].title.innerText = declension(sum, this.widgets[widget])
    }
  }
}
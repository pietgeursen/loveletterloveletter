import {pull, start, html} from 'inu'
import heart from './components/heart'
const main = document.querySelector('main')

const app = {
  init: function() {
   return {model: 1, effect: 'INIT'} 
  },
  update: function(model, action) {
   return {model: model} 
  },
  view: function(model, dispatch) {
    return heart(model, dispatch) 
  },
  run: function(effect, sources) {
    
  }
}

const sources = start(app)

pull(sources.views(), pull.drain(function(view) {
 html.update(main, view) 
}))

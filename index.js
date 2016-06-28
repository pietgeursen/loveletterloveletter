import {pull, start, html} from 'inu'
import push from 'pull-pushable'
import heart from './components/heart'
import letter from './letter'
const main = document.querySelector('main')

const app = {
  init: function() {
   return {model: 100, effect: 'INIT'} 
  },
  update: function(model, action) {
   if(model == 0) return {model: model}
   switch(action){
      case 'TICK':
        return {model: model - 1}
   }
   return {model: model} 
  },
  view: function(model, dispatch) {
    return heart(model, dispatch) 
  },
  run: function(effect, sources) {
    switch(effect){
      case 'INIT':
        const p = push()
        setInterval(() => {
          p.push('TICK')
           console.log(letter.letter.pop())
        }
        , 3000)
        return p
    } 
  }
}

const sources = start(app)

pull(sources.views(), pull.drain(function(view) {
 //html.update(main, view) 
 main.appendChild(view)
}))

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
    function emitTickWaxPoetic(p) {
      p.push('TICK')
      console.log(letter.letter.shift())
    }
    switch(effect){
      case 'INIT':
        const p = push()
        setInterval(
          ()=> emitTickWaxPoetic(p)
          , 3000)
        document.addEventListener('click', (e)=> {
          e.preventDefault()
          emitTickWaxPoetic(p)
        })
        return p
    } 
  }
}

const sources = start(app)

pull(sources.views(), pull.drain(function(view) {
 //html.update(main, view) 
 main.appendChild(view)
}))

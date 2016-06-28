import {html} from 'inu'

function render(model, dispatch){
  return html`
    <div class="heart" style="width: ${100 / (model + 1)}px">
      <img src="./heart.svg">
        ${model > 0 ? render(model - 1, dispatch) : null}
      </img>  
    </div>`
}

export default render

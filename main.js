

const volume = (x, y,z) => { return (x * y * z) }



const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''

    
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    const k = parseInt(document.querySelector('#thirdNumber').value)
    const ans = ` your volume is ${volume(i, j, k)}.`
    document.querySelector('#result').innerHTML = ans
  
}



// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up


document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})



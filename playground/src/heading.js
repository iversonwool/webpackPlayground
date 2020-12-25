export default () => {

  const h2 = document.createElement('h2')
  h2.textContent = 'Hello Webpack!'
  h2.addEventListener('click', () => {
    alert('Hello Webpack')
  })
  return h2
}
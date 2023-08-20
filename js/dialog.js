const nameInput = document.getElementById("name-input")
const nameLabel = document.getElementById('name-label')
const card = document.getElementById('card')
const replic = document.getElementById('replic')
const sendBtn = document.getElementById("send-name")

sendBtn.onclick = () => {
  if (nameInput.value.toLowerCase().includes('эмир') || nameInput.value.toLowerCase().includes('emir')) {
    replic.textContent = 'О, точно, есть такой. В Росгвардии раньше крутился, да? ' +
      'В Таркове сейчас такие нужны. Ладно, держи свой пропуск, и не забудь назвать код с карты, ' +
      'а то погранцы расстреляют к хренам.'
    card.classList.remove('hidden')
    nameLabel.classList.add('hidden')
    sendBtn.classList.add('hidden')
  } else {
    replic.textContent = 'Не вижу тебя в списках, может именем ошибся? Давай-ка еще раз, и не выдумывай себе прозвищ, перед бабами так крутиться будешь.'
  }
}

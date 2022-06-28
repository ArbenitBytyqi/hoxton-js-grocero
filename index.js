let state = {
  storeItems: [
    {
      id: 1,
      name: 'beetroot',
      price: 0.50,
      inCart: 5,
      image: 'assets/icons/001-beetroot.svg',
    },
    {
      id: 2,
      name: 'carrot',
      price: 0.20,
      inCart: 2,
      image: 'assets/icons/002-carrot.svg',
    },
    {
      id: 3,
      name: 'apple',
      price: 0.30,
      inCart: 3,
      image: 'assets/icons/003-apple.svg',
    },
    {
      id: 4,
      name: 'apricot',
      price: 0.30,
      inCart: 3,
      image: 'assets/icons/004-apricot.svg',
    },
    {
      id: 5,
      name: 'avocado',
      price: 0.30,
      inCart: 3,
      image: 'assets/icons/005-avocado.svg',
    },
    {
      id: 6,
      name: 'bananas',
      price: 0.30,
      inCart: 3,
      image: 'assets/icons/006-bananas.svg',
    },
    {
      id: 7,
      name: 'bell-pepper',
      price: 0.30,
      inCart: 3,
      image: 'assets/icons/007-bell-pepper.svg',
    },
    {
      id: 8,
      name: 'berry',
      price: 0.30,
      inCart: 3,
      image: 'assets/icons/008-berry.svg',
    },
    {
      id: 9,
      name: 'blueberry',
      price: 0.30,
      inCart: 3,
      image: 'assets/icons/009-blueberry.svg',
    },
    {
      id: 10,
      name: 'eggplant',
      price: 0.30,
      inCart: 3,
      image: 'assets/icons/010-eggplant.svg',
    },
  ]
}

function getItemImagePath(item) {
  let id = String(item.id).padStart(3, '0')
  return `assets/icons/${id}-${item.name}.svg`
}

function getTotal() { }

function increaseQuantity() { }

function decreaseQuantity() { }


function renderStoreItems() {
  let storeUl = document.querySelector('.store--item-list')
  storeUl.textContent = ''

  for (let item of state.storeItems) {
    let storeItem = document.createElement('li')

    let iconDiv = document.createElement('div')
    iconDiv.className = '.store--item-icon'

    let iconImg = document.createElement('img')
    iconImg.src = getItemImagePath(item)

    let addButton = document.createElement('button')
    addButton.textContent = 'Add item to cart'

    storeItem.append(iconDiv, addButton)
    iconDiv.append(iconImg)
    storeUl.append(storeItem)
  }
}

function renderCartItems() {

}

function renderTotal() {

}

function render() {
  renderStoreItems()
  renderCartItems()
  renderTotal()
}

render()
const client = contentful.createClient({
  space: 'k7bnpyds7xvu',
  accessToken: 'Ths82gqe8Cky2q1tMWTfjLADbaUVe-CZ0EY_Vbh42ek',
});

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item)
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item))
  } else {
    storageItem = []
  }
  return storageItem
}

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item))
}

export {
  client,
  getElement,
  getStorageItem,
  setStorageItem,
}
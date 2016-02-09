
export const getItems = new Promise((res) => {
  setTimeout(() => {
    res({
      items: [
        'One Initial Item',
        'Another Initial Item'
      ]
    })
  }, 500)
})

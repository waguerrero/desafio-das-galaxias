function surpresinha (numbers = 6) {
  numbers = parseInt(numbers)  
  
  if (numbers > 15 || numbers < 6) {
    return "Error: Informe um valor entre 6 e 15."
  }
  
  const result = []
  
  while (result.length != numbers) {
    let random = Math.floor(Math.random() * 60) + 1
    if (!result.includes(random)) {
      result.push(random)
    }
  }
  
  return result.sort((a, b) => {
    return a-b
  })
}

console.log(surpresinha())
// retorna [10, 20, 30, 40, 50, 60]

console.log(surpresinha('10'))
// retorno: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(surpresinha(5))
console.log(surpresinha(16))
// retorno: Error [Informe um valor entre 6 e 15.]
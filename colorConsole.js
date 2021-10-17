const { red, green, blue, white, c, m, y, k } = [
    ['red', 1], ['green', 2], ['b', 4], ['w', 7],
    ['c', 6], ['m', 5], ['y', 3], ['k', 0],
].reduce((cols, col) => ({
    ...cols, [col[0]]: f => `\x1b[3${col[1]}m${f}\x1b[0m`
}), {})

console.log(`${green('Listening on Port : 5000')} 💚`)

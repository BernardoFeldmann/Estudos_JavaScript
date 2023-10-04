/*var valores = [8, 5, 10, 15]

for (var pos = 0; pos < valores.length; pos ++) { // enquanto não chegar no último valor, continua recebendo valores
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
var num = [4,9,7,2,1]
num.sort()
for(var pos in num) {
    console.log(`na posição ${pos} tem o valor ${num[pos]}`)
}

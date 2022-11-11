// 9 - Find the amount of potatoes
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1

function potatoes(word) {
    return word.split('potato').length -1;
}

console.log(potatoes("potatoppotatoopotatotpotatotasapotatosdfadpotatosatopotatopotatopotato"))

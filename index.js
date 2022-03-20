const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
    const basket = []
    for (let i = 0; i < cards.length; i++) {
        basket.push(
            `Thank you, ${cards[i]}, for the wonderful surprise gift!`
        )
            
    }
    return basket
}


function countDown(numbers) {
    let i = numbers;
    while(i >= 0) { 
        console.log(i--);
    
    }
    
}
    
       

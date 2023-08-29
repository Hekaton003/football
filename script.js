function RandomNumber(num){
    return Math.floor(Math.random()*num);
}
const Football = {
    footballPlayers: ['Ronaldo', 'Benzema', 'Rashford', 'Kane', 'Messi', 'Suarez', 'Kross'],
    footballTeams: ['Newcastle', 'Inter', 'Southampton', 'Manchester United', 'Liverpool'],
    footballManager: ['Ten Hag', 'Klopp', 'Tuchel','Manchini','Guardiola']
}

// array with full message to output
let newMessage = []

// Iterate over the object considering the array length
for(let i in Football) {
    let optionIdx =RandomNumber(Football[i].length)

    // use the object's properties to customize the message being added to collectiveAdvice
    switch(i) {
        case 'footballPlayers':
            newMessage.push(`I wanna play with "${Football[i][optionIdx]}".`)
            break;
        case 'footballTeams':
            newMessage.push(`Your favourite club is "${Football[i][optionIdx]}".`)
            break;
        case 'footballManager':
            newMessage.push(`You should be trained by "${Football[i][optionIdx]}".`)
            break;
        default:
            newMessage.push('There is not enough info.')
    }
}

function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = newMessage.join('\n')
    console.log(formatted)
}

formatWisdom(newMessage);
/*
    DEATHROLL GAME

 

    Game Rules:
        - The game relies on "rolls" - a function that produces a random number between 1 and the "roll ceiling" (max number)
        - Players agree on a bet
        - The initial "roll ceiling" is the bet amount * 10
        - The "roll" produces a number between 1 and the "roll ceiling"
        - Once a player has "rolled", the next player's "roll ceiling" is the number the previous player rolled
        - Whoever rolls 1 first, loses the game and the bet

 

    Example, with a bet size of 10, so the "roll ceiling" is 100:
        Bob: rolls 20 (1-100)
        Chuck: rolls 16 (1-20)
        Bob: rolls 2 (1-16)
        Chuck: rolls 1 (1-2)
        So in this example Chuck loses.

 

    Coding Challenge Rules:
        - Simulate enough of these games until one player has a balance of 0
        - Bet size is always 10, no need to worry about balances being enough to cover the bet
        - Player1 always rolls first
        - Please add as many console logs as you can so we can follow the simulation
*/

 

const player1 = {
    name: 'Player 1',
    balance: 1000
};
const player2 = {
    name: 'Player 2',
    balance: 1000
};

 

const deathroll = (bet) => {

};

 
deathroll(2){
while (player1.balance > 0 && player2.balance > 0) {
    deathroll(10);
}
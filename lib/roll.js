export function roll(sides, dice, rolls) {
    let res = [];
    for (let i = 0; i < rolls; i++) {
        let total = 0
        for (let j = 0; j < dice; j++) {
            total += Math.floor(Math.random() * sides) + 1;
        }
        res.push(total);
    } 
    return {"sides":sides, "dice":dice, "rolls":rolls, "results":res};
}
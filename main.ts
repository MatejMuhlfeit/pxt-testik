let num1 = 0;

let ft = true;
let tf = false;


input.onGesture(Gesture.Shake, () =>{
        num1 = Math.floor((Math.random() * 6) + 1);
        whaleysans.showNumber(num1);
        ft = false;
    })

let p = 0;
if(!ft && num1 > 0)
{
    
    if(input.buttonIsPressed(Button.A))
    {
        p += 1;
    }
    else if(input.buttonIsPressed(Button.B))
    {
        p -= 1;
    }


    while(p == 1)
    {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    }
    while (p == 2)
    {
        basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . . . .
        `)
    }
    while (p == 3)
    {
        basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
    }
    while (p == 4)
    {
        basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
    }
    while (p == 5)
    {
        basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    }
    while (p == 6)
    {
        basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
    }
    input.onButtonPressed(Button.AB, () =>{
        tf = true;
        ft = true;
    })
}   

if(tf)
{
    if(p == num1)
    {
        basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
        
        music.playMelody("C, A,", 120)
    }
   else{
        basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)

        music.playMelody("A, C,", 120)
   }
}

    

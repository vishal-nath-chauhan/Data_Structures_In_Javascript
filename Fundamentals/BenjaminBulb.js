function BenjaminBulb(num){
    for(let i=1;i*i<num;i++){
        console.log(i*i);
    }

}
BenjaminBulb(6)

// DRY RUN

// | B1 | B2 | B3 | B4 | B5 | B6 | B7 | B8 | B9 | B10 | Fluctuation              |  
// | -  | -  | -  | -  | -  | -  | -  | -  | -  | -   |  0
// | +  | +  | +  | +  | +  | +  | +  | +  | +  | +   |  1 => all toggled
// | +  | -  | +  | -  | +  | -  | +  | -  | +  | -   |  2 => all second toggled
// | +  | -  | -  | -  | +  | +  | +  | -  | -  | -   |  3 => all third toggled
// | +  | -  | -  | +  | +  | +  | +  | +  | -  | -   |  4 => all fourth toggled
// | +  | -  | -  | +  | -  | +  | +  | +  | -  | +   |  5 => all fifth toggled
// | +  | -  | -  | +  | -  | -  | +  | +  | -  | +   |  6 => all sixth toggled
// | +  | -  | -  | +  | -  | -  | -  | +  | -  | +   |  7 => all sixth toggled
// | +  | -  | -  | +  | -  | -  | -  | -  | -  | +   |  8 => all sixth toggled
// | +  | -  | -  | +  | -  | -  | -  | -  | +  | +   |  9 => all sixth toggled
// | +  | -  | -  | +  | -  | -  | -  | -  | +  | -   |  10 => all sixth toggled

// Observation 
// all the perfect squares remain ON till end





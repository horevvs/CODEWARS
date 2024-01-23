
let array = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', 'Remove']


function removeEveryOther(arr) {


  let a= arr.filter((item, index) => {

        if (index % 2 == 0) { return item }

    })

return a
    
}


console.log(removeEveryOther(array))






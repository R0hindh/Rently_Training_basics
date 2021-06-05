nums = [10,12,15,24,25,20,100]
fives = []
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v)
 })
 console.log(fives)
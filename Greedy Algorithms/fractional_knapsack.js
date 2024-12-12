let bags = [
    { price: 12, weight: 6 },
    { price: 21, weight: 7 },
    { price: 30, weight: 6 },
    { price: 40, weight: 5 },
    { price: 24, weight: 4 },
  ];
  
  bags.sort((a, b) => b.price / b.weight - a.price / a.weight);
  
  let max_weight = 20;
  let ans = [];
  
  for (const bag of bags) {
    if (bag.weight <= max_weight) {
      ans.push(bag);
      max_weight -= bag.weight;
    } else {
      let fraction = max_weight / bag.weight;
      ans.push({ price: bag.price * fraction, weight: max_weight });
      max_weight = 0; 
      break; 
    }
  }
  
  console.log(ans.reduce((sum, item) => sum + item.price, 0));
  
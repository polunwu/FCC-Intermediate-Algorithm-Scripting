const unit = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}

function checkCashRegister(price, cash, cid) {
  let result = { status: "", change: [] };
  let change = cash - price;
  let total = cid.reduce((sum, coin) => { return coin[1] + sum; }, 0);
  // chack if equal to drawer
  if (total === change) {
    return { status: "CLOSED", change: cid }
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    let curUnit = cid[i][0];
    while (cid[i][1] > 0 && change > 0 && change >= unit[curUnit]) {
      change -= unit[curUnit];
      cid[i][1] -= unit[curUnit];
      if (result.change.some(x => x[0] === curUnit)) {
        for (let item of result.change) {
          if (item[0] === curUnit) {
            item[1] = Math.round((item[1] + unit[curUnit]) * 100) / 100;
          }
        }
      } else {
        result.change.push([curUnit, unit[curUnit]]);
      }
      change = Math.round(change * 100) / 100;
    }
  }
  if (change > 0) {
    result = { status: "INSUFFICIENT_FUNDS", change: [] }
  } else {
    result.status = "OPEN";
  }
  return result;
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

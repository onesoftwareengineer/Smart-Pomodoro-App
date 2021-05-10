//function will generate a variable reward on a variable number of times
export const generateSkinnerReward = (rewardFrequency: 30 | 50 | 80) => {
  let willReceiveReward = false
  let maxPomodoroReward = 8 / 2

  /*
    if randomly generated frequency within frequency passed to function, a reward will be generated
    reward frequency can be:
    80 - meaning 80% of the time a reward is given
    50 - meaning 50% of the time a reward is given
    30 - meaning 30% of the time a reward is given
    */
  const diceRollForFrequency = Math.ceil(Math.random() * 100)
  if (diceRollForFrequency <= rewardFrequency) {
    willReceiveReward = true
  }

  /* 
    once in a while generate large sums ar rewards like in a casino
    1% chance - 100 ron
    5% chance - 10 ron
    */
  const diceRollForSpecialRewards = Math.ceil(Math.random() * 100)
  if (diceRollForSpecialRewards <= 1) {
    maxPomodoroReward = 80
  } else if (diceRollForSpecialRewards <= 5) {
    maxPomodoroReward = 10
  }

  //maxim reward of 8 Ron will be offered if a reward will be generated
  return willReceiveReward ? maxPomodoroReward : 0
}

class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals.hasOwnProperty(peak)) {
      return `${peak} has already been added to your goals`;
    }

    this.goals[peak] = altitude;

    return `You have successfully added a new goal - ${peak}`;
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    }

    if (this.goals.hasOwnProperty(peak) && this.resources == 0) {
      throw new Error("You don't have enough resources to start the hike");
    }

    let diff = this.resources - time * 10;

    if (diff < 0) {
      return "You don't have enough resources to complete the hike";
    } else {
      this.resources = diff;
      let newHike = { peak, time, difficultyLevel };
      this.listOfHikes.push(newHike);

      return `You hiked ${peak} peak for ${time} hours and you have ${diff}% resources left`;
    }
  }

  rest (time) {
    this.resources += time * 10

    if(this.resources > 100) {
        this.resources = 100;
        
        return `Your resources are fully recharged. Time for hiking!`
    } else {
        return `You have rested for ${time} hours and gained ${time*10}% resources`
    }
  }

  showRecord (criteria) {
    if(this.listOfHikes.length == 0) {
        return `${this.username} has not done any hiking yet`
    }

    if(criteria == "hard" || criteria == "easy") {
        let sortedHikes = this.listOfHikes.filter(x => x.difficultyLevel == criteria)

        if(sortedHikes.length == 0) {
            return `${this.username} has not done any ${criteria} hiking yet`
        }

        sortedHikes.sort((a,b) => a.time - b.time);

        return `${this.username}'s best ${criteria} hike is ${sortedHikes[0].peak} peak, for ${sortedHikes[0].time} hours`

    } else if (criteria == "all") {
        let allRecords = this.listOfHikes.map(x => `${this.username} hiked ${x.peak} for ${x.time} hours`).join('\n')
        return [
            `All hiking records:`,
            allRecords
        ].join('\n')
    }
  }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));



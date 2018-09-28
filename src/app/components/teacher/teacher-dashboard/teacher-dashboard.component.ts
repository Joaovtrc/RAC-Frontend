import { Component, OnInit } from '@angular/core';
import { RacService } from '../../../services/rac-services.service';
import { User } from '../../../models/user';
import { Conversation } from '../../../models/conversation';
import { Intent } from '../../../models/intent';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  constructor(private services: RacService) { }
  loading: boolean = true
  users: Array<User> = new Array<User>();

  allConversations: Array<Conversation> = new Array<Conversation>();
  allIntents: Array<Intent> = new Array<Intent>();
  intentsSorted;


  usersMostConversations : Array<User>;

  ngOnInit() {
    this.services.getUsers().subscribe(res =>{

      this.users = res;
      this.usersMostConversations = this.users.sort(this.sortUsersByConversations)
      console.log(this.usersMostConversations);

      this.users.forEach(user => {
        this.allConversations = this.allConversations.concat(user.conversations);
      });

      console.log(this.allConversations);

      this.allConversations.forEach(conversation => {
        this.allIntents.push(conversation.intent)
      });

      console.log(this.allIntents)

      const myArrayCounts = this.allIntents.reduce((counts, item) => {
        if (counts[item.tag] === undefined) counts[item.tag] = 0;
        counts[item.tag]++;
        return counts;
      }, {});
      
      const myArrayNames = this.allIntents
        .map(x => x.tag)
        .filter((x, i, l) => l.indexOf(x) === i);

      this.intentsSorted = myArrayNames.sort((v1, v2) => {return myArrayCounts[v2] - myArrayCounts[v1]})

      console.log(this.intentsSorted);
      

      this.loading = false;
      
    })
  }


  sortByFrequency(array) {
    var frequency = {};

    array.forEach(function(value) { frequency[value] = 0; });

    var uniques = array.filter(function(value) {
        return ++frequency[value] == 1;
    });

    return uniques.sort(function(a, b) {
        return frequency[b] - frequency[a];
    });
}


  sortUsersByConversations(a, b){
    if(a.conversations.length > b.conversations.length) {
        return -1;
    } else {
        return 1;
    }
  }


}

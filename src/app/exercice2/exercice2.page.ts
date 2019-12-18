import { Component, OnInit } from '@angular/core';
import { Article } from "../_models/article";
import { AlertController } from '@ionic/angular';
import {Storage} from '@ionic/storage';




@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.page.html',
  styleUrls: ['./exercice2.page.scss'],
})
export class Exercice2Page implements OnInit {
  variable = null;
  list : Article[];
  

  constructor(
    private alertController: AlertController,
    private storage: Storage  
  ) { 
 
  }

  ngOnInit() {
    this.storage.get("Articles").then(data => {
      this.list = data || [];
    });
   
    
  }

  add() {
    this.list.push({name: this.variable, isChecked: false});
    this.variable = null;
    this.save();
  }
  cocher(item: Article) {
    item.isChecked = !item.isChecked;
    this.save();
  }
  delete(item: Article) {
    let index = this.list.indexOf(item);
    this.list.splice(index,1);
  }
  showAlert(item: Article) {
    this.alertController.create({
      header: "Attention",
      subHeader: "Etes-vous sur de vouloir supprimer l'article " + item.name,
      buttons: [{text: 'Oui', handler: () => this.delete(item)}, {text: 'Non'}]
    })
    .then(alert => alert.present());
  }

  private save() {
    this.storage.set('Articles', this.list);
  }
}

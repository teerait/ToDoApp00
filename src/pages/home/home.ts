import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  taskList = [];
  taskName: string = "";
  // @ViewChild('taskInput') input;

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController
              ) {
  }

  ionViewDidLoad() {
    
  }

  addTask() {
    if (this.taskName.length > 0) {
        let task = this.taskName;
        this.taskList.push(task);
        this.taskName = "";
    }
  }

  deleteTask(index: any){

    let alert = this.alertCtrl.create({
      title: 'ต้องการลบรายการใช่ไหม?',
      message: 'หากมั่นใจ จะลบรายการ ดำเนินการได้',
      buttons: [
        { text: 'ยกเลิก', role: 'cancel' },
        { text: 'ลบรายการ', handler: data => { this.taskList.splice(index, 1)} }
      ]
    });
    alert.present();

  }

  updateTask(index: any) {
    let alert = this.alertCtrl.create({
        title: 'ปรับปรุงรายการใช่ไหม?',
        message: 'กรุณาพิพม์รายการที่ต้องการแก้ไข...',
        inputs: [{ name: 'editTask', placeholder: 'รายการ' }],
        buttons: [{ text: 'ยกเลิก', role: 'cancel' },
                  { text: 'ปรับปรุง', handler: data => {
                      this.taskList[index] = data.editTask; }
                  }
                 ]
    });
    alert.present();
  }

}

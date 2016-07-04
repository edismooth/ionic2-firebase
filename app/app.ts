import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';

declare var FCMPlugin;
@Component({
    templateUrl: 'build/app.html'
})
class MyApp {
    @ViewChild(Nav) nav:Nav;

    // make HelloIonicPage the root (or first) page
    rootPage:any = HelloIonicPage;
    pages:Array<{title:string, component:any}>;

    constructor(private platform:Platform,
                private menu:MenuController) {
        this.initializeApp();

        // set our app's pages
        this.pages = [
            {title: 'Hello Ionic', component: HelloIonicPage},
            {title: 'My First List', component: ListPage}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();

            FCMPlugin.getToken(
                function (token) {
                    console.log(token);
                    alert(token);
                },
                function (err) {
                    console.log('error retrieving token: ' + err);
                }
            );

            FCMPlugin.onNotification(
                function(data){
                    if(data.wasTapped){
                        //Notification was received on device tray and tapped by the user.
                        alert( JSON.stringify(data) );
                    }else{
                        //Notification was received in foreground. Maybe the user needs to be notified.
                        alert( JSON.stringify(data) );
                    }
                },
                function(msg){
                    console.log('onNotification callback successfully registered: ' + msg);
                },
                function(err){
                    console.log('Error registering onNotification callback: ' + err);
                }
            );

        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }
}

ionicBootstrap(MyApp);

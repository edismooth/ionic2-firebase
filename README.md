# ionic2-firebase
1. Run **_npm install_**
2. Add platforms: **_ionic platform add android_** and **_ionic platform add ios_**
3. Install plugin **_cordova plugin add cordova-plugin-fcm --save_**
4. Create project on https://console.firebase.google.com
5. Add 2 new apps - one for Android and one for iOS
6. Copy **google-service.json** file to **main project directory (the same directory of config.xml)** for Android.
7. Look **google-service.json** if **api-key** is not empty. If so, download it again.
8. **_ionic run android_** to run app on Android
9. **_ionic prepare ios_** and run project in XCode - copy file into main directory [Tree](http://i.imgur.com/Fwo18rm.png) and follow that [steps](https://firebase.google.com/docs/cloud-messaging/ios/certs)
10. Go to your project in https://console.firebase.google.com and select **Notifications** from menu -> **New message* -> select your app, add message and click send

# ionic2-firebase
1. Run **_npm install_**
2. Add platforms: **_ionic platform add android_** and **_ionic platform add ios_**
3. Create project on https://console.firebase.google.com
4. Add 2 new apps - one for Android and one for iOS
5. Copy **google-service.json** file to **platforms/android** directory for Android.
6. **_ionic run android_** to run app on Android
7. **_ionic prepare ios_** and run project in XCode - copy file into main directory [Tree](http://i.imgur.com/Fwo18rm.png) and follow that [steps](https://firebase.google.com/docs/cloud-messaging/ios/certs)
8. Go to your project in https://console.firebase.google.com and select **Notifications** from menu -> **New message* -> select your app, add message and click send

# Contest-Watcher
A one stop solution for checking and notifying you about all the upcoming contests in the next day.

### What it does?
It fetches all the upcoming contest details from the clist.by api and sends you chrome notifications when the contest starts. It fetches details of contest day by day. currently the time is in IST only.

The clist.by api is used to fetch the details about the upcoming and ongoing competitive programming contests on various CP platforms like codechef, codeforces, leetcode, atcoder, spoj, projecteuler, hackerearth, hackerrank, etc. 

So Here we fetch the details of the CP contest in upcoming 24 hours and details include contest site, name, starting time and ending time

### TechStack:
HTML, CSS, JavaScript, Nodejs, Express.js, Moment.js

### Screenshots & Features
Extension providing the details of contest in upcoming 24 hours

Dark Mode:

![image](https://user-images.githubusercontent.com/54480934/125066803-0d3fbe00-e0d1-11eb-9561-85a0a671d6d8.png)

Light Mode:

![image](https://user-images.githubusercontent.com/54480934/125066846-192b8000-e0d1-11eb-8fd6-1ebb5ec80752.png)


Chrome Notifications

![image](https://user-images.githubusercontent.com/54480934/124947327-5c341780-e02d-11eb-9958-141f6c7c71d1.png)

### Demo
[Video](https://youtu.be/DxYEtq2UuqQ)

### Run the backend
```
cd backend
npm install
npm run start
```
Note: you don;t need to run the backend server it is already up and running on my [repl](https://replit.com/@jainaayush01/clist-contests#index.js), just fetch the data from it

### Add extension to chrome
* Open extensions tab in Chrome, turn developer mode on
* Select `LOAD UNPACKED`, then select the extension folder in dialog box
* Good to go

### What did i learnt?
I learnt about chrome notifications, alarms, manifiest.json, Chrome Security Policy, resolving cors errors(yeah always a tough one) 

### Why backend server was needed?
* The backend server was needed because of the CORS, you need to make a fetch request from a server to fetch data from clist.by website, you can't make a request from frontend directly it sends you an error so i need to create a server and it is running on a [repl](https://replit.com/@jainaayush01/clist-contests#index.js). 

## 📝 Licence

GNU General Public License Version 3

## 🥳 Contributing

If you find any bug, or wish to add more features feel free to contribute to the project

## 👻 Author

Aayush Jain 
Connect with me here: [Twitter](https://twitter.com/jainaayush01) [GitHub](https://github.com/jainaayush01) [Linkedin](https://linkedin.com/in/jainaayush01)

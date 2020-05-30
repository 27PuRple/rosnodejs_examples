# rosnodejs examples

## Install and Build

Prerequisites:
- [Install ROS Kinetic or Lunar](http://wiki.ros.org/kinetic/Installation/Ubuntu)  
- [Install `nodejs` and the `npm` package manager, with `nodejs` version 6.x or 7.x recommended]
(https://nodejs.org/en/download/package-manager/)  
  
To get started the "catkin" way:
```
$ mkdir -p ~/rosnodejs_ws/src
$ cd ~/rosnodejs_ws/src
$ git clone https://github.com/RethinkRobotics-opensource/rosnodejs_examples.git
$ cd rosnodejs_examples
$ npm install
$ cd ~/rosnodejs_ws
$ source /opt/ros/kinetic/setup.bash
$ catkin build
```

## Running Talker / Listener
To run the programs, open three terminal windows (for illustration purposes).  
### Window 1: typical ROS Master
  
Source environment varables (only needed once per terminal window)  
`$ source ~/rosnodejs_ws/devel/setup.bash`  
Start ROS Master  
`$ roscore`  
  
### Window 2: talker.js script 
  
Source environment varables (only needed once per terminal window)  
`$ source ~/rosnodejs_ws/devel/setup.bash`  
Start the Talker Script  
`$ rosrun rosnodejs_examples talker.js`  
  
You should see output like the following:
```
[INFO] [1487773766.635] (ros): I said: [hello world 10]
[INFO] [1487773766.735] (ros): I said: [hello world 11]
[INFO] [1487773766.835] (ros): I said: [hello world 12]
```

### Window 3: listener.js script
  
Source environment varables (only needed once per terminal window)  
`$ source ~/rosnodejs_ws/devel/setup.bash`  
Start the Listener Script  
`$ rosrun rosnodejs_examples listener.js`  
  
You should see echoed output like the following:
```
[INFO] [1487773766.644] (ros): I heard: [hello world 10]
[INFO] [1487773766.743] (ros): I heard: [hello world 11]
[INFO] [1487773766.845] (ros): I heard: [hello world 12]
```

Congratulations! You've just published and subscribed over ROS using Javascript!

---------------------------------------------------------------------------------

## Update

added `source ~/rosnodejs_ws/devel/setup.bash` message in ~/.bashrc

### scripts 폴더

기존 예제파일들이 존재하는 폴더

### nodejs 폴더

Node.js를 사용하여 웹 서버를 만들고, 버튼이 있는 웹 페이지를 만든다.
기존 `listener.js` 파일의 listener노드와 `index.js` 파일의 talker노드가 '/chatter' 라는 주제로 통신한다.
터미널을 통해 결과를 확인할 수 있다.

### project 폴더

Node.js를 사용하여 웹 서버를 만들고, 두 개의 웹 페이지를 만든다.
버튼이 있는 웹 페이지 `publish.html`과, Ajax를 사용하여 비동기식으로 텍스트가 변환하는 `subscribe.html`를 만든다.

각각의 터미널에 다음과 같이 명령어를 입력한다.

`$ roscore`
`~/rosnodejs_ws/src/rosnodejs_examples/project$ node index.js`
`$ roslaunch rosbridge_server rosbridhe_websocket.launch`

인터넷에 'localhost:8080'를 입력하여 `publish.html`를 열어준다.
이후 `subscribe.html`를 열어준다.

`publish.html`의 버튼을 클릭하여 `subscribe.html`의 텍스트가 변하는지 확인한다.

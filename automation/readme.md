<h3>Setup</h3>

In order to run the automation tests you need to have the following installed in your machine:
<ul>
<li>NodeJS 10:  https://nodejs.org/en/download/current/</li>
<li>JDK 1.8+</li>
</ul>

<h3>Running the tests</h3>

In the terminal from your local copy of the nss-todo-automation (main nss-todo-automation folder)
<ul>
<li>First run: <i>npm install</i> (this only need to be run once)</li>
<li>To run both tests under the automaton folder: <i>npm test automation/wdio.conf.js</i></li>
</ul>

<h3> Pre-conditions</h3>

The tests will pass only if:
<ul>
<li>Your app is running on: http://localhost:8080/nss-todo-automation/
<li>The todo.list hasn't been modified from the original in this repo and has the tasks below:</li>
</ul>

1|c|Sprint planning meeting|2|1155074400

3|c|Modify NSS-TODO||1124920800

2||Finish reading research papers|1|1128117600

5|c|Soccer match!|3|1409263200

4||Download installation <a href="https://github.com/amadeuspzs/TODO/archive/NSS-TODO.zip">zipfile</a>||

6||Finish automation.||1409954400

7||Test API||

8|c|My new test|1|1454367600

9|c|test||

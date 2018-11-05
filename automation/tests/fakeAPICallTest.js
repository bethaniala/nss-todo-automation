describe("Test Fake API call", function() {
    this.timeout(180000);

    let jsonObj;

    it("call to fake api should show json string", () => {
        // Call fake-api-call through browser
        browser.url("http://localhost:8080/nss-todo-automation/fake-api-call.php");
        browser.element("body").waitForVisible();
        // Parse the JSON string into an object
        jsonObj = JSON.parse(browser.element("body").getText());
        console.log(`JSON= ${JSON.stringify(jsonObj)}\n`);
        expect(jsonObj).to.not.be.a("null");
    });

    it("number of todo tasks should be 9", () => {
        const numberOfTodos = jsonObj.length;
        expect(numberOfTodos).to.be.equal(9);
    });

    it("print tasks names and check tasks list", () => {
        let allNames = "";
        const taskNameList = "Sprint planning meeting Modify NSS-TODO Finish reading research papers Soccer match! Download installation zipfile</a> Finish automation. Test API My new test test ";
        jsonObj.forEach( (element) => {
            const name = element['task name'] + " ";
            allNames = allNames.concat(name);
        });
        console.log(`\nAll task names\n${allNames}`);
        expect(allNames).to.be.equal(taskNameList);
    });

    it("check tasks without category = 5", () => {
        let noCategory = 0;
        jsonObj.forEach( (element) => {
            if (element['category'] === "" || element['category'] === undefined) {
                noCategory = noCategory + 1;
                console.log(`Task ${element['task name']} doesn't have category`);
            }
        });
        expect(noCategory).to.be.equal(5);
    });

    it("sort todo tasks by due date", () => {
        jsonObj.sort(function(elem1, elem2){
            return -(elem1['due date']-elem2['due date']) //sort by date descending
        });
        console.log(`JSON= ${JSON.stringify(jsonObj)}\n`);
    });
});

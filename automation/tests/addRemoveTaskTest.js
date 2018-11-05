const MainPage = require("../pageObjects/mainPage.js");
describe("Test Task Add & Remove", function() {
    this.timeout(180000);
    const mainPage = new MainPage();

    // Test data
    //Future work add this to separate files so it can be reused in other tests
    const taskName = "REGRESSION TESTING",
      taskId = "10"

    before(() => {
        browser.url("http://localhost:8080/nss-todo-automation/index.php");
    })

    it("should be able to add a new todo task", () => {
        expect(mainPage.isTodoListVisible()).to.be.true;
        mainPage.addNewTask(taskName);
        browser.pause(1000);
        // Check that the new task is visible in the list
        expect(mainPage.isTodoItemVisible(taskName)).to.be.true;
    });

    it("should be able to remove todo task", () => {
        mainPage.clickTodoItemCheckbox(taskId);
        mainPage.clickRemoveButton();
        // Check that the removed task doesn't show in the list
        expect(mainPage.isTodoItemVisible(taskName)).to.be.false;
    });
});

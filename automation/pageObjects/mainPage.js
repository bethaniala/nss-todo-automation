"use strict";

// CSS or xpath locators
const locators = {
  "todoList": "//div/form/ul",
  "todoItemCheckbox": "//div/form/ul/li/input[@type='checkbox']",
  "todoItem": "//div/form/ul/li",
  "removeButton": ".controls [value='Remove']",
  "completeButton": ".controls [value='Complete']",
  "addButton": ".advance-controls [value='Add']",
  "taskNameTextfield": ".advance-controls [name='data']",
  "category": ".advance-controls [name='category']",
  "categoryOption": "//div[@class='advance-controls']/span/selectt[@name='category']/option",
  "dueDay": ".advance-controls [name='due_day']",
  "dueDayOption": "//div[@class='advance-controls']/span/selectt[@name='due_day']/option",
  "dueMonth": ".advance-controls [name='due_month']",
  "dueMonthOption": "//div[@class='advance-controls']/span/selectt[@name='due_month']/option",
  "dueYear": ".advance-controls [name='due_year']",
  "dueMonthOption": "//div[@class='advance-controls']/span/selectt[@name='due_year']/option"
}

const MainPage = function() { };

MainPage.prototype.isTodoListVisible = function(name) {
    return browser.isVisible(locators.todoList);
};

MainPage.prototype.isTodoItemVisible = function(taskName) {
    return browser.isVisible(`${locators.todoItem}[contains(text(), '${taskName}')]`);
};

MainPage.prototype.clickTodoItemCheckbox = function(taskId) {
    browser.waitForVisible(`${locators.todoItemCheckbox}[@name='todo[${taskId}]']`);
    browser.click(`${locators.todoItemCheckbox}[@name='todo[${taskId}]']`);
};

MainPage.prototype.clickRemoveButton = function() {
    browser.waitForVisible(locators.removeButton);
    browser.click(locators.removeButton);
};

MainPage.prototype.enterTaskName = function(name) {
    browser.waitForVisible(locators.taskNameTextfield);
    browser.setValue(locators.taskNameTextfield, name);
};

MainPage.prototype.selectCategory = function(category) {
    browser.waitForVisible(locators.category);
    browser.click(locators.category);
    browser.pause(1000);
    browser.click(`${locators.categoryOption}[contains(text(), '${category}')]`);
};

MainPage.prototype.selectDate = function(day, month, year) {
    if (day) {
      browser.waitForVisible(locators.dueDay);
      browser.click(locators.dueDay);
      browser.pause(1000);
      browser.click(`${locators.dueDayOption}[contains(text(), '${day}')]`);
    }
    if (month) {
      browser.waitForVisible(locators.dueMonth);
      browser.click(locators.dueMonth);
      browser.pause(1000);
      browser.click(`${locators.dueMonthOption}[contains(text(), '${month}')]`);
    }
    if (year) {
      browser.waitForVisible(locators.dueYear);
      browser.click(locators.dueYear);
      browser.pause(1000);
      browser.click(`${locators.dueYearOption}[contains(text(), '${year}')]`);
    }
};

MainPage.prototype.clickAdd = function() {
    browser.waitForVisible(locators.addButton);
    browser.click(locators.addButton);
};

MainPage.prototype.addNewTask = function(name, category, day, month, year) {
    this.enterTaskName(name);
    browser.pause(1000);
    if (category) {
      this.selectCategory(category);
    }
    browser.pause(1000);
    if (day || month || year) {
      this.selectDate(day, month, year);
    }
    this.clickAdd();
};
module.exports = MainPage;

/**
 * LLH Interview Question: 
 * Implement a function that takes the following array, 
 * sorts it into descending order by the 'order' property, 
 * and then executes each 'action'.
 * Every action must complete before the next action can be run.
 * Order is non-unique, and every action with the same order can be run in parallel.
 * All actions with the same order must complete before actions with the next order can run.
 */
const action = function (obj) {
    console.log("Started at: " + new Date());
    setTimeout(function () {
        console.log("Finished at: " + new Date());
        obj.done();
    }, Math.floor(Math.random() * 1000) + 1);
};

const array = [
    {
        order: 5,
        action: action
    },
    {
        order: 4,
        action: action
    },
    {
        order: 1,
        action: action
    },
    {
        order: 2,
        action: action
    },
    {
        order: 2,
        action: action
    },
    {
        order: 0,
        action: action
    },
    {
        order: 3,
        action: action
    },
    {
        order: 5,
        action: action
    }];
// Code goes here:
const sortedArray = array.sort((itemA, itemB) => (itemA.order > itemB.order) ? -1 : 1);

const run = (index = 0) => {
    if (index >= sortedArray.length)
        return;

    const item = sortedArray[index];
    const parameter = {
        done: () => {
            index++;
            run(index);
        }
    };
    item.action(parameter);
}

run();

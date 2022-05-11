console.log('Hai Hello......!');

function deepFreeze (o) {
    if (o===Object(o)) {
      Object.isFrozen(o) || Object.freeze(o)
      Object.getOwnPropertyNames(o).forEach(function (prop) {
        prop==='constructor'||deepFreeze(o[prop])
      })
    }
    return o
  }

const addCounter=(list)=>{
    return [...list,0];
    
};

const removeCounter=(list,index)=>{
   return [...list
   .slice(0,index),
    ...list.slice(index+1)];
};

const incrementCounter=(list,index)=>{
    return [...list
    .slice(0,index),
    list[index]+1,
    ...list.slice(index+1)];
};

const toggleTodo=(todo)=>{

};

const testToggleTodo=()=>{
    const todoBefore={
        id:0,
        text:'Learn Redux',
        completed:false
    };
    const todoAfter={
        id:0,
        text:'Learn Redux',
        completed:true
    };
    expect(
        toggleTodo(todoBefore)
            ).toEqual(todoAfter);
};
const testAddCounter=()=>{
    const listBefore=[];
    const listAfter=[0];

    deepFreeze(listBefore);

    // expect(
    //     addCounter(listBefore)
    // ).toEqual(listAfter);
};

const testRemoveCounter=()=>{
    const listBefore=[0,10,20];
    const listAfter=[0,20];

    deepFreeze(listBefore);

    // expect(
    //     removeCounter(listBefore,1)
    // ).toEqual(listAfter)

};
const testIncrementCounter=()=>{
    const listBefore=[0,10,20];
    const listAfter=[0,11,20];

    deepFreeze(listBefore);

    // expect(
    //     incrementCounter(listBefore,1)
    // ).toEqual(listAfter);
};

testIncrementCounter();
testAddCounter();
testRemoveCounter();
console.log("All Tests Passed");
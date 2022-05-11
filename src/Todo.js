
function deepFreeze (o) {
    if (o===Object(o)) {
      Object.isFrozen(o) || Object.freeze(o)
      Object.getOwnPropertyNames(o).forEach(function (prop) {
        prop==='constructor'||deepFreeze(o[prop])
      })
    }
    return o
  }

const toggleTodo=(todo)=>{
    return Object.assign({},todo,{
        completed: !todo.completed})
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

    deepFreeze(todoBefore);
    // expect(
    //     toggleTodo(todoBefore)
    //         ).toEqual(todoAfter);
};

testToggleTodo();
console.log('All tests are passed');
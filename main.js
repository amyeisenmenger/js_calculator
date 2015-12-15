var historyInputOne = [];
var historyInputTwo = [];
var historyOperator = [];
var historyOutput = [];
var calculator_history = []

function lastAnswer(){
  var element = document.getElementById('output');
  if (element.innerHTML == '') {
    return '';
  } else {
    return parseFloat(element.innerHTML);
  }
}

function getInputs(){
  var inputOne = parseFloat(document.getElementById('input_1').value);
  var inputTwo = parseFloat(document.getElementById('input_2').value);
  historyInputOne.push(inputOne)
  historyInputTwo.push(inputTwo)
  return [inputOne, inputTwo];
}

function setOutput(sum){
  var lastOutput = lastAnswer();
  historyOutput.push(sum)
  document.getElementById('output').innerHTML = sum;
  document.getElementById('last_answer').innerHTML = lastOutput;
}

function undo(){
  var targetOutput = parseFloat(document.getElementById('last_answer').innerHTML);
  document.getElementById('output').innerHTML = targetOutput;
}

function clearCalc(){
  document.getElementById('input_1').value = null;
  document.getElementById('input_2').value = null;
  // document.getElementById('output').innerHTML = [];
}

function memoryAdd(){
  var new_input_1 = document.getElementById('output').innerHTML
  document.getElementById('input_1').value = new_input_1;
  document.getElementById('input_2').value = null;
}

function calcHistory(){
  for(i = 0; i < historyInputOne.length; i++){
    var equation_history = historyInputOne[i]+historyOperator[i]+historyInputTwo[i]+'='+historyOutput[i];
    calculator_history.push(equation_history);
  }
  document.getElementById('calc_history').innerHTML = calculator_history.join('<br />')
}

function clearHistory(){
  calculator_history = [];
  historyInputOne = [];
  historyInputTwo = [];
  historyOperator = [];
  historyOutput = [];
}

function add(){
  var inputs = getInputs();
  var sum = inputs[0] + inputs[1];
  historyOperator.push('+')
  setOutput(sum);
}

function subtract(){
  var inputs = getInputs();
  var sum = inputs[0] - inputs[1];
  historyOperator.push('-')
  setOutput(sum);
}

function multiply(){
  var inputs = getInputs();
  var sum = inputs[0] * inputs[1];
  historyOperator.push('*')
  setOutput(sum);
}

function divide(){
  var inputs = getInputs();
  var sum = inputs[0] / inputs[1];
  historyOperator.push('/')
  setOutput(sum);
}

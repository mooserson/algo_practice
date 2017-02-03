var rootNode = {};

function addOn(word, node){
    if(word.length < 1){
        return
    }
    let firstLetter = word[0]
    if (node[firstLetter]){
        addOn(word.slice(1, word.length), node[firstLetter])
    } else {
        node[firstLetter] = {}
    }
}

function main() {
    var n = parseInt(readLine());
    for(var a0 = 0; a0 < n; a0++){
        var op_temp = readLine().split(' ');
        var op = op_temp[0];
        var contact = op_temp[1];
        if(op === "add"){
           addOn(contact, rootNode)
        }
    }
    console.log(rootNode['h']['a'])
}

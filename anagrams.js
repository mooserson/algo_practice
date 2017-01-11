// https://www.hackerrank.com/challenges/ctci-making-anagrams Attempt 1 timed out

function main() {
    var a = readLine();
    var b = readLine();
    var aChars = a.split("");
    var bChars = b.split("");
    var count = aChars.length + bChars.length


    aChars.forEach((el, i) => {
        var j = bChars.indexOf(el);

        if(j > -1){
            bChars.splice(j, 1);
            count -= 2;
        }
    });

    console.log(count);
}

//attempt2 works

function main() {
    var a = readLine();
    var b = readLine();
    var aChars = a.split("");
    var bChars = b.split("");

    var bucketA = new Array(26).fill(0);
    var bucketB = new Array(26).fill(0);

    aChars.forEach(el => {
        bucketA[el.charCodeAt() - 97] ++;
    });

    bChars.forEach(el => {
        bucketB[el.charCodeAt() - 97] ++;
    });

    var count = 0;

    bucketA.forEach((el, i) =>{
      count += Math.abs(el - bucketB[i]);
    });
    console.log(count);
}

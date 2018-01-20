function polindrome(polindrome) {
    let result = '';
    for (let i = 0; i < polindrome.length; i++){
        // console.log(polindrome.charAt(i));
        // console.log(polindrome.charAt(polindrome.length - 1 - i));
        if (polindrome.charAt(i) !== polindrome.charAt(polindrome.length - 1 - i)){
            console.log('false');
            return;
        }
    }
    console.log('true');
}

// polindrome('haha');
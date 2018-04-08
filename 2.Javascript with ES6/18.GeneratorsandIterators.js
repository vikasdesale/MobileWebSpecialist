//Yielding Data to the "Outside" World
//Instead of logging the names to the console and then pausing, let's have the code "return" the name and then pause.

function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;
    }

    console.log('the function has ended');
}
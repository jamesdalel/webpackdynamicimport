
const filepaths = [
    'dynamicExternalFile'
]


export function appTest() {

    console.log('this is the app test in the appFile');

    const path = `external/${filepaths[0]}`;

    import(path)
    .then((external) => {
        console.log('we have the file dynamically');
        external.test();
    })
}


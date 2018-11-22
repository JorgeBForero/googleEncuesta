const Encuesta = require('../pages/encuesta');
const url = 'https://goo.gl/forms/mu7VBOscZkacLf3B3';
const results = [
    [1],
    [],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2],
    [1, 2, 3],
    [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2, 3],
];

describe('Encuesta', () => {
    let encuesta;
    before(() => {
        encuesta = new Encuesta();
        browser.url(url);
    });

    // beforeEach(() => {
    //
    // });

    describe('Create', () => {

        it('Should create a encuesta', () => {
            results.forEach((info, index) => {
                if (index + 1 !== 2 && index + 1 !== 8) {
                    const pregunta = index + 1;
                    const option = info[Math.floor(Math.random() * info.length)];
                    // console.log(pregunta);
                    // console.log(option);
                    encuesta.clickRespuesta(pregunta, option);
                    browser.pause(500);
                }
                // if (index + 1 === 8) {
                //     info.forEach((res, index) => {
                //         const pregunta = index + 1;
                //         console.log(res);
                //         const option = res[Math.floor(Math.random() * res.length)];
                //         console.log(pregunta);
                //         console.log(option);
                //         encuesta.clickCuadro(pregunta, option);
                //     });
                // }

            });
            browser.pause(2000);
            encuesta.clickEnviar();
            browser.pause(2000);
        });
    });
});

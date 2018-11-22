const common = require('../utils/common');

class Encuesta {
    constructor() {
        this.enviar = ' .quantumWizButtonPaperbuttonLabel';
        this.pregunta = '//div[@class="freebirdFormviewerViewItemsItemItem"][Pregunta]//div[@class="quantumWizTogglePaperradioOffRadio exportOuterCircle"]';
        this.cuadro = '//div[@class="freebirdFormviewerViewItemsGridRow freebirdFormviewerViewItemsGridUngraded"][Pregunta]//div[@class="quantumWizTogglePaperradioOffRadio exportOuterCircle"]';
    }

    clickRespuesta(pregunta, option) {
        let respuesta = this.pregunta.replace('Pregunta', pregunta);
        const rows = common.getElementsId(respuesta);
        common.clickElementId(rows[option - 1].ELEMENT);
    }

    clickCuadro(pregunta, option) {
        let respuesta = this.cuadro.replace('Pregunta', pregunta);
        const rows = common.getElementsId(respuesta);
        // console.log(rows);
        // browser.scroll(respuesta);
        common.clickElementId(rows[option - 1].ELEMENT);
    }

    clickEnviar() {
        common.click(this.enviar);
    }
}

module.exports = Encuesta;

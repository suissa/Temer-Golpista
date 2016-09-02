var elementos = document.getElementsByTagName('*');

for (var i = 0; i < elementos.length; i++) {
    var elemento1 = elementos[i];

    for (var j = 0; j < elemento1.childNodes.length; j++) {
        var node1 = elemento1.childNodes[j];

        if (node1.nodeType === 3) {
            var texto1 = node1.nodeValue;
            var textoTroca1 = texto1.replace(/Reais/gi, 'Golpes');

            if (textoTroca1 !== texto1) {
                elemento1.replaceChild(document.createTextNode(textoTroca1), node1);
            }
        }
    }
}

for (var i = 0; i < elementos.length; i++) {
    var elemento2 = elementos[i];

    for (var j = 0; j < elemento2.childNodes.length; j++) {
        var node2 = elemento2.childNodes[j];

        if (node2.nodeType === 3) {
            var texto2 = node2.nodeValue;
            var textoTroca2 = texto2.replace(/Real/gi, 'GOLPE');

            if (textoTroca2 !== texto2) {
                elemento2.replaceChild(document.createTextNode(textoTroca2), node2);
            }
        }
    }
}

for (var i = 0; i < elementos.length; i++) {
    var elemento3 = elementos[i];

    for (var j = 0; j < elemento3.childNodes.length; j++) {
        var node3 = elemento3.childNodes[j];

        if (node3.nodeType === 3) {
            var texto3 = node3.nodeValue;
            var textoTroca3 = texto3.replace(/R\$/gi, 'GOLPE$');

            if (textoTroca3 !== texto3) {
                elemento3.replaceChild(document.createTextNode(textoTroca3), node3);
            }
        }
    }
}
